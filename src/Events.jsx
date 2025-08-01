import { useState } from 'react'
import eventsJson from './Events.json'


const Events = () => {

    const [selectedEvent, setSelectedEvent] = useState(null)
        const [fadedEvent, setFadedEvent] = useState(false)
    
        const handleClick = (eventName) => {
            setSelectedEvent(eventName);
            setFadedEvent(true)
            console.log("Selected event:", eventName)
        }

    return(
        <>
            <div className="h-400 w-full flex flex-col items-center mt-40 overflow-hidden">
                                {eventsJson.slice(0, 4).map((eventsJson) => (
                                    <div
                                        key={eventsJson}
                                        onClick={() => handleClick(eventsJson.title)}
                                        className={`relative h-32 w-[1200px] flex items-center rounded-4xl bg-black hover:bg-orange-500 hover:h-44 cursor-pointer group
                                            ${fadedEvent ? 'translate-x-[-1500px]' : 'translate-x-0'} transition-all duration-500`}
                                    >
                                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-400 rounded-none group-hover:bg-transparent transition-all duration-300"></div>
                                    <h2 className="h-16 w-[80%] text-[38px] font-light text-white flex items-center pl-8">{eventsJson.title}</h2>
                                    <box-icon name='arrow-back' className="h-16 w-16 p-4 ml-24 rounded-full rotate-180 group-hover:rotate-145 bg-[hsl(0,_0%,100%)] hover:scale-105 transition-all duration-300"></box-icon>

                                    </div>
                                ))}
                            </div>
                            <div className="h-16 w-16 bg-blue-300 relative top-8"></div>
        </>
    )
}

export default Events