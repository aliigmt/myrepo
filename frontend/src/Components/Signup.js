import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
const Signup = (props) => {
    const [credentials, setCredentials] = useState({name:"", email:"", password:"" })
    const {name,email,password} = credentials;
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify({ email: credentials.email, password: credentials.password })
        body: JSON.stringify({ name, email, password })

      });
      const json = await response.json()
      
      if (json.success) {
        localStorage.setItem('token', json.authtoken);
         navigate('/');
        props.showAlert("Login SuccessFully",'success');
      }
      else {
        props.showAlert("Invalid Details","danger");
      }
    }
  
    const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name="name" onChange={onChange} />
  </div>

  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" name="email" onChange={onChange} />
  </div>

  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" id="password" onChange={onChange} />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup
