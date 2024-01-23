import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useAuthContext } from '../../context/auth-context';
import styled from 'styled-components';

const apiKey = process.env.REACT_APP_API_KEY;
const LOGIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { logIn } = useAuthContext();
	const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password })
      });

      if (!resp.ok) {
        throw new Error(`HTTP error! Status: ${resp.status}`);
      }

      const result = await resp.json();

			if (result.error) {
				alert(result.error.message);
				return;
			}

			const { idToken } = result;
			logIn({ token: idToken });
  		history.push("/store")
    } catch (error) {
      console.error("Error:", error);
    }

    setEmail('');
    setPassword('');
  };

  return (
    <Wrapper>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Email:</Label>
          <Input type="email" name="email" value={email} onChange={handleEmailChange} />
        </FormGroup>
        <FormGroup>
          <Label>Password:</Label>
          <Input type="password" name="password" value={password} onChange={handlePasswordChange} />
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

const FormGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  margin-top: 5px;
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

export default Login;
