import styled from "styled-components";

export const MainTitle = styled.h1`
   margin-top: 50px;

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      margin-top: 25px;
   }
`;