import React, { useContext, useEffect, useState } from "react";
import { PomodoroContext } from "../../provider/PomodoroSettings";

import settingsImgURL from '../../assets/icons/settings.png';

import { Button } from "../Button/style";
import { CircleTimer } from "../CircleTimer";
import { ModalSettings } from "../ModalSettings";

import { Container, Title, Controls, Timer, BorderBackground, ContainerSettings } from "./style";

export function App() {
  const {
    changeOptionON,
    optionActive,
    toggleSectionPomodoro,
  } = useContext(PomodoroContext);

  const [modalVisible, setModalVisible] = useState(false);

  function handleClickOptions(e) {
    changeOptionON(e)
    toggleSectionPomodoro(e)
  }

  return (
    <Container>
      <Title>Pomodoro</Title>

      <Controls isActive={optionActive}>
        <Button className="options" name="pomodoro" onClick={handleClickOptions}>pomodoro</Button>
        <Button className="options" name="short" onClick={handleClickOptions}>short break</Button>
        <Button className="options" name="long" onClick={handleClickOptions}>long break</Button>
      </Controls>

      <Timer>
        <BorderBackground >
          <CircleTimer />
        </BorderBackground>
      </Timer>

      <ContainerSettings>
        <img onClick={_ => { setModalVisible(true) }} src={settingsImgURL} alt="Ícone de configurações" />
      </ContainerSettings>

      {modalVisible && <ModalSettings setModalVisible={setModalVisible} />}
    </Container>
  );
};