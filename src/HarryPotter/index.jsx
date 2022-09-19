import axios from "axios";
import React, {useEffect} from "react";
import { useState } from "react";
import * as S from '../Styles/harrypotter';

export default function Dog(){
  let Api = 'http://hp-api.herokuapp.com/api/characters'
  const [personagem, setPersonagem] = useState([])

  useEffect(()=>{
      axios.get(Api).then(response => {
      console.log(response.data)
      setPersonagem(response.data.slice(0, 25))
      })
    }, [Api])
  return(
    <S.Container>
      <S.H1>Esta é a página do Harry Potter!</S.H1>
      <S.Ul>{personagem.map(item=>(
        <S.Div>
          <S.Li key={item.id}>{item.name}</S.Li>
          <S.Figure>
            <img src={item.image} alt={item.name} />
          </S.Figure>
          
        </S.Div>
      ))}</S.Ul>
    </S.Container>
  )

}