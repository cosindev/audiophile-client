import Image from "next/image";
import HeroImage from "images/hero-img.png";

const HeroSection = () => {
  return (
    <section className="text-white hero-section">
      <div className="max-w-6xl mx-auto">
        <nav id="navbar" className="flex-between-center py-9 nav-border-bottom">
          <Image src="logo.svg" height="25" width="140" alt="Logo" />
          <ul className="flex-between-center links text-sm font-bold tracking-widest">
            <li>HOME</li>
            <li>HEADPHONES</li>
            <li>SPEAKERS</li>
            <li>EARPHONES</li>
          </ul>
          <Image src="cart-icon.svg" height="30" width="30" alt="Cart Icon" />
        </nav>
        <div className="flex-between-center">
          <div>
            <h1 className="heading-secondary mb-6 text-sm">NEW PRODUCT</h1>
            <h1 className="heading-primary text-6xl font-bold mb-6">
              XX99 MARK 11 HEADPHONES
            </h1>
            <p className="para mb-10 w-8/12">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="btn btn-primary">SEE PRODUCT</button>
          </div>
          <Image src={HeroImage} placeholder="blur" alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
