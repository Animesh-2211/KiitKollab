"use client"

import React, { useState } from "react";
import teacherInfo from "../../../public/teacher.js";
import Link from "next/link.js";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filtered teacher info based on search query
  const filteredTeacherInfo = teacherInfo.filter((teacher) => { 
    // Filter by name
    const nameMatch = teacher.name.toLowerCase().includes(searchQuery.toLowerCase());
    // Filter by domain
    const domainMatch = teacher.AreaOfInterest.some(
      (domain) => domain.toLowerCase() === searchQuery.toLowerCase()
    );
    return nameMatch || domainMatch;
  });

  return (
    <div className="px-4 py-8">
      <h1 className="text-7xl font-bold mb-8 text-violet-500 text-center">
        Teacher's Info
      </h1>
      {/* Search input field */}
      <div className="flex justify-center gap-5">
      {/* <label for="searchbyname" className="text-[25px]">Search </label> */}
      <input
        type="text"
        placeholder="Search by name"
        className="text-[18px] px-4 py-2 mb-7 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      </div>
      
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeacherInfo.map((item, index) => (
          <div
            key={index}
            className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark hover:shadow-md duration-300 md:shadow-sm"
          >
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              <img
                className="rounded-t-lg w-full object-contain h-[200px]"
                src={item.imageOfTeacher}
                alt="eventimage"
              />
            </div>
            <div className="flex justify-between pt-5 text-surface pl-2 pb-2 pr-2">
              <h5 className="mb-2 text-[23px] font-medium leading-tight text-blue-500">
                {item.name}
              </h5>
              <div className="pt-1 text-surface pl-2 pb-5 pr-2">
  <a href={`mailto:${item.email}`}>
    <h5 className="mb-2 text-[23px] font-medium leading-tight text-blue-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    </h5>
  </a>
</div>

            </div>
            <div className="pt-1 text-surface pl-2 pb-5 pr-2">
              {item.AreaOfInterest.map((interest, i) => (
                <div
                  key={i} 
                  className="border-2 border-green-500 rounded-md p-1 mb-2 mx-2 inline-block"
                >
                  <h1 className="text-[14px] font-light">{interest}</h1>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Page;
