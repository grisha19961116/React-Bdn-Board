export type TIssues = any[][]

export interface IIssuesState {
    issues: TIssues,
}

export interface IIssuesPayload {
    payload: TIssues,
}

export type TUpdateIssues = {
    columnFromIndex: number,
    itemFromIndex: number,
    columnToIndex: number,
    itemToIndex: number,
}

export interface IUpdateIssuesPayload {
    payload: {
        columnFromIndex: number,
        itemFromIndex: number,
        columnToIndex: number,
        itemToIndex: number,
    },
}






