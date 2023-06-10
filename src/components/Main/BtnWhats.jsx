import React from 'react'
import { SiWhatsapp } from "react-icons/si";
import styled from "styled-components";

export const WhatBtnn = styled.h1`
  font-size: 2em;
  text-align: center;
  margin: 1rem 0;
  cursor: pointer;
  width: 7rem;
  border: 4px solid #dbab1e;
  background-color:#dbab1e;
  padding: 0 .4rem .4rem .5rem;
  border-radius: 5px;
  transition: 200ms ease-in-out;
  z-index: 9;
  .btnlink{
    color: #fff;
  }
    &:hover{
      background-color:transparent;
    }
    @media (max-width: 400px){
      width: 5rem;
      font-size: 1.7em;
     }
`

const BtnWhats = () => {
  return (
    <div>
        <WhatBtnn>
                <a className='btnlink' href="https://api.whatsapp.com/send?phone=3517633299" target="_blank" aria-label="para comunicarse directamente por Whatsapp" style={{color: "#fef7e5"}}>
                    <SiWhatsapp/>
                </a>
        </WhatBtnn>
    </div>     
  )
}

export {BtnWhats}