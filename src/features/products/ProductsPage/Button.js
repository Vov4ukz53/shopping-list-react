import styled, { css } from "styled-components";

export const Button = styled.button`
   cursor: pointer;
	border: none;
	background: transparent;
	color: ${({ theme }) => theme.colors.mainColor};
	transition: all 0.3s;

   ${({ error }) => error && css`
      color:${({ theme }) => theme.colors.firebrick};
      text-decoration:none;
   `}

   &:hover{
      text-decoration: underline;
   }

   &:active:{
      color: hsl(194, 80%, 21%);
   }

   &:disabled{
      color: rgb(184, 180, 180);
	   cursor: default;
      &:hover{
         text-decoration:none;
      }
   }

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      width: 100%;
      margin-top: 10px;
   }
`;