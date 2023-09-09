import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './FormStyle.css';

const EMAILJS_SERVICE_ID = 'service_wngz5nb'; // Replace with your actual service ID
const EMAILJS_TEMPLATE_ID = 'template_037tsuc'; // Replace with your actual template ID
const EMAILJS_USER_ID = 'x5ed8PSW_4Wa5m0_g'; // Replace with your actual API key

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccessMessage('');
      setErrorMessage('');
    } else {
      try {
        // Initialize EmailJS with your API key
      emailjs.init(EMAILJS_USER_ID);
      
        const emailParams = {
          to_email: 'mehtaritik1999@gmail.com', // Replace with the recipient's email
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        };

        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, emailParams);
        
        setSuccessMessage('Email sent successfully');
        setErrorMessage('');
        setErrors({});
        // You can reset the form here if needed
      } catch (error) {
        console.error('Error sending email:', error);
        setErrorMessage('Failed to send email');
        setSuccessMessage('');
      }
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <div className="error">{errors.name}</div>}

        <label>Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <div className="error">{errors.email}</div>}

        <label>Subject</label>
        <input
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        />
        {errors.subject && <div className="error">{errors.subject}</div>}

        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type your message here"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        {errors.message && <div className="error">{errors.message}</div>}

        <button className="btn" type="submit">
          Submit
        </button>
      </form>

      {successMessage && <div className="success">{successMessage}</div>}
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
};

export default Form;
