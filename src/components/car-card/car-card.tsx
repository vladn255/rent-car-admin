import { Typography, Grid } from "@material-ui/core"

import CarCardPreview from "./car-card-preview/car-card-preview"
import CarCardForm from "./car-card-form/car-card-form"

import {
    useStyles,
} from './styles'

const CarCard: React.FC = () => {
    const {
        typographyH2,
        gridPreview,
        gridForm,
    } = useStyles()

    return (
        <>
            <p>snackbar</p>
            <Typography variant="h2" classes={{ h2: typographyH2 }}>Карточка автомобиля</Typography>
            <form>
                <Grid container direction='row' alignItems='flex-start'>
                    <Grid item classes={{ item: gridPreview }}>
                        <CarCardPreview />
                    </Grid>

                    <Grid item classes={{ item: gridForm }}>
                        <CarCardForm />
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default CarCard