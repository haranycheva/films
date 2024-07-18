import { Footer } from "../reapeated/Footer/Footer/Footer";
import { Header } from "../reapeated/Header/Header";
import { Loader } from "../reapeated/Loader";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectLoading } from "../../redux/selectors";
import styled from "styled-components";

const Wrapper = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const Main = styled.main`
flex-grow: 1;
`

export function Layout() {
  const isLoading =useSelector(selectLoading);
  return (
    <Wrapper>
      {isLoading && <Loader/>}
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Wrapper>
  );
}
