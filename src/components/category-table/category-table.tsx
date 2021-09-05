import React, { useEffect } from "react";
import { TableBody, TableHead, TableRow, TableCell } from '@material-ui/core'

import { getCategories, setCurrentFilters, setCurrentPage } from "../../store/slices/categories/categories-slice"
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';

import CategoryRow from '../category-row/category-row';
import AbstractTable from '../abstract-table/abstract-table'

import { TCategoriesList } from '../../store/slices/categories/types';


const TABLE_NAME = 'Список категорий'
const LIMIT = 7
const QUERY_SELECTOR = ''


const CategoriesTable: React.FC = () => {
    const dispatch = useDispatch()

    const page = useSelector((state: RootState) => state.categories.page)
    const filterData = useSelector((state: RootState) => state.categories.filters)
    const currentCategories = useSelector((state: RootState) => state.categories.categoriesList)
    const categoriesCount = useSelector((state: RootState) => state.categories.categoriesCount)
    const isLoading = useSelector((state: RootState) => state.categories.isLoading)


    useEffect(() => {
        dispatch(getCategories({ page, limit: LIMIT, filters: filterData }))
    }, [page, filterData])


    const getTableCategories = (categories: TCategoriesList) => {
        return <>
            <TableHead>
                <TableRow>
                    <TableCell align="center">Название</TableCell>
                    <TableCell align="center">Описание</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {categories.map((category) => {
                    return <CategoryRow key={category.id} categoryData={category} />
                })}
            </TableBody>
        </>
    }

    return (
        <AbstractTable
            name={TABLE_NAME}
            isLoading={isLoading}
            querySelector={QUERY_SELECTOR}
            dataList={currentCategories}
            dataCount={categoriesCount}
            limit={LIMIT}
            selectData={[]}
            selectMap={[]}
            getTableCallback={getTableCategories}
            setCurrentFilters={setCurrentFilters}
            setCurrentPage={setCurrentPage}
        />
    );
}

export default CategoriesTable