import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
`

export const Button = styled.button`
  border: none;
  cursor: pointer;
  font: 16px;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 15px;
  color: #D7E0FF;
  text-transform: uppercase;
  background-color: #00000000;
  transition: all 0.3s ease;

  @media screen and (max-width: 425px){
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 13.125px;
  }

  &:active{
    transform: scale(0.96);
    color: ${props => props.theme.color};
  }
  &:hover{
    color: ${props => props.theme.color};
  }
`