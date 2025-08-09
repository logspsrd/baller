import { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard.jsx'
import AOS from 'aos';


const ProgramPage = () => {

    AOS.init();
    
        useEffect(() => {
            AOS.init({ duration: 1500 })
        }, []);

    const [review, setReview] = useState(null);

    return(
        <>
            <div className="h-screen w-full bg-[hsl(0,_0%,95%)] flex flex-col md:flex-row items-center justify-center relative rounded-3xl gap-16">
                <div className="h-[800px] w-[650px] flex flex-col gap-20">
                    <h2 className="h-40 w-full text-[44px] font-semibold text-black">Unlock your full potential — Start training to your limits.</h2>
                    <ReviewCard/>
                </div> 
                <div className="h-[800px] w-[650px] bg-[url(./src/assets/ball-on-bench.jpg)] bg-cover bg-center bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl flex flex-col items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-3xl"/>
                    <h2 className="h-32 w-full flex items-center justify-center text-white text-[50px] tracking-wide z-1">Single Session</h2>
                    <h3 className="h-8 w-full flex justify-center text-[hsl(0,_0%,100%)] text-[18px] font-light tracking-wide z-1">Indivdual handling training — Beginner</h3>
                    <div className="h-16 w-72 mt-8 flex items-center justify-center bg-gradient-to-r from-white to-gray-100 rounded-full shadow-lg border border-gray-200 z-1">
                        <span className="text-[24px] text-black">Starting at $10</span>
                        <span className="text-gray-500 font-light text-[16px] ml-2">/ session</span>
                    </div>
                    <button className="h-24 w-24 bg-white relative left-[250px] top-[200px] rounded-full hover:scale-105 hover:bg-[hsl(0,_0%,95%)] hover:shadow-xl transition-all duration-500 cursor-pointer group z-1">
                        <box-icon name='arrow-back'  className="h-16 w-16 p-4 rotate-180 group-hover:rotate-145 transition-all duration-500"></box-icon>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProgramPage