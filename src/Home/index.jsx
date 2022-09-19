import React from 'react';
import {Link} from 'react-router-dom';
import * as S from '../Styles/home';

export default function Home(){
  return(
    <S.Container>
      <S.BoxHome>
        <S.H1>Bem-vindo à página de Harry Potter!</S.H1>
        <S.P>Para conhecer os principais personagens da saga, clique no botão a seguir!</S.P>
        <Link to='harrypotter'><S.Btn>Vá para a página de Harry Potter</S.Btn></Link>
      </S.BoxHome>
    </S.Container>
  )
}