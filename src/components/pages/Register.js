import {useState} from "react";

const Register = () =>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const registration = async (e) =>{
        e.preventDefault();
        await fetch('http://localhost:4000/register',{
            method:'POST',
            body: JSON.stringify({username,password}),
            header:{'Content-Type':'application/json'}
        });
    }
    return(
        <form className="register" onSubmit={registration}>
        <h1>Registration</h1>
        <input 
            type="text" 
            placeholder="username"
            value={username}
            onChange={ e => setUsername(e.target.value)}
         />
        <input 
            type="password" 
            placeholder="password" 
            value={password}
            onChange={e => setPassword(e.target.value)}
        /> 
        <button>Register</button>
    </form>
    )
}

export default Register