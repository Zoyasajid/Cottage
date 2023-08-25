import './App.css';
import Signup from './components/Signup';
import SignupForm from './components/signupForm/SignupForm';
import SignIn from './components/Signin/SignIn'
// import Homepage3 from ".../components/homepage/homepage3/Homepage3"
// import Homepage3 from "../src/components/homepage/homepage3/Homepage3"
// import Homepage4 from '../src/components./homepage/Homepage4/Homepage4'
// import Homepage5 from '../src/components/homepage/homepage5/Homepage5'
// import Homepage6 from '../src/components/homepage/homepage6/Homepage6'
// import Forgetpswd from './components/Signin/Forgetpswd/Forgetpswd';
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
function App() {
  return (
    <div>
  <BrowserRouter>
      {/* <NAvbar/> */}
      <Routes>
      {/* <Route path="/" element={<Forgetpswd/>}/> */}

      <Route path="/profile" element={<ProducerProfile/>}/>
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
