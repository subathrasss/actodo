import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(props) {
    const navigate=useNavigate()
    const users=props.users
    const setusers=props.setusers
    const [euname,seuname]=useState("")
    const [epw,sepw]=useState("")
    function handlesetuname(e)
    {
        seuname(e.target.value)
        
    }
    function handlepw(ev)
    {
        sepw(ev.target.value)
    }
    function adduser()
    {
        setusers([...users,{username:euname,pw:epw}])
        navigate("/")
    }
    return (
        <>
            <div className="bg-black p-10">
                <div className="bg-[#EFEFEF] p-10 border rounded-md">
                    <h1 className="text-3xl font-medium">Hey hi</h1>
                    <p className="">Sign up here</p>
                    <div className="flex flex-col gap-2 my-2">
                      <input value={euname} onChange={handlesetuname} type="text" className="w-52 border-black p-1 bg-tranparent border rounded-md " placeholder="username"></input>
                      <input value={epw} onChange={handlepw} type="text" className="w-52 border-black p-1 bg-tranparent border rounded-md " placeholder="password"></input>
                      <input type="text" className="w-52 border-black p-1 bg-tranparent border rounded-md " placeholder="confirm password"></input>
                      <button className="bg-[#FCA201] w-24 p-1 border rounded-md" onClick={adduser}>SignUp</button>
                      <p>Already have an account? <Link to={"/"} className="underline"> Login</Link></p>

                    </div>

                </div>
            </div>
        </>
    )
}
export default Signup