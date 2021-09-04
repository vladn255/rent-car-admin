import { TableRow, TableCell, Box } from "@material-ui/core"
import React from "react";
import { useDispatch } from "react-redux";
import { SideBarItemsNames } from "../../globals/const";
import { getCarCard } from "../../store/slices/cars/cars-slice";
import { setSelectedTab } from "../../store/slices/general/general";

import EditButtonGroup from "../edit-button-group/edit-button-group";
import ModelPhoto from "../model-photo/model-photo";
import TableCellInput from '../table-cell-input/table-cell-input'

import { useStyles } from "./styles";
import { ICar } from "./types";


const CarRow: React.FC<ICar> = ({ carData, handleDeleteClick }) => {
    const { id, thumbnail, name, description, colors, categoryId, priceMin, priceMax } = carData

    const { buttonGroupBoxRoot, colorsWrapper } = useStyles()
    const dispatch = useDispatch()

    const handleEditClick = (evt: React.SyntheticEvent) => {
        evt.preventDefault()
        dispatch(getCarCard(id))
        dispatch(setSelectedTab(SideBarItemsNames.CAR_CARD))
    }

    const onClickDelete = (evt: React.SyntheticEvent) => {
        evt.preventDefault()
        handleDeleteClick(id)
    }

    return (
        <>
            <TableRow>
                <TableCell >
                    <ModelPhoto src={thumbnail?.path} />
                </TableCell>

                <TableCell >
                    <TableCellInput value={name} />
                </TableCell>

                <TableCell >
                    <TableCellInput value={categoryId?.name} />
                </TableCell>

                <TableCell >
                    <TableCellInput value={`${priceMin} ₽`} />
                </TableCell>

                <TableCell >
                    <TableCellInput value={`${priceMax} ₽`} />
                </TableCell>

                <TableCell >
                    <TableCellInput value={description} />
                </TableCell>

                <TableCell>
                    <div className={colorsWrapper}>
                        {colors
                            ? colors.map((color, id) => <TableCellInput key={id} value={color} />)
                            : ''}
                    </div>
                </TableCell>

                <TableCell >
                    <Box className={buttonGroupBoxRoot}>
                        <EditButtonGroup handleEditClick={handleEditClick} handleDeleteClick={onClickDelete} />
                    </Box>
                </TableCell>
            </TableRow>
        </>
    )
}

export default CarRow