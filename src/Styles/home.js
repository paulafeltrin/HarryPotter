import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: #7f0909;
`
export const BoxHome = styled.section`
  border-radius: 7px;
  padding: 5px;
  width: 50%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;

  @media(max-width: 1250px){
    width: 70%;
    height: 70vh;
  }
  @media(max-width: 400px){
    width: 80%;
    height: 80vh;
  }
`
export const H1 = styled.h1`
  font-size: 2rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`
export const P = styled.p`
  font-size: 1.2rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`
export const Btn = styled.button`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: lighter;
  border-radius: 5px;
  padding: 1.2vh 2vw;
  border: 1px solid darkslategrey;

  :active{
    border: none;
  }
  :hover{
    background-color: #ffc500;
  }
`
