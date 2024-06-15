import React, { useState } from 'react';
import './App.css';


function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setSubmitted(true);
  };

  const handleReturn = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
      {submitted ? (
        <div>
          <h1 className="success">Success</h1>
          <button
            onClick={handleReturn}
            className='return'>
              Reset
          </button>
        </div>
      ) : (
        <>
        <h1>Please Submit</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </>
      )}
    </>
  );
}

export default Form;


// common structure
// const handleChange = (e) => {
//  const {name, value} = e.target
//  setInput ({
//  ...input,
//  [name] = value
//})
//}
