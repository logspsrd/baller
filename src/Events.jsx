import eventsJson from './Events.json'


const Events = ({ onClick, className }) => {

    return(
        <>
            <div className="h-400 w-full flex flex-col items-center mt-40 overflow-hidden">
                                {eventsJson.slice(0, 4).map((eventsJson) => (
                                    <div key={eventsJson.id} className={className} onClick={() => onClick(eventsJson.id)}>
                                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-400 rounded-none group-hover:bg-transparent transition-all duration-300"></div>
                                        <h2 className="h-16 w-[80%] text-[38px] font-light text-white flex items-center pl-8">{eventsJson.title}</h2>
                                        <div className="h-16 w-[450px] flex items-center justify-baseline pl-8 absolute bottom-0 gap-4 opacity-0 group-hover:opacity-100 transition-all duration-700">
                                            <div className="h-8 min-w-24 left-8  flex items-center justify-center rounded-[25px] border-1 border-white pt-4 pb-4 pr-4 pl-2 gap-1 text-white"><box-icon name='map' color='white'></box-icon>{eventsJson.location}</div>
                                            <div className="h-8 min-w-24 left-44 flex items-center justify-center  rounded-[25px] border-1 border-white p-4 text-white">{eventsJson.date}</div>
                                        </div>
                                        
                                        <box-icon name='arrow-back' className="h-16 w-16 p-4 ml-24 rounded-full rotate-180 group-hover:rotate-145 bg-[hsl(0,_0%,100%)] hover:scale-105 transition-all duration-300"></box-icon>
                                    </div>
                                ))}
                            </div>
        </>
    )
}

export default Events