import he from 'he';

export const htmlDecoder = (text: string) => {
    return he.decode(text)
}