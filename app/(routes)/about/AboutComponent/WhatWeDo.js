import React from 'react';

const WhatWeDo = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
        <span className="text-violet-500">KIITBUZZ</span> Is A Leading Social Media Platform.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
        <div className="text-center hover:shadow-lg shadow-md py-4">
          <img src="https://png.pngtree.com/png-vector/20220811/ourmid/pngtree-businessman-hand-shaking-for-the-collaboration-png-image_6104218.png" alt="Collaboration" className="mx-auto mb-4 w-24 h-24" />
          <h2 className="text-[24px] font-semibold mb-2 text-violet-500">Collaboration</h2>
          <p className="text-gray-600">Empower KIIT University students and teachers to share their insights and experiences through KiitKollab platform.</p>
        </div>
        <div className="text-center hover:shadow-lg shadow-md py-4">
          <img src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-blogging_516790-1495.jpg" alt="Innovation" className="mx-auto mb-4 w-24 h-24" />
          <h2 className="text-[24px] font-semibold mb-2 text-violet-500">Blog</h2>
          <p className="text-gray-600">Explore diverse topics and share expertise through personalized blogs on our platform.</p>
        </div>
        <div className="text-center hover:shadow-lg shadow-md py-4">
          <img src="https://img.freepik.com/premium-vector/events-big-text-online-corporate-party-meeting-friends-colleagues-video-conference_501813-9.jpg" alt="Engagement" className="mx-auto mb-4 w-24 h-24" />
          <h2 className="text-[24px] font-semibold mb-2 text-violet-500">Events</h2>
          <p className="text-gray-600">Stay informed and register effortlessly for upcoming university events through our comprehensive events section</p>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
