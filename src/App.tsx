import React from 'react';
import ProjectSideBar from './components/ProjectSideBar';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {

  
  return(
    <main className="h-screen my-8 flex gap-8">
    <ProjectSideBar/>
    <Outlet/>
    </main>
  );
}

export default App;