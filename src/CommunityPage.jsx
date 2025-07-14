

const CommunityPage = () => {

    return(
        <>
            <div className="h-screen w-[1600px] top-8 left-[50%] -translate-x-[50%] rounded-[50px] relative bg-gray-100">
                <div className="h-[550px] w-[525px] flex flex-col absolute top-40 left-24">
                    <h2 className="h-[150px] w-[600px] text-black font-semibold text-7xl">Explore different communities.</h2>
                    <div className="h-[125px] w-[450px] pt-4 flex flex-wrap gap-2">
                        <div className="bg-white h-10 w-48 pr-1 gap-1 rounded-3xl flex items-center justify-center">
                            <box-icon className="h-6 w-6" color="gray" name='basketball'></box-icon>
                            <h2 className="flex text-lg text-gray-500">Pickup basketball</h2>
                        </div>
                        <div className="bg-white h-10 w-28 pr-1 gap-1 rounded-3xl flex items-center justify-center">
                            <box-icon className="h-6 w-6" color="gray" name='baseball'></box-icon>
                            <h2 className="flex text-lg text-gray-500">Baseball</h2>
                        </div>
                        <div className="bg-white h-10 w-44 ml-8 pr-1 gap-1 rounded-3xl flex items-center justify-center">
                            <box-icon className="h-6 w-6" color="gray" name='football'></box-icon>
                            <h2 className="flex text-lg text-gray-500 bg-[hsl(0, 100%, 100%)]">Football practice</h2>
                        </div>
                        <div className="bg-white h-10 w-40 pr-1 gap-1 rounded-3xl flex items-center justify-center">
                            <box-icon className="h-6 w-6" color="gray" name='cycling'></box-icon>
                            <h2 className="flex text-lg text-gray-500">Cycle groups</h2>
                        </div>
                        <div className="bg-white h-10 w-40 pr-1 gap-1 rounded-3xl flex items-center justify-center">
                            <box-icon className="h-6 w-6" color="gray" name='dumbbell'></box-icon>
                            <h2 className="flex text-lg text-gray-500">Weight training</h2>
                        </div>
                    </div>
                </div>
                <div className="h-[250px] w-[700px] flex items-center justify-center absolute left-[50px] top-[510px] bg-[url('./assets/sparring-boxing.jpg')] bg-cover bg-center overflow-hidden">
                <h2 className="text-7xl font-black text-red-500 mix-blend-color-burn">GET BETTER.</h2>
                </div>
                <div className="h-[600px] w-[750px] bg-white absolute top-40 left-[800px] rounded-4xl flex items-center justify-center gap-8">
                    {/* <box-icon type='solid' name='face' className="absolute left-0 top-[50px] pt-1 h-10 w-10"></box-icon> */}
                    <div className="h-[500px] w-[300px] flex flex-col items-center rounded-3xl">
                        <div className="h-12 w-full">
                            <h2 className="h-12 w-full bg-[hsl(0, 100%, 96%)] text-[hsl(240, 100%, 50%)] font-bold font-equip text-xl">COMMUNITY</h2>
                        </div>
                        <div className="h-[500px] w-[300px] pt-4">
                            <p className="font-semibold text-lg pl-2 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat asperiores quidem? Magni mollitia animi tenetur dolores perferendis.</p>
                        </div>
                        <div className="h-[200px] w-[300px] flex flex-col items-center justify-center relative mt-4">
                            <h2 className="h-[100px] w-full text-4xl font-semibold">Join the community</h2>
                            <button className="bg-black font-extralight text-xl text-white h-[50px] w-full rounded-full cursor-pointer hover:bg-[#262626]">Connect <box-icon name='chevron-right' color='white' className="absolute left-64 top-28"></box-icon></button>
                        </div>
                    </div>
                    <div className="bg-gray-100 h-[500px] w-[350px] rounded-[35px]"></div>
                </div>
            </div>
        </>
    )
}

export default CommunityPage