import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DownloadModel(props) {
    const {modalOpened, setModalOpened} = props;
  const [promptTrigger, setPromptTrigger] = useState();
  useEffect(() => {
    const handlePrompt = (e) => {
      setPromptTrigger(e);
    };
    window.addEventListener("beforeinstallprompt", handlePrompt);
    return () => {
      window.removeEventListener("beforeinstallprompt", handlePrompt);
    };
  });
  return (
    <div className={`modal ${modalOpened ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p class="modal-card-title">Download</p>
          <button
            className="delete"
            aria-label="close"
            onClick={() => {
              setModalOpened(false);
            }}
          ></button>
        </header>
        <section className="modal-card-body">
          <div className="buttons">
            <button
              style={{ display: promptTrigger ? "block" : "none" }}
              className="button is-fullwidth  is-rounded"
              onClick={() => {
                promptTrigger.prompt();
              }}
            >
              <span className="icon">
                <FontAwesomeIcon icon={["fas", "globe-asia"]} />
              </span>
              <span>Download Web App - All Platforms</span>
            </button>
            <a href="https://play.google.com/store/apps/details?id=org.hackesta.tweet2pic" target="_blank" rel="noopener noreferrer" className="button is-fullwidth  is-rounded">
              <span className="icon">
                <FontAwesomeIcon icon={["fab", "google-play"]} />
              </span>
              <span>Download Android App (Play Store)</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
