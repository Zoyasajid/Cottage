import './App.css';
import Signup from './components/Signup';
import SignupForm from './components/signupForm/SignupForm';
import SignIn from './components/Signin/SignIn'
import Question from './components/signupForm/Verification/Question/Question';
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
import Footer from './components/ProducerAccount/Footer/Footer';
import LandingPagemain from './Landingpages/LandingPagemain';
function App() {
  return (
    <div>
      <LandingPagemain/>
  {/* <BrowserRouter>
      <Routes>

<Route path="/question" element={<Question/>}/>
      <Route path="/profile" element={<ProducerProfile/>}/>
      <Route path="/verify" element={<Verify/>}/>
        <Route path="/signin" element={<SignupForm/>}/>
        <Route path="/" element={<Signup/>}/>
        <Route path="/signup" element={<SignIn/>}/>

      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
