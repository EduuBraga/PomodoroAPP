import React, { useContext } from "react";
import { PomodoroContext } from "../../provider/PomodoroSettings";

import { Button } from "../Button/style";

import { Container, Title, Controls } from "./style";

export function App() {
  const {changeOptionON, optionActive} = useContext(PomodoroContext)

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