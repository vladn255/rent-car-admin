import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUrlProps } from "../../../globals/types"
import { IOrderState, IResponse, TParsedSelectors, TFilterData, TFormData } from "./types";

import { fetchOrders, fetchCities, fetchCars, fetchStatuses } from "./api-actions";


const initOrdersTable = createAsyncThunk(
    'cars/initOrdersTable',
    async ({ page, limit, filters }: IUrlProps) => {
        const [orders, cities, cars, statuses]: [IResponse, TParsedSelectors, TParsedSelectors, TParsedSelectors] = await Promise.all([
            (fetchOrders({ page, limit, filters })),
            (fetchCities()),
            (fetchCars()),
            (fetchStatuses()),
        ])
        const response = { orders, cities, cars, statuses }
        return response
    }
)

const initialState: IOrderState = {
    ordersCount: 0,
    ordersList: [],
    isLoading: true,
    page: 1,
    filters: [],
    formData: [],

    citySelects: [],
    carSelects: [],
    statusSelects: []
}

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<number>) { state.page = action.payload },
        setCurrentFilters(state, action: PayloadAction<TFilterData>) { state.filters = action.payload },
        setOrdersFormData(state, action: PayloadAction<TFormData>) { state.formData = action.payload },
        resetOrdersError(state) { state.loadingError = undefined }
    },
    extraReducers: (builder) => {
        builder.addCase(initOrdersTable.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(initOrdersTable.fulfilled, (state, action) => {
            state.ordersCount = action.payload.orders.count
            state.ordersList = action.payload.orders.data
            state.citySelects = action.payload.cities
            state.carSelects = action.payload.cars
            state.statusSelects = action.payload.statuses
            state.isLoading = false
        })
        builder.addCase(initOrdersTable.rejected, (state, action) => {
            state.loadingError = action.error.message
        })
    }
})

export default ordersSlice.reducer
export const { setCurrentPage, setCurrentFilters, setOrdersFormData, resetOrdersError } = ordersSlice.actions
export { initOrdersTable }