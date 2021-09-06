import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUrlProps } from "../../../globals/types"
import {
    ICarsState,
    IResponse,
    TCategorySelectors,
    TFilterData,
    TFormData
} from "./types";
import { ICarFormData } from '../../../components/car-card/car-card-form/types'

import { fetchCars, fetchCategories, fetchCarCard, postCarCard, putCarCard, deleteCarCard } from "./api-actions";


const initCarsTable = createAsyncThunk(
    'cars/initCarsTable',
    async ({ page, limit, filters }: IUrlProps) => {
        const [cars, categories]: [IResponse, TCategorySelectors] = await Promise.all([
            (fetchCars({ page, limit, filters })),
            (fetchCategories())
        ])

        const response = { cars, categories }
        return response
    }
)

const getCategories = createAsyncThunk(
    'cars/initCarCard',
    async () => {
        const response = await fetchCategories()
        return response
    }
)

const getCarCard = createAsyncThunk(
    'cars/getCarCard',
    async (id: string) => {
        const response = await fetchCarCard(id)
        return response
    }
)

const postCarData = createAsyncThunk(
    'cars/postCarCard',
    async (cardData: ICarFormData) => {
        const response = await postCarCard(cardData)
        return response
    }
)

const putCarData = createAsyncThunk(
    'cars/putCarCard',
    async ({ id, cardData }: { id: string, cardData: ICarFormData }) => {
        const response = await putCarCard(id, cardData)
        return response
    }
)

const deleteCarData = createAsyncThunk(
    'cars/deleteCarCard',
    async (id: string) => {
        const response = await deleteCarCard(id)
        return response
    }
)


const initialState: ICarsState = {
    carsCount: 0,
    carsList: [],
    isLoading: false,
    isLoadingSuccessful: false,

    page: 1,
    filters: [],
    formData: [],

    categorySelects: [],

    activeCard: null
}

const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<number>) { state.page = action.payload },
        setCurrentFilters(state, action: PayloadAction<TFilterData>) { state.filters = action.payload },
        setCarsFormData(state, action: PayloadAction<TFormData>) { state.formData = action.payload },
        resetActiveCard(state) { state.activeCard = null },
        resetCarsError(state) { state.loadingError = undefined }
    },
    extraReducers: (builder) => {
        // cars table initialization
        builder.addCase(initCarsTable.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(initCarsTable.fulfilled, (state, action) => {
            state.carsCount = action.payload.cars.count
            state.carsList = action.payload.cars.data
            state.categorySelects = action.payload.categories
            state.isLoading = false
        })
        builder.addCase(initCarsTable.rejected, (state, action) => {
            state.loadingError = action.error.message
        })

        // get categories
        builder.addCase(getCategories.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categorySelects = action.payload
            state.isLoading = false
        })
        builder.addCase(getCategories.rejected, (state, action) => {
            state.loadingError = action.error.message
        })

        // get car card
        builder.addCase(getCarCard.pending, (state) => {
            state.isLoading = true
            state.isLoadingSuccessful = false
        })
        builder.addCase(getCarCard.fulfilled, (state, action) => {
            state.activeCard = action.payload
            state.isLoading = false
        })
        builder.addCase(getCarCard.rejected, (state, action) => {
            state.loadingError = action.error.message
        })

        // post car card
        builder.addCase(postCarData.pending, (state) => {
            state.isLoading = true
            state.isLoadingSuccessful = false
        })
        builder.addCase(postCarData.fulfilled, (state, action) => {
            state.activeCard = action.payload
            state.isLoading = false
            state.isLoadingSuccessful = true
        })
        builder.addCase(postCarData.rejected, (state, action) => {
            state.loadingError = action.error.message
        })

        // put car card
        builder.addCase(putCarData.pending, (state) => {
            state.isLoading = true
            state.isLoadingSuccessful = false
        })
        builder.addCase(putCarData.fulfilled, (state, action) => {
            state.activeCard = action.payload
            state.isLoading = false
            state.isLoadingSuccessful = true
        })
        builder.addCase(putCarData.rejected, (state, action) => {
            state.loadingError = action.error.message
        })

        // delete car card
        builder.addCase(deleteCarData.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(deleteCarData.fulfilled, (state) => {
            state.activeCard = null
            state.isLoading = false
        })
        builder.addCase(deleteCarData.rejected, (state, action) => {
            state.loadingError = action.error.message
        })
    }
})

export default carsSlice.reducer
export const { setCurrentPage, setCurrentFilters, setCarsFormData, resetActiveCard, resetCarsError } = carsSlice.actions
export { initCarsTable, getCategories, getCarCard, postCarData, putCarData, deleteCarData }