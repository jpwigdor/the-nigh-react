import React, { Component } from 'react';
import styled from "styled-components";


class Main extends Component {
  render() {
    return (
      <MainWrapper>
        MAIN COMPONENT
      </MainWrapper>
    )
  }
}

const MainWrapper = styled.div`
  background: red;
`

export default Main;