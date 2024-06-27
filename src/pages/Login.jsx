import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props) {
    const [euname,seuname]=useState("")
    const [epw,sepw]=useState("")
    const [ruser,setruser]=useState(true)
    const users=props.users
    const setusers=props.setusers
    const navigate=useNavigate()
    
    function handlesetuname(e)
    {
        seuname(e.target.value)
        
    }
    function handlepw(ev)
    {
        sepw(ev.target.value)
    }
    function checkuser()
    {
        var userfound= false
        users.forEach(function(item){
          
            if(item.username == euname && item.pw ==  epw)
                {
                    console.log("Login successful")
                    userfound=true
                    navigate("/Landing",{state:{user:euname}})
                }
               
        })
        if(userfound==false)
            {console.log("login failed")
                setruser(false)
            }

    }
    return (
        <>
            <div className="bg-black p-10">
                <div className="bg-[#EFEFEF] p-10 border rounded-md">
                    <h1 className="text-3xl font-medium">Hey hi</h1>
                    {ruser?<p className="">I help you manage your activities after you login:)</p>:<p className="text-red-500">please signup before login</p>}
                    <div className="flex flex-col gap-2 my-2">
                        <input type="text" value={euname} onChange={handlesetuname} className="w-52 border-black p-1 bg-tranparent border rounded-md " placeholder="username"></input>
                        <input type="text" value={epw} onChange={handlepw} className="w-52 border-black p-1 bg-tranparent border rounded-md " placeholder="password"></input>
                        <button className="bg-[#8272DA] w-24 p-1 border rounded-md" onClick={checkuser}>Login</button>
                        <p>Dont have an account?<Link to={"/Signup"} className="underline"> Signup</Link></p>

                    </div>

                </div>
            </div>

        </>
    )
}
export default Login