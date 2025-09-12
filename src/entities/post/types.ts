export interface IPost {
    id: number,
    deleted?: boolean,
    type: 'job' | 'story' | 'ask' | 'comment' | 'poll' | 'pollopt',
    time: number,
    text: string,
    dead?: boolean,
    parent?: number,
    poll?: number,
    kids?: number[],
    url?: string,
    score?: number,
    title?: string,
    descendants?: number
}