import React, {useEffect, useState} from 'react';
import useInput from "../features/hooks/useInput";
import MessageInput from "./messageInput";

const Chat = ({socket,username,room}) => {
    const message = useInput('');
    const [messages,setMessages] = useState([]);
    const sendMessage = async () => {
        if(message.value!==""){
            const date = new Date(Date.now());
            const messageData={
                room,
                username,
                message:message.value,
                time:date.getHours()+":"+date.getMinutes(),
            };
            await socket.emit("send_message",messageData);
        }
    };
    useEffect(() => {
        socket.on("receive_message", (message) => {
            setMessages(message);
        })
        return () => {
            socket.off("receive_message");
        };
    }, [socket,room]);
    return (
        <div className="flex flex-col gap-2 items-center justify-center p-5 border border-gray-200 w-1/2 rounded shadow">
            <div>
                <strong>{room}</strong>
            </div>
            <div className="w-10/12 border border-gray-200  rounded shadow">
                <ul className='flex flex-col gap-4'>
                {
                    messages.map(({time,message,...props},i)=>{
                        return <li key={i}
                                   className={`flex ${(props.username === username)?'flex-row-reverse':'justify-start'} gap-2`}>
                            <strong  className = "self-end">
                                {props.username}
                            </strong>
                            <div className="bg-blue-900 text-amber-50 p-2 rounded">
                                {message}
                            </div>
                            <small className = "self-end ">
                                {time}
                            </small>
                        </li>
                    })
                }
                </ul>
            </div>
            <MessageInput useInput={message} onClick={sendMessage}/>
        </div>
    );
};

export default Chat;