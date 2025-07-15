

const CommunityPage = () => {

    return(
        <div className="h-screen">
            <div className="h-[800px] w-[1400px] top-16 left-[50%] -translate-x-[50%] rounded-[50px] relative bg-gray-100">
                <div className="h-[350px] w-[450px] flex flex-col absolute top-40 left-24">
                    <h2 className="h-[150px] w-[400px] flex text-[hsl(0,_0%,0%)] font-bold text-[48px]">Explore different communities.</h2>
                    <div className="h-[125px] w-[500px] pt-4 flex flex-wrap gap-2">
                        <div className="bg-white h-8 w-40 pr-1 gap-1 rounded-3xl flex items-center justify-center">
                            <box-icon className="h-6 w-6" color="gray" name='basketball'></box-icon>
                            <h2 className="flex text-[14px] font-semibold text-[hsl(0,_0%,40%)]">Pickup basketball</h2>
                        </div>
                        <div className="bg-white h-8 w-24 pr-1 gap-1 rounded-3xl flex items-center justify-center">
                            <box-icon className="h-6 w-6" color="gray" name='baseball'></box-icon>
                            <h2 className="flex text-[14px] font-semibold text-[hsl(0,_0%,40%)]">Baseball</h2>
                        </div>
                        <div className="bg-white h-8 w-38 pr-1 gap-1 rounded-3xl flex items-center justify-center">
                            <box-icon className="h-6 w-6" color="gray" name='football'></box-icon>
                            <h2 className="flex text-[14px] font-semibold text-[hsl(0,_0%,40%)]">Football practice</h2>
                        </div>
                        <div className="bg-white h-8 w-34 pr-1 gap-1 rounded-3xl flex items-center justify-center">
                            <box-icon className="h-6 w-6" color="gray" name='cycling'></box-icon>
                            <h2 className="flex text-[14px] font-semibold text-[hsl(0,_0%,40%)]">Cycle groups</h2>
                        </div>
                        <div className="bg-white h-8 w-36 pr-1 gap-1 rounded-3xl flex items-center justify-center">
                            <box-icon className="h-6 w-6 flex items-center justify-center" color="gray" name='dumbbell'></box-icon>
                            <h2 className="flex text-[14px] font-semibold text-[hsl(0,_0%,40%)]">Weight training</h2>
                        </div>
                    </div>
                </div>
                <div className="h-[600px] w-[700px] bg-white absolute top-24 left-[600px] rounded-4xl flex items-center justify-center gap-8">
                    <div className="h-[450px] w-[300px] flex flex-col">
                        <div className="h-[75px] w-full text-[24px] font-bold pt-4"><h2>Find and meet new people!</h2></div>
                        <div className="h-[200px] w-full">
                            <p className="text-[18px] font-semibold text-[hsl(0,_0%,_70%)]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi sint necessitatibus delectus aspernatur vitae minima facilis ullam incidunt.</p>
                        </div>
                        <h2 className="h-[100px] w-[275px] text-[24px] font-bold pt-12">Join to access all communities</h2>
                        <button className="bg-black h-[50px] w-[300px] flex items-center pl-4 rounded-4xl text-white mt-8 hover:bg-[hsl(0,_0%,_20%)] transition-all duration-300 cursor-pointer">Join</button>
                    </div>
                    <div className="h-[450px] w-[250px] bg-gray-100 rounded-4xl"></div>
                </div>
            </div>
        </div>
    )
}

export default CommunityPage