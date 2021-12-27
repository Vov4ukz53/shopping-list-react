import styled, { css, keyframes } from "styled-components";
import frontend from "../img/frontend.png";

export const Wrapper = styled.div`
   display: grid;
   grid-template-columns: auto 200px;
   grid-gap: 15px;
   align-items: center;
   padding: 20px;
   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      padding: 20px 10px;
      grid-template-columns: 1fr;
   }
`;

export const Paragraph = styled.p`
   margin: 0px 0px 15px 0px;

   &:last-child{
      margin: 0;
   }
`;

export const Strong = styled.strong`
   letter-spacing: 1.2px;
`;

export const Div = styled.div`
   ${({ image }) => image && css`
      background-image: url("${frontend}");
      height: 200px;
      animation: ${rotate} 60s linear infinite;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
         width: 200px;
         justify-self: center;
      }
   `}
`;

const rotate = keyframes`
   from {
      transform: rotate(0deg);
   }
   to {
      transform: rotate(-360deg);
   }
`; 
