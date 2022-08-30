import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutHandler, setIsLoggedIn } from '../../store/login';

const MainNavigation = styled.nav`
  padding: 1rem;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const ListItem = styled.li`
  font-size: 2rem;
  color: #333;
`;

const StyledLink = styled(Link)`
  color: #333;
`;

const Button = styled.button`
  padding: 0.4rem 0.8rem;
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 400;
  background-color: #b30089;
  border: 1px solid #b30089;
  border-radius: 5px;
  color: #fdfdfd;
  cursor: pointer;
`;

const Navbar = () => {
  const { isLoggedIn } = useSelector(state => state.login);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  return (
    <MainNavigation>
      <List>
        {isLoggedIn ? (
          <>
            <ListItem>
              <StyledLink to="/organisation">Add workspace</StyledLink>
            </ListItem>
            <Button
              onClick={() => {
                dispatch(logoutHandler());
                dispatch(setIsLoggedIn());
                navigate('/');
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <ListItem>
              <StyledLink to="/sign-in">Login</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/sign-up">
                <Button>Sign Up</Button>
              </StyledLink>
            </ListItem>
          </>
        )}
      </List>
    </MainNavigation>
  );
};

export default Navbar;
