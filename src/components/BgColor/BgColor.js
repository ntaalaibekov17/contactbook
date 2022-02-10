import React, {useState} from 'react';
import Select from "react-select";

const BgColor = () => {
    let [bgColor,setBgColor] = useState("gray")

    let bgHandler = (event)=>{
        console.log(event)
        setBgColor(event.label)
    }

    let colors = [
        {value:1, label:"blue"},
        {value:2, label:"pink"},
        {value:3, label:"teal"},
        {value:4, label:"purple"}
    ]
    return (
        <div>
            <style>{'body {background-color:' + bgColor + '; }'}</style>
            <Select options = {colors} onChange={bgHandler}/>
        </div>
    );
};

export default BgColor;