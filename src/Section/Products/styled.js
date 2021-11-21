import styled, {css} from "styled-components";
import arrow from "./arrow.png";
import basket from "./basket.png";

export const List = styled.ul`
   padding: 20px;
	margin-bottom: 0;
`;

export const Item = styled.li`
   display: grid;
	grid-template-columns: 50px 1fr 50px;
	align-items: center;
	padding-bottom: 10px;
	margin-bottom: 15px;
	border-bottom: 1px solid ${({theme}) => theme.colors.borderColor};
	word-break: break-word;

   &:last-child {
	   margin-bottom: 0px;
   }

   ${({hidden}) => hidden && css`
      display: none;
   `}

   @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
		grid-template-columns: 40px 1fr 40px;
   }
`;

export const Content = styled.span`
   ${({done}) => done && css`
      text-decoration: line-through;
   `}
`;

export const Button = styled.button`
   width: 30px;
	height: 30px;
	padding: 0;
	border: none;
	background-color: rgb(70, 129, 2);
	cursor: pointer;
	justify-self: center;
	transition: background-color .3s, border .1s;
	box-shadow: 1px 2px 3px #000;
   
   &:hover{
	   background-color: hsl(88, 97%, 21%);
      }

   &:active{
	   transform: translate(2px,2px);
   	box-shadow: none;
   }

   @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
      justify-self: start;  
   }

   ${({toggleDone}) => toggleDone && css`
      background-image: url("${arrow}");
      background-repeat: no-repeat;
      background-position: 50% 4px;
   `}

   ${({remove}) => remove && css`
      background: url("${basket}") 50% no-repeat;
      background-color: rgb(216, 47, 35);

      &:hover{
         background-color: hsl(4, 72%, 54%);
      }

      @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
		   justify-self: end;
      }
   `}
`;