interface IReduxState {
    boardSize: number[];
}

interface IAction {
    payload?: { [key: string]: any } | number | string | null;
    type: string;
}

export {
    IReduxState,
    IAction
}