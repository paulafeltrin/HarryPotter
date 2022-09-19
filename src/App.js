import React from 'react';
import Rotas from './services/routes';
import {GlobalStyle} from '../src/Styles/home'
//import {GlobalStyle} from '../src/Styles/harrypotter'

export default function App(){

  return(
      <>
        <GlobalStyle/>
        <Rotas/>
      </>
  )
}
