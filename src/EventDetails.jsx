import eventsJson from './Events.json'

const EventDetails = ({ className, event }) => {

    if (!event) return null

    return (
    <div className={className}>
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-64 object-cover rounded-xl shadow-md mb-6"
      />

      <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
      <p className="text-lg mb-1">{event.date} • {event.time}</p>
      <p className="text-md text-gray-400 mb-4">{event.location}</p>

      <p className="text-base leading-relaxed mb-6">{event.description}</p>

      <div className="flex gap-4">
        <button className="px-6 py-2 rounded-full bg-orange-500 hover:bg-orange-600 transition duration-500 cursor-pointer">
          Register Now
        </button>
        <button className="px-6 py-2 rounded-full border-1 hover:bg-white hover:text-black transition duration-500 cursor-pointer">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default EventDetails
