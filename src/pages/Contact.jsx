import React, { useState } from 'react';
import styled from 'styled-components';

const URL = "https://my-rnd-393915-default-rtdb.firebaseio.com/Form.json";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const resp = fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })
      if (!resp.ok) {
        throw new Error(`HTTP error! Status: ${resp.status}`);
      }
      
      const responseData = await resp.json();
      console.log("Response Data:", responseData);
    } catch (error) {
      console.error("Error:", error);
    }

    setFormData({ name: '', email: '', phoneNumber: '' });
  };

  return (
    <Wrapper>
      <Title>Contact Us</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <span>Name:</span>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <span>Email:</span>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <span>Phone Number:</span>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const FormGroup = styled.label`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;

  input {
    padding: 8px;
    margin-top: 5px;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Contact;
