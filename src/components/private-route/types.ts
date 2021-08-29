interface IPrivateRoute {
    render: (props: any) => JSX.Element,
    path: string,
    exact: boolean
}

export type { IPrivateRoute }