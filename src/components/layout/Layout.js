import Header from './Header';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin: 0 auto;
`;

const StyledMain = styled.main`
  width: 80%;
  max-width: 80%;
  text-align: center;
  margin: 0 auto;
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;

const Layout = props => {
  return (
    <StyledDiv>
      <Header />
      <StyledMain>{props.children}</StyledMain>
    </StyledDiv>
  );
};

export default Layout;
