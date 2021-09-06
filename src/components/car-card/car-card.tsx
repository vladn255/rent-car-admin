import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Grid, IconButton } from "@material-ui/core"
import CloseIcon from '@material-ui/icons/Close';

import CarCardPreview from "./car-card-preview/car-card-preview"
import CarCardForm from "./car-card-form/car-card-form"

import { useStyles } from './styles'
import { RootState } from "../../store/store";
import { getCategories, resetActiveCard, postCarData, putCarData, deleteCarData } from '../../store/slices/cars/cars-slice'
import { ICarCardState } from './types'

const emptyCard = {
    name: '',
    description: '',
    categoryId: {},
    priceMax: 0,
    thumbnail: {},
    priceMin: 0,
    number: '',
    tank: 0,
    colors: [],
    id: null
}

const CarCard: React.FC = () => {
    const {
        typographyH2,
        gridPreview,
        gridForm,
        snackbarOpen,
        snackbarClosed,
        snackbarMessage,
        iconButtonRoot
    } = useStyles()

    const dispatch = useDispatch()

    const categories = useSelector((state: RootState) => state.cars.categorySelects)
    const activeCarCard = useSelector((state: RootState) => state.cars.activeCard)
    const isLoading = useSelector((state: RootState) => state.cars.isLoading)
    const isLoadingSuccessful = useSelector((state: RootState) => state.cars.isLoadingSuccessful)

    const [isCardSet, setIsCardSet] = useState(false)
    const [cardData, setCarData] = useState<ICarCardState>(emptyCard)
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)
    const [isDeleteAvailable, setIsDeleteAvailable] = useState(false)
    const [isSuccessfulStatus, setIsSuccessfulStatus] = useState(false)

    const setPickedCard = (card: ICarCardState) => {
        const { id, categoryId, colors, description, name, number, priceMax, priceMin, thumbnail, tank } = card
        setCarData({ id, categoryId, colors, description, name, number, priceMax, priceMin, thumbnail, tank })
        setIsDeleteAvailable(true)
    }

    const setEmptyCard = () => {
        setCarData(emptyCard)
        setIsDeleteAvailable(false)
    }

    const initCarCard = () => {
        activeCarCard
            ? setPickedCard(activeCarCard)
            : setEmptyCard()
        setIsCardSet(true)
    }

    const getFormData = (formData: { [key: string]: any }) => {
        const newCardData = Object.assign({ ...cardData }, { ...formData })
        setCarData(newCardData)
    }

    const getPreviewData = (previewData: { [key: string]: any }) => {
        const newCardData = Object.assign({ ...cardData }, { ...previewData })
        setCarData(newCardData)
    }


    const handleSnackbarClose = (evt?: React.SyntheticEvent) => {
        evt?.preventDefault()
        setIsSnackbarOpen(false)
    }

    const handleCreateNewClick = () => {
        dispatch(resetActiveCard())
        setCarData(emptyCard)
        setIsDeleteAvailable(false)
    }

    const handleSaveClick = (evt: React.SyntheticEvent) => {
        evt.preventDefault()
        const { categoryId, colors, description, name, number, priceMax, priceMin, thumbnail, tank } = cardData
        const postData = { categoryId, colors, description, name, number, priceMax, priceMin, thumbnail, tank }

        activeCarCard?.id
            ? dispatch(putCarData({ id: activeCarCard.id, cardData: postData }))
            : dispatch(postCarData(postData))
    }

    const handleCancelClick = () => {
        activeCarCard
            ? setPickedCard(activeCarCard)
            : setEmptyCard()
    }

    const handleDeleteClick = () => {
        if (activeCarCard) {
            dispatch(deleteCarData(activeCarCard.id))
        }
    }

    if (!isCardSet && categories.length === 0) {
        dispatch(getCategories())
    }

    if (!isCardSet || (activeCarCard && activeCarCard.id !== cardData.id) || (!activeCarCard && cardData.id)) {
        initCarCard()
    }

    if (!isLoadingSuccessful && isSuccessfulStatus) {
        console.log('check failed')
        setIsSuccessfulStatus(false)
    }

    if (isLoadingSuccessful && !isSuccessfulStatus) {
        console.log('check worked')
        if (isLoadingSuccessful) {
            console.log('isLoading - true')
            setIsSuccessfulStatus(true)
            setIsSnackbarOpen(true)
        } else {
            console.log('isLoading - false')
            setIsSuccessfulStatus(false)
        }
    }


    return (
        <>
            {isLoading
                ? <h3>Данные загружаются...</h3>
                : <>
                    <div className={isSnackbarOpen ? snackbarOpen : snackbarClosed}>
                        <span className={snackbarMessage}>Успех! Машина сохранена</span>
                        <IconButton aria-label='close success message' onClick={handleSnackbarClose} classes={{ root: iconButtonRoot }}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <Typography variant="h2" classes={{ h2: typographyH2 }}>Карточка автомобиля</Typography>
                    <form>
                        <Grid container direction='row' alignItems='flex-start'>
                            <Grid item classes={{ item: gridPreview }}>
                                <CarCardPreview
                                    name={cardData.name}
                                    thumbnail={cardData.thumbnail}
                                    description={cardData.description}
                                    number={cardData.number}
                                    getPreviewData={getPreviewData} />
                            </Grid>

                            <Grid item classes={{ item: gridForm }}>
                                <CarCardForm
                                    carFormData={{
                                        name: cardData.name,
                                        categoryId: cardData.categoryId,
                                        number: cardData.number,
                                        priceMin: cardData.priceMin,
                                        priceMax: cardData.priceMax,
                                        tank: cardData.tank,
                                        colors: cardData.colors
                                    }}
                                    categories={categories}
                                    isDelete={isDeleteAvailable}
                                    getFormData={getFormData}
                                    handleCreateNewClick={handleCreateNewClick}
                                    handleSaveClick={handleSaveClick}
                                    handleCancelClick={handleCancelClick}
                                    handleDeleteClick={handleDeleteClick}
                                />
                            </Grid>
                        </Grid>
                    </form>
                </>
            }
        </>
    )
}

export default CarCard