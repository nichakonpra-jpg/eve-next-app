'use client';

import Header from "../components/header";
import Footer from "../components/footer";

import { useState } from "react";
import ToDoForm from "./components/ToDoForm";

export default function ToDoList(){

        // State Variables
    const [count, setCount] = useState(0);
    const [comp, setComp] = useState(null);

    const incCount = () => {
        setCount(count+1);
    }

    const decCount = () => {
        setCount(count-1);
    }

    let name = "Nichakon Prakong";
    let major = "DBI";
    let studentNo = "026730462003-7";
    let active = true;
    const role = "Student";

    const toDoItem = [
        {
            id: 1,
            title: "study web programming",
            completed: true
        },
        {
            id: 2,
            title: "study Business Data analysis",
            completed: true
        },
        {
            id: 3,
            title: "Dinner at home",
            completed: true
        }
    ];

    const newItems = [
        {
            id:4,
            title: "Make Web Programming clip",
            completed: false
        },
        {
            id:5,
            title: "Exercise at Chakraphong park",
            completed: false
        }
    ];
    
    const updateToDoList = [...toDoItem, ...newItems];
const [tasks, setTasks] = useState(updateToDoList);

    const isActive = (active: boolean) => {
        if (active == true) 
            return <>{role}</>;
        else
            return <>N/A</>;
    }

    const isCompleted = (c: boolean) => {
        return c ? "done" : "waiting"
    }

    const newToDoList = updateToDoList.filter(
        (item) => {
            if(comp == null)
                return item.completed == true || item.completed == false
            else 
                return item.completed == comp
        }
    ); 

    const handleDelete=(id)=> {
        const updateTasks = tasks.filter(item=>item.id != id);
        setTasks(updateTasks);
    }

    const getToDoItem = tasks.map((item) => {
        //li>{item}</li>;
        const {id, title, completed} = item;

    return (<li key={id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-sm transition-all group">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
        />
        <span className="text-sm font-medium text-gray-700">List: {id}</span>
        <span className="text-sm font-medium text-gray-700">{title}</span>
        <span className="text-sm font-medium text-gray-700">status: {isCompleted(completed)}</span>
      </div>
      <button className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      onClick={(e) => handleDelete(id)}>
        <svg xmlns="http://w3.org&quot" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </li>)
    });

    console.log("Name:", name);

    const handleCompleted = (comp) => {
        setComp(comp);
    }

    const addTask=(title, completed)=>{
        const newTask={
            id:tasks.length+1,
            title:title,
            completed:completed
        };

        setTasks([...tasks,newTask]);
    }

    return (
        <>
        <Header/>
        <div className="flex items-center justify-center mt-12">
  <div className="w-full max-w-sm bg-white border border-slate-200 rounded-2xl shadow-sm p-6 text-center">
        
    {/*<!-- Name & Title -->*/}
    <h3 className="text-xl font-bold text-slate-800 mb-5"> {name}</h3>
    <p className="text-m font-bold text-violet-600 mb-3">รหัสนักศึกษา: {studentNo}</p>
    <p className="text-m font-bold text-orange-400 mb-3">สาขาวิชา: {major}</p>
    <p className="text-m font-bold text-cyan-300 mb-3">บทบาท: {isActive(active)}</p>

  </div>
</div>

<div className="flex items-center justify-center mt-5">
<div className="text-2xl font-bold">
        {count}
    </div>
    <button onClick={incCount}
      className="px-5 py-2 bg-green-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-emerald-400 transition ms-5"
      >เพิ่มค่า</button>
    <button onClick={decCount}
    className="px-5 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-rose-400 transition ms-5"
      >ลดค่า</button>
</div>

        <ToDoForm addTask={addTask} />

<div className="flex items-center justify-center mt-5">
<div className="text-2xl font-bold">
<div className="text-white bg-gray-950 box-border border border-transparent hover:bg-dark-strong focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none ms-3">
        {tasks.length}
</div>
</div>

<div>
        <button onClick={() => handleCompleted(null)}className=
        "text-white bg-gray-950 box-border border border-transparent hover:bg-dark-strong focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none ms-3"
            >all</button>
        <button onClick={() => handleCompleted(true)}className=
        "text-white bg-gray-950 box-border border border-transparent hover:bg-dark-strong focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none ms-3"
            >done</button>
        <button onClick={() => handleCompleted(false)}className=
        "text-white bg-gray-950 box-border border border-transparent hover:bg-dark-strong focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none ms-3"
            >waiting</button>
</div>

</div>
       {/*  <p>ชื่อ-สกุล: {name}</p>
         <p>รหัสนักศึกษา: {studentNo}</p>
         <p>สาขาวิชา: {major}</p>
         <p>สถานภาพศึกษา: {isActive(active)}</p>
        {/*<p>บทบาท: {role}</p>*/}
        <h1 className="text-xl font-bold pl-5 pr-5 m-3 text-slate-800"> รายการที่ต้องทำ</h1>
        <ul className="List-disc pl-5 pr-5 space-y-3 text-slate-800">
            {getToDoItem}
        </ul>
        <Footer/>
        </>
    );
}