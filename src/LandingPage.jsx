import './index.css'

const LandingPage = () => {

    return(
        <>
            <div className="bg-[url('./assets/ball-in-hand.jpg')] bg-cover bg-center h-screen w-full relative">
                <header className="h-24 w-full flex border-b-1 border-zinc-300">
                    <h2 className="h-24 w-40 flex items-center justify-center text-3xl font-equip text-white select-none">baller.</h2>
                    <div className="h-24 w-[400px] flex items-center justify-center text-white">
                        <a className="h-[94px] w-full flex items-center justify-center hover:bg-[rgba(255,_255,_255,_0.2)] hover:backdrop-blur-sm transition-all duration-200 cursor-pointer">Home</a>
                        <a className="h-[94px] w-full flex items-center justify-center hover:bg-[rgba(255,_255,_255,_0.2)] hover:backdrop-blur-sm transition-all duration-200 cursor-pointer">Programs</a>
                        <a className="h-[94px] w-full flex items-center justify-center hover:bg-[rgba(255,_255,_255,_0.2)] hover:backdrop-blur-sm transition-all duration-200 cursor-pointer">Runs</a>
                        <a className="h-[94px] w-full flex items-center justify-center hover:bg-[rgba(255,_255,_255,_0.2)] hover:backdrop-blur-sm transition-all duration-200 cursor-pointer">Events</a>
                    </div>
                </header>
                <div className="h-[250px] w-[450px] absolute left-[200px] top-[400px] flex">
                    <h2 className="text-white text-[32px] font-semibold">A new way for athletes to meet other athletes.</h2>
                </div>
            </div>
        </>
    )
}

export default LandingPage