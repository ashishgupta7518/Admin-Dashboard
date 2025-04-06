import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { auth } from '../firebase/FirebaseConfig';
import './signup.scss'
import { useNavigate } from 'react-router-dom'
function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const signup = async () => {
    if (email === "" || password === "") {
      return alert("Please fill all fields")
    }
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup Successful");
      setEmail("");
      setPassword("");
      navigate('/login')

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='signup-container'>
      <div className='signup-box'>
        <div className="">
          <h1 className='text-center text-white text-xl mb-4 font-bold'>Signup</h1>
        </div>
        <div>
          <input
            type="email"
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
            onClick={signup}
            className=' bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg'>
            Signup
          </button>
        </div>
        <div>
          <h2 className='text-white'>Don't have an account <Link className=' text-red-500 font-bold' to={'/login'}>Login</Link></h2>
        </div>
      </div>
    </div>
  )
}

export default Signup