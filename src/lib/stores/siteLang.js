import { writable } from 'svelte/store'

const languages = [
    { lang: 'az', title: 'AZ', active: true },
    { lang: 'ru', title: 'RU', active: false },
    { lang: 'en', title: 'EN', active: false },
    { lang: 'tr', title: 'TR', active: false },
]

export const siteLang = writable(languages)