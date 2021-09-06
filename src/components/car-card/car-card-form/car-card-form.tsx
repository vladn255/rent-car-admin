import React, { useRef, useState } from "react"
import { Typography, Paper, FormControlLabel, Checkbox } from "@material-ui/core"

import Button from '../../button/button'

import { ICarFormProps } from './types'
import {
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
} from './styles'

const PRICE_STEP = 1000

const CarCardForm: React.FC<ICarFormProps> = ({ carFormData, categories, isDelete, getFormData, handleCreateNewClick, handleSaveClick, handleCancelClick, handleDeleteClick }) => {
    const {
        typographyH4,
        boxDivider,
        paperForm,
        buttonsBox,
        buttonsWrapperBox,
        labelTypography,
        checkboxRoot,
        icon,
        checkedIcon,
        formLabelRoot
    } = useStyles()


    const colorRef = useRef<HTMLInputElement>(null)
    const [currentForm, setCurrentForm] = useState(carFormData)
    const [currentColors, setCurrentColors] = useState(carFormData.colors)
    const [categoriesList, setCategoriesList] = useState(categories)
    const [colorValue, setColorValue] = useState('')
    const [activeColors, setActiveColors] = useState(new Set(carFormData.colors))


    const setPassedFormData = () => {
        setCurrentForm(carFormData)
        setCurrentColors(carFormData.colors)
    }

    const isColorActive = (color: string) => activeColors.has(color)

    const handleTextInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        evt.preventDefault()
        const newFormData: any = { ...currentForm }
        newFormData[evt.target.name] = evt.target.value
        setCurrentForm(newFormData)
        getFormData(newFormData)
    }

    const handleCategoryInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        evt.preventDefault()
        const targetCategoryId = categoriesList.find((category) => category.name === evt.target.value)
        const newFormData: any = { ...currentForm }
        if (targetCategoryId) {
            newFormData.categoryId = targetCategoryId
            setCurrentForm(newFormData)
            getFormData(newFormData)
        } else {
            newFormData.categoryId = null
            setCurrentForm(newFormData)
            getFormData(newFormData)
        }
    }

    const handleActiveColorChange = (name: string) => {
        const newActiveColors = new Set(activeColors)
        newActiveColors?.has(name)
            ? newActiveColors.delete(name)
            : newActiveColors.add(name)
        setActiveColors(newActiveColors)

        const colorsArray = Array.from(newActiveColors)
        const newFormData = Object.assign(currentForm, { colors: colorsArray })
        setCurrentForm(newFormData)
        getFormData(newFormData)
    }

    const handleColorChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        evt.preventDefault()
        if (colorRef.current?.value) {
            setColorValue(colorRef.current.value)
        }
    }

    const handleColorInputClick = (evt: React.SyntheticEvent) => {
        evt.preventDefault()
        if (currentColors && colorRef.current?.value) {
            const newColors = [
                ...currentColors,
                colorRef.current.value
            ]
            setCurrentColors(newColors)
            setColorValue('')
        } else if (!currentColors && colorRef.current?.value) {
            const newColors = [
                colorRef.current.value
            ]
            setCurrentColors(newColors)
            setColorValue('')
        }
    }

    if (currentForm !== carFormData || categoriesList !== categories) {
        setCurrentForm(carFormData)
        setCategoriesList(categories)
    }


    return (
        <Paper classes={{ root: paperForm }}>
            <Typography variant="h4" classes={{ h4: typographyH4 }}>Настройки автомобиля</Typography>
            <FormGridContainer>
                <StyledNameInput
                    name={'name'}
                    id={'name'}
                    type={'text'}
                    label={'Модель автомобиля'}
                    placeholder={'Введите марку автомобиля'}
                    value={currentForm.name}
                    changeHandler={handleTextInputChange}
                />
                <StyledCategoryInput
                    name={'category'}
                    id={'category'}
                    type={''}
                    list={'category-list'}
                    label={'Тип автомобиля'}
                    placeholder={'Введите тип автомобиля'}
                    value={currentForm.categoryId?.name}
                    changeHandler={handleCategoryInputChange}
                />
                <datalist id={'category-list'}>
                    {categoriesList.map((category, id) => <option key={id} value={category.name} />)}
                </datalist>
                <StyledNumberInput
                    name={'number'}
                    id={'number'}
                    type={'text'}
                    label={'Номер автомобиля'}
                    placeholder={'Введите номер автомобиля'}
                    value={currentForm.number}
                    changeHandler={handleTextInputChange}
                />
                <StyledPriceMinInput
                    name={'priceMin'}
                    id={'priceMin'}
                    type={'number'}
                    step={PRICE_STEP}
                    label={'Минимальная цена'}
                    placeholder={'Введите минимальную цену'}
                    value={`${currentForm.priceMin}`}
                    changeHandler={handleTextInputChange}
                />
                <StyledPriceMaxInput
                    name={'priceMax'}
                    id={'priceMax'}
                    type={'number'}
                    step={PRICE_STEP}
                    label={'Максимальная цена'}
                    placeholder={'Введите максимальную цену'}
                    value={currentForm.priceMax}
                    changeHandler={handleTextInputChange}
                />
                <StyledTankInput
                    name={'tank'}
                    id={'tank'}
                    type={'number'}
                    label={'Топливо в баке'}
                    placeholder={'Введите объем топлива в баке'}
                    value={currentForm.tank}
                    changeHandler={handleTextInputChange}
                />
                <ColorsWrapper>
                    <StyledColorTextInput
                        name={'colors'}
                        id={'colors'}
                        type={'text'}
                        label={'Доступные цвета'}
                        placeholder={'Введите новый цвет'}
                        ref={colorRef}
                        value={colorValue}
                        changeHandler={handleColorChange}
                    />
                    <AddColorButton aria-label={'добавить цвет'} onClick={handleColorInputClick} />
                </ColorsWrapper>
                <ColorsCheckboxes>
                    {currentColors?.map((color, id) => <FormControlLabel
                        key={id}
                        classes={{ root: formLabelRoot, label: labelTypography }}
                        checked={isColorActive(color)}
                        onChange={(evt) => {
                            evt.preventDefault()
                            handleActiveColorChange(color)
                        }}
                        control={<Checkbox checked={isColorActive(color)} name={color} classes={{ root: checkboxRoot }}
                            checkedIcon={<span className={`${icon} ${checkedIcon}`} />}
                            icon={<span className={icon} />} />}
                        label={color}
                    />)}
                </ColorsCheckboxes>
            </FormGridContainer>

            <div className={boxDivider} />

            <div className={buttonsBox}>
                <div className={buttonsWrapperBox}>
                    <Button title={'Сохранить'} type={'button'} clickHandler={handleSaveClick} />
                    <CancelButton title={'Отменить'} type={'button'} clickHandler={() => {
                        handleCancelClick()
                        setPassedFormData()
                    }} />
                    <CreateButton title={'Создать новую карточку'} type={'button'} clickHandler={() => {
                        handleCreateNewClick()
                        setPassedFormData()
                    }} />
                </div>
                <DeleteButton title={'Удалить'} type={'button'} isDisabled={!isDelete} clickHandler={handleDeleteClick} />
            </div>
        </Paper>
    )
}

export default CarCardForm