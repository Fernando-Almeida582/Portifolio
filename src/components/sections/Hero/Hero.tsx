import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center px-6">
      
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-12 lg:flex-row">
        <HeroText />
        <HeroImage />
      </div>
    </section>
  );
}