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
  z-index: 10;

  button{
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }

  button:nth-child(1){
    background-color: ${props =>  props.isActive === 'option0' ? '#F87070' : '#00000000' };
    color: ${props =>  props.isActive === 'option0' ? '#fff' : '#D7E0FF' };
    opacity: ${props =>  props.isActive === 'option0' ? '1' : '0.2' };
  }

  button:nth-child(2){
    background-color: ${props =>  props.isActive === 'option1' ? '#F87070' : '#00000000' };
    color: ${props =>  props.isActive === 'option1' ? '#fff' : '#D7E0FF' };
    opacity: ${props =>  props.isActive === 'option1' ? '1' : '0.2' };
  }

  button:nth-child(3){
    background-color: ${props =>  props.isActive === 'option2' ? '#F87070' : '#00000000' };
    color: ${props =>  props.isActive === 'option2' ? '#fff' : '#D7E0FF' };
    opacity: ${props =>  props.isActive === 'option2' ? '1' : '0.2' };
  }
`

export const Timer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: #161932;
  border-radius: 50%;
  width: 366px;
  height: 366px;
`

export const BorderBackground = styled.div`
  width: 410px;
  height: 410px;
  position: absolute;
  border-radius: 50%;
  background-image: linear-gradient(315deg, #2E325A 0%, #0E112A 100%); 
  box-shadow: -50px -50px 100px #272C5A, 50px 50px 100px #121530;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerSettings = styled.section`
 margin-top: 22px;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    width: 28px;
  }
`