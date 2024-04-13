import React from 'react'

const Guidedby = () => {
  return (
    <div className='container mx-auto py-8 px-4'>
        <h1 className='text-5xl font-bold text-violet-500 text-center pb-8'>Our Project Guide</h1>
        <div className='flex gap-8'>
            <img src="https://cse.kiit.ac.in/wp-content/uploads/2019/01/Mahendra-Kumar-Gourisaria.jpg" alt="" className='w-[50%] rounded-md'/>
            <div>
                <h1 className='text-3xl font-bold border-b-2 border-green-500 pb-4'>Mahendra Kumar Gourisaria</h1>
                <p className='text-[20px] text-slate-500 pt-4'>Assistant Professor,KIIT University</p>
                <p className='text-[20px] pt-2 text-justify'>Mahendra Kumar Gourisaria is presently working as an Assistant Professor in the School of Computer Engineering at KIIT University, Bhubaneswar, Odisha. He has received his Master degree in Computer Application from Indira Gandhi National Open University, New Delhi and M.Tech in Computer Science and Engineering.</p>
                <ul className='pt-2'>
                    <li className='text-[22px] text-gray-900 font-bold'>Research Interests</li>
                    <li className='text-blue-500 text-[20px]'>Cloud Computing</li>
                    <li className='text-blue-500 text-[20px]'>Soft Computing</li>
                    <li className='text-blue-500 text-[20px]'>Internet and Web Technology</li>
                </ul>
                <h1 className='pt-8 text-[22px]'>Google Scholar <a href="https://scholar.google.co.in/citations?user=ZKpQvqMAAAAJ&hl=en" target='_blank' className='text-blue-800 underline'>Click Me</a></h1>
            </div>
        </div>
    </div>
  )
}

export default Guidedby