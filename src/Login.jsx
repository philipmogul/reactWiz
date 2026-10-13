import React from 'react';

export default function Login() {
  return (
    <>
        <div>
        <h1>Login Page</h1>
        </div>
        <form onSubmit={(e) => {
            e.preventDefault();
            // Handle login logic here
        }} >
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    </>
  );
}
