import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUrlProps } from "../../../globals/types"
import { IOrderState, IResponse, TParsedSelectors, TFilterData, TFormData } from "./types";

import { fetchOrders, fetchCities, fetchCars, fetchStatuses } from "./api-actions";

const getOrders = createAsyncThunk(
    'orders/fetchOrders',
    async ({ page, limit, filters }: IUrlProps) => {
        const response = await fetchOrders({ page, limit, filters })
        return (await response) as IResponse
    }
)

const getCitySelects = createAsyncThunk(
    'orders/fetchCitySelects',
    async () => {
        const response = await fetchCities()
        return (await response) as TParsedSelectors
    }
)

const getCarSelects = createAsyncThunk(
    'orders/fetchCarSelects',
    async () => {
        const response = await fetchCars()
        return (await response) as TParsedSelectors
    }
)

const getStatusSelects = createAsyncThunk(
    'orders/fetchStatusSelects',
    async () => {
        const response = await fetchStatuses()
        return (await response) as TParsedSelectors
    }
)

const initialState: IOrderState = {
    ordersCount: 0,
    ordersList: [],
    loadingError: false,

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
    },
    extraReducers: (builder) => {
        builder.addCase(getOrders.fulfilled, (state, action) => {
            state.ordersCount = action.payload.count
            state.ordersList = action.payload.data
        })
        builder.addCase(getOrders.rejected, (state) => {
            state.loadingError = true
        })

        builder.addCase(getCitySelects.fulfilled, (state, action) => {
            state.citySelects = action.payload
        })
        builder.addCase(getCitySelects.rejected, (state) => {
            state.loadingError = true
        })

        builder.addCase(getCarSelects.fulfilled, (state, action) => {
            state.carSelects = action.payload
        })
        builder.addCase(getCarSelects.rejected, (state) => {
            state.loadingError = true
        })

        builder.addCase(getStatusSelects.fulfilled, (state, action) => {
            state.statusSelects = action.payload
        })
        builder.addCase(getStatusSelects.rejected, (state) => {
            state.loadingError = true
        })
    }
})

export default ordersSlice.reducer
export const { setCurrentPage, setCurrentFilters, setOrdersFormData } = ordersSlice.actions
export { getOrders, getCitySelects, getCarSelects, getStatusSelects }