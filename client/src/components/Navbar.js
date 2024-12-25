import React, { useEffect, useState } from 'react';

function Navbar() {

    const[isLightTheme, setIsLightTheme] = useState(true);

    const scrollToSection = (event,id) => {
        event.preventDefault();
        const element = document.getElementById(id);
        console.log("ASSA");

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const themeFunction = () => {
        setIsLightTheme((prevTheme) => !prevTheme);
        console.log("Button Cliked");
        
    };
    
    useEffect(() => {
        if (isLightTheme) {
            document.body.classList.add('lighttheme');
            document.body.classList.remove('darktheme');
        } else {
            document.body.classList.add('darktheme');
            document.body.classList.remove('lighttheme');
        }
    }, [isLightTheme]);


  return (
    <div className='navbar'>
        <div className="krunalshah">
            <a href="/" onClick={(e)=> scrollToSection(e, 'home')}>Krunal Shah</a>
        </div>
        <div className="center-element">
        <button className="toggle-btn" onClick={themeFunction}>{isLightTheme ? '🌞' : '🌚'}</button>
        </div>
        <div className="otherLinks" >

            <a href='/about' onClick={(e)=> scrollToSection(e, 'about')}>About</a>
            <a href='/skills' onClick={(e)=> scrollToSection(e,'skills')}>Skills</a>
            <a href='/projects' onClick={(e)=> scrollToSection(e,'projects')}>Projects</a>
            <a href='/experiences' onClick={(e)=> scrollToSection(e,'experiences')}>Experiences</a>
            
        </div>
    </div>
  )
}

export default Navbar;