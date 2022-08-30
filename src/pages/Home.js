import styled from 'styled-components';
import { ReactComponent as WelcomeSvg } from '../assets/svg/welcome.svg';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const WelcomeTitle = styled.h1`
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
  font-size: 6rem;
  font-weight: 500;
  text-align: left;
  margin-top: 5rem;
`;

const WelcomeParagraph = styled.p`
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
  font-size: 1.6rem;
  margin-top: -2rem;
  margin-bottom: 2rem;
  text-align: left;
`;

const WelcomeSpan = styled.span`
  display: block;
`;

const Container = styled.div`
  display: flex;
  gap: 3rem;
`;

const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Button = styled.button`
  padding: 0.8rem 1.2rem;
  font-size: 2rem;
  font-family: inherit;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  background-color: #090c9b;
  color: #fdfdfd;
  width: 20rem;
  cursor: pointer;
`;

const Home = () => {
  const { isLoggedIn } = useSelector(state => state.login);

  const navigate = useNavigate();

  const handleAddUser = () => {
    // Couldn't add it for due time

    if (isLoggedIn) {
      navigate('/organisation');
    } else {
      navigate('/sign-in');
    }
  };
  return (
    <Container>
      <Welcome>
        <WelcomeTitle>
          One app to <WelcomeSpan>replace them all.</WelcomeSpan>
        </WelcomeTitle>
        <WelcomeParagraph>
          Create workspace for your organization.
        </WelcomeParagraph>
        <Button onClick={handleAddUser}>Add Workspace</Button>
      </Welcome>
      <WelcomeSvg width="50rem" height="50rem" />
    </Container>
  );
};

export default Home;
