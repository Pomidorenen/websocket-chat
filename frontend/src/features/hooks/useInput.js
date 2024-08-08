import {useState} from "react";

export default function useInput(init){
    const [value, setValue] = useState("");
    const onChange = (e) => {
        setValue(e.target.value);
    }
    return{value, onChange};
}