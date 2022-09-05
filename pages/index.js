import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

const typeImages = [
  {
    img: "./view-assets/romantic.svg",
    desc: "Romantic",
  },
  { img: "./view-assets/adventure.svg", desc: "Adventure" },
  { img: "./view-assets/nature.svg", desc: "Nature" },
  { img: "./view-assets/wildlife.svg", desc: "Wildlife" },
  { img: "./view-assets/solo.svg", desc: "Solo" },
];

const trendingImages = [
  { img: "./view-assets/miami.svg" },
  { img: "./view-assets/cali.svg" },
  { img: "./view-assets/san-f.svg" },
  { img: "./view-assets/boston.svg" },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Totel</title>
      </Head>
      <Navbar />
      <Hero />

      <div className="category-bar">Find By Type</div>

      <div className="row types">
        {typeImages.map((data) => {
          return (
            <div className="tiny-box-holder">
              <div
                className="tiny-box bg"
                style={{ backgroundImage: `url(${data.img})` }}
              ></div>
              <span>{data.desc}</span>
            </div>
          );
        })}
      </div>

      <div className="category-bar top">Trending Destinations</div>

      <div className="row types">
        {trendingImages.map((data) => {
          return (
            <div className="tiny-box-holder">
              <div
                className="tiny-box bg"
                style={{ backgroundImage: `url(${data.img})` }}
              ></div>
            </div>
          );
        })}
      </div>

      <div className="category-bar top">Other Destinations</div>
      <div className="destinations">
        <div
          className="tall-card bg"
          style={{ backgroundImage: `url(./view-assets/canyon.svg)` }}
        ></div>
        <div className="wrap">
          <div
            className="tiny-box bg"
            style={{ backgroundImage: `url(./view-assets/solo.svg)` }}
          ></div>
          <div
            className="tiny-box bg"
            style={{ backgroundImage: `url(./view-assets/honolulu.svg)` }}
          ></div>
          <div
            className="tiny-box bg"
            style={{ backgroundImage: `url(./view-assets/canyon.svg)` }}
          ></div>
          <div
            className="tiny-box bg"
            style={{ backgroundImage: `url(./view-assets/honolulu.svg)` }}
          ></div>
        </div>
        <div
          className="tall-card bg"
          style={{ backgroundImage: `url(./view-assets/honolulu.svg)` }}
        ></div>
      </div>

      <div className="gray-rect row">
        <div className="gray-rect-left col">
          <p>
            How Easy to find the perfect Travel partner and Reduce travel
            expenses?
          </p>
          <h3>You're Just 3 Steps Away</h3>
          <span>Watch Video</span>
        </div>

        <div className="gray-rect-right row">
          <div className="col">
            <img src="./view-assets/phone.svg" alt="" className="icon smaller" />
            <h4>Create Post</h4>
            <p>For sharing place or search for places and travellers</p>
          </div>

          <div className="col">
            <img src="./view-assets/partner.svg" alt="" className="icon" />
            <h4>Find Perfect Patner</h4>
            <p>For sharing place or search for places and travellers</p>
          </div>

          <div className="col">
            <img src="./view-assets/save.svg" alt="" className="icon" />
            <h4>Save your Money</h4>
            <p>For sharing place or search for places and travellers</p>
          </div>
        </div>
      </div>

      <div
        className="blue-bar bg"
      >
        <img src="./view-assets/blue-bar.svg" alt="" />
      </div>

      <Footer />
    </div>
  );
}
