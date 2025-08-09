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
            <div className="h-[300px] w-[650px] bg-white rounded-3xl relative">
                            <div className="h-12 w-full flex mt-10">
                                <h2 className="h-12 w-40 flex items-center justify-baseline text-[24px] ml-8">{currentReview.name}</h2>
                                <div className="h-full w-[150px] flex items-center justify-baseline">
                                    {Array.from({ length: currentReview.stars }).map((_, i) => (
                                        <box-icon 
                                        key={i}
                                        type='solid' 
                                        color="gold" 
                                        name='star'
                                        ></box-icon>
                                    ))}
                                </div>
                                <div className="h-full w-[100px] flex items-center justify-center ml-40">
                                    <h2 className="text-[18px]">{currentReview.date}</h2>
                                </div>
                            </div>
                            <div className="h-12 w-[200px] flex ml-8">
                                <h2 className="text-[hsl(0,0%,60%)] font-light">{currentReview.program}</h2>
                            </div>
                            <div className="h-24 w-[400px] flex items-baseline justify-center ml-8">
                                <p>{currentReview.review}</p>
                            </div>
                            <div className="h-16 w-44 absolute left-[475px] bottom-2 flex items-center justify-center gap-4">
                                <button onClick={handlePrev} className="h-12 w-12 flex items-center justify-center bg-black hover:bg-[hsl(0,0%,20%)] transition-all duration-500 rounded-full hover:scale-102 cursor-pointer"><box-icon name='chevron-left' color='white' className="h-8 w-8"></box-icon></button>
                                <button onClick={handleNext} className="h-12 w-12 flex items-center justify-center bg-black hover:bg-[hsl(0,0%,20%)] transition-all duration-500 rounded-full hover:scale-102 cursor-pointer"><box-icon name='chevron-right' color='white' className="h-8 w-8"></box-icon></button>
                            </div>
                        </div>
        </>
    )
}

export default ReviewCard