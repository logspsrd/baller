

const CommunityPage = () => {

    return(
        <>
            <div className="h-screen w-[1600px] top-8 left-[50%] -translate-x-[50%] rounded-[50px] relative bg-gray-100">
                <div className="h-[550px] w-[525px] flex flex-col absolute top-40 left-24">
                    <h2 className="h-[48px] w-[600px] text-[hsl(0,_0%,0%)] font-bold text-[24px]">Explore different communities.</h2>
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
                <div className="h-[250px] w-[700px] flex items-center justify-center absolute left-[50px] top-[510px] bg-[url('./assets/sparring-boxing.jpg')] bg-cover bg-center overflow-hidden">
                <h2 className="text-7xl font-black text-red-500 mix-blend-color-burn">GET BETTER.</h2>
                </div>
                <div className="h-[600px] w-[750px] bg-white absolute top-40 left-[800px] rounded-4xl flex items-center justify-center gap-8">
                    <div className="h-[500px] w-[300px] flex flex-col items-center rounded-3xl">
                        <div className="h-8 w-full">
                            <h2 className="h-8 w-full text-[hsl(0,_0%,0%)] font-bold text-[20px]">Community</h2>
                        </div>
                        <div className="h-[500px] w-[300px] ">
                            <p className="font-regular text-[16px] text-[hsl(0,_0%,40%)] pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto repellat asperiores quidem? Magni mollitia animi tenetur dolores perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium officia, sit commodi asperiores, iure expedita officiis eligendi iusto odit quibusdam, magnam illum? Molestias explicabo eum asperiores voluptas voluptatem repudiandae aut?</p>
                        </div>
                        <div className="h-[200px] w-[300px] flex flex-col relative mt-4">
                            <h2 className="h-[50px] w-full text-[18px] relative  font-bold">Join the community</h2>
                            <button className="bg-black font-regular text-[16px] text-white h-[48px] w-full rounded-full cursor-pointer hover:bg-[#262626]">Connect</button>
                        </div>
                    </div>
                    <div className="bg-gray-100 h-[500px] w-[350px] rounded-[35px]"></div>
                </div>
            </div>
        </>
    )
}

export default CommunityPage