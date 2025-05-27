import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";
import MosaicTemplate from './catalog/mosaic-template';

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="p-8">
        <MosaicTemplate />
      </div>
      <div className="p-8">
        <MosaicTemplate />
      </div>
      <div className="p-8">
        <MosaicTemplate />
      </div>
      <div className="p-8">
        <MosaicTemplate />
      </div>
      <div className="p-8">
        <MosaicTemplate />
      </div>
      <div className="p-8">
        <MosaicTemplate />
      </div>
    </section>
  );
}
