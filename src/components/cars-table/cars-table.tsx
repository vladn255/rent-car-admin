import React, { useState, useEffect } from "react";
import { TableBody, TableHead, TableRow, TableCell } from '@material-ui/core'

import { initCarsTable, setCurrentFilters, setCurrentPage } from "../../store/slices/cars/cars-slice"
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';

import CarRow from '../car-row/car-row';
import AbstractTable from '../abstract-table/abstract-table'

import { TCarsList } from '../../store/slices/cars/types';
import { deleteCarData } from "../../store/slices/cars/cars-slice";
import { setSelectsOptions, getMappedSelects } from '../../globals/utils'


const TABLE_NAME = 'Список автомобилей'
const LIMIT = 7
const QUERY_SELECTOR = ''


const carsTable: React.FC = () => {
    const dispatch = useDispatch()

    const page = useSelector((state: RootState) => state.cars.page)
    const filterData = useSelector((state: RootState) => state.cars.filters)
    const currentCars = useSelector((state: RootState) => state.cars.carsList)
    const carsCount = useSelector((state: RootState) => state.cars.carsCount)
    const categorySelects = useSelector((state: RootState) => state.cars.categorySelects)
    const isLoading = useSelector((state: RootState) => state.cars.isLoading)

    const [updateStatus, setUpdateStatus] = useState(false)

    const carsSelects = [
        {
            name: 'categoryId',
            options: setSelectsOptions(categorySelects.map((category) => {
                return {
                    id: category.id,
                    value: category.name,
                    text: category.name
                }
            }), 'Все категории')
        },
    ]

    const selectMap = getMappedSelects(categorySelects.map((category) => {
        return {
            id: category.id,
            value: category.name,
            text: category.name
        }
    }))


    useEffect(() => {
        dispatch(initCarsTable({ page, limit: LIMIT, filters: filterData }))
    }, [page, filterData, updateStatus])

    const handleDeleteClick = (id: string) => {
        (async () => {
            await dispatch(deleteCarData(id))
            await dispatch(initCarsTable({ page, limit: LIMIT, filters: filterData }))
            setUpdateStatus(!updateStatus)
        })()
    }


    const getTableCars = (cars: TCarsList) => {
        return <>
            <TableHead>
                <TableRow>
                    <TableCell align="center">Фото</TableCell>
                    <TableCell align="center">Название</TableCell>
                    <TableCell align="center">Категория</TableCell>
                    <TableCell align="center">Мин.цена</TableCell>
                    <TableCell align="center">Макс.цена</TableCell>
                    <TableCell align="center">Описание</TableCell>
                    <TableCell align="center">Цвета</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {cars.map((car) => {
                    return <CarRow key={car.id} carData={car} handleDeleteClick={handleDeleteClick} />
                })}
            </TableBody>
        </>
    }

    return (
        <AbstractTable
            name={TABLE_NAME}
            isLoading={isLoading}
            querySelector={QUERY_SELECTOR}
            dataList={currentCars}
            dataCount={carsCount}
            limit={LIMIT}
            selectData={carsSelects}
            selectMap={selectMap}
            getTableCallback={getTableCars}
            setCurrentFilters={setCurrentFilters}
            setCurrentPage={setCurrentPage}
        />
    );
}

export default carsTable