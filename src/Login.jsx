import React from 'react';

export default function Login() {
  return (
    <>
        <div>
        <h1>Login Page</h1>
        </div>
        <form class="form-control" onSubmit={(e) => {
            e.preventDefault();
            // Handle login logic here
        }} >
            <input type="text" placeholder="Username" /> <br />
            <input type="password" placeholder="Password" /> <br />
            <button type="submit" class="btn btn-primary" >Login</button>
        </form>
    </>
  );
}
