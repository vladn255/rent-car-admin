import { Typography, TableRow, TableCell, Checkbox, Box, FormControlLabel } from "@material-ui/core"

import { parseDateToString } from "../../globals/utils";

import ModelPhoto from "../model-photo/model-photo";

import { useStyles, GlobalCss } from "./styles";
import { IOrder } from "./types";


const OrderRow: React.FC<IOrder> = ({ orderData }) => {
    const { cityId, pointId, carId, color, dateFrom, dateTo, price, isFullTank, isNeedChildChair, isRightWheel } = orderData

    const {
        textInfo,
        textBlack,
        featuresCell,
        labelRoot,
        labelTypography,
        checkboxRoot,
        icon,
        checkedIcon,
        priceTypography
    } = useStyles()

    return (
        <>
            <GlobalCss />
            <TableRow>
                <TableCell>
                    <ModelPhoto src={carId?.thumbnail.path} />
                </TableCell>
                <TableCell>
                    <Typography classes={{ body1: textInfo }} variant="body1"><b className={textBlack}>{carId?.name}</b> в <b className={textBlack}>{cityId?.name}</b>, {pointId?.address}<br />
                        {parseDateToString(dateFrom)} - {parseDateToString(dateTo)}<br />
                        Цвет: <b className={textBlack}>{color}</b></Typography>
                </TableCell>
                <TableCell>
                    <Box className={featuresCell}>
                        <FormControlLabel classes={{ root: labelRoot, label: labelTypography }} checked={isFullTank}
                            control={<Checkbox checked={isFullTank} disabled={!isFullTank} name="isFullTank" classes={{ root: checkboxRoot }}
                                checkedIcon={<span className={`${icon} ${checkedIcon}`} />}
                                icon={<span className={icon} />} />}
                            label='Полный бак'
                        />
                        <FormControlLabel classes={{ root: labelRoot, label: labelTypography }} checked={isNeedChildChair}
                            control={<Checkbox checked={isNeedChildChair} disabled={!isNeedChildChair} name="isNeedChildChair" classes={{ root: checkboxRoot }}
                                checkedIcon={<span className={`${icon} ${checkedIcon}`} />}
                                icon={<span className={icon} />} />}
                            label='Детское кресло'
                        />
                        <FormControlLabel classes={{ label: labelTypography }} checked={isRightWheel}
                            control={<Checkbox checked={isRightWheel} disabled={!isRightWheel} name="isRightWheel" classes={{ root: checkboxRoot }}
                                checkedIcon={<span className={`${icon} ${checkedIcon}`} />}
                                icon={<span className={icon} />} />}
                            label='Правый руль'
                        />
                    </Box >
                </TableCell>
                <TableCell align={'center'}>
                    <Typography classes={{ body1: priceTypography }}>{price}&nbsp;₽</Typography>
                </TableCell>

            </TableRow>
        </>
    )
}

export default OrderRow