import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
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
            and hosted on <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >Vercel</a>. It communicates to a Python backend hosted on <a href="https://heroku.com" target="_blank" rel="noopener noreferrer">Heroku</a>.
          </p>
          <p className="has-text-justified">
          </p>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
