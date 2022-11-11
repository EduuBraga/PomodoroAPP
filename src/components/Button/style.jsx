import styled from "styled-components";

export const Button = styled.button`
  width: 140px;
  height: 53px;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.color};
  border-radius: 26.5px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover{
    background-color: ${props => `${props.theme.hover}`};
  }

  @media screen and (max-width: 768px){
    width: 120px;
    height: 48px;
    font-size: 14px;
    line-height: 18px;
  }
  @media screen and (max-width: 425px){
    width: 105.2px;
    height: 48px;
    font-size: 12px;
    line-height: 15px;
  }
`