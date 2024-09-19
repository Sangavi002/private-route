import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
          });
          const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.token);
                navigate('/product');
            } else {
                
                console.error(data.error);
            }
        } catch (error) {
          console.error('Error:', error);
        }
      }

    return(
        <>
        <form onSubmit={handleSubmit} 
              style={{ display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'}}>
            <h3 style={{fontSize: '27px',color: 'midnightblue'}}>Login</h3>
            <p style={{fontSize: '20px'}}>Username</p>
            <input type="text" 
                   style={{padding: '5px 10px'}} 
                   placeholder="Username"
                   value={username}
                   onChange={(e) => setUsername(e.target.value)} />
            <p style={{fontSize: '20px'}}>Password</p>
            <input type="text"
                   style={{padding: '5px 10px'}}  
                   placeholder="Password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)} />
            <br />
            <br />
            <button type="submit"
                    style={{
                        border: 'none',
                        background: 'green',
                        color: 'white',
                        padding: '8px 16px',
                        letterSpacing: '1px',
                    }}>Login</button>
        </form>
        </>
    )
}

export default Login