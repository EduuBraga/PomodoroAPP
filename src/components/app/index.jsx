import React, { useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { PomodoroContext } from "../../provider/PomodoroSettings";
import { GlobalStyles } from '../../styles/globalStyles/style';

import settingsImgURL from '/settings.png';

import { Button } from "../Button/style";
import { CircleTimer } from "../CircleTimer";
import { ModalSettings } from "../ModalSettings";

import { Container, Title, Controls, Switch, ContainerSwitch, Timer, BorderBackground, ContainerSettings } from "./style";

export function App() {
  const {
    changeSectionON,
    optionSectionON,
    toggleSectionPomodoro,
    theme,
    font
  } = useContext(PomodoroContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [autoStartCheck, setAutoStartCheck] = useState(false);

  function toggleAutoStartCheck(){
    autoStartCheck ? setAutoStartCheck(false) : setAutoStartCheck(true)
  }

  useEffect(()=>{
    console.log(autoStartCheck)
  }, [autoStartCheck])

  function handleClickSections(e) {
    changeSectionON(e);
    toggleSectionPomodoro(e);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>Pomodoro</Title>

        <Controls isActive={optionSectionON}>
          <Button className="options" name="pomodoro" onClick={handleClickSections}>pomodoro</Button>
          <Button className="options" name="short" onClick={handleClickSections}>short break</Button>
          <Button className="options" name="long" onClick={handleClickSections}>long break</Button>
        </Controls>

        <ContainerSwitch>
          <p>Automatic start of sessions</p>
          <Switch autoStartCheck={autoStartCheck}>
            <div>
              <input type="checkbox" onClick={toggleAutoStartCheck}/>
              <span></span>
            </div>
          </Switch>
        </ContainerSwitch>

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
      <GlobalStyles fonts={font} />
    </ThemeProvider>
  );
}