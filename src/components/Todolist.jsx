
import React, { useState } from "react";
import Todoitem from "./Todoitem.js";
function Todolist(props) {
    
    const list= props.list
    const setlist= props.setlist
    return (
        <>
            <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
                <h1 className="text-2xl font-medium">today's activity</h1>
                {list.length===0?"you havent added anything":""}
                {
                    list.map(function (item,index) {
                        return <Todoitem id={item.id}act={item.act} index={index} list={list} setlist={setlist}/>
                    })
                }
            </div>

        </>
    )
}
export default Todolist