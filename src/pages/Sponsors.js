import CyberLayout from "../components/CyberLayout";


// Update the SponsorCard component for better consistency
const SponsorCard = ({ src, alt, title }) => (
  <div className="flex flex-col items-center justify-center w-full max-w-[250px] p-4">
    <div className="h-[120px] flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        className="w-auto h-auto max-h-[100px] max-w-[180px] object-contain"
      />
    </div>
    <h3 className="text-white font-NeueHaasMedium text-center text-sm md:text-base lg:text-lg mt-4">
      {title}
    </h3>
  </div>
);

function Sponsors() {
    
  return (
    <CyberLayout>
    <div className="w-full min-h-screen bg-black/50  px-4 sm:px-6 lg:px-8 pb-16">
      {/* Title Sponsor Section */}
      <h1 className="font-NeueHaasBold text-red text-3xl md:text-4xl lg:text-5xl text-center pt-16 md:pt-28 mb-12">
        PRESENTED BY
      </h1>
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
        <div className="w-full max-w-[250px] md:max-w-[500px] px-4">
          <img
            src={"/sponsors/Learnovation.webp"}
            alt="Learnovation"
            className="w-full h-auto object-contain"
          />
        </div>
        <h2 className="text-white font-NeueHaasMedium text-center text-sm md:text-base lg:text-2xl mt-8">
          Learning Partner
        </h2>
      </div>

      <h1 className="font-NeueHaasBold text-red text-3xl md:text-4xl lg:text-5xl text-center pt-16 md:pt-28 mb-12">
        ASSOCIATED BY
      </h1>
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
        <div className="w-full max-w-[300px]  px-4">
          <img
            src={"/sponsors/Oppo.webp"}
            alt="Oppo"
            className="w-full h-auto object-contain"
          />
        </div>
        <h2 className="text-white font-NeueHaasMedium text-center text-sm md:text-base lg:text-xl mt-8">
          Smartphone Partner
        </h2>
      </div>

      {/* Special Partner Section */}
      <h1 className="font-NeueHaasBold text-red text-3xl md:text-4xl lg:text-5xl text-center pt-16 md:pt-28 mb-12">
        SPECIAL PARTNER
      </h1>
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
        <div className="w-full max-w-[250px]  px-4">
          <img
            src={"/sponsors/Schmitten.webp"}
            alt="Schmitten"
            className="w-full h-auto object-contain"
          />
        </div>
        <h2 className="text-white font-NeueHaasMedium text-center text-sm md:text-base lg:text-xl mt-8">
          Chocolate Partner
        </h2>
      </div>

      <h1 className="font-NeueHaasBold text-red text-3xl md:text-4xl lg:text-5xl text-center pt-16 md:pt-28 mb-12">
        OUR PARTNERS
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto place-items-center"></div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto place-items-center">
        <div className="flex flex-col items-center justify-center w-full max-w-[250px] p-4">
          <div className="h-[120px] flex items-center justify-center">
            <img
              src={"/sponsors/Ecossa.webp"}
              alt="Ecossa"
              className="w-auto h-auto max-h-[60px] max-w-[130px] object-contain" // Reduced from 100px/180px
            />
          </div>
          <h3 className="text-white font-NeueHaasMedium text-center text-sm md:text-base lg:text-lg mt-4">
            Conscious Skin Care Partner
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center w-full max-w-[250px] p-4">
          <div className="h-[120px] flex items-center justify-center">
            <img
              src={"/sponsors/StudentHousing.webp"}
              alt="Student Housing"
              className="w-auto h-auto max-h-[60px] max-w-[130px] object-contain" // Reduced from 100px/180px
            />
          </div>
          <h3 className="text-white font-NeueHaasMedium text-center text-sm md:text-base lg:text-lg mt-4">
            Accomodation Partner
          </h3>
        </div>
        <SponsorCard
          src={"/sponsors/VirtualProduction.webp"}
          alt="Virtual Production"
          title="  Virtual Production Partner"
        />
        <SponsorCard src={"/sponsors/MAAC.webp"} alt="MAAC" title="  Animation Partner" />
        <SponsorCard src={"/sponsors/Bagello.webp"} alt="Bagello" title="  Bag Partner" />
        <SponsorCard
          src={"/sponsors/GoodVibes.webp"}
          alt="Good Vibes"
          title="  Mocktail Partner"
        />
        <SponsorCard src={"/sponsors/Omkar.webp"} alt="Omkar" title="  Munchies Partner" />
        <SponsorCard
          src={"/sponsors/EazyDiner.webp"}
          alt="Eazy Diner"
          title="  Dining Partner"
        />
        <SponsorCard
          src={"/sponsors/VihaaraVilla.webp"}
          alt="Vihaara Villa"
          title="  Villa Partner"
        />
        <SponsorCard
          src={"/sponsors/VenustGifts.webp"}
          alt="Venust Gifts"
          title="  Customised Diary Partner"
        />
        <SponsorCard
          src={"/sponsors/FreeGo.webp"}
          alt="Free Go"
          title="  Energy Drink Partner"
        />
        <SponsorCard
          src={"/sponsors/ZilShah.webp"}
          alt="Zil Shah"
          title="  Choreography Partner"
        />
        <SponsorCard
          src={"/sponsors/PureBliss.webp"}
          alt="Pure Bliss"
          title="  Body Care Partner"
        />
        <SponsorCard src={"/sponsors/3Sisters.webp"} alt="3 Sisters" title="  Beverage Partner" />
        <SponsorCard
          src={"/sponsors/90MLAffair.webp"}
          alt="ML Affair"
          title="  Coffee Shot Partner"
        />
        <SponsorCard src={"/sponsors/AVN.webp"} alt="AVN" title="  Laptop Accessory Partner" />
        <SponsorCard src={"/sponsors/MOD.webp"} alt="MOD" title="  Donut Partner" />
        <SponsorCard
          src={"/sponsors/PreppyShoes.webp"}
          alt="Preppy Shoes"
          title="  Footwear Partner"
        />
        <SponsorCard src={"/sponsors/Ramen.webp"} alt="Ramen" title="  Ramen Partner" />
        <SponsorCard
          src={"/sponsors/ShakeNOats.webp"}
          alt="Shake NOats"
          title="  Oats Partner"
        />
        <SponsorCard src={"/sponsors/Wardha.webp"} alt="Wardha" title=" Studios Partner" />
        <SponsorCard
          src={"/sponsors/Vibe.webp"}
          alt="Vibe"
          title="Indoor Venue Partner"
        />
        <SponsorCard
          src={"/sponsors/Resolve.webp"}
          alt="Resolve"
          title="Gifting Partner"
        />
        <SponsorCard
          src={"/sponsors/Esteva.webp"}
          alt="Esteva"
          title="Accessories Partner"
        />
      </div>

    </div>
    </CyberLayout>
  );
}

export default Sponsors;