import { Typography, Paper, FormControlLabel, Checkbox } from "@material-ui/core"

import Button from '../../button/button'

import {
    useStyles,
    StyledTextInput,
    StyledColorTextInput,
    FormGridContainer,
    ColorsWrapper,
    ColorsCheckboxes,
    AddColorButton,
    CancelButton,
    DeleteButton
} from './styles'

const CarCardForm: React.FC = () => {
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

    return (
        <Paper classes={{ root: paperForm }}>
            <Typography variant="h4" classes={{ h4: typographyH4 }}>Настройки автомобиля</Typography>
            <FormGridContainer>
                <StyledTextInput
                    name={'name'}
                    id={'name'}
                    type={'text'}
                    label={'Модель автомобиля'}
                    placeholder={'Введите марку автомобиля'}
                    value={''}
                />
                <StyledTextInput
                    name={'category'}
                    id={'category'}
                    type={'text'}
                    label={'Тип автомобиля'}
                    placeholder={'Введите тип автомобиля'}
                    value={''}
                />
                <datalist id={'category'}>
                    <option value={1} />
                    <option value={2} />
                    <option value={3} />
                </datalist>
                <ColorsWrapper>
                    <StyledColorTextInput
                        name={'colors'}
                        id={'colors'}
                        type={'text'}
                        label={'Доступные цвета'}
                        placeholder={'Введите новый цвет'}
                        value={''}
                    />
                    <AddColorButton aria-label={'добавить цвет'} />
                </ColorsWrapper>
                <ColorsCheckboxes>
                    <FormControlLabel classes={{ root: formLabelRoot, label: labelTypography }} checked={true}
                        control={<Checkbox checked={true} name={'name1'} classes={{ root: checkboxRoot }}
                            checkedIcon={<span className={`${icon} ${checkedIcon}`} />}
                            icon={<span className={icon} />} />}
                        label={'label1'}
                    />
                    <FormControlLabel classes={{ root: formLabelRoot, label: labelTypography }} checked={true}
                        control={<Checkbox checked={true} name={'name2'} classes={{ root: checkboxRoot }}
                            checkedIcon={<span className={`${icon} ${checkedIcon}`} />}
                            icon={<span className={icon} />} />}
                        label={'label2'}
                    />
                </ColorsCheckboxes>
            </FormGridContainer>

            <div className={boxDivider} />

            <div className={buttonsBox}>
                <div className={buttonsWrapperBox}>
                    <Button title={'Сохранить'} type={'button'} />
                    <CancelButton title={'Отменить'} type={'button'} />
                </div>
                <DeleteButton title={'Удалить'} type={'button'} />
            </div>
        </Paper>
    )
}

export default CarCardForm