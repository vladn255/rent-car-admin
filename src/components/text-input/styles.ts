import styled from "styled-components";

import { Colors } from "../../styles/style-const";
import { ICustomInputProps } from "./types";

const TextInputWrapper = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 15px;
`;

const TextInputInput = styled.input`
    font-size: 11px;
    line-height: 13px;
    background: #ffffff;
    border: ${({ isError }: ICustomInputProps) => isError ? `0.5px solid ${Colors.ERROR_RED}` : `0.5px solid ${Colors.BORDER_GREY}`};
    ${({ isError }: ICustomInputProps) => isError ? `box-shadow:0px 2.5px 5.5px ${Colors.ERROR_BORDER_RED};` : ''};
    border-radius: ${({ isError }: ICustomInputProps) => isError ? `4px` : `3px`};
     
    padding: 8px 12px;
`;

const TextInputLabel = styled.label`
    font-size: 11px;
    line-height: 12px;
    margin-bottom: 8px;
`;

const TextInputErrorMessage = styled.span`
    font-size: 10px;
    line-height: 11px;
    color: ${Colors.ERROR_RED};

    margin-left: 11px;
    margin-top: 4px;
`;

export { TextInputWrapper, TextInputInput, TextInputLabel, TextInputErrorMessage }