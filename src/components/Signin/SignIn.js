// import '../Signup/signUp.css'
import { useState } from 'react';
import Login from './SignIn-pic/LOGO.png';
import './SignIn.css';
import {useNavigate } from 'react-router-dom';
import { Modal, Button } from 'antd';

const SignIn = () => {
const navigate = useNavigate('')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [visible, setVisible] = useState(false);

    const showModal = () => {
      setVisible(true);
    };
  
    const handleOk = () => {
      setVisible(false);
    };
  
    const handleCancel = () => {
      setVisible(false);
    };

    const verify=()=>{
        navigate('/verify')
    }
    const signin=()=>{
        navigate('/signin')
    }
    const signup=()=>{
        navigate('/signup')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { firstName, lastName, email, password });

    };

    return (
        <div>
            <div className='signUpContent'>
                <div className='signUpForm'>
                    <img className='signLogo' src={Login} alt='lohi'/>
                    <div className='formDiv'>
                        <div className='form'>
                            <div className='signloginBtns'>
                                {/* <button className='signIn'>Sign In</button>
                                <button className='signUps'>Sign Up</button> */}
                                <button onClick={signin} className='signIn signInUP'>Sign In</button>
                    <button onClick={signup} className='signUps signupin'> Sign Up</button>
                            </div>
                            <div className='feild'>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        className='name'
                                        type="text"
                                        placeholder="First Name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    <input
                                        className='name'
                                        type="text"
                                        placeholder="Last Name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />                                    <input
                                    className='email'
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                     <input
                                    className='address'
                                        type="address"
                                        placeholder="address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                    <input
                                    className='password'
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button className='signbutton' type="submit" onClick={verify}>Sign Up Now</button>
                                </form>
                                <p className='terms'>By continuing, I agree to Cottage’s <span onClick={showModal}>Terms & Conditions.</span></p>
                            <div className='connect'>
                                <p className='line'></p>
                                <p>Or Connect With</p>
                                <p className='line'></p>
                            </div>
                            <div className='fb-tweet'>
                            {/* <Button type="primary" onClick={showModal}>
        Show Modal
      </Button> */}
                                <button className='facebook'>Facebook</button>
                                <button className='twiter'>Twitter</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div> 
                
            </div>
            <Modal
        title="Terms and Conditions"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={500}
      >
        <p>
        Risus quis cursus tristique nisl. Neque nec eget volutpat pellentesque suscipit amet. Feugiat fames porta dapibus molestie eget ut. Orci non integer mauris pellentesque velit turpis gravida. Nibh ipsum vulputate faucibus nibh. Erat pellentesque augue nibh vestibulum. Et fermentum, egestas scelerisque odio praesent. Non nec scelerisque enim, suspendisse. Sit elit lectus morbi cursus cursus accumsan. Habitasse nulla eget urna, dignissim dignissim fames. Ac phasellus proin sed aenean neque, sed egestas viverra lectus. Orci non tristique eget phasellus. 

Aliquam ullamcorper sagittis non sapien pulvinar maecenas morbi phasellus. Suspendisse eu diam massa egestas facilisis egestas proin. Pharetra, pellentesque sit nibh pharetra sit ullamcorper posuere nulla. Fusce elit tellus aliquam iaculis malesuada vestibulum, in. Amet aliquam blandit vel sed. Dictum euismod velit tristique mi potenti et id feugiat auctor. Netus turpis sit tellus ante nec nulla. Arcu tortor, amet, in consectetur elit in. Interdum tincidunt ultrices elit risus integer sit viverra elit lorem. Nisl turpis auctor ut in felis eu in. Interdum sit nunc quis pulvinar nec. 

Nisl arcu est in commodo sed hac risus montes, phasellus. Mauris tellus ipsum, quis natoque in feugiat viverra volutpat. 

Faucibus aenean velit ipsum, purus tristique. Turpis a ut blandit non urna amet, congue. Id tincidunt turpis nisi eget. Ut velit, at leo quam in et. Sit sapien hendrerit id lacus, viverra odio. Euismod blandit ac quisque venenatis facilisis. Mollis ut dui pulvinar a, eget viverra pellentesque gravida amet. Risus, rutrum faucibus faucibus arcu at. 
Egestas enim, egestas hendrerit diam pharetra massa cum justo. Pharetra
        </p>
      </Modal>
        </div>
    )
}
export default SignIn