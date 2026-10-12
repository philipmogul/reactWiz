import {useState} from "react";
import { useForm } from "react-hook-form";

export default function FormsWithHooks() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formData, setFormData] = useState(null);

  const onSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div>
      <hr />
      <h3>Forms with React Hook Form</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" {...register("name", { required: true, minLength: { value: 2, message: "Name must be at least 2 characters" } })} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" {...register("email", { required: true, pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {formData && (
        <div>
          <h3>Form Data:</h3>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
        </div>
      )}
    </div>
  );
}


