interface IAuthState {
    authorized: boolean,
    accessToken: string | null,
    loading: 'idle' | 'pending',
    loadingError: boolean
}

export type { IAuthState }