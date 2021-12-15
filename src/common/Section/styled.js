import styled from "styled-components";

export const Wrapper = styled.div`
   background-color: #fff;
	margin: 15px 0;
	box-shadow: 0px 0px 3px #aa9d9d;
`;

export const Header = styled.div`
   padding: 20px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
   padding: 10px;
   }
`;

export const HeaderTitle = styled.h2`
	margin: 0;

   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
   flex-basis: 100%;
	margin-bottom: 15px;
   }
`;

