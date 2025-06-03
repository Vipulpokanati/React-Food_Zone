import React from 'react';
import { useForm } from 'react-hook-form';
import './ContactUs.css';

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    reset();
  };

  return (
    <div className="contact-container">
      
      {isSubmitSuccessful && (
        <p className="success-message">Thanks for reaching out. We'll get back to you soon!</p>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <h2>Contact Us</h2>
        <label>
          Name:
          <input
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <span className="error-message">{errors.name.message}</span>}
        </label>

        <label>
          Email:
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email format',
              },
            })}
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
        </label>

        <label>
          Message:
          <textarea
            {...register('message', { required: 'Message is required' })}
          />
          {errors.message && <span className="error-message">{errors.message.message}</span>}
        </label>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
