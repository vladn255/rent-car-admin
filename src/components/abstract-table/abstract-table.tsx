import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Divider, Typography, Paper } from '@material-ui/core'

import SelectForm from '../select-form/select-form';
import TableElement from '../table-element/table-element';
import PaginationBar from '../pagination-bar/pagination-bar';

import { TFilterData, ITableProps } from './types'
import { useStyles } from './styles'


const AbstractTable: React.FC<ITableProps> = ({
    name,
    isLoading,
    limit,
    querySelector,
    dataList,
    dataCount,
    selectData,
    selectMap,
    getTableCallback,
    setCurrentFilters,
    setCurrentPage
}) => {

    const { typographyBody1, paperRoot } = useStyles();

    const dispatch = useDispatch()

    const [page, setPage] = useState(1)

    const setPageHandler = (page: number) => {
        setPage(page)
        dispatch(setCurrentPage(page))
    }

    const pageCount = (Math.floor(dataCount / limit))

    const getFilteredData = (data: TFilterData) => {

        const queryReadyData = data.map((filter) => {
            return {
                name: `${filter.name}${querySelector}`,
                value: selectMap.get(filter.value)
            }
        })

        dispatch(setCurrentFilters(queryReadyData))
    }

    return (
        <>
            <Typography classes={{ body1: typographyBody1 }}>{name}</Typography>
            <Paper classes={{ root: paperRoot }}>
                {isLoading
                    ? <h3>Данные загружаются</h3>
                    : <>
                        <SelectForm submitCallback={getFilteredData} selectInputData={selectData} />
                        <Divider />
                        <TableElement dataList={dataList} getTable={getTableCallback} />
                        <Divider />
                        <PaginationBar count={pageCount} page={page} callback={setPageHandler} />
                    </>
                }
            </Paper>
        </>
    );
}

export default AbstractTable