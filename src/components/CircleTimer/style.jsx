import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;

  h3{
    cursor: pointer;

    &:active{
      transform: scale(0.98);
    }
  }
`