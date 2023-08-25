import React from 'react'
import './SignupForm.css';
// import Login from '../SignIn-pic/LOGO.png';
import Login from '../Signin/SignIn-pic/LOGO.png'
import { useNavigate } from 'react-router-dom';
function SignupForm() {
    const navigate = useNavigate()
    const chng=()=>{
        navigate('/forgetpassword')
    }
    const signin=()=>{
        navigate('/signin')
    }
    const signup=()=>{
        navigate('/signup')
    }
    const gotoprofile=()=>{
        navigate("/profile")
    }
  return (
    <div>
    <div className='signUpContent'>
        <div className='signUpForm '>
            <img className='signLogo' src={Login} alt='lohi'/>
            <div className='formDiv sign'>
                <div className='form'>
                    <div className='signloginBtns signInbtn'>
                    <button onClick={signin} className='signIn signInUP'>Sign In</button>
                    <button  onClick={signup} className='signUps signupin'>Sign Up</button>
                    </div>
                    <form>
                      <div className='signin'>
                    <input
                                    className='email emailsignin '
                                        type="email"
                                        placeholder="Email"
                                        // value={email}
                                        // onChange={(e) => setEmail(e.target.value)}
                                    />      <input
                                    className='password emailsignin'
                                        type="password"
                                        placeholder="Password"
                                        // value={password}
                                        // onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button className='signbutton' onClick={gotoprofile} type="submit">Sign In</button>
                                <p className='terms op'> <span onClick={chng}>Forgot Password?</span></p>
                                {/* <p className='terms op'> <span onClick={chng}><Link to="/forgetpassword">Forgot Password?</Link></span></p> */}
                            <div className='connect'>
                                <p className='line'></p>
                                <p>Or Connect With</p>
                                <p className='line'></p>
                            </div>
                            <div className='fb-tweet'>
                                <button className='facebook'>Facebook</button>
                                <button className='twiter'>Twitter</button>
                            </div>
                            </div>
                            </form>
                    </div> 
                    </div>
                    </div>
                    </div>
                    </div> )
}

export default SignupForm