import React,{useState} from 'react';

import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import Dashboard from './Components/Dashboard';
import Adduser from './Components/Adduser';
import Profile from './Components/Profile';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Edituser from './Components/Edituser';

function App() {
  let [user, setUser] = useState([
    {
      id: 1,
      name: "Mani",
      email: "mani@gmail.com",
      dob: "12-10-2000",
      gender: "Male",
      subscription: true
    },
    {
      id: 2,
      name: "Sani",
      email: "sani@gmail.com",
      dob: "12-10-2010",
      gender: "Male",
      subscription: true
    },
    {
      id: 3,
      name: "Vaani",
      email: "vanni@gmail.com",
      dob: "12-10-1989",
      gender: "Female",
      subscription: true
    }
  ])
  return (
    <BrowserRouter>
      <div id="wrapper">
        {/* Sidebar remains static */}
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            {/* Topbar can be added here */}
            <Topbar />

            {/* Routes for dynamic page rendering */}
            <Routes>
              <Route path="/" element={<Dashboard user={user} setUser={setUser} />} />
              <Route path="/edit-user/:id" element={<Edituser user={user} setUser={setUser} />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/add-user" element={<Adduser user={user} setUser={setUser} />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
