import { useInterface, useWindowSize } from "./CustomHooks";
import { useRef, useState, useLayoutEffect, useEffect } from "react";
import Image from "next/image";
import styles from "./interface.module.scss";
import PuffLoader from "react-spinners/PuffLoader";
import Checkbox from "./interface/checkbox";
import download from "downloadjs";
export default function Interface() {
  const API = "https://tweet2pic.herokuapp.com/tweet";
  // const API = "http://localhost:5000/tweet"

  const [tweetLoaded, setTweetLoaded] = useState(false);
  const [tweetLoading, setTweetLoading] = useState(false);
  const [tweetImage, setTweetImage] = useState({});
  const [error, setError] = useState("");
  const [canShare, setCanShare] = useState(false);
  const windowSize = useWindowSize();
  const options = {
    hide_media: "Hide Media",
    hide_thread: "Hide Parent",
    theme: "Dark Theme",
    square: "Square Image",
    hide_timestamp: "Hide Time",
    hide_footer: "Hide Footer",
  };
  function getImage() {
    inputs.theme = inputs.theme == "true" ? "dark" : "light";
    let url = API + "?";
    for (let key of Object.keys(inputs)) {
      url += `${key}=${inputs[key]}&`;
    }
    let img = {};
    fetch(url)
      .then((r) => {
        if (r.headers.get("Content-Type") === "image/png") {
          img["height"] = r.headers.get("X-ImageHeight");
          img["width"] = r.headers.get("X-ImageWidth");
          img["name"] = r.headers.get("X-ImageName");

          return r.blob();
        } else if (r.headers.get("Content-Type") === "application/json") {
          return r.json();
        }
        throw Error("An Error Occured. Try Again Later");
      })
      .then((data) => {
        if (data instanceof Blob) {
          let image = data;
          let f = new File([image], img.name + ".png", { type: image.type });
          setCanShare(navigator.canShare && navigator.canShare({ files: [f] }));
          img["blob"] = image;
          let reader = new FileReader();
          reader.addEventListener("load", (e) => {
            img["url"] = reader.result;
            setTweetImage(img);
            setTweetLoaded(true);
            setTweetLoading(false);
          });
          reader.readAsDataURL(image);
        } else {
          throw Error(data.message);
        }
      })
      .catch((e) => {
        setError(e.toString());
        setTweetLoaded(false);
        setTweetLoading(false);
      });
  }
  const { inputs, handleInputChange, handleSubmit } = useInterface(getImage, {
    url: "",
    hide_media: false,
    hide_thread: false,
    square: false,
    hide_timestamp: false,
    hide_footer: false,
    theme: "light",
  });
  const formRef = useRef();
  const urlRef = useRef();
  const validate = () => {
    return formRef.current.reportValidity();
  };
  return (
    <div>
      <form
        ref={formRef}
        id="interface"
        onSubmit={(e) => e.preventDefault()}
        style={{ display: tweetLoaded || tweetLoading ? "none" : "block" }}
        className="mb-6"
      >
        <div className="field">
          <label className="label is-size-4" htmlFor="url">
            Tweet URL:{" "}
          </label>
          <div className="control">
            <input
              type="text"
              className="input"
              name="url"
              id="url"
              ref={urlRef}
              onChange={handleInputChange}
              required={true}
              pattern="(?:http(?:s)?:\/\/)?(?:www\.)?(?:mobile\.)?twitter\.com\/([a-zA-Z0-9_]+)\/status\/([0-9]+).+"
            />
          </div>
        </div>
        <div className="field is-grouped is-grouped-multiline is-grouped-centered">
          {Object.entries(options).map((k, v) => (
            <Checkbox
              key={v}
              name={k[0]}
              label={k[1]}
              onChange={handleInputChange}
            />
          ))}
        </div>

        <div className="field">
          <div className="control has-text-centered">
            <button
              className="button"
              onClick={() => {
                if (validate()) {
                  setTweetLoading(true);
                  setError("");
                  handleSubmit();
                }
              }}
            >
              Submit
            </button>
          </div>
        </div>
        <h4
          className="is-size-4 has-text-danger"
          style={{ display: error === "" ? "none" : "block" }}
        >
          {error}
        </h4>
      </form>
      <PuffLoader
        color={"#1da1f2"}
        size={windowSize.width * 0.2}
        loading={tweetLoading}
        css={{ margin: "auto" }}
      />
      <div style={{ display: tweetLoaded ? "block" : "none" }}>
        <figure className={`image p-3 ${styles.tweetFigure}`}>
          {tweetLoaded && (
            <Image
              src={tweetImage.url}
              width={tweetImage.width}
              height={tweetImage.height}
              layout="responsive"
            ></Image>
          )}
        </figure>
        <div className="buttons has-addons is-centered">
          <button
            className="button is-size-5-fullhd is-size-6"
            onClick={() => {
              setTweetLoaded(false);
            }}
          >
            Go Back
          </button>
          <button
            className="button is-size-5-fullhd is-size-6"
            onClick={() => {
              download(tweetImage.url, tweetImage.name + ".png", "image/png");
            }}
          >
            Download
          </button>
          <button
            style={{ display: canShare ? "block" : "none" }}
            className="button is-size-6 is-size-5-fullhd"
            onClick={() => {
              let f = new File([tweetImage.blob], tweetImage.name + ".png", {
                type: tweetImage.blob.type,
              });
              navigator.share({
                title: "SHare Image",
                text: "Shared via Tweet2Pic",
                files: [f],
              });
            }}
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
