import Events from './Events'

const EventsPage = () => {



    return(
    <>
                <div className="h-screen w-full bg-[hsl(0,0%,95%)] flex items-center justify-center">
                    <div className="bg-black h-screen w-[1500px] flex flex-col items-center justify-center rounded-4xl">
                        <header className="h-48 w-full flex items-center pl-12 relative pt-12">
                            <h2 className="text-[24px] pl-8 text-white h-12 w-64">CURRENT EVENTS</h2>
                        </header>
                        <Events/>
                    </div>
                </div>
    </>
    )

}

export default EventsPage