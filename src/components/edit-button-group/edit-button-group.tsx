import { ButtonGroup, Button } from "@material-ui/core"
import { MoreVert, Check, Clear } from '@material-ui/icons';

import { useStyles } from "./styles";


const EditButtonGroup: React.FC = () => {
    const { groupRoot, buttonRoot, iconSizeMedium, approveStartIcon, rejectStartIcon, editStartIcon } = useStyles()

    return (
        <ButtonGroup classes={{ root: groupRoot }} disableRipple={true}>
            <Button classes={{ root: buttonRoot, iconSizeMedium:iconSizeMedium, startIcon: approveStartIcon }} startIcon={<Check />}>Готово</Button>
            <Button classes={{ root: buttonRoot, iconSizeMedium:iconSizeMedium, startIcon: rejectStartIcon }} startIcon={<Clear />}>Отмена</Button>
            <Button classes={{ root: buttonRoot, iconSizeMedium:iconSizeMedium, startIcon: editStartIcon }} startIcon={<MoreVert />}>Изменить</Button>
        </ButtonGroup>
    )
}

export default EditButtonGroup