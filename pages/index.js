import Head from "next/head";
import Navbar from "../components/navbar";
import Interface from "../components/interface";
import Footer from "../components/footer";
export default function Home() {
  return (
    <div
      className="is-flex is-flex-direction-column is-justify-content-space-between"
      style={{ height: "100%" }}
    >
      <Navbar></Navbar>
      <section className="section">
        <div className="has-text-centered container">
          {/* <Interface></Interface> */}
          <h1 className="title">Web App is Down</h1>
          <br/>
          <h2 className="subtitle">Due to excessive traffic, our Heroku backend can't handle requests. We are looking into it and will post an update soon</h2>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
