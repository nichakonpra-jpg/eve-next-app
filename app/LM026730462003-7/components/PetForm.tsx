"use client";
import { useEffect, useState } from "react";

export default function PetForm( {Text, Select, Radio, Textarea, Button} ){

    const [id, setId]=useState('');
    const [name, setName]=useState('');
    const [type, setType]=useState('');
    const [contact, setContact]=useState('');
    const [completed, setCompleted]=useState(false)

    useEffect(()=>{
     if(Select){
        setId(Select.title);
        setCompleted(Select.completed);
     }else{
        setId('');
        setCompleted(false);
     }
    }, [Select]);
   

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!contact.trim()) return;

        if(id){
            updateId(
                Select.id, id, completed
            )
        }else addId(id, completed);
        }
    
    return (
        <from onSubmit={handleSubmit}>
        <div className="m-3 p-6 bg-white rounded-xl shadow-md">
         <h3 className="text-lg font-semibold text-gray-900 mb-2"></h3>
        </div>
        </from>
    )
 }
   