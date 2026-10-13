import React from "react";

export default function Signup() {
  return (
    <>
        <div>
        <h1>Signup Page</h1>
        </div>
        <form onSubmit={(e) => {
            e.preventDefault();
            // Handle signup logic here
        }} >
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button type="submit">Signup</button>
        </form>
    </>
  );
}