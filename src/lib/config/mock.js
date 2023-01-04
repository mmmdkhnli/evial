// const delay = ms => new Promise(res => setTimeout(res, ms))

// export const getPremiumAdvertisements = async (limitStart = null, limitEnd = null) => {
//     await delay(1000)

//     let advertisements = [
//         {
//             id: 1,
//             isPremium: true,
//             isVip: false,
//             price: 158000,
//             township: 'Nəsimi',
//             details: ['3 otaqlı', '96 m²', '1/1 mərtəbə'],
//             viewCount: 5534,
//             updatedAt: '12.05.2022'
//         },
//         {
//             id: 2,
//             isPremium: true,
//             isVip: false,
//             price: 85000,
//             township: 'Nizami',
//             details: ['2 otaqlı', '72 m²', '4/5 mərtəbə'],
//             viewCount: 6381,
//             updatedAt: '11.05.2022'
//         },
//         {
//             id: 3,
//             isPremium: true,
//             isVip: false,
//             price: 221500,
//             township: 'Nizami',
//             details: ['4 otaqlı', '120 m²', '5/9 mərtəbə'],
//             viewCount: 377,
//             updatedAt: '11.05.2022'
//         },
//         {
//             id: 4,
//             isPremium: true,
//             isVip: false,
//             price: 155100,
//             township: 'Azadlıq',
//             details: ['3 otaqlı', '73 m²', '1/1 mərtəbə'],
//             viewCount: 8734,
//             updatedAt: '10.05.2022'
//         },
//         {
//             id: 5,
//             isPremium: true,
//             isVip: false,
//             price: 128000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '91 m²', '1/4 mərtəbə'],
//             viewCount: 921,
//             updatedAt: '10.05.2022'
//         },
//         {
//             id: 6,
//             isPremium: true,
//             isVip: false,
//             price: 135000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '98 m²', '3/4 mərtəbə'],
//             viewCount: 3124,
//             updatedAt: '9.05.2022'
//         },
//         {
//             id: 7,
//             isPremium: true,
//             isVip: false,
//             price: 135000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '98 m²', '4/4 mərtəbə'],
//             viewCount: 4167,
//             updatedAt: '9.05.2022'
//         },
//         {
//             id: 8,
//             isPremium: true,
//             isVip: false,
//             price: 211000,
//             township: 'Binəqədi',
//             details: ['4 otaqlı', '121 m²', '1/1 mərtəbə'],
//             viewCount: 578,
//             updatedAt: '8.05.2022'
//         },
//         {
//             id: 9,
//             isPremium: true,
//             isVip: false,
//             price: 158000,
//             township: 'Nəsimi',
//             details: ['3 otaqlı', '96 m²', '1/1 mərtəbə'],
//             viewCount: 5534,
//             updatedAt: '12.05.2022'
//         },
//         {
//             id: 10,
//             isPremium: true,
//             isVip: false,
//             price: 85000,
//             township: 'Nizami',
//             details: ['2 otaqlı', '72 m²', '4/5 mərtəbə'],
//             viewCount: 6381,
//             updatedAt: '11.05.2022'
//         },
//         {
//             id: 11,
//             isPremium: true,
//             isVip: false,
//             price: 221500,
//             township: 'Nizami',
//             details: ['4 otaqlı', '120 m²', '5/9 mərtəbə'],
//             viewCount: 377,
//             updatedAt: '11.05.2022'
//         },
//         {
//             id: 12,
//             isPremium: true,
//             isVip: false,
//             price: 155100,
//             township: 'Azadlıq',
//             details: ['3 otaqlı', '73 m²', '1/1 mərtəbə'],
//             viewCount: 8734,
//             updatedAt: '10.05.2022'
//         },
//         {
//             id: 13,
//             isPremium: true,
//             isVip: false,
//             price: 128000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '91 m²', '1/4 mərtəbə'],
//             viewCount: 921,
//             updatedAt: '10.05.2022'
//         },
//         {
//             id: 14,
//             isPremium: true,
//             isVip: false,
//             price: 135000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '98 m²', '3/4 mərtəbə'],
//             viewCount: 3124,
//             updatedAt: '9.05.2022'
//         },
//         {
//             id: 15,
//             isPremium: true,
//             isVip: false,
//             price: 135000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '98 m²', '4/4 mərtəbə'],
//             viewCount: 4167,
//             updatedAt: '9.05.2022'
//         },
//         {
//             id: 16,
//             isPremium: true,
//             isVip: false,
//             price: 211000,
//             township: 'Binəqədi',
//             details: ['4 otaqlı', '121 m²', '1/1 mərtəbə'],
//             viewCount: 578,
//             updatedAt: '8.05.2022'
//         },
//         {
//             id: 17,
//             isPremium: true,
//             isVip: false,
//             price: 211000,
//             township: 'Binəqədi',
//             details: ['4 otaqlı', '121 m²', '1/1 mərtəbə'],
//             viewCount: 578,
//             updatedAt: '8.05.2022'
//         },
//         {
//             id: 18,
//             isPremium: true,
//             isVip: false,
//             price: 158000,
//             township: 'Nəsimi',
//             details: ['3 otaqlı', '96 m²', '1/1 mərtəbə'],
//             viewCount: 5534,
//             updatedAt: '12.05.2022'
//         },
//         {
//             id: 19,
//             isPremium: true,
//             isVip: false,
//             price: 85000,
//             township: 'Nizami',
//             details: ['2 otaqlı', '72 m²', '4/5 mərtəbə'],
//             viewCount: 6381,
//             updatedAt: '11.05.2022'
//         },
//         {
//             id: 20,
//             isPremium: true,
//             isVip: false,
//             price: 221500,
//             township: 'Nizami',
//             details: ['4 otaqlı', '120 m²', '5/9 mərtəbə'],
//             viewCount: 377,
//             updatedAt: '11.05.2022'
//         },
//         {
//             id: 21,
//             isPremium: true,
//             isVip: false,
//             price: 155100,
//             township: 'Azadlıq',
//             details: ['3 otaqlı', '73 m²', '1/1 mərtəbə'],
//             viewCount: 8734,
//             updatedAt: '10.05.2022'
//         },
//         {
//             id: 22,
//             isPremium: true,
//             isVip: false,
//             price: 128000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '91 m²', '1/4 mərtəbə'],
//             viewCount: 921,
//             updatedAt: '10.05.2022'
//         },
//         {
//             id: 23,
//             isPremium: true,
//             isVip: false,
//             price: 135000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '98 m²', '3/4 mərtəbə'],
//             viewCount: 3124,
//             updatedAt: '9.05.2022'
//         },
//         {
//             id: 24,
//             isPremium: true,
//             isVip: false,
//             price: 135000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '98 m²', '4/4 mərtəbə'],
//             viewCount: 4167,
//             updatedAt: '9.05.2022'
//         },
//         {
//             id: 25,
//             isPremium: true,
//             isVip: false,
//             price: 211000,
//             township: 'Binəqədi',
//             details: ['4 otaqlı', '121 m²', '1/1 mərtəbə'],
//             viewCount: 578,
//             updatedAt: '8.05.2022'
//         },
//     ]

//     if (!limitStart && !limitEnd) {
//         return advertisements
//     }

//     if (!limitStart && limitEnd) {
//         limitStart = 0

//         return advertisements.filter((advertisement) => {
//             return (advertisement.id + 1) >= limitStart && (advertisement.id + 1) <= limitEnd
//         })
//     }

//     if (limitStart && limitEnd) {
//         return advertisements.filter(advertisement => {
//             return advertisement.id >= limitStart && advertisement.id <= limitEnd
//         })
//     }

//     return advertisements
// }

// export const getVipAdvertisements = async (limitStart = null, limitEnd = null) => {
//     await delay(1500)

//     let advertisements = [
//         {
//             id: 26,
//             isPremium: true,
//             isVip: false,
//             price: 158000,
//             township: 'Nəsimi',
//             details: ['3 otaqlı', '96 m²', '1/1 mərtəbə'],
//             viewCount: 5534,
//             updatedAt: '12.05.2022'
//         },
//         {
//             id: 27,
//             isPremium: true,
//             isVip: false,
//             price: 85000,
//             township: 'Nizami',
//             details: ['2 otaqlı', '72 m²', '4/5 mərtəbə'],
//             viewCount: 6381,
//             updatedAt: '11.05.2022'
//         },
//         {
//             id: 28,
//             isPremium: true,
//             isVip: false,
//             price: 221500,
//             township: 'Nizami',
//             details: ['4 otaqlı', '120 m²', '5/9 mərtəbə'],
//             viewCount: 377,
//             updatedAt: '11.05.2022'
//         },
//         {
//             id: 29,
//             isPremium: true,
//             isVip: false,
//             price: 155100,
//             township: 'Azadlıq',
//             details: ['3 otaqlı', '73 m²', '1/1 mərtəbə'],
//             viewCount: 8734,
//             updatedAt: '10.05.2022'
//         },
//         {
//             id: 30,
//             isPremium: true,
//             isVip: false,
//             price: 128000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '91 m²', '1/4 mərtəbə'],
//             viewCount: 921,
//             updatedAt: '10.05.2022'
//         },
//         {
//             id: 31,
//             isPremium: true,
//             isVip: false,
//             price: 135000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '98 m²', '3/4 mərtəbə'],
//             viewCount: 3124,
//             updatedAt: '9.05.2022'
//         },
//         {
//             id: 32,
//             isPremium: true,
//             isVip: false,
//             price: 135000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '98 m²', '4/4 mərtəbə'],
//             viewCount: 4167,
//             updatedAt: '9.05.2022'
//         },
//         {
//             id: 33,
//             isPremium: true,
//             isVip: false,
//             price: 211000,
//             township: 'Binəqədi',
//             details: ['4 otaqlı', '121 m²', '1/1 mərtəbə'],
//             viewCount: 578,
//             updatedAt: '8.05.2022'
//         },
//         {
//             id: 34,
//             isPremium: true,
//             isVip: false,
//             price: 158000,
//             township: 'Nəsimi',
//             details: ['3 otaqlı', '96 m²', '1/1 mərtəbə'],
//             viewCount: 5534,
//             updatedAt: '12.05.2022'
//         },
//         {
//             id: 35,
//             isPremium: true,
//             isVip: false,
//             price: 85000,
//             township: 'Nizami',
//             details: ['2 otaqlı', '72 m²', '4/5 mərtəbə'],
//             viewCount: 6381,
//             updatedAt: '11.05.2022'
//         },
//         {
//             id: 36,
//             isPremium: true,
//             isVip: false,
//             price: 221500,
//             township: 'Nizami',
//             details: ['4 otaqlı', '120 m²', '5/9 mərtəbə'],
//             viewCount: 377,
//             updatedAt: '11.05.2022'
//         },
//         {
//             id: 37,
//             isPremium: true,
//             isVip: false,
//             price: 155100,
//             township: 'Azadlıq',
//             details: ['3 otaqlı', '73 m²', '1/1 mərtəbə'],
//             viewCount: 8734,
//             updatedAt: '10.05.2022'
//         },
//         {
//             id: 38,
//             isPremium: true,
//             isVip: false,
//             price: 128000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '91 m²', '1/4 mərtəbə'],
//             viewCount: 921,
//             updatedAt: '10.05.2022'
//         },
//         {
//             id: 39,
//             isPremium: true,
//             isVip: false,
//             price: 135000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '98 m²', '3/4 mərtəbə'],
//             viewCount: 3124,
//             updatedAt: '9.05.2022'
//         },
//         {
//             id: 40,
//             isPremium: true,
//             isVip: false,
//             price: 135000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '98 m²', '4/4 mərtəbə'],
//             viewCount: 4167,
//             updatedAt: '9.05.2022'
//         },
//         {
//             id: 41,
//             isPremium: true,
//             isVip: false,
//             price: 211000,
//             township: 'Binəqədi',
//             details: ['4 otaqlı', '121 m²', '1/1 mərtəbə'],
//             viewCount: 578,
//             updatedAt: '8.05.2022'
//         },
//         {
//             id: 42,
//             isPremium: true,
//             isVip: false,
//             price: 211000,
//             township: 'Binəqədi',
//             details: ['4 otaqlı', '121 m²', '1/1 mərtəbə'],
//             viewCount: 578,
//             updatedAt: '8.05.2022'
//         },
//         {
//             id: 43,
//             isPremium: true,
//             isVip: false,
//             price: 158000,
//             township: 'Nəsimi',
//             details: ['3 otaqlı', '96 m²', '1/1 mərtəbə'],
//             viewCount: 5534,
//             updatedAt: '12.05.2022'
//         },
//         {
//             id: 44,
//             isPremium: true,
//             isVip: false,
//             price: 85000,
//             township: 'Nizami',
//             details: ['2 otaqlı', '72 m²', '4/5 mərtəbə'],
//             viewCount: 6381,
//             updatedAt: '11.05.2022'
//         },
//         {
//             id: 45,
//             isPremium: true,
//             isVip: false,
//             price: 221500,
//             township: 'Nizami',
//             details: ['4 otaqlı', '120 m²', '5/9 mərtəbə'],
//             viewCount: 377,
//             updatedAt: '11.05.2022'
//         },
//         {
//             id: 46,
//             isPremium: true,
//             isVip: false,
//             price: 155100,
//             township: 'Azadlıq',
//             details: ['3 otaqlı', '73 m²', '1/1 mərtəbə'],
//             viewCount: 8734,
//             updatedAt: '10.05.2022'
//         },
//         {
//             id: 47,
//             isPremium: true,
//             isVip: false,
//             price: 128000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '91 m²', '1/4 mərtəbə'],
//             viewCount: 921,
//             updatedAt: '10.05.2022'
//         },
//         {
//             id: 48,
//             isPremium: true,
//             isVip: false,
//             price: 135000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '98 m²', '3/4 mərtəbə'],
//             viewCount: 3124,
//             updatedAt: '9.05.2022'
//         },
//         {
//             id: 49,
//             isPremium: true,
//             isVip: false,
//             price: 135000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '98 m²', '4/4 mərtəbə'],
//             viewCount: 4167,
//             updatedAt: '9.05.2022'
//         },
//         {
//             id: 50,
//             isPremium: true,
//             isVip: false,
//             price: 211000,
//             township: 'Binəqədi',
//             details: ['4 otaqlı', '121 m²', '1/1 mərtəbə'],
//             viewCount: 578,
//             updatedAt: '8.05.2022'
//         },
//     ]

//     if (!limitStart && !limitEnd) {
//         return advertisements
//     }

//     if (!limitStart && limitEnd) {
//         limitStart = 0

//         return advertisements.filter((advertisement) => {
//             return (advertisement.id + 1) >= limitStart && (advertisement.id + 1) <= limitEnd
//         })
//     }

//     if (limitStart && limitEnd) {
//         return advertisements.filter(advertisement => {
//             return advertisement.id >= limitStart && advertisement.id <= limitEnd
//         })
//     }

//     return advertisements
// }

// export const getAllAdvertisements = async () => {
//     await delay(1500)

//     let advertisements = [
//         {
//             id: 1,
//             isPremium: true,
//             isVip: false,
//             price: 158000,
//             township: 'Nəsimi',
//             details: ['3 otaqlı', '96 m²', '1/1 mərtəbə'],
//             viewCount: 5534,
//             updatedAt: '12.05.2022'
//         },
//         {
//             id: 2,
//             isPremium: true,
//             isVip: false,
//             price: 85000,
//             township: 'Nizami',
//             details: ['2 otaqlı', '72 m²', '4/5 mərtəbə'],
//             viewCount: 6381,
//             updatedAt: '11.05.2022'
//         },
//         {
//             id: 3,
//             isPremium: true,
//             isVip: false,
//             price: 221500,
//             township: 'Nizami',
//             details: ['4 otaqlı', '120 m²', '5/9 mərtəbə'],
//             viewCount: 377,
//             updatedAt: '11.05.2022'
//         },
//         {
//             id: 4,
//             isPremium: true,
//             isVip: false,
//             price: 155100,
//             township: 'Azadlıq',
//             details: ['3 otaqlı', '73 m²', '1/1 mərtəbə'],
//             viewCount: 8734,
//             updatedAt: '10.05.2022'
//         },
//         {
//             id: 5,
//             isPremium: true,
//             isVip: false,
//             price: 128000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '91 m²', '1/4 mərtəbə'],
//             viewCount: 921,
//             updatedAt: '10.05.2022'
//         },
//         {
//             id: 6,
//             isPremium: true,
//             isVip: false,
//             price: 135000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '98 m²', '3/4 mərtəbə'],
//             viewCount: 3124,
//             updatedAt: '9.05.2022'
//         },
//         {
//             id: 7,
//             isPremium: true,
//             isVip: false,
//             price: 135000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '98 m²', '4/4 mərtəbə'],
//             viewCount: 4167,
//             updatedAt: '9.05.2022'
//         },
//         {
//             id: 8,
//             isPremium: true,
//             isVip: false,
//             price: 211000,
//             township: 'Binəqədi',
//             details: ['4 otaqlı', '121 m²', '1/1 mərtəbə'],
//             viewCount: 578,
//             updatedAt: '8.05.2022'
//         },
//         {
//             id: 9,
//             isPremium: true,
//             isVip: false,
//             price: 158000,
//             township: 'Nəsimi',
//             details: ['3 otaqlı', '96 m²', '1/1 mərtəbə'],
//             viewCount: 5534,
//             updatedAt: '12.05.2022'
//         },
//         {
//             id: 10,
//             isPremium: true,
//             isVip: false,
//             price: 85000,
//             township: 'Nizami',
//             details: ['2 otaqlı', '72 m²', '4/5 mərtəbə'],
//             viewCount: 6381,
//             updatedAt: '11.05.2022'
//         },
//         {
//             id: 11,
//             isPremium: true,
//             isVip: false,
//             price: 221500,
//             township: 'Nizami',
//             details: ['4 otaqlı', '120 m²', '5/9 mərtəbə'],
//             viewCount: 377,
//             updatedAt: '11.05.2022'
//         },
//         {
//             id: 12,
//             isPremium: true,
//             isVip: false,
//             price: 155100,
//             township: 'Azadlıq',
//             details: ['3 otaqlı', '73 m²', '1/1 mərtəbə'],
//             viewCount: 8734,
//             updatedAt: '10.05.2022'
//         },
//         {
//             id: 13,
//             isPremium: true,
//             isVip: false,
//             price: 128000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '91 m²', '1/4 mərtəbə'],
//             viewCount: 921,
//             updatedAt: '10.05.2022'
//         },
//         {
//             id: 14,
//             isPremium: true,
//             isVip: false,
//             price: 135000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '98 m²', '3/4 mərtəbə'],
//             viewCount: 3124,
//             updatedAt: '9.05.2022'
//         },
//         {
//             id: 15,
//             isPremium: true,
//             isVip: false,
//             price: 135000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '98 m²', '4/4 mərtəbə'],
//             viewCount: 4167,
//             updatedAt: '9.05.2022'
//         },
//         {
//             id: 16,
//             isPremium: true,
//             isVip: false,
//             price: 211000,
//             township: 'Binəqədi',
//             details: ['4 otaqlı', '121 m²', '1/1 mərtəbə'],
//             viewCount: 578,
//             updatedAt: '8.05.2022'
//         },
//         {
//             id: 17,
//             isPremium: true,
//             isVip: false,
//             price: 211000,
//             township: 'Binəqədi',
//             details: ['4 otaqlı', '121 m²', '1/1 mərtəbə'],
//             viewCount: 578,
//             updatedAt: '8.05.2022'
//         },
//         {
//             id: 18,
//             isPremium: true,
//             isVip: false,
//             price: 158000,
//             township: 'Nəsimi',
//             details: ['3 otaqlı', '96 m²', '1/1 mərtəbə'],
//             viewCount: 5534,
//             updatedAt: '12.05.2022'
//         },
//         {
//             id: 19,
//             isPremium: true,
//             isVip: false,
//             price: 85000,
//             township: 'Nizami',
//             details: ['2 otaqlı', '72 m²', '4/5 mərtəbə'],
//             viewCount: 6381,
//             updatedAt: '11.05.2022'
//         },
//         {
//             id: 20,
//             isPremium: true,
//             isVip: false,
//             price: 221500,
//             township: 'Nizami',
//             details: ['4 otaqlı', '120 m²', '5/9 mərtəbə'],
//             viewCount: 377,
//             updatedAt: '11.05.2022'
//         },
//         {
//             id: 21,
//             isPremium: true,
//             isVip: false,
//             price: 155100,
//             township: 'Azadlıq',
//             details: ['3 otaqlı', '73 m²', '1/1 mərtəbə'],
//             viewCount: 8734,
//             updatedAt: '10.05.2022'
//         },
//         {
//             id: 22,
//             isPremium: true,
//             isVip: false,
//             price: 128000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '91 m²', '1/4 mərtəbə'],
//             viewCount: 921,
//             updatedAt: '10.05.2022'
//         },
//         {
//             id: 23,
//             isPremium: true,
//             isVip: false,
//             price: 135000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '98 m²', '3/4 mərtəbə'],
//             viewCount: 3124,
//             updatedAt: '9.05.2022'
//         },
//         {
//             id: 24,
//             isPremium: true,
//             isVip: false,
//             price: 135000,
//             township: 'Binəqədi',
//             details: ['3 otaqlı', '98 m²', '4/4 mərtəbə'],
//             viewCount: 4167,
//             updatedAt: '9.05.2022'
//         },
//         {
//             id: 25,
//             isPremium: true,
//             isVip: false,
//             price: 211000,
//             township: 'Binəqədi',
//             details: ['4 otaqlı', '121 m²', '1/1 mərtəbə'],
//             viewCount: 578,
//             updatedAt: '8.05.2022'
//         },
//     ]

//     return advertisements
// }























const delay = ms => new Promise(res => setTimeout(res, ms))

export const getAdvertisements = async (limitStart = null, limitEnd = null, advertisementType = null) => {
    await delay(3000)

    const allAdvertisements = [
        {
            id: 1,
            isPremium: true,
            isVip: false,
            price: 158000,
            township: 'Nəsimi',
            details: ['3 otaqlı', '96 m²', '1/1 mərtəbə'],
            viewCount: 5534,
            updatedAt: '12.05.2022'
        },
        {
            id: 2,
            isPremium: true,
            isVip: false,
            price: 85000,
            township: 'Nizami',
            details: ['2 otaqlı', '72 m²', '4/5 mərtəbə'],
            viewCount: 6381,
            updatedAt: '11.05.2022'
        },
        {
            id: 3,
            isPremium: true,
            isVip: false,
            price: 221500,
            township: 'Nizami',
            details: ['4 otaqlı', '120 m²', '5/9 mərtəbə'],
            viewCount: 377,
            updatedAt: '11.05.2022'
        },
        {
            id: 4,
            isPremium: true,
            isVip: false,
            price: 155100,
            township: 'Azadlıq',
            details: ['3 otaqlı', '73 m²', '1/1 mərtəbə'],
            viewCount: 8734,
            updatedAt: '10.05.2022'
        },
        {
            id: 5,
            isPremium: true,
            isVip: false,
            price: 128000,
            township: 'Binəqədi',
            details: ['3 otaqlı', '91 m²', '1/4 mərtəbə'],
            viewCount: 921,
            updatedAt: '10.05.2022'
        },
        {
            id: 6,
            isPremium: true,
            isVip: false,
            price: 135000,
            township: 'Binəqədi',
            details: ['3 otaqlı', '98 m²', '3/4 mərtəbə'],
            viewCount: 3124,
            updatedAt: '9.05.2022'
        },
        {
            id: 7,
            isPremium: true,
            isVip: false,
            price: 135000,
            township: 'Binəqədi',
            details: ['3 otaqlı', '98 m²', '4/4 mərtəbə'],
            viewCount: 4167,
            updatedAt: '9.05.2022'
        },
        {
            id: 8,
            isPremium: true,
            isVip: false,
            price: 211000,
            township: 'Binəqədi',
            details: ['4 otaqlı', '121 m²', '1/1 mərtəbə'],
            viewCount: 578,
            updatedAt: '8.05.2022'
        },
        {
            id: 9,
            isPremium: true,
            isVip: false,
            price: 158000,
            township: 'Nəsimi',
            details: ['3 otaqlı', '96 m²', '1/1 mərtəbə'],
            viewCount: 5534,
            updatedAt: '12.05.2022'
        },
        {
            id: 10,
            isPremium: true,
            isVip: false,
            price: 85000,
            township: 'Nizami',
            details: ['2 otaqlı', '72 m²', '4/5 mərtəbə'],
            viewCount: 6381,
            updatedAt: '11.05.2022'
        },
        {
            id: 11,
            isPremium: true,
            isVip: false,
            price: 221500,
            township: 'Nizami',
            details: ['4 otaqlı', '120 m²', '5/9 mərtəbə'],
            viewCount: 377,
            updatedAt: '11.05.2022'
        },
        {
            id: 12,
            isPremium: true,
            isVip: false,
            price: 155100,
            township: 'Azadlıq',
            details: ['3 otaqlı', '73 m²', '1/1 mərtəbə'],
            viewCount: 8734,
            updatedAt: '10.05.2022'
        },
        {
            id: 13,
            isPremium: true,
            isVip: false,
            price: 128000,
            township: 'Binəqədi',
            details: ['3 otaqlı', '91 m²', '1/4 mərtəbə'],
            viewCount: 921,
            updatedAt: '10.05.2022'
        },
        {
            id: 14,
            isPremium: true,
            isVip: false,
            price: 135000,
            township: 'Binəqədi',
            details: ['3 otaqlı', '98 m²', '3/4 mərtəbə'],
            viewCount: 3124,
            updatedAt: '9.05.2022'
        },
        {
            id: 15,
            isPremium: true,
            isVip: false,
            price: 135000,
            township: 'Binəqədi',
            details: ['3 otaqlı', '98 m²', '4/4 mərtəbə'],
            viewCount: 4167,
            updatedAt: '9.05.2022'
        },
        {
            id: 16,
            isPremium: true,
            isVip: false,
            price: 211000,
            township: 'Binəqədi',
            details: ['4 otaqlı', '121 m²', '1/1 mərtəbə'],
            viewCount: 578,
            updatedAt: '8.05.2022'
        },
        {
            id: 17,
            isPremium: true,
            isVip: false,
            price: 211000,
            township: 'Binəqədi',
            details: ['4 otaqlı', '121 m²', '1/1 mərtəbə'],
            viewCount: 578,
            updatedAt: '8.05.2022'
        },
        {
            id: 18,
            isPremium: true,
            isVip: false,
            price: 158000,
            township: 'Nəsimi',
            details: ['3 otaqlı', '96 m²', '1/1 mərtəbə'],
            viewCount: 5534,
            updatedAt: '12.05.2022'
        },
        {
            id: 19,
            isPremium: true,
            isVip: false,
            price: 85000,
            township: 'Nizami',
            details: ['2 otaqlı', '72 m²', '4/5 mərtəbə'],
            viewCount: 6381,
            updatedAt: '11.05.2022'
        },
        {
            id: 20,
            isPremium: true,
            isVip: false,
            price: 221500,
            township: 'Nizami',
            details: ['4 otaqlı', '120 m²', '5/9 mərtəbə'],
            viewCount: 377,
            updatedAt: '11.05.2022'
        },
        {
            id: 21,
            isPremium: true,
            isVip: false,
            price: 155100,
            township: 'Azadlıq',
            details: ['3 otaqlı', '73 m²', '1/1 mərtəbə'],
            viewCount: 8734,
            updatedAt: '10.05.2022'
        },
        {
            id: 22,
            isPremium: true,
            isVip: false,
            price: 128000,
            township: 'Binəqədi',
            details: ['3 otaqlı', '91 m²', '1/4 mərtəbə'],
            viewCount: 921,
            updatedAt: '10.05.2022'
        },
        {
            id: 23,
            isPremium: true,
            isVip: false,
            price: 135000,
            township: 'Binəqədi',
            details: ['3 otaqlı', '98 m²', '3/4 mərtəbə'],
            viewCount: 3124,
            updatedAt: '9.05.2022'
        },
        {
            id: 24,
            isPremium: true,
            isVip: false,
            price: 135000,
            township: 'Binəqədi',
            details: ['3 otaqlı', '98 m²', '4/4 mərtəbə'],
            viewCount: 4167,
            updatedAt: '9.05.2022'
        },
        {
            id: 25,
            isPremium: true,
            isVip: false,
            price: 211000,
            township: 'Binəqədi',
            details: ['4 otaqlı', '121 m²', '1/1 mərtəbə'],
            viewCount: 578,
            updatedAt: '8.05.2022'
        },
        {
            id: 26,
            isPremium: false,
            isVip: true,
            price: 158000,
            township: 'Nəsimi',
            details: ['3 otaqlı', '96 m²', '1/1 mərtəbə'],
            viewCount: 5534,
            updatedAt: '12.05.2022'
        },
        {
            id: 27,
            isPremium: false,
            isVip: true,
            price: 85000,
            township: 'Nizami',
            details: ['2 otaqlı', '72 m²', '4/5 mərtəbə'],
            viewCount: 6381,
            updatedAt: '11.05.2022'
        },
        {
            id: 28,
            isPremium: false,
            isVip: true,
            price: 221500,
            township: 'Nizami',
            details: ['4 otaqlı', '120 m²', '5/9 mərtəbə'],
            viewCount: 377,
            updatedAt: '11.05.2022'
        },
        {
            id: 29,
            isPremium: false,
            isVip: true,
            price: 155100,
            township: 'Azadlıq',
            details: ['3 otaqlı', '73 m²', '1/1 mərtəbə'],
            viewCount: 8734,
            updatedAt: '10.05.2022'
        },
        {
            id: 30,
            isPremium: false,
            isVip: true,
            price: 128000,
            township: 'Binəqədi',
            details: ['3 otaqlı', '91 m²', '1/4 mərtəbə'],
            viewCount: 921,
            updatedAt: '10.05.2022'
        },
        {
            id: 31,
            isPremium: false,
            isVip: true,
            price: 135000,
            township: 'Binəqədi',
            details: ['3 otaqlı', '98 m²', '3/4 mərtəbə'],
            viewCount: 3124,
            updatedAt: '9.05.2022'
        },
        {
            id: 32,
            isPremium: false,
            isVip: true,
            price: 135000,
            township: 'Binəqədi',
            details: ['3 otaqlı', '98 m²', '4/4 mərtəbə'],
            viewCount: 4167,
            updatedAt: '9.05.2022'
        },
        {
            id: 33,
            isPremium: false,
            isVip: true,
            price: 211000,
            township: 'Binəqədi',
            details: ['4 otaqlı', '121 m²', '1/1 mərtəbə'],
            viewCount: 578,
            updatedAt: '8.05.2022'
        },
        {
            id: 34,
            isPremium: false,
            isVip: true,
            price: 158000,
            township: 'Nəsimi',
            details: ['3 otaqlı', '96 m²', '1/1 mərtəbə'],
            viewCount: 5534,
            updatedAt: '12.05.2022'
        },
        {
            id: 35,
            isPremium: false,
            isVip: true,
            price: 85000,
            township: 'Nizami',
            details: ['2 otaqlı', '72 m²', '4/5 mərtəbə'],
            viewCount: 6381,
            updatedAt: '11.05.2022'
        },
        {
            id: 36,
            isPremium: false,
            isVip: true,
            price: 221500,
            township: 'Nizami',
            details: ['4 otaqlı', '120 m²', '5/9 mərtəbə'],
            viewCount: 377,
            updatedAt: '11.05.2022'
        },
        {
            id: 37,
            isPremium: false,
            isVip: true,
            price: 155100,
            township: 'Azadlıq',
            details: ['3 otaqlı', '73 m²', '1/1 mərtəbə'],
            viewCount: 8734,
            updatedAt: '10.05.2022'
        },
        {
            id: 38,
            isPremium: false,
            isVip: true,
            price: 128000,
            township: 'Binəqədi',
            details: ['3 otaqlı', '91 m²', '1/4 mərtəbə'],
            viewCount: 921,
            updatedAt: '10.05.2022'
        },
        {
            id: 39,
            isPremium: false,
            isVip: true,
            price: 135000,
            township: 'Binəqədi',
            details: ['3 otaqlı', '98 m²', '3/4 mərtəbə'],
            viewCount: 3124,
            updatedAt: '9.05.2022'
        },
        {
            id: 40,
            isPremium: false,
            isVip: true,
            price: 135000,
            township: 'Binəqədi',
            details: ['3 otaqlı', '98 m²', '4/4 mərtəbə'],
            viewCount: 4167,
            updatedAt: '9.05.2022'
        },
        {
            id: 41,
            isPremium: false,
            isVip: true,
            price: 211000,
            township: 'Binəqədi',
            details: ['4 otaqlı', '121 m²', '1/1 mərtəbə'],
            viewCount: 578,
            updatedAt: '8.05.2022'
        },
        {
            id: 42,
            isPremium: false,
            isVip: true,
            price: 211000,
            township: 'Binəqədi',
            details: ['4 otaqlı', '121 m²', '1/1 mərtəbə'],
            viewCount: 578,
            updatedAt: '8.05.2022'
        },
        {
            id: 43,
            isPremium: false,
            isVip: true,
            price: 158000,
            township: 'Nəsimi',
            details: ['3 otaqlı', '96 m²', '1/1 mərtəbə'],
            viewCount: 5534,
            updatedAt: '12.05.2022'
        },
        {
            id: 44,
            isPremium: false,
            isVip: true,
            price: 85000,
            township: 'Nizami',
            details: ['2 otaqlı', '72 m²', '4/5 mərtəbə'],
            viewCount: 6381,
            updatedAt: '11.05.2022'
        },
        {
            id: 45,
            isPremium: false,
            isVip: true,
            price: 221500,
            township: 'Nizami',
            details: ['4 otaqlı', '120 m²', '5/9 mərtəbə'],
            viewCount: 377,
            updatedAt: '11.05.2022'
        },
    ]

    let advertisements = []

    if (advertisementType) {
        switch (advertisementType) {
            case 'vipAdvertisements':
                advertisements = allAdvertisements.filter(advertisement => {
                    return advertisement.isVip === true
                })
            break;
            case 'premiumAdvertisements':
                advertisements = allAdvertisements.filter(advertisement => {
                    return advertisement.isPremium === true
                })
            break;
        }
    } else {
        return allAdvertisements
    }

    if (!limitStart && !limitEnd) {
        return advertisements
    }

    if (!limitStart && limitEnd) {
        limitStart = 0

        return advertisements.filter((advertisement, index) => {
            return (index + 1) >= limitStart && (index + 1) <= limitEnd
        })
    }

    if (limitStart && limitEnd) {
        return advertisements.filter((advertisement, index) => {
            return (index + 1) >= limitStart && (index + 1) <= limitEnd
        })
    }

    return advertisements
}