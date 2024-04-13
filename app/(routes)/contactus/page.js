
"use client"
import React from "react";

const page = () => {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 lg:py-20 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-6 text-4xl font-extrabold text-center text-violet-500 text-7xl">
            Contact Us
          </h2>
          <p class="text-[20px] mb-12 lg:mb-20 font-light text-center text-gray-800 dark:text-gray-400">
          Experiencing technical difficulties? Have feedback to share? Need assistance with anything else? Let us know.
          </p>
          <form action="https://formspree.io/f/xkndvpzp" method="POST" class="space-y-8">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full px-4 py-3 text-sm text-gray-900 placeholder-gray-500 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:ring-offset-gray-800 dark:ring-offset-2"
                placeholder="roll@kiit.ac.in"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="text"
                class="w-full px-4 py-3 text-sm text-gray-900 placeholder-gray-500 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:ring-offset-gray-800 dark:ring-offset-2"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div>
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                name="message"
                class="w-full px-4 py-3 text-sm text-gray-900 placeholder-gray-500 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:ring-offset-gray-800 dark:ring-offset-2"
                placeholder="Leave a comment..."
              ></textarea>
            </div>

            <div className="mx-auto">
            
            <input type="submit" className="cursor-pointer bg-violet-500 hover:bg-violet-600 px-8 py-3 text-white"/>
            </div>
            

          </form>
        </div>
      </section>
    </div>
  );
};

export default page;
