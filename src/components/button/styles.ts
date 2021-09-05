import styled from "styled-components";

import { Colors } from "../../styles/style-const";

const StyledButton = styled.button`
    background: ${Colors.MAIN_BLUE};
    border: 0.5px solid ${Colors.MAIN_BLUE};
    box-sizing: border-box;
    border-radius: 4px;
    min-width: 110px;
    min-height: 30px;
    cursor: pointer;
  
    font-size: 12px;
    line-height: 14px;
    color: ${Colors.FONT_WHITE};
    text-transform: none;
  
    display: flex;
    align-items: center;
    justify-content: center;
  
    &:disabled {
      color: ${Colors.FONT_BLACK};
      opacity: 0.6;
      background: ${Colors.DISABLED_GREY};
      border: 0.5px solid ${Colors.DISABLED_GREY};
    }
`;

export default StyledButton