import React from "react";
import {useState} from "react";

export default function SignUpForm({setToken}){
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const[error,setError] = useState(null);
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(
                'https://fsa-jwt-practice.herokuapp.com/signup',
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({username,password}),
                }
              );
              const result = await response.json();
              console.log(result.token);
              setToken(result.token);
          } catch (error) {
            setError(error.message);
          }
    }

    return( <>
            <h2>Sign Up!</h2>
            {error && <p>{error}</p>}
            <form>
                <label>
                    Username:
                    <input value={username} onChange={(event) => {
                        setUsername(event.target.value);
                    }}/>
                </label>
                <label>
                    Password:
                    <input value={password} onChange={(event) => {
                        setPassword(event.target.value);
                    }}/>
                </label>
                <button onClick={handleSubmit}>Submit!</button>
            </form>
            </>
    )

}