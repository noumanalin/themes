
const SlideItem = ({ Icon, title }) => {
    return (
        <div className="flex items-center gap-3 bg-zinc-800 p-6 px-8 rounded-3xl mx-2">
            <Icon className="w-6 h-6 text-white" /> 
            <p className="text-xl capitalize text-gray-400">{title}</p>
        </div>
    )
}

export default SlideItem