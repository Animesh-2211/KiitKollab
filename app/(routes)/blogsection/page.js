// pages/blog.js
"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://backend-major.vercel.app/api/portal/get');
        const jsonData = await response.json();
        setBlogs(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-7xl font-bold mb-8 text-violet-500">Coding Articles</h1>
      {blogs.map((blog, index) => (
        <div className="bg-white rounded-lg shadow-md mb-8 p-6" key={index}>
          <h2 className="text-4xl font-medium mb-4">{blog.Topic}</h2>
          <p className="text-gray-600 mb-2 text-[18px]">
            <span className="font-semibold">Author:</span> {blog.Author}
          </p>
          <p className="text-gray-600 mb-2 text-[18px]">
            <span className="font-semibold">Posted Date:</span> {blog.PostedDate}
          </p>
          <p className="text-gray-700 mb-4 text-[22px]">{blog.Description}</p>
          {/* Ensure 'blog.urlLink' exists before rendering the Link */}
          {blog.urlLink && (
            <Link href={blog.urlLink} target='_blank'>
              <a className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Read More
                </span>
              </a>
            </Link>
          )}
        </div>
      )).reverse()}
    </div>
  );
};

export default Blog;
