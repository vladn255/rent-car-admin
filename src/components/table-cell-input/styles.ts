import styled from "styled-components";

import { Colors } from "../../styles/style-const";

const StyledInput = styled.input`
    outline: none;
    border: 2px solid ${Colors.FONT_BLACK};
    background-color: transparent;
    width: 100%;

    text-align: center;
    font-size: 12px;
    line-height: 14px;
    color: ${Colors.FONT_GREY};

    &:disabled {
        border: none;
    }
`

export { StyledInput }