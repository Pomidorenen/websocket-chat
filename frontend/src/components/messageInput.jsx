import React from 'react';

const MessageInput = ({useInput,onClick}) => {
    return (
        <div className={'flex gap-2 justify-around'}>
            <input {...useInput} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={(e) => {
                        onClick(e);
                    }}>
                push
            </button>
        </div>
    );
};

export default MessageInput;