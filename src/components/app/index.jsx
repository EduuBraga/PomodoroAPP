import React, { useContext, useState } from "react";
import { PomodoroContext } from "../../provider/PomodoroSettings";

import settingsImgURL from '../../assets/icons/settings.png';

import { Button } from "../Button/style";

import { Container, Title, Controls, Timer, BorderBackground, ContainerSettings } from "./style";
import { CircleTimer } from "../CircleTimer";
import { ModalSettings } from "../ModalSettings";

export function App() {
  const { changeOptionON, optionActive } = useContext(PomodoroContext);
  const [modalVisible, setModalVisible] = useState(false);

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
        <img onClick={_ => { setModalVisible(true) }} src={settingsImgURL} alt="Ícone de configurações" />
      </ContainerSettings>

      {modalVisible && <ModalSettings setModalVisible={setModalVisible} />}
    </Container>
  );
};