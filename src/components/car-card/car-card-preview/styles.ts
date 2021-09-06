import { makeStyles, createStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { FontFamilies, Colors } from '../../../styles/style-const';

const CarName = styled.h3`
    font-family: ${FontFamilies.SECONDARY};
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    font-weight: normal;
    margin: 0;
    margin-top: 10px;
    margin-bottom: 4px;
`

const CarCategory = styled.span`
    font-family: ${FontFamilies.SECONDARY};
    font-size: 12.5px;
    line-height: 14px;
    text-align: center;
    color: ${Colors.FONT_GREY};
    margin-bottom: 10px;
`

const ModelPresentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-left: 52px;
    padding-right: 52px;
`

const ProgressBarWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 14px 22px 16px 22px;
`

const ProgressLabel = styled.label`
    font-family: ${FontFamilies.SECONDARY};
    font-size: 13px;
    line-height: 15px;  
    color: ${Colors.FONT_GREY};
    margin-bottom: 10px;
`

const ProgressValue = styled.span`
    font-size: 11px;
    line-height: 13px;  
    color: ${Colors.FONT_GREY}
`

const Progress = styled.progress`
    width: 100%;
`

const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 14px 22px 16px 22px;
`

const DescriptionLabel = styled.label`
    font-size: 13px;
    line-height: 15px;  
    color: ${Colors.FONT_GREY};
    margin-bottom: 13px;
`
const Textarea = styled.textarea`
    outline: none;
    border: none;
    resize: none;
    width: 100%;
    font-family: ${FontFamilies.PRIMARY};
    font-size: 13.5px;
    line-height: 19px;
`

const HiddenInput = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip: rect(0 0 0 0)
`

const InputFileLabel = styled.label`
    cursor: pointer;
    width: 100%;
    max-width: 231.5px;
    position: relative;
    background: ${Colors.WHITE};
    border: 0.5px solid ${Colors.BORDER_GREY};
    border-radius: 4px;
    padding: 8px 13px 9px 13px;
    margin-bottom: 23px;

    font-size: 10px;
    line-height: 12px;

    &::after {
        content: 'Обзор';
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background-color: ${Colors.DISABLED_GREY};
        height: 30px;
        width: 70px;
        position: absolute;
        top: 0;
        right: 0;
    }
`

const PlateNumber = styled.span`
    margin: 0;
    padding: 4px 8px;
    margin-bottom: 8px;

    border: 1px solid ${Colors.FONT_DARK_GREY};
    border-radius: 4px;
`

const useStyles = makeStyles(() =>
    createStyles({
        paperPreview: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '21px',
            paddingBottom: '21px'
        },

        dividerRoot: {
            width: '100%'
        }

    }),
);

export {
    useStyles,
    CarName,
    CarCategory,
    ModelPresentWrapper,
    ProgressBarWrapper,
    ProgressLabel,
    ProgressValue,
    Progress,
    DescriptionWrapper,
    DescriptionLabel,
    Textarea,
    HiddenInput,
    InputFileLabel,
    PlateNumber
}