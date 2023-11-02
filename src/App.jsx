import './App.css'
import Device from './component/Device/Device'
import Tool from './component/Toole/Toole'
import moonLogo from './component/img/Untitled_design-removebg-preview.png' ;
import SideBar from './component/SideBar/SideBar';
function App() {

  return (
      <div className='background-img'>
       
        <Tool></Tool>
        <img src={moonLogo} className="logo" alt="" />
       <Device  code= 'Developer' name= 'Mousumi Rahmat'></Device>
       {/* <SideBar></SideBar> */}
    </div>
  )
}

export default App
