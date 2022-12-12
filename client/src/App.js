import logo from './logo.svg';
import './App.css';
import React from "react"

function App() {

  const [data,setData] = React.useState(null);

  //form data
  const [name,setname] = React.useState("");
  const [height,setheight] = React.useState("");
  const [email,setemail] = React.useState("");
  const [message,setmessage] = React.useState("");

  let handleSubmit = async (e) => {

    e.preventDefault();

    console.log("server data : ",name,height,email);

    const jsondata = JSON.stringify({
      name: name,
      height: height,
      email: email
    })

    console.log("JSON DATA" , jsondata);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsondata
    };

    fetch("http://localhost:3001/adduser",requestOptions)

  };

  return (

    <><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
      integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
      crossorigin="anonymous"></link><div className="App">


      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Name:</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" onChange={(e) => setname(e.target.value)}> </input>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">Email address:</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Email address" onChange={(e) => setemail(e.target.value)}></input>
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">Height:</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setheight(e.target.value)}></input>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>

      </form>

        {/* <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setname(e.target.value)} />
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)} />
          <input
            type="text"
            value={height}
            placeholder="Height"
            onChange={(e) => setheight(e.target.value)} />

          <button type="submit">Post</button>

          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form> */}
        
      </div>
      
      </>
    

  );


}

export default App;
