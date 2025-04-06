import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/FirebaseConfig';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const signin = async () => {
        if (email === "" || password === "") {
            return alert("Please fill all fields")
        }
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            const users = localStorage.setItem('user', JSON.stringify(user));
            alert("Signin Successful");
            navigate('/home')
            setEmail("");
            setPassword("");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='signup-container'>
            <div className='signup-box'>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                </div>
                <div>
                    <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className='signup-button-container'>
                    <button
                        onClick={signin}
                        className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Don't have an account
                        <Link className=' text-yellow-500 font-bold' to={'/signup'}> Signup</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Login