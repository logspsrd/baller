import { useState } from 'react';
import Reviews from './Reviews.json'


const ReviewCard = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {

        setCurrentIndex((prevIndex) => 
        prevIndex === Reviews.length - 1 ? 0 : prevIndex + 1
        )
        
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? Reviews.length - 1 : prevIndex - 1
        )
    }

    const currentReview = Reviews[currentIndex]
    

    return(
        <>
            <div className="h-[200px] w-[450px] bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl absolute top-[655px] left-[330px] overflow-hidden">
                            <div className="h-12 w-full flex mt-4">
                                <h2 className={`h-12 w-28 flex items-center justify-baseline text-[18px] text-white ml-8 overflow-hidden transition-all duration-1000`}
                                    >{currentReview.name}</h2>
                                <div className="h-full w-[150px] flex items-center justify-baseline">
                                    {Array.from({ length: currentReview.stars }).map((_, i) => (
                                        <box-icon 
                                        key={i}
                                        type='solid' 
                                        color="white" 
                                        name='star'
                                        ></box-icon>
                                    ))}
                                </div>
                                <div className="h-full w-[150px] flex items-center justify-center">
                                    <h2 className="text-[16px] text-white font-semibold tracking-wide ml-12-=">{currentReview.date}</h2>
                                </div>
                            </div>
                            <div className="h-12 w-[200px] flex ml-8">
                                <h2 className="text-[hsl(0,0%,80%)] font-light">{currentReview.program}</h2>
                            </div>
                            <div className="h-20 w-[325px] text-white flex items-baseline justify-center ml-8">
                                <p>{currentReview.review}</p>
                            </div>
                            <div className="h-16 w-44 absolute top-[140px] left-[315px] bottom-2 flex items-center justify-center gap-2">
                                <button onClick={handlePrev} className="h-8 w-8 flex items-center justify-center bg-white hover:bg-[hsl(0,0%,80%)] transition-all duration-500 rounded-full hover:scale-102 cursor-pointer"><box-icon name='chevron-left' color='black' className="h-8 w-8 flex items-center justify-center p-1"></box-icon></button>
                                <button onClick={handleNext} className="h-8 w-8 flex items-center justify-center bg-white hover:bg-[hsl(0,0%,80%)] transition-all duration-500 rounded-full hover:scale-102 cursor-pointer"><box-icon name='chevron-right' color='black' className="h-8 w-8 flex items-center justify-center p-1"></box-icon></button>
                            </div>
                        </div>
        </>
    )
}

export default ReviewCard