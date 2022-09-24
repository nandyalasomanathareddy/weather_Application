
import {useRef,useState} from "react";
import {signup,login,logout,useAuth} from "./firebase"
function App(){
  const[loading,setLoading]=useState(false)

  const currentUser = useAuth()

   const emailRef = useRef()

  const passwordRef = useRef()

   async function handleSingup(){
    setLoading(true)
    await signup(emailRef.current.value,passwordRef.current.value)
    setLoading(false)
   }
   async function handleLogin(){
    try{
    setLoading(true)
    await login(emailRef.current.value,passwordRef.current.value)
    }
    catch{
        alert("first go to Sign In")
    }
   }


   async function handleLogout(){
    setLoading(true)
    await logout()
   }


    return(
        <div>
            <center>
                <h2>UserName:{currentUser?.email}</h2>
            <label>Email:</label>
            <input ref={emailRef} type="email" placeholder="Enter email" />
            <br/><br/>

            <label>Passwprd:</label>
            <input ref={passwordRef} type="password" placeholder="Enter Passwprd" />
            <br/><br/>
            <button disabled={loading || currentUser} onClick={handleSingup}>Sign in</button>
            <button  disabled={loading ||  currentUser}  onClick={handleLogin}>Login</button>
            <button  disabled={loading || ! currentUser} onClick={handleLogout}>Logout</button>
            </center>



        </div>
    )
}
export default App;