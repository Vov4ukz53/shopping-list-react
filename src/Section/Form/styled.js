import styled from "styled-components";

export const StyledForm = styled.form`
   display: flex;
	padding: 20px;

   @media (max-width: 767px) {
		flex-direction: column;
   }
`;

export const Input = styled.input`
   border: 1px solid ${({ theme }) =>
      theme.colors.borderColor};
	padding: 10px;
	flex: 1 1 auto;
	margin-right: 20px;

   @media (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}px) {
		margin: 0px 0px 15px 0px;
   }
`;

export const Button = styled.button`
	background-color: ${({ theme }) =>
      theme.colors.mainButton};
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