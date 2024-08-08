import React from 'react';
import TextField from "./textField";

const JoinForm = ({useInputs,onClick}) => {
    return (
        <div className="flex flex-col items-center justify-center p-5 border border-gray-200 w-1/4 rounded shadow">
            {
                useInputs.map(({useInput,placeholder},i)=>
                    <TextField key={i} useInput={useInput} placeholder={placeholder}/>)
            }
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={(e) => {
                        onClick(e);
                    }}>
                join
            </button>
        </div>
    );
};

export default JoinForm;