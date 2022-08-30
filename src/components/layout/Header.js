import styled from 'styled-components';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  background-color: #f0f8ff;
  padding: 1rem 0;
  text-align: left;
`;

const StyledHeaderContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const Styledh1 = styled.h1`
  font-size: 3.6rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: #312f2f;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <Styledh1>
          <Link to="/">TaskMan</Link>
        </Styledh1>
        <Navbar />
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
