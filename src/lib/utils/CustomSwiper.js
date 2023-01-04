export default class CustomSwiper {
    constructor(swiper) {
        this.swiper = swiper
        this.slides = this.swiper.slides
        this.slidesGrid = this.swiper.slidesGrid
        this.slidesSizesGrid = this.swiper.slidesSizesGrid
        this.snapGrid = this.swiper.snapGrid
        this.virtualSize = this.swiper.virtualSize
    }

    getSwiperDetails() {
        return {
            slides: this.slides,
            slidesGrid: this.slidesGrid,
            slidesSizesGrid: this.slidesSizesGrid,
            snapGrid: this.snapGrid,
            virtualSize: this.virtualSize
        }
    }

    setSwiperDetails() {
        return {
            slides: [],
            slidesGrid: [],
            slidesSizesGrid: [],
            snapGrid: [0],
            virtualSize: 533
        }
    }
}