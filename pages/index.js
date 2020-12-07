import Head from 'next/head'
import Navbar from "../components/navbar"
import Interface from "../components/interface"
import Footer from "../components/footer"
export default function Home() {
  return (
    <div className="is-flex is-flex-direction-column is-justify-content-space-between" style={{height:"100%"}}>
      <Navbar></Navbar>
      <section className="section">
        <div className="container">
          <Interface></Interface>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}
