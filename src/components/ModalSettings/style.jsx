import styled, { keyframes } from "styled-components";

const opacityAnimation = keyframes`
  0%{
    opacity: 0;
  }100%{
    opacity: 1;
  }
`

export const Container = styled.div`
  animation: ${opacityAnimation} 0.3s ease-in-out;
  background-color: #0A0C1C98;
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`
                 
export const Card = styled.section`
  animation: ${opacityAnimation} 0.3s ease-in-out;
  background-color: #fff;
  width: 540px; 
  height: 530px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; 

  @media screen and (max-width: 700px){
    width: 327px;
    height: 600px;
  }

  button{
    position: absolute;
    bottom: -28px;
  
    &:active{
      transform: scale(0.96);
    }
  }
`

export const HeaderCard = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 32px 40px;
  border-bottom: 1px solid #E3E1E1;

  @media screen and (max-width: 700px){
    padding: 24px;
  }

  div{
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    img:nth-child(1){
      width: 14px;
      cursor: pointer;
      position: absolute;
      opacity: 1;
      z-index: 1;
      transition: all 300ms ease;
      cursor: pointer;

      &:active{
        transform: scale(0.95);
      }

      &:hover{
        opacity: 0;
      }
    }
    
    img:nth-child(2){
      width: 14px;
      cursor: pointer;

      &:active{
        transform: scale(0.95);
      }
    }
  }
`

export const ContentCard = styled.main`
  padding: 28px 38px 72px 40px;

  @media screen and (max-width: 700px){
    padding: 24px 24px 59px 23px;
    width:100%;
  }
`

export const ContainerMinutes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #E3E1E1;

  @media screen and (max-width: 700px){
    align-items: center;
    gap: 18px;
  }
`


export const InputsMinutes = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 700px){
    flex-direction: column ;
    gap: 8px;
    width: 100%;
  }

  div{
    display: flex;
    flex-direction: column; 
    gap: 8px;
    
    @media screen and (max-width: 700px){
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    
    label{
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      color: #1E213F;
      opacity: 0.4;
    }

    input{
      width: 140px;
      height: 48px;
      background-color: #EFF1FA;
      border-radius: 10px;
      border: none;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      padding: 15px 16px;

      @media screen and (max-width: 700px){
        height: 40px;
      }
    }
  }
`

export const ContainerFonts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0px 24px 0px;
  border-bottom: 1px solid #E3E1E1;

  @media screen and (max-width: 700px){
    flex-direction: column;
    align-items: center;
    justify-items: center;
    gap: 15px;
    padding: 18px 0px 18px 0px;
  }

  div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    div{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
    }

    div:nth-child(1){
      background-color: ${props => props.isCheck === 'option_text0' ? '#000000' : '#EFF1FA'};
      color: ${props => props.isCheck === 'option_text0' ? '#ffffff' : '#1E213F'};
      font-family: 'Kumbh Sans', sans-serif !important;
    }

    div:nth-child(2){
      background-color: ${props => props.isCheck === 'option_text1' ? '#000000' : '#EFF1FA'};
      color: ${props => props.isCheck === 'option_text1' ? '#ffffff' : '#1E213F'};
      font-family: 'Roboto Slab', serif !important;
      font-weight: 700 !important;
    }

    div:nth-child(3){
      background-color: ${props => props.isCheck === 'option_text2' ? '#000000' : '#EFF1FA'};
      color: ${props => props.isCheck === 'option_text2' ? '#ffffff' : '#1E213F'};
      font-family: 'Space Mono', monospace !important;
    }
  }
`

export const ContainerColors = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0px 24px 0px;
  border-bottom: 1px solid #E3E1E1;
  
  @media screen and (max-width: 700px){
    flex-direction: column;
    align-items: center;
    justify-items: center;
    gap: 15px;
    padding: 16px 0px 18px 0px;
  }

  div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    span{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      img{
        width: 14px;
      }
    }

    span:nth-child(1){
      background-color: #F87070;
    }

    span:nth-child(2){
      background-color: #70F3F8;
    }

    span:nth-child(3){
      background-color: #D881F8;
    }
  }
`

export const ContainerSwitch = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 24px 0px 24px 0px;
`

export const Switch = styled.label`
  cursor: pointer;

  div{
    width: 60px;
    height: 30px;
    position: relative;
  }

  span{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      border-radius: 40px;
      background-color: ${props => props.autoStartCheck ? '#1E213F' : '#787c8a' };
  }

  span::before {
      content: "";
      width: 23px;
      height: 23px;
      background-color: #ffffff;
      border-radius: 50%;
      position: absolute;
      left: 3px;
      transition: .5s all ease;
      transform: translateX(${props => props.autoStartCheck ? '30px' : '0px' });
  }

  input{
    position: relative;
    left: 10px;
  }
`