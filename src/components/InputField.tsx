import React from "react";
import IInputfieldProps from "../model/IInputfieldProps";

const InputField: React.FC<IInputfieldProps> = (props:IInputfieldProps) => {
    const handleChange = (e:any) => {
        props.onChangeInput(e.target.value, props.label);
    };

    return (
        <div className="my-4">
            <label className="block text-sm font-semibold text-gray-700">{props.label}</label>
            {props.textarea ? (
                <textarea
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(e)=>handleChange(e)}
                />
            ) : (
                <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(e)=>handleChange(e)}
                />
            )}
        </div>
    );
};

export default InputField;

