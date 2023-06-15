import { Outlet } from 'react-router-dom';
import {
  Header,
  StyledNavLink,
  Wrapper,
  Nav,
  StyledLink,
  Box,
} from './SharedLayout.styled';
import { Container } from '../Container/Container';
import { Suspense } from 'react';
import { Footer } from 'components/Footer/Footer';
// import Icon from "../../image/twitter.svg";
// import {Loader} from '../Loader/Loader'

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Wrapper>
            <Nav>
              <StyledNavLink to="/" end>
                {/* <img src={Icon} alt="Twitter Icon" /> */}
                <span>Tweets App</span>
              </StyledNavLink>
              <StyledNavLink to="/tweets">Tweets</StyledNavLink>
            </Nav>
            <Box>
              <StyledLink href="mailto:vsaburdo@mail.com">
                vsaburdo@gmail.com
              </StyledLink>
              <StyledLink href="tel:+380677764273">
                +38 067 776 42 73
              </StyledLink>
            </Box>
          </Wrapper>
        </Container>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
      {/* <Footer /> */}
    </>
  );
};
