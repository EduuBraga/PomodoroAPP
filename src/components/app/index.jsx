import React from "react";

import { Button } from "../Button/style";

import { Container, Title, Controls } from "./style";

export function App(){
  return(
    <Container>
      <Title>Pomodoro</Title>

      <Controls>
        <Button>pomodoro</Button>
        <Button>short break</Button>
        <Button>long break</Button>
      </Controls>
    </Container>
  );
};