import React, { FC } from "react"
import styled from "styled-components"

import FullPage from "Components/FullPage"

export interface ListAllAnimalsProps {
}

const Background = styled.div`
  background-color: #cfff88;
  min-height: 100vh;
`

const Text = styled.p`
  margin-top: 0;

  font-size: 14px;

  @media(min-width: 900px) {
    font-size: 18px;
  }
`

export const ListAllAnimals: FC<ListAllAnimalsProps> = () => {
  return (
    <FullPage>
      <Background>
        <Text>Oi, eu sou todos os animais</Text>
      </Background>
    </FullPage>
  )
}

export default ListAllAnimals
