import { useState } from 'react'

const EventsPage = () => {

    const [selectedEvent, setSelectedEvent] = useState(null)

    const handleClick = (eventName) => {
        setSelectedEvent(eventName);
        console.log("Selected event:", eventName)
    }


    return(
    <>
                <div className="h-screen w-full flex items-center justify-center">
                    <div className="bg-black h-screen w-[1500px] flex flex-col items-center justify-center rounded-4xl">
                        <header className="h-48 w-full flex items-center pl-12 relative pt-12">
                            <h2 className="text-[24px] pl-8 text-white h-12 w-64">CURRENT EVENTS</h2>
                        </header>
                        <div className="h-400 w-full flex flex-col items-center mt-40">
                            {["Online Fitness Challenge", "Cardio Bootcamp", "Strength Training", "Minfulness Yoga"].map((event, index) => (
                                <div
                                    key={event}
                                    onClick={() => handleClick(event)}
                                    className="relative h-32 w-[1200px] flex items-center rounded-4xl bg-black hover:bg-orange-500 hover:h-44 transition-all duration-300 cursor-pointer group"
                                >
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-400 rounded-none group-hover:bg-transparent transition-all duration-300"></div>
                                <h2 className="h-16 w-[80%] text-[38px] font-light text-white flex items-center pl-8">{event}</h2>
                                <box-icon name='arrow-back' className="h-16 w-16 p-4 ml-24 rounded-full rotate-180 [color:white] group-hover:rotate-145 bg-[hsl(0,_0%,100%)] hover:scale-105 transition-all duration-300"></box-icon>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
    </>
    )

}

export default EventsPage