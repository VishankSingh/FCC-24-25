import warikoo1 from '@/assets/images/events/EventArchive/warikoo1.jpg';
import warikoo2 from '@/assets/images/events/EventArchive/warikoo2.png';
import velumani1 from '@/assets/images/events/EventArchive/velumani1.jpg';
import velumani2 from '@/assets/images/events/EventArchive/velumani2.jpg';
import MBAS from '@/assets/images/events/EventArchive/MBAS.jpg';
import MBAS2 from '@/assets/images/events/EventArchive/MBAS2.jpg';
import breakingBrands from '@/assets/images/events/EventArchive/breakingBrands.jpg';
import MDD from '@/assets/images/events/EventArchive/MDD.jpg';

import h_24_1 from '@/assets/images/events/horizon_24/1.png';
import h_24_2 from '@/assets/images/events/horizon_24/2.png';
import h_24_3 from '@/assets/images/events/horizon_24/3.png';
import h_24_4 from '@/assets/images/events/horizon_24/4.png';
import h_24_5 from '@/assets/images/events/horizon_24/5.png';

import arjun from '@/assets/images/events/horizon_24/arjun_inv.png';
import aswini from '@/assets/images/events/horizon_24/aswini_inv.png';
import maria from '@/assets/images/events/horizon_24/maria_inv.png';
import mohit from '@/assets/images/events/horizon_24/mohit_inv.png';
import pratik from '@/assets/images/events/horizon_24/pratik_inv.png';

import h_23_1 from '@/assets/images/events/horizon_23/1.png';
import h_23_2 from '@/assets/images/events/horizon_23/2.png';
import h_23_3 from '@/assets/images/events/horizon_23/3.png';
import h_23_4 from '@/assets/images/events/horizon_23/4.png';
import h_23_5 from '@/assets/images/events/horizon_23/5.png';
import h_23_6 from '@/assets/images/events/horizon_23/6.png';

import ws_1 from '@/assets/images/events/elevate-1/1.jpg';
import ws_2 from '@/assets/images/events/elevate-1/2.jpg';
import ws_3 from '@/assets/images/events/elevate-1/3.jpg';
import ws_4 from '@/assets/images/events/elevate-1/4.jpg';

import img5 from '@/assets/images/events/EventArchive/img5.jpg';


const eventsData = {
  2025: {
    title: 'Events 2025',
    events: [
      {
        id: 'first-speaker',
        name: 'Horizon 2025',
        about: 'We lit up the stage with power-packed fireside chats featuring Ankur Warikoo, Dr. A. Velumani, and Pranjal Kamra, alongside a growing league of incredible sponsors. From MBA and finance deep-dives to high-energy games, pronites, and surprise events — this edition had it all. Horizon 2025 wasn’t just bigger, it was unforgettable!!',
        gallery: [warikoo1, warikoo2, velumani1, velumani2, MBAS, MBAS2,breakingBrands, MDD],
        videoUrl: img5,
      },
      {
        id: 'workshop-1',
        name: 'Elevate Workshop-1',
        about: 'The FCC Elevate Workshop-1 was held on 11th and 12th October 2025. The Consulting & Product Management Bootcamp and the Inside Finance: Theory, Practice & AI Insights workshops provided practical insights into business strategy, financial decision-making, and the role of technology in modern leadership.',
        gallery: [ws_1, ws_2, ws_4, ws_3],
        testimonials: [
    { id: 1, name: 'Satyapal', rating: 5, text: 'Absolutely fantastic work by all the coordinators and heads. They made the session worth our while.' },
    { id: 2, name: 'Harshith', rating: 4, text: 'interactive hands on session, fun and active learning, clear communication and fun teaching' },
    { id: 3, name: 'Aadarsh ', rating: 5, text: 'Day 1 was full of numbers and day 2 was full of fun and brainstorming\t\t' },
  ]
      },
      // ... rest of events
    ],
  },
  2024: {
    title: 'Events 2024',
    events: [
      {
        id: 'first-speaker',
        name: 'Horizon 2024',
        about: 'We pushed boundaries with the intense ProdX case study competition, strategic M&A challenges, and the ultimate Trade Quests — all backed by attractive cash prizes. Industry leaders like Abhishek Kar, Arjun Beri, and Ashwini Bajaj inspired us, alongside renowned companies proudly sponsoring the event. Horizon 2024 took everything to the next level, raising the bar like never before.',
        gallery: [arjun , aswini, maria, mohit, pratik , h_24_1, h_24_2, h_24_3, h_24_4, h_24_5],
        // videoUrl: h_24_1,

      },
      // ... rest of events
    ],
  },
  2023: {
    title: 'Events 2023',
    events: [
      {
        id: 'first-speaker',
        name: 'Horizon 2023',
        about: 'We ignited innovation with thrilling cash prize challenges, game-changing collaborations, and fierce equity competitions. Visionary leaders like Rishabh Jain, Akhil Sharma, Subba Perepa, and Gaurav Mahindra delivered powerful insights, while our seniors offered priceless mentorship. Horizon 2023 wasn’t just an event — it was an unforgettable movement.',
        gallery: [h_23_1, h_23_2, h_23_3, h_23_4, h_23_5],
        // videoUrl: img5,
      },
      // ... rest of events
    ],
  },

  // rest of years
};

export default eventsData;
