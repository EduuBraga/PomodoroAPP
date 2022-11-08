import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  letter-spacing: normal;
  margin: 48px 0px 10px 0px;
`

export const Controls = styled.div`
  width: min-content;
  background: #161932;
  border-radius: 31.5px;
  padding: 8px;
  display: flex;
  justify-content: center;

  button{
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }

  button:nth-child(1){
    
  }

  button:nth-child(2){
    background-color: #00000000;
    color: #D7E0FF;
    opacity: 0.2;
  }

  button:nth-child(3){
    background-color: #00000000;
    color: #D7E0FF;
    opacity: 0.2;
  }
`