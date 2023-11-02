import React from'react'
import './Device.css'
const Device = (props) => {
    console.log(props)
    return (
        <div>
            <div>
            <div className='side-bar'>
                <div  className='grid-display'>
                <div>
                    <p className='welcome'>Welcome To</p>
                    <h1 className='header-color'><span className='dev'> Developer</span>
                    <span className='moon'>mOOn</span> <span className='world'>World</span></h1>
               </div>
               <div className='main-line'>
                   <h4 className='line'><span className='name-your'>My Name  <span className='is-color'>is</span> </span> {props.name}</h4>
                    <p className='line'><span className='name-your'>codeName</span>: {props.code}</p> 
                    <button  className='line-bottom'>Let's Go</button>
               </div>
                </div>
               </div> 
               
            </div>

        </div>
    );
};

export default Device;