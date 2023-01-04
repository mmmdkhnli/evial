import { getAdvertisements } from "$lib/config/services"

export default class AdvertisementRequest {
    constructor(advertisementType) {
        this.limitStart = 0
        this.limitEnd = 10
        this.advertisementType = advertisementType
        this.lastFetchDataCount = 0
    }

    async fetchAdvertisementData() {
        if (this.lastFetchDataCount > 0 && this.lastFetchDataCount == this.limitEnd) {
            this.limitStart += this.limitEnd
        }

        const data = {
            limitStart: this.limitStart,
            limitEnd: this.limitEnd,
            advertisementType: this.advertisementType
        }
    
        const options = {
            method: 'POST',
            body: JSON.stringify(data)
        }
    
        const response = await getAdvertisements(options)

        this.lastFetchDataCount = response?.body?.length ?? 0

        return response
    }
}