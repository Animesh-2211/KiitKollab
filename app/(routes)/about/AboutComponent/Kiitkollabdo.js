import React from 'react';

const Kiitkollabdo = () => {
  return (
    <div className='container mx-auto py-8 px-4'>
      <h1 className='text-center text-5xl font-bold mb-8'>What Actually <span className="text-violet-500">KIITKOLLAB</span> Do?</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
        <img src="https://images.unsplash.com/photo-1630659509436-7397fbda30e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="KIITKOLLAB" className="w-full md:w-1/2 rounded-lg mb-4 md:mr-4 md:mb-0 shadow-lg" />
        <div className="md:w-1/2">
          <p className="text-[20px] text-gray-800 text-justify">The KIITKOLLAB platform is dedicated to fostering vibrant communication and collaboration within KIIT University. Offering a multifaceted approach to knowledge sharing, KIITKOLLAB provides individuals with a space to write and publish blogs on a diverse array of topics, encouraging the exchange of insights and experiences among students and instructors. Additionally, our platform serves as a central hub for university events, streamlining the event registration process and enhancing student engagement. Alongside traditional blogging, KIITKOLLAB offers a Twitter-like feature, enabling users to share brief updates and knowledge snippets in real-time, fostering spontaneous discussions and interactions. With interactive features such as likes, comments, and shares, KIITKOLLAB promotes meaningful engagement and collaboration, creating a dynamic learning environment where individuals can connect, learn, and grow together.</p>
          <div className='pt-5'>
            <h1 className='text-2xl text-violet-500 font-semibold'>Our Features :</h1>
            <ul className='pt-2'>
                <li className='text-[20px] text-blue-800 text-semibold flex items-center gap-1'><div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>Community-driven Blogging</li>
                <li className='text-[20px] text-blue-800 text-semibold flex items-center gap-1'><div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>Interactive Knowledge Exchange:</li>
                <li className='text-[20px] text-blue-800 text-semibold flex items-center gap-1'><div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>Efficient Event Management</li>
            </ul>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Kiitkollabdo;
