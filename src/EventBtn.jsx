
const EventCard = ({ onClick, className }) => {

    return(
        <>
            <div className={className}>
                <button onClick={onClick} className="h-20 w-20 flex items-center justify-center rounded-full absolute top-4 left-60 bg-white hover:bg-[hsl(0,0%,80%)] hover:scale-105 transition-all duration-500 cursor-pointer">
                    <box-icon name='chevron-left' color="black" className="h-12 w-12" ></box-icon>
                </button>
            </div>
        </>
    )
}

export default EventCard