import styled, { css } from "styled-components";

export const Input = styled.input`
   border: 1px solid ${({ theme }) => theme.colors.borderColor};
	padding: 10px;
	flex: 1 1 auto;
	margin-right: 20px;

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
		margin: 0px 0px 15px 0px;
   }

   ${({ search }) => search && css`
      margin: 0px;

      @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
         margin: 0px;
      }
   `}
`;