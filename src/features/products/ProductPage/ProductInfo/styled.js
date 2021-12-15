import styled, { css } from "styled-components";

export const Wrapper = styled.div`
   padding: 20px;
   display: inline-block;

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      padding: 10px;
   }
`;

export const Paragraph = styled.p`
   border-bottom: 1px solid ${({ theme }) =>
      theme.colors.borderColor};

   ${({ notFind }) => notFind && css`
      padding: 20px;
      margin: 0px;
      color: ${({ theme }) => theme.colors.firebrick};
   `}
`;

export const Strong = styled.strong`
   letter-spacing: 1.1px;
`;