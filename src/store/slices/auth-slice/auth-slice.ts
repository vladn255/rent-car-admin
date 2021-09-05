import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IAuthState } from "./types";

import { fetchAuthorization } from "./api-actions";

const authorize = createAsyncThunk(
    'auth/fetchAuthorization',
    async () => {
        const response = await fetchAuthorization()
        return response.access_token
    }
)

const initialState: IAuthState = {
    authorized: false,
    accessToken: null,
    loading: 'idle',
    loadingError: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthorized: (state, action: PayloadAction<boolean>) => {
            state.authorized = action.payload
        },
        setLoadingErrorStatus: (state, action: PayloadAction<boolean>) => {
            state.loadingError = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(authorize.pending, (state) => {
            state.loading = 'pending'
        })
        builder.addCase(authorize.fulfilled, (state, action) => {
            state.loading = 'idle'
            state.authorized = true
            state.accessToken = action.payload
            sessionStorage.setItem('access token', action.payload)
        })
        builder.addCase(authorize.rejected, (state) => {
            state.loadingError = true
        })
    }
})

export const { setAuthorized, setLoadingErrorStatus } = authSlice.actions
export default authSlice.reducer
export { authorize }