<script>
	import { onMount } from 'svelte'
    import AdvertisementItem from './AdvertisementItem.svelte'
    import AdvertisementItemSkeleton from './AdvertisementItemSkeleton.svelte'
    import AdvertisementRequest from "$lib/helpers/advertisementRequest"
    import { v4 as uuid } from '@lukeed/uuid'
    import '$lib/vendor/swiper/swiper-bundle.min.js'
	import '$lib/vendor/swiper/swiper-bundle.min.css'
	// import AdvertisementSlider from './AdvertisementSlider.svelte'

	export let advertisementConfig

    const advertisementResponse = new AdvertisementRequest(advertisementConfig.type)

    let _document, advertisementSwiper, skClass, swiperWrapper, swiperElement, showSpinner = false

    const uuidSelector = uuid()

	const mountSwiper = () => {
        _document.querySelector(`.mySwiperSkeleton-${ uuidSelector }`)

        swiperElement = new Swiper(`.advertisementSwiper-${ uuidSelector }`, {
            slidesPerView: 2,
            spaceBetween: 10,
            navigation: {
                nextEl: `.swiper-button-next-${ uuidSelector }`,
                prevEl: `.swiper-button-prev-${ uuidSelector }`
            },
            breakpoints: {
                550: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 40
                },
                1500: { 
                    slidesPerView: 5,
                    spaceBetween: 40
                }
            }
        })

        _document.querySelector(`.swiperButtons-${ uuidSelector }`).style.display = 'block'

        swiperElement.on('reachEnd', function () {
            getNewAdvertisementData()
        })
    }

	onMount(() => {
        _document = document

        advertisementSwiper = _document.querySelector(`.advertisementSwiper-${ uuidSelector }`)
        skClass = advertisementSwiper.classList[1]

        swiperWrapper = _document.createElement('div')
        swiperWrapper.classList.add('swiper-wrapper')
        swiperWrapper.classList.add(skClass)

        getAdvertisementData()
	})

    const getAdvertisementData = async () => {        
        try {
            const response = await advertisementResponse.fetchAdvertisementData()

            if (response.status === 200) {
                if ('body' in response) {
                    if (response.body.length > 0) {
                        const tempWrapperUuidSelector = uuid()

                        swiperWrapper.classList.add(`wrapper-${ tempWrapperUuidSelector }`)
                        advertisementSwiper.appendChild(swiperWrapper)

                        const currentSwiperWrapper = advertisementSwiper.querySelector(`.wrapper-${ tempWrapperUuidSelector }`)

                        response.body.forEach(advertisementData => {
                            const swiperSlider = _document.createElement('div')
                            const tempSliderUuidSelector = uuid()

                            swiperSlider.classList.add('swiper-slide')
                            swiperSlider.classList.add(skClass)
                            swiperSlider.classList.add(`slider-${ tempSliderUuidSelector }`)

                            currentSwiperWrapper.appendChild(swiperSlider)

                            const currentSlider = currentSwiperWrapper.querySelector(`.slider-${ tempSliderUuidSelector }`)
                        
                            new AdvertisementItem({
                                target: currentSlider,
                                props: {
                                    advertisementItemData: advertisementData
                                }
                            })
                        })

                        mountSwiper()
                    } else {
                        notFound()
                    }
                } else {
                    throw new Error('Service Error!')
                }
            } else if (response.status === 404) {
                notFound()
            } else {
                throw new Error('Service Error!')
            }
        } catch (error) {

        }
    }

    const getNewAdvertisementData = async () => {
        showSpinner = true
        
        try {
            const response = await advertisementResponse.fetchAdvertisementData()

            if (response.status === 200) {
                if ('body' in response) {
                    if (response.body.length > 0) {
                        response.body.forEach(advertisementData => {
                            const swiperSlider = _document.createElement('div')
                            const tempSliderUuidSelector = uuid()
                            const tempContainer = _document.querySelector(`.temp-${ uuidSelector }`)

                            swiperSlider.classList.add('swiper-slide')
                            swiperSlider.classList.add(skClass)
                            swiperSlider.classList.add(`slider-${ tempSliderUuidSelector }`)

                            tempContainer.appendChild(swiperSlider)

                            const targetItem = tempContainer.querySelector(`.slider-${ tempSliderUuidSelector }`)

                            new AdvertisementItem({
                                target: targetItem,
                                props: {
                                    advertisementItemData: advertisementData
                                }
                            })

                            swiperElement.appendSlide(targetItem)

                            tempContainer.innerHTML = ""
                        })
                    } else {
                        notFound()
                    }
                } else {
                    throw new Error('Service Error!')
                }
            } else if (response.status === 404) {
                notFound()
            } else {
                throw new Error('Service Error!')
            }
        } catch (error) {
            
        }

        showSpinner = false
    }

    const notFound = () => {

    }
</script>

{#if !swiperElement }
    <div class="mySwiperSkeleton">
        {#each Array(10) as element }
            <AdvertisementItemSkeleton />
        {/each}
    </div>
{/if}

<div class="advertisementSwiper-{ uuidSelector }"></div>
<div class="swiperButtons swiperButtons-{ uuidSelector }">
    <div class="prev-btn swiper-button-prev-{ uuidSelector }"></div>
    <div class="next-btn swiper-button-next-{ uuidSelector }"></div>
</div>

{#if showSpinner }
    <div class="spinner">
        <img src="/gifs/spinner.gif" alt="spinner">
    </div>
{/if}

<div class="temp temp-{ uuidSelector }"></div>

<style lang="scss">
	@import '../../assets/css/components/advertisement/advertisementSlider.scss';
</style>