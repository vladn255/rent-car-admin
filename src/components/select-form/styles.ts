import styled from 'styled-components'
import { BreakPoints } from '../../styles/style-const';

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
`;

const Fieldset = styled.fieldset`
    margin: 0;
    padding: 0;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${BreakPoints.lg}px) {
        flex-direction: column;
    }
`;


export { Form, Fieldset };