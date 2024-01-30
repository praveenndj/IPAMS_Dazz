
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SigninPage from './Sign-in/SigninPage.jsx';
import Home from './Employee/Home.jsx';
import Profile from './Employee/Profile.jsx';
import Dashboard from './Employee/Dashboard.jsx';
import Leaderboard from './Employee/Leaderboard.jsx';
import Announcements from './Employee/Announcements.jsx';
import Settings from './Employee/Settings.jsx';
import Help from './Employee/Help.jsx';
import VerifyPassword from './Employee/VerifyPassword.jsx';
import ResetPassword from './Employee/ResetPassword.jsx';
import Editprofile from './Employee/Editprofile.jsx';
import Admin from './Admin/Admin.jsx';
import AddEmployee from './Admin/AddEmployee.jsx';
import Department from './Admin/Department.jsx';
import Projects from './Admin/Projects.jsx';
import AddAnnouncements from './Admin/AddAnnouncements.jsx';
import ShowEmployee from './Employee/ShowEmployee.jsx';
import ShowDepartment from './Employee/ShowDepartment.jsx';
import ShowProjects from './Employee/ShowProjects.jsx';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SigninPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/leaderboard' element={<Leaderboard/>}/>
        <Route path='/announcements' element={<Announcements/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/verifypassword' element={<VerifyPassword/>}/>
        <Route path='/resetpassword' element={<ResetPassword/>}/>
        <Route path='/editprofile' element={<Editprofile/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/addemployee' element={<AddEmployee/>}/>
        <Route path='/department' element={<Department/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/addannouncements' element={<AddAnnouncements/>}/>
        <Route path='/showemployee' element={<ShowEmployee/>}/>
        <Route path='/showdepartment' element={<ShowDepartment/>}/>
        <Route path='/showprojects' element={<ShowProjects/>}/>
      </Routes>
    </div>
    
     
);
}

export default App;
