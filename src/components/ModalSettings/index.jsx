import React, { useContext } from "react";
import { PomodoroContext } from "../../provider/PomodoroSettings";

import closeImgURL from '../../assets/icons/close.png';
import closeHoverImgURL from '../../assets/icons/close_hover.png';
import checkImgURL from '../../assets/icons/check.png';

import { Container, Card, HeaderCard, ContentCard, ContainerMinutes, InputsMinutes, ContainerFonts, ContainerColors } from "./style";
import { Button } from "../Button/style";

export function ModalSettings({ setModalVisible }) {
  const {
    changeOptionColorON,
    changeOptionTextON,
    optionText,
    optionColor,
    changeValueInputPomodoro,
    changeValueInputShortBreak,
    changeValueInputLongBreak,
    minutesSections
  } = useContext(PomodoroContext);

  return (
    <Container>
      <Card>
        <HeaderCard>
          <h2>Settings</h2>

          <div>
            <img onClick={_ => { setModalVisible(false) }} src={closeImgURL} alt="Ícone para fechar o modal" />
            <img onClick={_ => { setModalVisible(false) }} src={closeHoverImgURL} alt="Ícone para fechar o modal" />
          </div>
        </HeaderCard>

        <ContentCard>
          <ContainerMinutes>
            <h4>TIME (MINUTES)</h4>

            <InputsMinutes>
              <div>
                <label>pomodoro</label>
                <input type="number" onChange={changeValueInputPomodoro} value={minutesSections.pomodoro} />
              </div>

              <div>
                <label>short break</label>
                <input type="number" onChange={changeValueInputShortBreak} value={minutesSections.short} />
              </div>

              <div>
                <label>long break</label>
                <input type="number" onChange={changeValueInputLongBreak} value={minutesSections.long} />
              </div>
            </InputsMinutes>
          </ContainerMinutes>

          <ContainerFonts isCheck={optionText}>
            <h4>FONT</h4>

            <div>
              <div onClick={changeOptionTextON} className="options_text">Aa</div>
              <div onClick={changeOptionTextON} className="options_text">Aa</div>
              <div onClick={changeOptionTextON} className="options_text">Aa</div>
            </div>
          </ContainerFonts>

          <ContainerColors isCheck={optionColor}>
            <h4>COLOR</h4>

            <div>
              <span onClick={changeOptionColorON} className="options_colors">
                {optionColor === 'option_color0' && <img src={checkImgURL} alt="Ícone de check" />}
              </span>

              <span onClick={changeOptionColorON} className="options_colors">
                {optionColor === 'option_color1' && <img src={checkImgURL} alt="Ícone de check" />}
              </span>

              <span onClick={changeOptionColorON} className="options_colors">
                {optionColor === 'option_color2' && <img src={checkImgURL} alt="Ícone de check" />}
              </span>
            </div>
          </ContainerColors>
        </ContentCard>

        <Button>Aplly</Button>
      </Card>
    </Container>
  );
};