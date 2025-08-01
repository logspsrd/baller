import { useState } from 'react'
import Events from './Events'
import eventsJson from './Events.json'
import EventBtn from './EventBtn'

const EventsPage = () => {

    const [slideEvent, setSlideEvent] = useState(false)
    const [opacityEvent, setOpacityEvent] = useState(false)

    const testClick = () => {
        setSlideEvent(false)
        setOpacityEvent(false)
    }
    
    const handleClick = () => {
        setSlideEvent(true);
        setOpacityEvent(true);
    }

    return(
    <>
                <div className="h-screen w-full bg-[hsl(0,0%,95%)] flex items-center justify-center">
                    <div className="bg-black h-screen w-[1500px] flex flex-col items-center justify-center rounded-4xl overflow-hidden">
                        <header className="h-48 w-full flex items-center pl-12 relative pt-12">
                            <h2 className="text-[24px] pl-8 text-white h-12 w-64">CURRENT EVENTS</h2>
                        </header>
                        <EventBtn
                                  onClick={() => testClick()}
                                  className={`h-[800px] w-full flex flex-col items-center absolute mt-24 overflow-hidden ${opacityEvent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                        />
                        <Events
                                onClick={() => handleClick()} 
                                className={`relative h-32 w-[1200px] flex items-center rounded-4xl bg-black hover:bg-orange-500 hover:h-44 cursor-pointer group transition-all duration-500 z-1 ${slideEvent ? 'translate-x-[-1500px]' : 'translate-x-0'}`}/>
                    </div>

                </div>
    </>
    )

}

export default EventsPage