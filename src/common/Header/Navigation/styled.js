import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavigation = styled.nav`
   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      flex-basis: 100%;
   }
`;

export const List = styled.ul`
   list-style: none;
   display: flex;
   padding: 0px;
   margin: 0px;

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      justify-content: center;
   }
`;

export const Item = styled.li`
   margin: 0px 0px 0px 20px;

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      margin: 10px 15px 0px;
   }
`;

export const Link = styled(NavLink)`
   color: ${({ theme }) => theme.colors.white}; 
   text-decoration: none;
   transition: color .3s;

   &:hover{
      color: ${({ theme }) => theme.colors.linen};
   }
`;