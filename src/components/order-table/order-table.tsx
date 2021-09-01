import React, { useEffect, useState } from "react";
import { TableBody } from '@material-ui/core'

import { getOrders, getCitySelects, getCarSelects, getStatusSelects, setCurrentFilters, setCurrentPage } from "../../store/slices/orders/orders-slice"
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';

import OrderRow from '../order-row/order-row';
import AbstractTable from '../abstract-table/abstract-table'

import { TOrderList } from '../../store/slices/orders/types';
import { setSelectsOptions, getMappedSelects } from '../../globals/utils'

const TABLE_NAME = 'Заказы'
const LIMIT = 7
const QUERY_SELECTOR = '[id]'


const OrdersTable: React.FC = () => {
    const dispatch = useDispatch()

    const page = useSelector((state: RootState) => state.orders.page)
    const filterData = useSelector((state: RootState) => state.orders.filters)
    const currentOrders = useSelector((state: RootState) => state.orders.ordersList)
    const ordersCount = useSelector((state: RootState) => state.orders.ordersCount)

    const citySelects = useSelector((state: RootState) => state.orders.citySelects)
    const carSelects = useSelector((state: RootState) => state.orders.carSelects)
    const statusSelects = useSelector((state: RootState) => state.orders.statusSelects)

    const [isLoading, setIsLoading] = useState(false)

    const ordersSelects = [

        {
            name: 'carId',
            options: setSelectsOptions(carSelects, 'Все модели')
        },
        {
            name: 'cityId',
            options: setSelectsOptions(citySelects, 'Все города')
        },
        {
            name: 'orderStatusId',
            options: setSelectsOptions(statusSelects, 'Все состояния')
        },
    ]

    const selectMap = getMappedSelects(citySelects, carSelects, statusSelects)

    const initOrders = async () => {
        setIsLoading(true)

        await Promise.all([
            (async () => await dispatch(getOrders({ page: page, limit: LIMIT, filters: filterData })))(),
            (async () => await dispatch(getCitySelects()))(),
            (async () => await dispatch(getCarSelects()))(),
            (async () => await dispatch(getStatusSelects()))(),
        ])

        setIsLoading(false)
    }

    useEffect(() => {
        initOrders()
    }, [page, filterData])


    const getTableOrders = (orders: TOrderList) => {
        return <TableBody>
            {orders.map((order) => {
                return <OrderRow key={order.id} orderData={order} />
            })}
        </TableBody>
    }

    return (
        <AbstractTable
            name={TABLE_NAME}
            isLoading={isLoading}
            querySelector={QUERY_SELECTOR}
            dataList={currentOrders}
            dataCount={ordersCount}
            limit={LIMIT}
            selectData={ordersSelects}
            selectMap={selectMap}
            getTableCallback={getTableOrders}
            setCurrentFilters={setCurrentFilters}
            setCurrentPage={setCurrentPage}
        />
    );
}

export default OrdersTable