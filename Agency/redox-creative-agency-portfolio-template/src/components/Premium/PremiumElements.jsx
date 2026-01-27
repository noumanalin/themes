
import AllSliders from "./AllSliders";
import DarkCards from "./DarkCards";
import PremiumTopSection from "./PremiumTopSection";

const PremiumElements = () => {
  return (
    <section aria-label="Premium Elements" className="bg-zinc-950 w-screen py-15">
      <PremiumTopSection/>
      <AllSliders />
      <DarkCards/>
    </section>
  );
};

export default PremiumElements;
