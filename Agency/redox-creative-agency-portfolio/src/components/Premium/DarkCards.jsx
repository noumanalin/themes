import DarkCard from "./DarkCard"
import cardImage from '../../assets/dark-card-1.jpg'
import { X, MonitorCheck, LaptopMinimalCheck, Tablet, SmartphoneCharging } from 'lucide-react'

const dataArray = [
    { icon: MonitorCheck, values: <p className="center-center gap-1 text-sm border rounded-full border-gray-500 px-1 py-[0.5px] m-2 ">1920px <X size={15} /> 1080px</p>, text: <p>Desktop Screen<br /> Layout</p> },
    { icon: LaptopMinimalCheck, values: <p className="center-center gap-1 text-sm border rounded-full border-gray-500 px-1 py-[0.5px] m-2 ">1364px <X size={15} /> 768px</p>, text: <p>Laptop Screen<br /> Layout</p> },
    { icon: Tablet, values: <p className="center-center gap-1 text-sm border rounded-full border-gray-500 px-1 py-[0.5px] m-2 ">1024px <X size={15} /> 768px</p>, text: <p>Tablet Screen<br /> Layout</p> },
    { icon: SmartphoneCharging, values: <p className="center-center gap-1 text-sm border rounded-full border-gray-500 px-1 py-[0.5px] m-2 ">767px <X  size={15}/> 365px</p>, text: <p>Mobile Screen<br /> Layout</p> },
]

const DarkCards = () => {
    return (
        <section className="max-w-[1200px] mx-auto px-2 flex flex-col md:flex-row justify-between my-10">
            <DarkCard heading={'Header, Footer & Menu'} text={'Flexible header and menu templates.'}
                dimText={'Choose and customize our awesome headers, footers and menus for your website’s need.'}
            >
                <figure className="mt-6">
                    <img src={cardImage} alt="Card Image" className="w-full rounded-lg" />
                </figure>
            </DarkCard>

            <DarkCard heading={'Responsive Design'} text={'Responsive and retina ready'}
                dimText={'theme. Redox automatically detects the screen size and adjust the content accordingly to provide fully responsive and optimised sites.'}
            >
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 ">
                    {dataArray.map((data, index) => (
                        <div key={index} className={`text-gray-300 flex flex-col items-center text-center ${index !=3 ?"border-b border-b-gray-600 md:border-none":""} `}>
                            <data.icon size={50} className="" />
                            <div className="">{data.values}</div>
                            <div className="  text-sm">{data.text}</div>
                        </div>
                    ))}
                </section>
            </DarkCard>
        </section>
    )
}

export default DarkCards