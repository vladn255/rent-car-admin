import styled from "styled-components";

import { Colors, DRAWER_WIDTH, BreakPoints } from "../../styles/style-const";

const FooterWrapper = styled.footer`
    background-color: ${Colors.WHITE};
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 26px 27px;    
           
    @media (min-width: ${BreakPoints.md}px) {
                width: calc(100% - ${DRAWER_WIDTH}px);
                margin-left: ${DRAWER_WIDTH}px;
            };
            box-shadow: 0px 2.5px 9.5px rgba(90, 97, 105, 0.12);
            min-height: 68px;
`;

const LinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Link = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${Colors.WHITE};

    text-decoration: none;
    font-size: 14px;
    line-height: 16px;
    color: ${Colors.MAIN_BLUE};

    padding: 0;
    margin-right: 16px;
    cursor: pointer;
`;

const Copyright = styled.p`
    margin: 0;
    padding: 0;

    font-size: 14px;
    line-height: 16px;
`;

export { FooterWrapper, Link, LinkWrapper, Copyright }