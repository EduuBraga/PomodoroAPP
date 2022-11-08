import React from "react";

import closeImgURL from '../../assets/icons/close.png'

import { Container, Card, HeaderCard, ContentCard, ContainerMinutes, InputsMinutes, ContainerFonts, ContainerColors } from "./style";

export function ModalSettings() {
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

          <ContainerFonts>
            <h4>FONT</h4>

            <div>
              <div>Aa</div>
              <div>Aa</div>
              <div>Aa</div>
            </div>
          </ContainerFonts>

          <ContainerColors>
            <h4>COLOR</h4>

            <div>
              <span className="options_colors"></span>
              <span className="options_colors"></span>
              <span className="options_colors"></span>
            </div>
          </ContainerColors>
        </ContentCard>
      </Card>
    </Container>
  )
}