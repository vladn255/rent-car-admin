import { Paper, Divider } from "@material-ui/core"

import ModelPhoto from "../../model-photo/model-photo"

import { useStyles, CarName, CarCategory } from './styles'

const CarCardPreview: React.FC = () => {
    const {
        paperPreview,
        dividerRoot
    } = useStyles()

    return (
        <Paper classes={{ root: paperPreview }}>
            <ModelPhoto src={''} />
            <CarName>car-name</CarName>
            <CarCategory>car-category</CarCategory>
            <input type="file" placeholder="Выберите файл" />

            <Divider classes={{ root: dividerRoot }} />
            <p>filled progression bar</p>
            <Divider classes={{ root: dividerRoot }} />
            <p>description</p>
        </Paper>
    )
}

export default CarCardPreview