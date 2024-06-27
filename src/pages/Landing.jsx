
import { useLocation } from "react-router-dom"
import '../App.css';
import Header from '../components/Header';
import Todocontainer from '../components/Todocontainer.jsx';
import Card from '../components/Card.jsx';
function Landing() {
    const data=useLocation()
  return (
    <>
      <div className=' bg-black p-10'>
        <div className='bg-[#efefef] p-10 border rounded-md'>
          {/* Header */}
          <Header name={data.state.user}/>
          {/* card */}
          <div className='flex justify-between gap-7 my-5 flex-wrap'>
            <Card bgcolor={"#8272DA"} title={"23"} subtitle={"chennai"}></Card>
            <Card bgcolor={"#FD6663"} title={"20 december"} subtitle={"15:40:30"}></Card>
            <Card bgcolor={"#FCA201"} title={"Built using"} subtitle={"React"}></Card>

          </div>
          {/* container */}
<div>
  <Todocontainer/>
</div>
        </div >
      </div >
    </>
  )
}


export default Landing;
