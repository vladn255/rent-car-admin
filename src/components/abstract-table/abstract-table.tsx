import React, { useState } from "react";
import { Divider } from '@material-ui/core'

import { setCurrentFilters, setCurrentPage } from "../../store/slices/orders/orders-slice"

import SelectForm from '../select-form/select-form';
import TableElement from '../table-element/table-element';
import PaginationBar from '../pagination-bar/pagination-bar';

import { TFilterData, ITableProps } from './types'
import { useDispatch } from "react-redux";


const AbstractTable: React.FC<ITableProps> = ({
    isLoading,
    limit,
    querySelector,
    dataList,
    dataCount,
    selectData,
    selectMap,
    getTableCallback
}) => {

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
        </>
    );
}

export default AbstractTable