import React from 'react';
import './Tool.css'
const Tool = () => {
    return (
        <div>
          <div className='tool-display'>
                <nav>
                    <a href="/home">Home</a>
                    <a href="About Dve">About Us</a>
                    <a href="Contact Us">Contact us</a>
                </nav>
                <div>
                    <input type="text" className='input-home' placeholder='code you want' />
                    <button className='button-home'>Enter</button>
                </div>
            </div>
            
        </div>
    );
};

export default Tool;