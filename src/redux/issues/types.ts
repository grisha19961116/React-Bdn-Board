export type Tissue = {
    id: number,
    number: number,
    title: string,
    comments: number,
    created_at: string,
    updated_at: string,
    closed_at: string,
    user: {
        login: string,
        avatar_url: string,
    },
}
export type TIssues = Tissue[][]

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






