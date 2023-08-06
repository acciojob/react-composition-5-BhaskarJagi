import React,{useState} from "react";

const Tabs = ({tabs}) => {

    let [selected,setSelected] = useState("")

    function display(tab){
        setSelected(tab.content)
    }

    return (
        <div>
            <ul>
                {
                    tabs.map((tab) => (
                        <li onClick={() => display(tab)}>{tab.title}</li>
                    ))
                }
            </ul>
            {
                selected &&
                <p>{selected} </p>
            }
        </div>
    )
}

export default Tabs