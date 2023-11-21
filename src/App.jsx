import './App.css'
import {useState} from "react";
import SignUpForm from "./components/SignUpForm.jsx";
import Authenticate from "./components/Authenticate.jsx";

function App() {
  const[token,setToken] = useState(null);

  return (
    <>
      <SignUpForm setToken = {setToken} />
      <Authenticate token = {token} />
    </>
  )
}

export default App
