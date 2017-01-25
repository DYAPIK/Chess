interface IReduxState {
    boardSize: number[];
    literals: string[],
}

interface IAction {
    payload?: { [key: string]: any } | number | string | null;
    type: string;
}

export {
    IReduxState,
    IAction
}