const advertisementConfig = () => {
    return {
        vipAdvertisements: {
            type: 'vipAdvertisements',
            title: 'VIP elanlar',
            flowType: 'slider',
            order: 1,
            detail: {
                title: 'Daha çox',
                url: '#page'
            }
        },
        premiumAdvertisements: {
            type: 'premiumAdvertisements',
            title: 'Premium elanlar',
            flowType: 'slider',
            order: 2,
            detail: {
                title: 'Daha çox',
                url: '#page'
            }
        },
        // recentlyViewed: {
        //     type: 'recentlyViewed',
        //     title: 'Son baxılanlar',
        //     flowType: 'non-slider',
        //     order: 3,
        //     detail: {
        //         title: 'Daha çox',
        //         url: '#page'
        //     }
        // }
    }
}

export default advertisementConfig