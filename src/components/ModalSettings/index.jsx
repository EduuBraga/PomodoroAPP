import React, { useContext } from "react";
import { PomodoroContext } from "../../provider/PomodoroSettings";

import closeImgURL from '../../assets/icons/close.png'
import checkImgURL from '../../assets/icons/check.png'

import { Container, Card, HeaderCard, ContentCard, ContainerMinutes, InputsMinutes, ContainerFonts, ContainerColors } from "./style";

export function ModalSettings() {
  const { changeOptionColorON, changeOptionTextON, optionText, optionColor } = useContext(PomodoroContext)

  return (
    <Container>
      <Card>
        <HeaderCard>
          <h2>Settings</h2>
          <img src={closeImgURL} alt="Ícone para fechar o modal" />
        </HeaderCard>

        <ContentCard>
          <ContainerMinutes>
            <h4>TIME (MINUTES)</h4>

            <InputsMinutes>
              <div>
                <label>pomodoro</label>
                <input type="number" defaultValue={25} />
              </div>

              <div>
                <label>short break</label>
                <input type="number" defaultValue={5} />
              </div>

              <div>
                <label>long break</label>
                <input type="number" defaultValue={15} />
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
      </Card>
    </Container>
  )
}