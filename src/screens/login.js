import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Link,useNavigate } from 'react-router-dom';
// import { use } from '../backend/routes/createuser';
export default function Login() {
let navigate=useNavigate();
  const [credentials, setcredentials] = useState({  email: "", password: "" })
  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials!!");
    }
    else {
      alert('LOGIN Succesful');
      localStorage.setItem("authtoken",json.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/");
    }


  }



  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }




  return (
    <div> <div><Navbar /></div>
      <div>
        <div className='container'>
          <form onSubmit={handlesubmit}>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} />
            </div>


            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to='/signup' className='m-3 btn btn-danger'>I am a new user!</Link>
          </form>
        </div>



      </div>
      <div><Footer /></div>
    </div>

  )
}
