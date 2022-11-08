import React, { useEffect, useRef, useState } from "react";

import { Button } from "../Button/style";

import { Container, Title, Controls } from "./style";

export function App() {
  const [optionActive, setOptionActive] = useState('option1')

  function changeOptionON(event) {
    const options = document.querySelectorAll('.options')
    let optionClicked = event.target

    options.forEach((option, index) => {
      if (option === optionClicked) {
        setOptionActive(`option${index}`)
      }
    })
  }

  return (
    <Container>
      <Title>Pomodoro</Title>

      <Controls isActive={optionActive}>
        <Button className="options" onClick={changeOptionON}>pomodoro</Button>
        <Button className="options" onClick={changeOptionON}>short break</Button>
        <Button className="options" onClick={changeOptionON}>long break</Button>
      </Controls>
    </Container>
  );
};