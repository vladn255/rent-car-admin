import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IGeneralState {
    selectedTab: string
}

const initialState: IGeneralState = {
    selectedTab: ''
}

const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setSelectedTab: (state, action: PayloadAction<string>) => {
            state.selectedTab = action.payload
        },
    },
    extraReducers: {

    }
})

export const { setSelectedTab } = generalSlice.actions
export default generalSlice.reducer