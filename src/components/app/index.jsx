import React, { useContext } from "react";
import { PomodoroContext } from "../../provider/PomodoroSettings";

import settingsImgURL from '../../assets/icons/settings.png'

import { Button } from "../Button/style";

import { Container, Title, Controls, Timer, BorderBackground, ContainerSettings } from "./style";
import { CircleTimer } from "../CircleTimer";

export function App() {
  const { changeOptionON, optionActive } = useContext(PomodoroContext);

  return (
    <Container>
      <Title>Pomodoro</Title>

      <Controls isActive={optionActive}>
        <Button className="options" onClick={changeOptionON}>pomodoro</Button>
        <Button className="options" onClick={changeOptionON}>short break</Button>
        <Button className="options" onClick={changeOptionON}>long break</Button>
      </Controls>

      <Timer>
        <BorderBackground >
          <CircleTimer />
        </BorderBackground>
      </Timer>

      <ContainerSettings>
        <img src={settingsImgURL} alt="Ícone de configurações" />
      </ContainerSettings>
    </Container>
  );
};