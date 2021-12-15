import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 20px;
    display: inline-block;
`;

export const Paragraph = styled.p`
    border-bottom: 1px solid ${({ theme }) =>
        theme.colors.borderColor};
`;

export const Strong = styled.strong`
    letter-spacing: 1.1px;
`;