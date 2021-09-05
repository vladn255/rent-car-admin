import styled from "styled-components";

import { Colors, FontFamilies } from "../../styles/style-const";

const Fieldset = styled.fieldset`
    border: none;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Legend = styled.legend`
    font-family: ${FontFamilies.SECONDARY};
    font-size: 18px;
    line-height: 20px;
    text-align: center;

    margin-bottom: 30px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const AccessButton = styled.button`
    color: ${Colors.MAIN_BLUE};
    background: ${Colors.WHITE};
    border: none;
    padding: 0;
    cursor: pointer;
    font-size: 12px;
    line-height: 14px;

    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 110px;
    min-height: 30px;
`;

const ErrorMessage = styled.p`
    font-size: 10px;
    line-height: 11px;
    color: ${Colors.ERROR_RED};
`;

export { Fieldset, Legend, ButtonWrapper, AccessButton, ErrorMessage }