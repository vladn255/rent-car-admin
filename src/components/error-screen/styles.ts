import styled from "styled-components";

import { Colors } from "../../styles/style-const";

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    margin-top: 15vh;
    padding-left: 40px;
    padding-right: 40px;
`

const ErrorMessage = styled.h3`
    font-size: 70px;
    line-height: 80px;
    text-align: center;
    margin: 0;
    padding: 0;
    margin-bottom: 13px;
    color: ${Colors.ICON_GREY};
`

const StyledHeader = styled.h5`
    font-size: 50px;
    line-height: 57px;
    text-align: center;
    margin: 0;
    padding: 0;
    margin-bottom: 15px;
`

const StyledText = styled.p`
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    margin: 0;
    padding: 0;
    margin-bottom: 35px;
    color: ${Colors.FONT_GREY};
`

export { ErrorContainer, ErrorMessage, StyledHeader, StyledText }