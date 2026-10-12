import {useState} from 'react';

export default function Forms() {
  const [emName, setEmName] = useState("");
  const [emEmail, setEmEmail] = useState("");
  const [emPassword, setEmPassword] = useState("");
  return (
    
    <>
        <h3> Forms in React </h3>
        <form onSubmit={(e) => {
          e.preventDefault();
          alert("Form Submitted with Name: " + emName + ", Email: " + emEmail + ", Password: " + emPassword);
        }}>
          <label htmlFor="name">Name : </label>
          <input type="text" name="name" id="name" placeholder="Enter your name" value={emName} onChange={(e) => setEmName(e.target.value)} />
            <br />
            <label htmlFor="email">Email : </label>
            <input type="email" name="email" id="email" placeholder="Enter your email" value={emEmail} onChange={(e) => setEmEmail(e.target.value)} />
            <br />
            <label htmlFor="password">Password : </label>
            <input type="password" name="password" id="password" placeholder="Enter your password" value={emPassword} onChange={(e) => setEmPassword(e.target.value)} />
            <br />
            <button type="submit">Submit</button>
        </form>
        <p>
            Common Form Validation library is react-hook-form. I installed it with npm!!!
        </p>

    </>
  );
}

