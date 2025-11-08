export interface IComment {
    id: number,
    deleted?: boolean,
    type: 'comment',
    by: string,
    time: number,
    text?: string,
    dead?: boolean,
    parent?: number,
    poll?: number,
    kids?: number[],
    url?: string,
    score?: number,
    title?: string,
    descendants?: number
}