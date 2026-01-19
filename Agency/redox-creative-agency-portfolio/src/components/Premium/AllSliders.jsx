import InfiniteScroll from "../InfiniteScroll/InfiniteScroll";
import { infiniteSlider1, infiniteSlider2, infiniteSlider4 } from "../../utils/appData";
import SlideItem from "./SlideItem";

const AllSliders = () => {
    return (
        <section className="w-full relative py-12 space-y-2">
            <InfiniteScroll speed={24} direction="left">
                {infiniteSlider1 &&
                    infiniteSlider1.map((item, index) => (
                        <SlideItem key={index} Icon={item.icon} title={item.title} />
                    ))}
            </InfiniteScroll>

            <InfiniteScroll speed={20} direction="right">
                {infiniteSlider2 &&
                    infiniteSlider2.map((item, index) => (
                        <SlideItem key={index} Icon={item.icon} title={item.title} />
                    ))}
            </InfiniteScroll>

            <InfiniteScroll speed={22} direction="left">
                {infiniteSlider4 &&
                    infiniteSlider4.map((item, index) => (
                        <SlideItem key={index} Icon={item.icon} title={item.title} />
                    ))}
            </InfiniteScroll>

            <InfiniteScroll speed={24} direction="right">
                {infiniteSlider1 &&
                    infiniteSlider1.map((item, index) => (
                        <SlideItem key={index} Icon={item.icon} title={item.title} />
                    ))}
            </InfiniteScroll>

            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent z-0" />
        </section>
    )
}

export default AllSliders