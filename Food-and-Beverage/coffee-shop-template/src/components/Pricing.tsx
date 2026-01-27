import type { CoffeMenu } from "../utils/types"
import { hotCoffees, coldCoffees } from "../utils/appData"
import SectionHead from "./SectionHead"
import MenuCoffeeCard from "./MenuCoffeeCard"

const Pricing = () => {
  return (
    <div className="wrapper">
        <SectionHead heading="menu & PRICING" subHeadig="Competitive Pricing"/>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-3 my-10">
            <article className="">
                <h2 className="text-dark text-4xl my-5 capitalize"><strong>Hot coffee</strong></h2>
                <div className="flex flex-col gap-8">
                    {hotCoffees && hotCoffees.map((item: CoffeMenu, index)=><MenuCoffeeCard key={index} coffee={item}  />)}
                </div>
            </article>

             <article className="">
                <h2 className="text-dark text-4xl my-5 capitalize"><strong>Cold coffee</strong></h2>
                <div className="flex flex-col gap-8">
                    {coldCoffees && coldCoffees.map((item: CoffeMenu, index)=><MenuCoffeeCard key={index} coffee={item}  />)}
                </div>
            </article>
        </section>
    </div>
  )
}

export default Pricing