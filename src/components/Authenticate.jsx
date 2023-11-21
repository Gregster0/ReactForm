import React from "react";
import {useState} from "react";

export default function Authenticate({token}){
    const[successMessage,setSuccessMessage] = useState(null);
    const[authUser,setAuthUser] = useState("");
    const[error,setError] = useState(null);
    const handleClick = async (event) =>{
        try {
            const response = await fetch(
                "https://fsa-jwt-practice.herokuapp.com/authenticate",
                {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                  }
                }
              );
              const result = await response.json();
              console.log(result)
              setSuccessMessage(result.message);
              setAuthUser(result.data.username);
          } catch (error) {
            setError(error.message);
          }
    }
    return (<>
            <h2>Authenticate!</h2>
            {error && <p>{error}</p>}
            {successMessage && (<p>{successMessage} Welcome {authUser}!</p>)}
            <button onClick={handleClick}>Authenticate Token</button>
            </>
    )
}