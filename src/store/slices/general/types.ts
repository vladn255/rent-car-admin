interface IAuthState {
    authorized: boolean,
    accessToken: string | null,
    loading: 'idle' | 'pending',
    loadingError: boolean
}

interface ILoginResponse {
    token_type: string,
    access_token: string,
    expires_in: number,
    refresh_token: string,
    user_id: string
}

export type { IAuthState, ILoginResponse }