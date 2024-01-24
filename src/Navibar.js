import React from 'react';
import './/Navibar.css'
const Navibar = () => {
  return (
    <nav role="navigation">
       <div className='container'> 
      <div id="menuToggle">
       
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <a href="/home"><li>Home</li></a>
          <a href="/"><li>Sign In</li></a>
          <a href="/profile"><li>Profile</li></a>
          <a href="/dashboard"><li>Dashboard</li></a>
          <a href="/leaderboard"><li>Leaderboard</li></a>
          <a href="/announcements"><li>Announcements</li></a>
          <a href="/settings"><li>Settings</li></a>
          <a href="/help"><li>Help</li></a>
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navibar;
