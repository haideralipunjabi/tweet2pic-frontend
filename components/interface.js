import { useInterface, useWindowSize } from "./CustomHooks";
import { useRef, useState, useLayoutEffect, useEffect } from "react";
import Image from "next/image";
import styles from "./interface.module.scss";
import PuffLoader from "react-spinners/PuffLoader";
import Checkbox from "./interface/checkbox";
import download from "downloadjs";
import Stats from "./stats";
import { useRouter } from "next/router";
import { Tweet } from "react-static-tweets";
import classNames from "classnames";
import { saveAs } from 'file-saver';
import html2canvas from "html2canvas";
export default function Interface() {
  const router = useRouter();
  const { share_tweet } = router.query;
  const [tweet, setTweet] = useState();
  const [canShare, setCanShare] = useState(false);
  const [themeDark, setThemeDark] = useState(false);
  const windowSize = useWindowSize();
  const formRef = useRef();
  const urlRef = useRef();
  const tweetRef = useRef();
  const urlToId = (url) => {
    const r = /[0-9]{5,}/
    let arr = r.exec(url)
    if(arr.length>0){ 
        setTweet({
          id: arr[0]
      })
    }
  }


  const downloadImage = () => {
    const html = document.getElementsByTagName("HTML")[0];
    const body = document.getElementsByTagName("BODY")[0]
    let htmlWidth = html.clientWidth;
    let bodyWidth = body.clientWidth;
    const newWidth = tweetRef.current.scrollWidth - tweetRef.current.clientWidth;
    if(newWidth > tweetRef.current.clientWidth){
      htmlWidth += newWidth;
      bodyWidth += newWidth;
    }
    html.style.width = `${htmlWidth}px`
    body.style.width = `${bodyWidth}px`
    html2canvas(tweetRef.current).then((canvas)=>{
      const image = canvas.toDataURL('image/png',1.0);
      saveAs(image,"test.png")
    })

  }
  useEffect(()=>{
    if(share_tweet) {
      urlRef.current.value = share_tweet
      setInput("url",share_tweet);
    };
  }, [share_tweet]);

  const validate = () => {
    return formRef.current.reportValidity();
  };

  return (
    <div>
      <form
        ref={formRef}
        id="interface"
        onSubmit={(e) => e.preventDefault()}
        className={classNames("mb-6",{"is-hidden": tweet})}
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
              required={true}
              pattern="(?:http(?:s)?:\/\/)?(?:www\.)?(?:mobile\.)?twitter\.com\/([a-zA-Z0-9_]+)\/status\/([0-9]+).+"
            />
          </div>
        </div>
        <div className="field is-grouped is-grouped-multiline is-grouped-centered">
          {/* {Object.entries(options).map((k, v) => (
            <Checkbox
              key={v}
              name={k[0]}
              label={k[1]}
              onChange={handleInputChange}
            />
          ))} */}
        </div>
        <div className="field">
          <div className="control has-text-centered">
            <button
              className="button"
              onClick={() => {
                if (validate()) {
                  urlToId(urlRef.current.value);
                }
              }}
            >
              Submit
            </button>
          </div>
        </div>
        {/* <Stats /> */}
      </form>
        {
          tweet && (
            <div className={classNames("is-flex is-flex-direction-column is-align-items-center")}>
              <Tweet ref={tweetRef} id={tweet.id}/>
              <div className="my-6 is-flex is-justify-content-space-around">
              <button className="button mx-4" onClick={()=>{setTweet()}}>Go Back</button>
              <button className="button mx-4" onClick={()=>{
                downloadImage()
              }}>Download</button>
              </div>
            </div>
          )
        }
    </div>
  );
}
