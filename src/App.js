import './App.css';
import Sidebar from './components/sidebar/SideBar';
import NavBar from './components/navbar/NavBar'

import { useState } from 'react';

const  App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSideBar = () => {
    setSidebarOpen(false);
  };  
  return (
    <div className='container'>
      <NavBar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/>
      <Sidebar sidebarOpen={sidebarOpen} closeSideBar={closeSideBar}/>
    </div> 
  );
}
 
export default App;
