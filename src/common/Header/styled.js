import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
   background: ${({ theme }) => theme.colors.mainColor};
`;

export const Body = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 40px;
   padding: 15px 0;

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      margin-bottom: 20px;
      justify-content: center;
      padding: 10px 0;
   }
`;

export const Link = styled(NavLink)`
   margin: 0px;
   color: ${({ theme }) => theme.colors.white};
   font-size: 24px;
   text-decoration: none;
   font-weight: 700;
`;