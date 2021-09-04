import { makeStyles, createStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

import TextInput from '../../text-input/text-input';
import Button from '../../button/button'
import { Colors } from '../../../styles/style-const';

const StyledTextInput = styled(TextInput)`
    max-width: 320px;
`

const StyledNameInput = styled(StyledTextInput)`
    grid-area: name
`

const StyledCategoryInput = styled(StyledTextInput)`
    grid-area: category
`

const StyledNumberInput = styled(StyledTextInput)`
    grid-area: number
`

const StyledPriceMinInput = styled(StyledTextInput)`
    grid-area: priceMin
`

const StyledPriceMaxInput = styled(StyledTextInput)`
    grid-area: priceMax
`

const StyledTankInput = styled(StyledTextInput)`
    grid-area: tank
`

const StyledColorTextInput = styled(TextInput)`
    max-width: 283px;
    flex-grow: 1;
    margin-right: 8px;
    margin-bottom: 0;
`

const FormGridContainer = styled.div`
    display: grid;
    grid-template-areas: 
    "name category"
    "number ."
    "priceMin priceMax"
    "tank ."
    "colors ."
    "colors-boxes .";
    column-gap: 21px;
`

const ColorsWrapper = styled.div`
    grid-area: colors;
    display: flex;
    width: 100%;
    justify-content: stretch;
    align-items: flex-end;
    margin-bottom: 16px;
`

const ColorsCheckboxes = styled.div`
    grid-area: colors-boxes;
    display: flex;
    flex-direction: column;
`

const AddColorButton = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid ${Colors.BORDER_GREY};
    border-radius: 4px;
    background-color: transparent;
    position: relative;

    cursor: pointer;

    &::before {
        content: '';
        display: block;
        width: 2px;
        height: 16px;
        background-color: ${Colors.BORDER_GREY};
        position: absolute;
        left: 14px;
        top: 7px;
    }

    &::after {
        content: '';
        display: block;
        width: 16px;
        height: 2px;
        background-color: ${Colors.BORDER_GREY};
        position: absolute;
        left: 7px;
        top: 14px;
    }

    &:hover,
    &:focus {
        border: 1px solid ${Colors.FONT_BLACK};
    }
`

const CancelButton = styled(Button)`
    background-color: ${Colors.DISABLED_GREY};
    border-color: ${Colors.DISABLED_GREY};
    color: ${Colors.FONT_BLACK};
    margin-left: 8px;
`

const CreateButton = styled(Button)`
    background-color: ${Colors.ICON_GREEN};
    border-color: ${Colors.ICON_GREEN};
    color: ${Colors.FONT_WHITE};
    margin-left: 8px;
`

const DeleteButton = styled(Button)`
    background-color: ${Colors.DELETE_RED};
    border-color: ${Colors.DELETE_RED};
`

const useStyles = makeStyles(() =>
    createStyles({
        typographyH4: {
            fontSize: '17px',
            lineHeight: '21px',
            marginBottom: '38px',
        },

        paperForm: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '18px',
            height: '100%'
        },

        boxDivider: {
            flexGrow: 1
        },

        buttonsBox: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        },

        buttonsWrapperBox: {
            display: 'flex',
            alignItems: 'center'
        },

        formLabelRoot: {
            marginLeft: '0',
            marginBottom: '8px',
        },

        labelTypography: {
            margin: 0,
            fontSize: '10px',
            lineHeight: '12px',
            color: Colors.FONT_BLACKER,
        },

        checkboxRoot: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
            paddingRight: '8px',
            cursor: 'auto',

            '&&:hover': {
                backgroundColor: 'inherit'
            }
        },

        icon: {
            width: '13px',
            height: '13px',
            border: `0.5px solid ${Colors.BORDER_GREY}`,
            cursor: 'none'
        },

        checkedIcon: {
            width: '13px',
            heigth: '13px',
            border: `0.5px solid ${Colors.MAIN_BLUE}`,
            borderRadius: '2px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: Colors.MAIN_BLUE,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.75 4.73828L7.16406 0.324219L7.75 0.910156L2.75 5.91016L0.425781 3.58594L1.01172 3L2.75 4.73828Z' fill='white'/%3E%3C/svg%3E%0A");`
        },
    }),
);

export {
    useStyles,
    StyledNameInput,
    StyledCategoryInput,
    StyledNumberInput,
    StyledPriceMinInput,
    StyledPriceMaxInput,
    StyledTankInput,
    StyledColorTextInput,
    FormGridContainer,
    ColorsWrapper,
    ColorsCheckboxes,
    AddColorButton,
    CancelButton,
    CreateButton,
    DeleteButton
}