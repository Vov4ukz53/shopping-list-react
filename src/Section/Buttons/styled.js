import styled from "styled-components";

export const Wrapper = styled.div`
   display: grid;
	grid-template-columns: auto auto;
	grid-gap: 10px;

   @media (max-width: 767px) {
	   grid-template-columns: 1fr;
	   width: 100%;
   }
`;

export const Button = styled.button`
   cursor: pointer;
	border: none;
	background: transparent;
	color: ${({theme}) => theme.colors.mainButton};
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
   }

   @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
      &:first-child {
         margin-top: 15px;
      }
   }
`;