import React, { useContext } from "react";
import { PomodoroContext } from "../../provider/PomodoroSettings";

import closeImgURL from '../../assets/icons/close.png';
import closeHoverImgURL from '../../assets/icons/close_hover.png';
import checkImgURL from '../../assets/icons/check.png';

import { Button } from "../Button/style";

import { Container, Card, HeaderCard, ContentCard, ContainerMinutes, InputsMinutes, ContainerFonts, ContainerColors, Switch, ContainerSwitch } from "./style";

export function ModalSettings({ setModalVisible }) {
  const {
    changeOptionColorON,
    changeOptionTextON,
    optionTextON,
    optionColorON,
    changeValueInputs,
    minutesPomodoro,
    minutesShort,
    minutesLong,
    ApplyChangeInputs,
    autoStartCheck,
    toggleAutoStartCheck
  } = useContext(PomodoroContext);

  return (
    <Container>
      <Card>
        <HeaderCard>
          <h2>Configurações</h2>

          <div>
            <img onClick={_ => { setModalVisible(false) }} src={closeImgURL} alt="Ícone para fechar o modal" />
            <img onClick={_ => { setModalVisible(false) }} src={closeHoverImgURL} alt="Ícone para fechar o modal" />
          </div>
        </HeaderCard>

        <ContentCard>
          <ContainerMinutes>
            <h4>TEMPO (MINUTOS)</h4>

            <InputsMinutes>
              <div>
                <label>pomodoro</label>
                <input type="number" name='pomodoro' onChange={changeValueInputs} value={minutesPomodoro} />
              </div>

              <div>
                <label>Intervalo curto</label>
                <input type="number" name='short' onChange={changeValueInputs} value={minutesShort} />
              </div>

              <div>
                <label>Intervalo longo</label>
                <input type="number" name='long' onChange={changeValueInputs} value={minutesLong} />
              </div>
            </InputsMinutes>
          </ContainerMinutes>

          <ContainerFonts isCheck={optionTextON}>
            <h4>fonte</h4>

            <div>
              <div onClick={changeOptionTextON} className="options_text">Aa</div>
              <div onClick={changeOptionTextON} className="options_text">Aa</div>
              <div onClick={changeOptionTextON} className="options_text">Aa</div>
            </div>
          </ContainerFonts>

          <ContainerColors isCheck={optionColorON}>
            <h4>tema</h4>

            <div>
              <span onClick={changeOptionColorON} className="options_colors">
                {optionColorON === 'option_color0' && <img src={checkImgURL} alt="Ícone de check" />}
              </span>

              <span onClick={changeOptionColorON} className="options_colors">
                {optionColorON === 'option_color1' && <img src={checkImgURL} alt="Ícone de check" />}
              </span>

              <span onClick={changeOptionColorON} className="options_colors">
                {optionColorON === 'option_color2' && <img src={checkImgURL} alt="Ícone de check" />}
              </span>
            </div>
          </ContainerColors>

          <ContainerSwitch>
            <p>Início automático das sessões</p>
            
            <Switch autoStartCheck={autoStartCheck}>
              <div>
                <input type="checkbox" onClick={toggleAutoStartCheck} />
                <span></span>
              </div>
            </Switch>
          </ContainerSwitch>
        </ContentCard>

        <Button onClick={ApplyChangeInputs}>Aplicar</Button>
      </Card>
    </Container>
  );
}