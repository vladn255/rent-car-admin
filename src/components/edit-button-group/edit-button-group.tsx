import { ButtonGroup, Button } from "@material-ui/core"
import { MoreVert, Clear } from '@material-ui/icons';

import { useStyles } from "./styles";
import { IEditButtonGroupProps } from "./types"


const EditButtonGroup: React.FC<IEditButtonGroupProps> = ({ handleEditClick, handleDeleteClick }) => {
    const { groupRoot, buttonRoot, iconSizeMedium, rejectStartIcon, editStartIcon } = useStyles()

    return (
        <ButtonGroup classes={{ root: groupRoot }} disableRipple={true}>

            <Button classes={{ root: buttonRoot, iconSizeMedium: iconSizeMedium, startIcon: rejectStartIcon }} startIcon={<Clear />} onClick={handleDeleteClick}>Удалить</Button>
            <Button classes={{ root: buttonRoot, iconSizeMedium: iconSizeMedium, startIcon: editStartIcon }} startIcon={<MoreVert />} onClick={handleEditClick}>Изменить</Button>
        </ButtonGroup>
    )
}

export default EditButtonGroup