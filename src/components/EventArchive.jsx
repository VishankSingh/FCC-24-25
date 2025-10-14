import React, { useState, useEffect, useRef } from 'react'; 
import eventsData from '../assets/data/events/eventsData';

const years = [ 2023, 2024, 2025];

const PlayIcon = () => (
  <svg className="w-16 h-16 text-white opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.048A1.125 1.125 0 019 15.118V8.882c0-.877.921-1.4 1.671-.983l5.603 3.048z" clipRule="evenodd" />
  </svg>
);

// Star Icon for the rating
const StarIcon = ({ filled }) => (
  <svg className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-600'}`} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

//  Star Rating Component
const StarRating = ({ rating }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} filled={i < rating} />
    ))}
  </div>
);

// Testimonial Card Component
const TestimonialCard = ({ name, rating, text, innerRef }) => (
  <div 
    ref={innerRef} 
    className="relative flex-shrink-0 w-80 min-h-[14rem] bg-[#2a2b33] p-6 rounded-lg shadow-lg flex flex-col h-full"
  >
    <div className="absolute top-4 right-4">
      <StarRating rating={rating} />
    </div>
    <div className="flex-grow mt-8">
      <p className="text-gray-300 italic">"{text}"</p>
    </div>
    <div className="mt-4 pt-4 border-t border-gray-700">
      <p className="text-right font-bold text-white">- {name}</p>
    </div>
  </div>
);

const EventArchive = () =>{
  const [selectedYear, setSelectedYear] = useState(2025);
  const [selectedEventId, setSelectedEventId] = useState(eventsData[2025].events[0].id);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const carouselTrackRef = useRef(null);
  const itemRef = useRef(null);

  const handleYearChange = (year) => {
    setSelectedYear(year);
    // When year changes, select the first event of that year
    if (eventsData[year] && eventsData[year].events.length > 0) {
      setSelectedEventId(eventsData[year].events[0].id);
    } else {
      setSelectedEventId(null);
    }
  };

  const activeEventData = eventsData[selectedYear]?.events.find(e => e.id === selectedEventId);
  
  const testimonials = activeEventData?.testimonials || [];
  const duplicatedTestimonials = testimonials.length > 0 ? [...testimonials, ...testimonials, ...testimonials] : [];

  // Effect to calculate the width of a single item + gap
  useEffect(() => {
    const calculateItemWidth = () => {
      if (itemRef.current && carouselTrackRef.current) {
        const itemElement = itemRef.current;
        const trackStyle = window.getComputedStyle(carouselTrackRef.current);
        const gap = parseFloat(trackStyle.getPropertyValue('column-gap')) || 0;
        const totalWidth = itemElement.offsetWidth + gap;
        setItemWidth(totalWidth);

        // Set initial position to the start of the second block for a seamless start
        if (currentIndex === 0 && testimonials.length > 0) {
            setCurrentIndex(testimonials.length);
        }
      }
    };

    calculateItemWidth();
    window.addEventListener('resize', calculateItemWidth);
    return () => window.removeEventListener('resize', calculateItemWidth);
  }, [testimonials.length]); // Recalculate if the number of testimonials changes


  // Effect for auto-sliding interval
  useEffect(() => {
    if (testimonials.length === 0 || itemWidth === 0) return;

    const slideInterval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= testimonials.length * 2) {
          // Jump back to the start of the second set without transition
          if (carouselTrackRef.current) {
            carouselTrackRef.current.style.transition = 'none';
          }
          return testimonials.length;
        }
        return nextIndex;
      });
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, [testimonials.length, itemWidth]); // Restart interval if data changes

  // Effect to apply the transform and manage the smooth transition
  useEffect(() => {
    if (carouselTrackRef.current && itemWidth > 0) {
        // After a jump (transition is 'none'), re-enable it smoothly
        if (carouselTrackRef.current.style.transition === 'none') {
            setTimeout(() => {
                if(carouselTrackRef.current) {
                    carouselTrackRef.current.style.transition = 'transform 0.5s ease-in-out';
                    carouselTrackRef.current.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
                }
            }, 50);
        } else {
            carouselTrackRef.current.style.transition = 'transform 0.5s ease-in-out';
            carouselTrackRef.current.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }
    }
  }, [currentIndex, itemWidth]);
  
  return (
    <div className="min-h-screen p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-5xl sm:text-5xl font-schibsted font-bold bg-gradient-to-r from-[#4E56D3] via-[#A3ACD9] to-[#F3FFD8] bg-clip-text text-transparent overflow-hidden mb-5">
            Full Event Archive
            </h1>
          <p className="text-gray-400 font-outfit text-2xl mt-2">Every milestone, every session, every moment that built our community.</p>
        </header>

        {/* Year Navigation */}
        <nav className="flex justify-center mb-10 ">
          <div className="bg-[#292929] p-1 rounded-lg flex space-x-1 max-w-[100%]">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                className={`px-16 sm:px-6 py-3 text-sm font-medium rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                  selectedYear === year
                    ? 'bg-[#4a55ff] font-schibsted text-lg text-[#EBEBEB] shadow-md '
                    : 'font-schibsted text-lg text-[#EBEBEB] hover:bg-gray-700'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex flex-col md:flex-row gap-8">
          
          {/* Left Sidebar: Event List */}
          <aside className="w-full md:w-1/4 lg:w-1/5 flex-shrink-0">
            <h2 className="text-2xl font-schibsted font-bold bg-gradient-to-r from-[#97DD01] to-[#F3FFD8] bg-clip-text text-transparent mb-4">{eventsData[selectedYear]?.title || `Events ${selectedYear}`}</h2>
            <ul className="space-y-2">
              {eventsData[selectedYear]?.events.map((event) => (
                <li key={event.id}>
                  <button
                    onClick={() => setSelectedEventId(event.id)}
                    className={`w-full font-outfit text-[18px] text-left px-4 py-2.5 text-sm rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
                      selectedEventId === event.id
                        ? 'bg-[#4a55ff] text-[#EBEBEB] '
                        : 'hover:bg-[#2a2b33] text-[#EBEBEB]'
                    }`}
                  >
                    {event.name}
                  </button>
                </li>
              ))}
               {!eventsData[selectedYear]?.events.length && (
                <p className="text-gray-500 italic px-4">No events recorded for this year.</p>
              )}
            </ul>
          </aside>

          {/* Right Panel: Event Details */}
          <section className="w-full md:w-3/4 lg:w-4/5 bg-[#18191f] p-6 sm:p-8 rounded-xl">
            {activeEventData ? (
              <div className="space-y-10">
                {/* About Section */}
                <div>
                  <h3 className="text-2xl font-schibsted font-bold text-[#EBEBEB] mb-3">About</h3>
                  <p className="text-[#BBBBBB] leading-relaxed">
                    {activeEventData.about}
                  </p>
                </div>

                {/* Event Gallery */}
                {activeEventData.gallery && activeEventData.gallery.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold font-schibsted text-[#EBEBEB] mb-4">Event Gallery</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                      {activeEventData.gallery.map((imgSrc, index) => (
                        <img
                          key={index}
                          src={imgSrc}
                          alt={`Event gallery image ${index + 1}`}
                          className="rounded-lg w-full h-full object-cover aspect-video hover:scale-105 transition-transform duration-300"
                          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/ff0000/ffffff?text=Error'; }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Recap Video */}
                {activeEventData.videoUrl && (
                    <div>
                        <h3 className="text-2xl font-schibsted font-bold text-white mb-4">Recap Video</h3>
                        <a href="#" className="block relative group">
                             <img 
                                src={activeEventData.videoUrl} 
                                alt="Recap video thumbnail" 
                                className="rounded-lg w-full object-cover aspect-video"
                                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/1280x720/ff0000/ffffff?text=Error'; }}
                             />
                             <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg transition-opacity duration-300 group-hover:bg-opacity-20">
                                 <PlayIcon />
                             </div>
                        </a>
                    </div>
                )}
                  {testimonials.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-schibsted font-bold text-[#EBEBEB] mb-4">What Our Attendees Say</h3>
                    <div className="relative w-full overflow-hidden">
                      <div
                        ref={carouselTrackRef}
                        className="flex gap-x-4" // Use gap for spacing
                      >
                        {duplicatedTestimonials.map((testimonial, index) => (
                          <TestimonialCard
                            key={`${testimonial.id}-${index}`}
                            name={testimonial.name}
                            rating={testimonial.rating}
                            text={testimonial.text}
                            innerRef={index === 0 ? itemRef : null} // Attach ref to the first item for measurement
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500 text-lg">Select an event to see details.</p>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default EventArchive