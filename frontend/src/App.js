import Chat from "./components/chat";
import useInput from "./features/hooks/useInput";
import JoinForm from "./components/joinForm";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080");

function App() {
    const user = useInput("");
    const room = useInput("");
    const joinRoom = ()=>{
        if(user.value!=="" && room.value!==""){
            socket.emit("join_room",room.value);
        }
    }
    const inputJoinForm =[
        {
            placeholder: "Username",
            useInput:user
        },
        {
            placeholder: "Room id",
            useInput:room
        }
    ];
  return (
    <div className="flex flex-col gap-1 justify-center items-center w-full p-2">
        <JoinForm useInputs={inputJoinForm} onClick={(e)=>{joinRoom()}}/>
        <Chat socket={socket} username={user.value} room={room.value}/>
    </div>
  );
}

export default App;
