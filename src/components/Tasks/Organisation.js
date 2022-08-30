import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { createOrganization } from '../../store/workspace';

const StyledOuterDiv = styled.div`
  width: 100%;
  /* background-color: rgb(33, 118, 255); */
  color: #fdfdfd;
  border-radius: 5px;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;

const StyledInnerDiv = styled.div`
  background-color: #fcfafa;
  background-color: #f5f7ff;
  width: 80%;
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
  font-weight: 500;
  font-size: 1.4rem;
  color: #4d4d4c;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #d6d9de;
  border-radius: 0.9rem;
  font-size: 1.6rem;
  height: 4rem;
  padding: 0.6rem 2rem;
  transition: border-color 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;

  &:hover,
  &:active,
  &:focus {
    border-color: #adb3bd;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
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
  width: 50%;
  margin-top: 2rem;
  cursor: pointer;
`;

// const Paragraph = styled.p`
//   margin-top: 1rem;
// `;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`;

const Organisation = () => {
  const [adminUsername, setAdminUsername] = useState('');
  const [email, setEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const submitHandler = async e => {
    e.preventDefault();

    console.log(name, email, adminPassword, address, phone);

    const newOrg = {
      name,
      phone,
      email,
      address,
      adminUsername,
      adminPassword,
      users: [],
    };

    try {
      dispatch(createOrganization(newOrg));
    } catch (error) {
      throw new Error(error);
    }

    setAdminUsername('');
    setAdminPassword('');
    setEmail('');
    setPhone('');
    setAddress('');
    setName('');
  };

  return (
    <StyledOuterDiv>
      <StyledInnerDiv>
        <Title>Create Workspace</Title>
        <Form onSubmit={submitHandler}>
          <FormGroup>
            <Label htmlFor="username">Name of Organization</Label>
            <Input
              type="text"
              name="username"
              id="username"
              value={adminUsername}
              onChange={e => setAdminUsername(e.target.value)}
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
            <Label htmlFor="name">Address</Label>
            <Input
              type="text"
              name="address"
              id="address"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">User Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Phone number</Label>
            <Input
              type="number"
              name="phone"
              id="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              value={adminPassword}
              onChange={e => setAdminPassword(e.target.value)}
            />
          </FormGroup>

          <Button type="submit">Create Workspace</Button>
        </Form>
      </StyledInnerDiv>
    </StyledOuterDiv>
  );
};

export default Organisation;
