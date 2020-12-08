import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import IconButton from "../components/iconButton";
export default function Home() {
  return (
    <div
      className="is-flex is-flex-direction-column is-justify-content-space-between"
      style={{ height: "100%" }}
    >
      <Navbar></Navbar>
      <section className="section">
        <div className="container">
          <p className="has-text-justified">
            <a href="/">Tweet2Pic</a>'s frontend is built using{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              NextJS
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </a>
            . It communicates to a Python backend hosted on{" "}
            <a
              href="https://heroku.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Heroku
            </a>
            .
          </p>
          <br />
          <IconButton
            icon={["fab", "github"]}
            href="https://github.com/haideralipunjabi/tweet2pic-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            View code on Github
          </IconButton>

          <h4 className="is-size-4 my-4">
            Developed by:{" "}
            <a
              href="https://haideralipunjabi.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Haider Ali Punjabi
            </a>
          </h4>
          <div className="buttons">
            <IconButton
              icon={["fab", "twitter"]}
              href="https://twitter.com/HAliPunjabi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow me on Twitter
            </IconButton>
            <IconButton
              icon={["fab", "github"]}
              href="https://github.com/haideralipunjabi"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my Github
            </IconButton>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
