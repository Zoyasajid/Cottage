import './App.css';
import Signup from './components/Signup';
import SignupForm from './components/signupForm/SignupForm';
import SignIn from './components/Signin/SignIn'

import {
  BrowserRouter,
  // RouterProvider,
  Route,
  // Link,
  Routes
} from "react-router-dom";
import Forgetpswd from './components/Signin/Forgetpswd/Forgetpswd';
import NAvbar from './components/navbar/NAvbar';
import Verify from './components/signupForm/Verification/Verify';
import ProducerNavbar from './components/ProducerAccount/producerNavbar/ProducerNavbar';
import ProducerProfile from './components/ProducerAccount/ProducerProfile/ProducerProfile';
import EditProfile from './components/ProducerAccount/edit-profile/EditProfile' 
function App() {
  return (
    <div>
  <BrowserRouter>
      {/* <NAvbar/> */}
      <Routes>
      {/* <Route path="/" element={<Forgetpswd/>}/> */}

      <Route path="/profile" element={<ProducerProfile/>}/>
      {/* <Route path="/editprofile" element={<EditProfile/>}/> */}
      <Route path="/" element={<Signup/>}/>
      <Route path="/forgetpassword" element={<Forgetpswd/>}/>
      <Route path="/verify" element={<Verify/>}/>
      {/* <Route path="/page2" element={<Homepage3/>}/>
      <Route path="/page3" element={<Homepage5/>}/>
      <Route path="/page4" element={<Homepage6/>}/> */}

        <Route path="/signin" element={<SignupForm/>}/>
        <Route path="/signup" element={<SignIn/>}/>

      </Routes>
      </BrowserRouter>
    {/* <Signup/> */}
    </div>
  );
}

export default App;
