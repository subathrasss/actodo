import React,{useState} from "react"
import Addtodoform from "./Addtodoform"
import Todolist from "./Todolist"
function Todocontainer() {
    const [list, setlist] = useState([{ id: 1, act: "wakeup at 6" }, { id: 2, act: "walk for 15 min" }])
    return (
        <>
            <div className="flex gap-5 flex-wrap">
                {/* add todo form */}
                <Addtodoform list={list} setlist={setlist}/>
                {/* todo list */}
                <Todolist list={list} setlist={setlist} />
            </div>
        </>
    )
}
export default Todocontainer
