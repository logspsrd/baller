

const ProgramPage = () => {

    return(
        <>
            <div className="h-screen w-full bg-[hsl(0,_0%,95%)]">
                <div className="h-full rounded-3xl flex items-center justify-center gap-16">
                    <div className="h-[800px] w-[650px] flex flex-col">
                        <h2 className="h-40 w-full text-[44px] font-semibold text-black">Unlock your full potential — Start training to your limits.</h2>
                    </div> 
                    <div className="h-[800px] w-[650px] bg-[url(./src/assets/ball-on-bench.jpg)] bg-cover bg-center rounded-3xl flex flex-col items-center justify-center">
                        <h2 className="h-32 w-full flex items-center justify-center text-white text-[75px]">Single Session</h2>
                        <h3 className="h-8 w-full flex justify-center text-[hsl(0,_0%,100%)] text-[24px]">Indivdual training — Beginner</h3>
                        <div className="h-14 w-48 bg-white rounded-full mt-8 flex justify-center"><span className="text-[32px] text-black flex items-center">$10</span><span className="text-[hsl(0,_0%,80%)] h-11 font-light text-[16px] flex justify-center items-end pl-1">/ session</span></div>
                        <button className="h-24 w-24 bg-white relative left-[250px] top-[200px] rounded-full hover:scale-105 hover:bg-[hsl(0,_0%,95%)] transition-all duration-300 cursor-pointer group">
                            <box-icon name='arrow-back'  className="h-16 w-16 p-4 rotate-180 group-hover:rotate-145 transition-all duration-300 "></box-icon>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgramPage