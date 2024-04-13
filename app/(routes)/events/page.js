import React from 'react';
import events from '@/public/eventData';
import { Link } from 'lucide-react';

const EventPage = () => {
  return (
    <>
      <div className='px-4 py-8'>
        <h1 className='text-7xl font-bold mb-8 text-violet-500'>Events</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((item, index) => (
            <div key={index} className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark hover:shadow-md duration-300 md:shadow-sm">
              <div className="relative overflow-hidden bg-cover bg-no-repeat" data-twe-ripple-init data-twe-ripple-color="light">
                <img className="rounded-t-lg w-full object-cover h-[400px]" src={item.eventImage} alt="eventimage" />
                <a href={item.eventRegistration} target="_blank">
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
              </div>
              <div className=" pt-5 text-surface dark:text-white pl-2 pb-5 pr-2">
                <h5 className="mb-2 text-[30px] font-medium leading-tight text-blue-500">{item.eventName}</h5>
                <p className="mb-2 text-[19px]">{item.eventDescription}</p>
                <p className='mb-2 text-[19px]'>Event Date : {item.eventDate}</p>
                {item.registrationStatus === "Open" ? (
                  <div className="flex items-center text-green-500 mb-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <p className="text-[19px]">Registration Open</p>
                  </div>
                ) : (
                  <div className="flex items-center text-gray-500 mb-2">
                    <div className="w-3 h-3 rounded-full bg-gray-500 mr-2"></div>
                    <p className="text-[19px]">Registration Closed</p>
                  </div>
                )}
                <a href={item.eventRegistration} target='_blank' className='cursor-pointer'>
                  <h1 className='bg-slate-700 hover:bg-slate-800 text-center text-white py-3'>Apply Here</h1>
                </a>
              </div>
            </div>
          )).reverse()}
        </section>
      </div>
    </>
  );
}

export default EventPage;
