import React from "react"
import styled from "styled-components"

const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`

const Backdrop = ({ click, show }) => {
  return show && <Container onClick={()=>click(false)}></Container>
}

export default Backdrop
