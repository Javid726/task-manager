import styled from 'styled-components';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { loginHandler, setIsLoggedIn } from '../store/login';

const StyledOuterDiv = styled.div`
    margin-top: 2rem;
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
    cursor: pointer;
`;

const Paragraph = styled.p`
    margin-top: 1rem;
`;

const SingIn = () => {
    const [showError, setShowError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = async e => {
        e.preventDefault();

        if (password.length >= 6) {
            try {
                const response = await fetch(
                    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBZV4HXWTHwr0SgE_ShfTFg5bnmNKNRMiI',
                    {
                        method: 'POST',
                        body: JSON.stringify({
                            email,
                            password,
                            returnSecureToken: true,
                        }),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );

                if (response.ok) {
                    const data = await response.json();

                    dispatch(loginHandler(data.idToken));
                    dispatch(setIsLoggedIn());
                    navigate('/admin-dashboard');
                } else {
                    toast.error('Bad User Credentials...', {
                        position: 'bottom-right',
                        autoClose: 3000,
                    });
                }
            } catch (error) {
                console.log(error);
            }

            setShowError(false);
            setEmail('');
            setPassword('');
        } else {
            setShowError(true);
        }
    };

    return (
        <StyledOuterDiv>
            <StyledInnerDiv>
                <Title>Sign In</Title>
                <form onSubmit={submitHandler}>
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
                        {showError ? (
                            <p style={{ color: 'red', fontSize: '1.2rem' }}>
                                Password must be at least 6 characters
                            </p>
                        ) : (
                            ''
                        )}
                    </FormGroup>
                    <Button type="submit">Log In</Button>
                </form>
                <Paragraph>
                    Don't have an account? <Link to="/sign-up">Sign up</Link>
                </Paragraph>
            </StyledInnerDiv>
        </StyledOuterDiv>
    );
};

export default SingIn;
