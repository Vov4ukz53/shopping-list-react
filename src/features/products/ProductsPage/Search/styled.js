import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   padding: 20px;

   @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
      padding: 10px;
   }
`;