
import brand1 from '../assets/brand-1.png';
import brand2 from '../assets/brand-2.png';
import brand3 from '../assets/brand-3.png';
import brand4 from '../assets/brand-4.png';
import brand5 from '../assets/brand-5.png';
import brand6 from '../assets/brand-6.png';

const brands = [
  { name: "creative", logo: brand1 },
  { name: "creative", logo: brand2 },
  { name: "innovate", logo: brand3 },
  { name: "express", logo: brand4 },
  { name: "ZA brand name", logo: brand5 },
  { name: "Names Tagline space", logo: brand6 },
];


const Brands = () => {
  return (
    <section id="brands" className="my-30 text-center">
        <h3 className="text-center mb-10 text-xl uppercase text-light">We worked with global largest brands</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {brands.map((brand, index)=> <img key={index} src={brand.logo} alt={brand.name} title={brand.name} className="" />)}
        </div>
    </section>
  )
}

export default Brands