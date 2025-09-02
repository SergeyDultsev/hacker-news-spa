import packageJson from "/package.json"

export const AUTHOR: string = packageJson.author.name;

interface IContact {
    title: string,
    link: string
}

export const CONTACT_AUTHOR: IContact[] = [
    {
        title: "GitHub",
        link: packageJson.author.github
    },
    {
        title: "Telegram",
        link: packageJson.author.telegram
    }
];