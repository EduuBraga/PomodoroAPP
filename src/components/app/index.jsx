import React, { useContext } from "react";
import { PomodoroContext } from "../../provider/PomodoroSettings";

import settingsImgURL from '../../assets/icons/settings.png'

import { Button } from "../Button/style";

import { Container, Title, Controls, Timer, ContentTimer, BorderBackground, ContainerSettings } from "./style";

export function App() {
  const { changeOptionON, optionActive } = useContext(PomodoroContext)

  return (
    <Container>
      <Title>Pomodoro</Title>

      <Controls isActive={optionActive}>
        <Button className="options" onClick={changeOptionON}>pomodoro</Button>
        <Button className="options" onClick={changeOptionON}>short break</Button>
        <Button className="options" onClick={changeOptionON}>long break</Button>
      </Controls>

      <Timer>
        <BorderBackground />

        <ContentTimer>
          <h1>00:00</h1>
          <h3>restart</h3>
        </ContentTimer>
      </Timer>

      <ContainerSettings>
        <img src={settingsImgURL} alt="Ícone de configurações" />
      </ContainerSettings>
    </Container>
  );
};