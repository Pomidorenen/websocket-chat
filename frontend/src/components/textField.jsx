import React,{useId} from 'react';
const TextField = ({useInput,placeholder}) => {
    const inputId = useId();
    return (
        <div className="p-2">
            <label htmlFor={inputId} className="block text-gray-700 text-sm font-bold mb-2">
                {placeholder}</label>
            <div className="lb">
                <input id={inputId} name={inputId} type="text" placeholder={placeholder} {...useInput}
                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            </div>
        </div>
    );
};

export default TextField;