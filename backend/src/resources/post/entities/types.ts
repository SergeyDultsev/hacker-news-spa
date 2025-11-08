export interface IPost {
    id: number,
    deleted?: boolean,
    type: 'job' | 'story' | 'ask' | 'poll' | 'pollopt',
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