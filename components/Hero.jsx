import FormBox from "./FormBox";
import Link from "next/link";

function Hero() {
  return (
    <div className="hero" style={{ backgroundImage: "url(./hero-img.svg)" }}>
      <div className="hero-left">
        <h1>Find Best Deal with Shared room</h1>

        <Link href="/listing-booked">
          <button>Try Now</button>
        </Link>
      </div>

      <FormBox />
    </div>
  );
}

export default Hero;
