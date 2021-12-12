import styled from "styled-components";

export const Button = styled.button`
   cursor: pointer;
	border: none;
	background: transparent;
	color: ${({ theme }) => theme.colors.mainButton};
	transition: all 0.3s;

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
   }
`;