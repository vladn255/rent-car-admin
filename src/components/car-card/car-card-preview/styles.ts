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

export { useStyles, CarName, CarCategory }