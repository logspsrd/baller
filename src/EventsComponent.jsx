import { useState } from 'react'
import Events from './Events'
import eventsJson from './Events.json'
import EventBtn from './EventBtn'
import EventDetails from './EventDetails'

const EventsPage = () => {

    const [slideEvent, setSlideEvent] = useState(false)
    const [opacityEvent, setOpacityEvent] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState(null)

    const testClick = () => {
        setSlideEvent(false)
        setOpacityEvent(false)
    }
    
    const handleClick = (eventId) => {
        setSlideEvent(true);
        setOpacityEvent(true);
        const event = eventsJson.find(e => e.id === eventId)
        console.log(event)
        setSelectedEvent(event)
    }

    return(
    <>
                <div className="h-screen max-w-[95%] md:max-w-[80%] lg:max-w-[1600px] mx-auto bg-[hsl(0,0%,95%)] flex items-center justify-center">
                    <div className="bg-black h-screen w-[1500px] flex flex-col rounded-4xl overflow-hidden">
                        <header className="h-48 w-full flex items-center pl-12 relative pt-12">
                            <h2 className="text-[24px] pl-8 text-white h-12 w-64">CURRENT EVENTS</h2>
                        </header>
                            <EventBtn
                                  onClick={() => testClick()}
                                  className={`h-[800px] w-full flex items-center absolute mt-8 overflow-hidden ${opacityEvent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
                            />
                            <Events
                                    onClick={(eventId) => handleClick(eventId)} 
                                    className={`relative h-32 w-[1200px] flex items-center rounded-4xl bg-black hover:bg-orange-500 hover:h-44 cursor-pointer group transition-all duration-500 z-1 ${slideEvent ? 'translate-y-[-1500px]' : 'translate-y-0'} ${opacityEvent ? 'opacity-0' : 'opacity-100'}`}
                            />
                            <div className="h-full w-[1500px] absolute flex items-center justify-center overflow-hidden">
                                <EventDetails
                                        event={selectedEvent}
                                        className={`flex flex-col items-center p-8 max-w-4xl mx-auto text-white transition-all duration-500 ${slideEvent ? 'translate-y-0' : 'translate-y-[1500px] '}`}
                                />
                            </div>
                    </div>

                </div>
    </>
    )

}

export default EventsPage