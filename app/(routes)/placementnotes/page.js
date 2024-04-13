import React from 'react';

const subjectData = [
  {
    name: "SQL Interview Question",
    url: "/SQLInterviewQst.pdf",
    subPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP6GjI814dHHYTmQN_27Mc5XjGNphMSbvsggwVyssZ1A&s"
  },
  {
    name:"Common Interview Questions & Answers",
    url:"/50 Common Interview Questions & Answers.pdf",
    subPhoto:"https://m.media-amazon.com/images/I/5174cfU4qxL.jpg"
    },
    {
    name:"Java Interview Questions",
    url:"/Basic Java Interview Questions.pdf",
    subPhoto:"https://m.media-amazon.com/images/I/51ji3Q09P7L._AC_UF1000,1000_QL80_.jpg"
    },
    {
    name:"Sorting Algorithms",
    url:"/SORTING Algorithms.pdf",
    subPhoto:"https://m.media-amazon.com/images/I/41edCm6P4NL.jpg"
    },
    {
    name:"C++ Cheatsheets",
    url:"/C++ Cheatsheet.pdf",
    subPhoto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbU3g0NSwM4o21jRntfHGEOhCGwSA0kxET9znwvJplXg&s"
    },
    {
    name:"Data Analyst Interview Questions",
    url:"/Data Analyst Interview Questions.pdf",
    subPhoto:"https://m.media-amazon.com/images/I/61e-kod4GCL._AC_UF1000,1000_QL80_.jpg"
    },
    {
    name:"Data Structure Interview Questions",
    url:"/Data Structure Interview.pdf",
    subPhoto:"https://m.media-amazon.com/images/I/61MGuCfm4ML._AC_UF1000,1000_QL80_.jpg"
    },
    {
    name:"DBMS Interview Questions",
    url:"/DBMS Short Full Notes.pdf",
    subPhoto:"https://m.media-amazon.com/images/I/51U7wP67-rL.jpg"
    },
    {
    name:"Python Notes",
    url:"/Python Handwritten Notes.pdf",
    subPhoto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXTRZpizyTt3DKkyhRRP18Nt3s2rSf1iTWH8AzrbtdDA&s"
    },
    {
    name:"Computer Network Notes",
    url:"/Computer Network Handwritten Notes.pdf",
    subPhoto:"https://m.media-amazon.com/images/I/41cDGrTDOcL.jpg"
    },
    {
    name:"Machine Learning Notes-Standford",
    url:"/Stanford University (ML).pdf",
    subPhoto:"https://braincube.com/wp-content/uploads/2020/12/icon-lightbulb-gear-dot.png"
    },
    {
    name:"Sql Interview Questions-800",
    url:"/800+ SQL Server Interview Questions and Answers -Copy.pdf",
    subPhoto:"https://icons-for-free.com/iff/png/256/logo+my+query+server+sql+icon-1320184811372606623.png"
    },
    {
    name:" Excel Shortcuts",
    url:"/SHORTCUTS in Excel 📈.pdf",
    subPhoto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKNGlteee3Q36ntUixl6MGhyRmqSuT9gsRQ&s"
    },
    
    {
    name:"Cloud Computing",
    url:"/Cloud Computing Cheatsheet.pdf",
    subPhoto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPn3TISDSxnsEg5UoyDCjelAw_LrbLkYnfATcgBkT7ZA&s"
    },
    
    {
    name:"Operating System",
    url:"/Handwritten Operating System Notes 📜.pdf",
    subPhoto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmkqL2i71gMnHXoEUcgl4xo02SyGl_V5Pc2g&s"
    },
    
    {
    name:"Rest API Notes",
    url:"/Rest API .pdf",
    subPhoto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYkJ_Q7zFtJ4lqeuDn-dykfrt_ggmSlX7SuQ&s"
    },
    
    {
    name:"Oop Using C+++",
    url:"/Oops Using C++.pdf",
    subPhoto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqvxNJWhTLHi0bfA9pTeDpgObILygDb9mmCg&s"
    },
    
    {
    name:"HTML Notes",
    url:"/Complete HTML Notes.pdf",
    subPhoto:"https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"
    },
    
    {
    name:"System Design",
    url:"/System Design Basics Handbook (1).pdf",
    subPhoto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhCdDlpXevseeE0KeP6KriSJ6QEzIPTzKBw&s"
    },
    
    {
    name:"Finance InterView Questions",
    url:"/FINANCE INTERVIEW QUESTIONS-.pdf",
    subPhoto:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo7ANHBMPwW3i2hsclF4peuRYrDljmXYZaMg&s"
    },
];

const Page = () => {
  return (
    <div className="px-4 py-8">
      <h1 className="text-7xl font-bold mb-8 text-violet-500 text-center">
        Placement Materials
      </h1>
      
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-5">
        {subjectData.map((item, index) => (
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
                src={item.subPhoto}
                alt="eventimage"
              />
            </div>
            <div className="flex justify-between pt-5 text-surface pl-2 pb-2 pr-2">
            <h5 className="mb-2 text-[23px] font-medium leading-tight text-blue-500">
  {item.name.length > 20 ? `${item.name.substring(0, 20)}...` : item.name}
</h5>

            </div>
            <a href={item.url} target="_blank" className="block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-sm text-center ">Open</a>

          </div>
        ))}
      </section>
    </div>
  );
};

export default Page;
