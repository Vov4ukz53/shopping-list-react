import styled from "styled-components";

export const StyledForm = styled.form`
   display: flex;
	padding: 20px;

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      flex-direction: column;
      padding: 10px;
   }
`;

export const Button = styled.button`
	background-color: ${({ theme }) =>
      theme.colors.mainColor};
	color: #fff;
	border: none;
	padding: 10px;
	cursor: pointer;
	transition: background-color 0.3s, transform 0.3s;

   @media (min-width: ${({ theme }) =>
      theme.breakpoints.tablets}px) {
      &:hover {
         background-color: hsl(194, 80%, 31%);
         transform: scale(1.1);
      }

      &:active {
         background-color: hsl(194, 80%, 17%);
      }
   }
`;