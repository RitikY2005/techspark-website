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
    <h3 className="text-black font-tech text-center text-sm md:text-base lg:text-lg mt-4">
      {title}
    </h3>
  </div>
);

function Sponsors() {
    
  return (
    <CyberLayout>
    <div className="w-full px-4 sm:px-6 lg:px-8 pb-16">
      {/* Title Sponsor Section */}
      <h1 className="font-tech text-black text-3xl md:text-4xl lg:text-5xl text-center pt-12 md:pt-16 ">
        PRESENTED BY
      </h1>
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto  mt-6 md:mt-8">
        <div className="w-full max-w-[500px] md:max-w-[700px] px-4">
          <img
            src={"/sponsors/Logo LNV.png"}
            alt="Learnovation"
            className="w-full h-auto object-contain"
          />
        </div>
        {/* <h2 className="text-black font-tech text-center text-sm md:text-base lg:text-2xl mt-8">
          Learning Partner
        </h2> */}
      </div>

      <h1 className="font-tech text-black text-3xl md:text-4xl lg:text-5xl text-center pt-12 md:pt-14 mb-10">
        POWERED BY
      </h1>
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto mt-6 md:mt-8">
        <div className="w-full max-w-[400px] md:max-w-[400px] px-5">
          <img
            src={"/sponsors/chandakf.png"}
            alt="Chandak"
            className="w-full h-auto object-contain "
          />
        </div>
        {/* <h2 className="text-black font-tech text-center text-sm md:text-base lg:text-xl mt-8">
          Smartphone Partner
        </h2> */}
      </div>

      {/* Special Partner Section
      <h1 className="font-tech text-black text-3xl md:text-4xl lg:text-5xl text-center pt-16 md:pt-28 mb-12">
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
        <h2 className="text-black font-tech text-center text-sm md:text-base lg:text-xl mt-8">
          Chocolate Partner
        </h2>
      </div> */}

      <h1 className="font-tech text-black text-3xl md:text-4xl lg:text-5xl text-center pt-12 md:pt-28 mb-4">
        OFFICIAL PARTNERS
      </h1>

      <div className="w-full h-atuo sm:p-6 p-3">
         <div className="flex flex-wrap justify-center sm:justify-evenly gap-8 w-full max-w-7xl mx-auto ">
          <SponsorCard src= {"/sponsors/carmasaragold2.png"} alt="Carmasara"  />
          <SponsorCard  src={"/sponsors/AlphaBlack.png"}   alt="Alpha"  />
          <SponsorCard src={"/sponsors/MOD.jpg"} alt="MOD" />
          <div/>
          <div className="flex justify-center flex-wrap gap-8 w-full max-w-7xl mx-auto mt-6 ">
          <SponsorCard  src={"/sponsors/Contact1.png"} alt="HOF" />
          <SponsorCard src={"/sponsors/image92.png"}  alt="NextLevel" />
          

          </div>
  
         </div>
      </div>



    </div>
    </CyberLayout>
  );
}

export default Sponsors;




// <div className="flex flex-col items-center mt-6 md:mt-10">
// <div className="flex flex-wrap justify-center items-center gap-8 w-full max-w-7xl mx-auto">
// <div className="justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto mt-6 md:mt-10">

{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto place-items-center"></div> */}
{/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto place-items-center">*/}
  // <div className="flex flex-col items-center justify-center w-full max-w-[250px] p-4"> 
  //   <div className="h-[120px] flex items-center justify-center">
  //     <img
  //      
  //       className="w-auto h-auto max-h-[60px] max-w-[130px] object-contain" // Reduced from 100px/180px
  //     />
  //   </div>
    {/* <h3 className="text-black font-tech text-center text-sm md:text-base lg:text-lg mt-4">
      Conscious Skin Care Partner
    </h3> */}
  // </div>
  // <div className="flex flex-col items-center justify-center w-full max-w-[250px] p-4">
  //   <div className="h-[120px] flex items-center justify-center">
  //     <img
  //       src={"/TSHIRTS/carmasaraBlack2.png"}
  //       alt="Carmasara"
  //       className="w-auto h-auto max-h-[250px] max-w-[350px] object-contain" // Reduced from 100px/180px
  //     />
  //   </div>
    {/* <h3 className="text-black font-tech text-center text-sm md:text-base lg:text-lg mt-4">
      Accomodation Partner
    </h3> */}
  // </div>
  // <SponsorCard

  //   //="  Virtual Production Partner"
  // />

  // <SponsorCard
  //  
  //   //="  Virtual Production Partner"
  // />
  
  // <SponsorCard
  //   
  //   //="  Virtual Production Partner"
  // />

  {/* <SponsorCard src={"/sponsors/MAAC.webp"} alt="MAAC" title="  Animation Partner" />
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
</div> */}
{/* </div> */}
{/* </div> */}
{/* </div> */}
{/* </div> */}