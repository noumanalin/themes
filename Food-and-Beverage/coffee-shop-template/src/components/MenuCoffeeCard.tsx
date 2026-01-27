 
import type { CoffeMenu } from "../utils/types"

interface MenuCoffeeCardProps {
  coffee: CoffeMenu
}

const MenuCoffeeCard = ({ coffee }: MenuCoffeeCardProps) => {
  return (
    <article className="flex items-center gap-4">
        <figure className="relative">
            <img src={coffee.image} className="w-20 h-20 rounded-full" alt="Coffe Image" />
            <span className="absolute -top-3 -right-3 py-2 px-3 rounded-full bg-[var(--primary-fair)]">${coffee.price}</span>
        </figure>

        <div className="px-2 max-w-[65%]">
            <h3 className="text-dark text-2xl">{coffee.name}</h3>
            <p className="text-accent">{coffee.description}</p>
        </div>
        
    </article>
  )
}

export default MenuCoffeeCard