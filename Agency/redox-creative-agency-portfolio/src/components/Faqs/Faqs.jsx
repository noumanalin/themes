
import OnlineDocs from "./OnlineDocs"
import Faq from "./Faq";

const Faqs = () => {
    return (
        <section className="w-screen bg-[#f6f6f6] py-10">
            <div className="max-w-[1200px] mx-auto px-4">
                <OnlineDocs />
                <Faq />
            </div>
        </section>
    )
}

export default Faqs