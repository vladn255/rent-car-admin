import React from 'react'
import { useDispatch } from 'react-redux'

import { setSelectedTab } from '../../store/slices/general/general'
import { ErrorContainer, ErrorMessage, StyledHeader, StyledText } from './styles'

import Button from '../button/button'

interface IErrorScreenProps {
    error: string,
    resetError: () => void
}


const ErrorScreen: React.FC<IErrorScreenProps> = ({ error, resetError }) => {
    const dispatch = useDispatch()

    const handleButtonClick = (evt: React.SyntheticEvent) => {
        evt.preventDefault()
        dispatch(setSelectedTab(''))
        resetError()
    }

    return (
        <ErrorContainer>
            <ErrorMessage>{error}</ErrorMessage>
            <StyledHeader>Что-то пошло не так</StyledHeader>
            <StyledText>Попробуйте перезагрузить страницу</StyledText>
            <Button title={'Назад'} type='button' clickHandler={handleButtonClick} />
        </ErrorContainer>
    )
}

export default ErrorScreen