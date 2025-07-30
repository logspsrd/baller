
const CommunityPage = () => {

    return(
        <div className="h-screen bg-[hsl(0,_0%,95%)]">
            <div className="h-[800px] w-[1600px] top-16 left-[50%] -translate-x-[50%] rounded-[50px] relative">
                <div className="h-[350px] w-[450px] flex flex-col absolute top-40 left-24">
                    <h2 className="h-[150px] w-[450px] flex text-[hsl(0,_0%,0%)] font-bold text-[48px]">Explore different communities.</h2>
                    <div className="h-[125px] w-[500px] pt-4 flex flex-wrap gap-2">
                        <div className="bg-white h-8 w-44 pr-1 gap-1 rounded-3xl flex items-center justify-center">
                            <box-icon className="h-6 w-6" color="gray" name='basketball'></box-icon>
                            <h2 className="flex text-[14px] font-semibold text-[hsl(0,_0%,40%)] select-none">Pickup basketball</h2>
                        </div>
                        <div className="bg-white h-8 w-26 pr-1 gap-1 rounded-3xl flex items-center justify-center">
                            <box-icon className="h-6 w-6" color="gray" name='baseball'></box-icon>
                            <h2 className="flex text-[14px] font-semibold text-[hsl(0,_0%,40%)] select-none">Baseball</h2>
                        </div>
                        <div className="bg-white h-8 w-40 pr-1 gap-1 rounded-3xl flex items-center justify-center">
                            <box-icon className="h-6 w-6" color="gray" name='football'></box-icon>
                            <h2 className="flex text-[14px] font-semibold text-[hsl(0,_0%,40%)] select-none">Football practice</h2>
                        </div>
                        <div className="bg-white h-8 w-34 pr-1 gap-1 rounded-3xl flex items-center justify-center">
                            <box-icon className="h-6 w-6" color="gray" name='cycling'></box-icon>
                            <h2 className="flex text-[14px] font-semibold text-[hsl(0,_0%,40%)] select-none">Cycle groups</h2>
                        </div>
                        <div className="bg-white h-8 w-40 pr-1 gap-1 rounded-3xl flex items-center justify-center">
                            <box-icon className="h-6 w-6 flex items-center justify-center" color="gray" name='dumbbell'></box-icon>
                            <h2 className="flex text-[14px] font-semibold text-[hsl(0,_0%,40%)] select-none">Weight training</h2>
                        </div>
                    </div>
                </div>
                <div className="absolute top-[495px] left-[90px] rounded-3xl h-[175px] w-[475px] bg-[url('./src/assets/sparring-boxing.jpg')] bg-cover bg-center"></div>
                <div className="h-[600px] w-[900px] bg-white absolute top-24 left-[650px] rounded-4xl flex items-center justify-center gap-16">
                    <div className="h-[450px] w-[400px] flex flex-col">
                        <div className="h-[225px] w-full text-[40px] font-bold leading-tight"><h2>Find and meet new people!</h2></div>
                        <h2 className="h-[75px] w-[350px] text-[40px] leading-tight mb-16 pt-12">Join to access all communities</h2>
                        <button className="bg-black h-[60px] w-[350px] flex items-center pl-6 font-semibold rounded-4xl text-white text-[20px] mt-8 hover:bg-[hsl(0,_0%,_15%)] hover:scale-101 transition-all duration-300 cursor-pointer">Join <box-icon name='arrow-back' color="white" rotate='180' className="relative left-58" ></box-icon></button>
                    </div>
                    <div className="h-[500px] w-[300px] bg-[url('./src/assets/pickle-ball.jpg')] bg-cover bg-center rounded-4xl"></div>
                </div>
            </div>
        </div>
    )
}

export default CommunityPage