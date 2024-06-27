import { useState } from "react"
function Addtodoform(props) {
    const list = props.list
    const setlist = props.setlist
    const [add, setadd] = useState("")
    function handleadd(e) {
        setadd(e.target.value)
    }
    function handleaddlist() {
        setlist([...list,{ id: list.length + 1, act: add }])
        setadd("")
    }
    return (
        <>
            <div className="flex flex-col gap-3">
                <h1>Manage activities</h1>
                <div>
                    <input value={add} onChange={handleadd} type="text" className="border border-black bg-transparent my-1 p-1" placeholder="next activity?"></input>
                    <button onClick={handleaddlist} className="bg-black text-white border-black p-1">Add</button>
                </div>
            </div>
        </>
    )

}
export default Addtodoform