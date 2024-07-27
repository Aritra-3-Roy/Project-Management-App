import React from "react";
import InputField from "./InputField";
import User from "../model/User";

const NewProject: React.FC = () => {

    const [setTitle,changeTitle] = React.useState("");
    const [setDescription,changeDescription] = React.useState("");
    const [setDueDate,changeDueDate] = React.useState("");

    const handleOnChange=(val:any,field:string)=> {
        console.log("val from parent",val)

        switch(field){

            case "title": changeTitle(val);
            break;
            case "description": changeDescription(val);
            break;
            case "dueDate": changeDueDate(val);
            break;
        }
        
    }

    const handleSave = (e:React.MouseEvent<HTMLButtonElement>)=> {

        e.preventDefault();

        let user:User = {
            title: setTitle,
            description: setDescription,
            dueDate: setDueDate,
        }
        console.log(user);

        changeTitle("");
        changeDescription("");
        changeDueDate("");

        console.log(setTitle);
        console.log(setDescription);
        console.log(setDueDate);

    }
    const handleClear = (e:React.MouseEvent<HTMLButtonElement>)=>{

        e.preventDefault();
        changeTitle("");
        changeDescription("");
        changeDueDate("");
    }

    return(
        <div className="w-2/5 mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className="text-stone-800 hover:text-stone-950" onClick={(e:any)=>handleClear(e)}>Cancel</button></li>
            <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={(e:any)=>handleSave(e)}>Save</button></li>
        </menu>
        <div>
            <InputField label="Title" textarea={false} onChangeInput={(value:any,label:string)=>handleOnChange(value,"title")}/>
            <InputField label="Description" textarea={true} onChangeInput={(value:any,label:string)=>handleOnChange(value,"description")}/>
            <InputField label="Due Date" textarea={false} onChangeInput={(value:any,label:string)=>handleOnChange(value,"dueDate")}/>
        </div>
        
        </div>
    );
}

export default NewProject;