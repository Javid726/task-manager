import styled from 'styled-components';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const StyledOuterDiv = styled.div`
  height: 50rem;
  width: 100%;
  /* background-color: rgb(33, 118, 255); */
  color: #fdfdfd;
  border-radius: 5px;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInnerDiv = styled.div`
  background-color: #fcfafa;
  background-color: #f5f7ff;
  width: 40%;
  color: #1a202c;
  border-radius: 5px;
  padding: 2.5rem;
  box-shadow: 1px 1px 1px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 4px 4px 10px 2px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  letter-spacing: 1px;
  color: #ef626c;
  margin-bottom: 2rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #4d4d4c;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #dbdbd9;
  border-radius: 5px;
  font-size: 1.6rem;
  padding: 0.6rem 0.8rem;
`;

const Button = styled.button`
  background-color: #09bc8a;
  color: #fdfdfd;
  font-size: 1.8rem;
  font-family: inherit;
  font-weight: 500;
  border: none;
  border-radius: 0.5rem;
  padding: 0.8rem 1.2rem;
  width: 100%;
  margin-top: 2rem;
  cursor: pointer;
`;

const Paragraph = styled.p`
  margin-top: 1rem;
`;

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const submitHandler = async e => {
    e.preventDefault();

    try {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZV4HXWTHwr0SgE_ShfTFg5bnmNKNRMiI',
        {
          method: 'POST',
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
          headers: {
            'Content-Type': 'applicatin/json',
          },
        },
      );

      if (response.ok) {
        navigate('/');
      } else {
        const data = await response.json();
        console.log(data);
      }
      console.log(name, email, password);
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledOuterDiv>
      <StyledInnerDiv>
        <Title>Sign Up</Title>
        <form onSubmit={submitHandler}>
          <FormGroup>
            <Label htmlFor="name">Full Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button type="submit">Create Profile</Button>
        </form>
        <Paragraph>
          Already have an account? <Link to="/sign-in">Sign in</Link>
        </Paragraph>
      </StyledInnerDiv>
    </StyledOuterDiv>
  );
};

export default SignUp;
