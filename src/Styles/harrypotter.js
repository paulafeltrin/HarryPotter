import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
background-color: #ffc500;
`
export const H1 = styled.h1`
  font-size: 2rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  margin: 32px auto;
`
export const Ul = styled.ul`
    padding: 2vh, 2vw;
    display: flex;
    flex-wrap: wrap;
    font-size: 1.2rem;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`
export const Li = styled.li`
  font-size: 1.2rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  list-style: none;
  display:  flex;
  align-items: center;
  padding: 0 0 0 2vw;
`
export const Figure = styled.figure`
  display: flex;
  align-items: center;
`

export const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img{
        max-height: 300px;
        max-width: 300px;
        object-fit: cover;
    }
`
