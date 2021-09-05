import styled from 'styled-components'

import { Colors, FontFamilies } from '../../styles/style-const';

const Select = styled.select`
    background: ${Colors.WHITE};
    border: 0.5px solid ${Colors.BORDER_GREY};
    box-sizing: border-box;
    border-radius: 4px;
    
    font-family: ${FontFamilies.SECONDARY};
    font-size: 11px;
    line-height: 13px;
    color: ${Colors.FONT_GREY};

    display: flex;
    align-items: center;
    padding-left: 14px;
    padding-right: 10px;
    min-width: 110px;
    min-height: 29px;

    margin-right: 15px;
`;

export { Select }