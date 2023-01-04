<script>
	import { onMount } from 'svelte'
    import AdvertisementItem from './AdvertisementItem.svelte'
    import AdvertisementItemSkeleton from './AdvertisementItemSkeleton.svelte'
    import AdvertisementRequest from "$lib/helpers/advertisementRequest"
    import { v4 as uuid } from '@lukeed/uuid'
    import '$lib/vendor/swiper/swiper-bundle.min.js'
	import '$lib/vendor/swiper/swiper-bundle.min.css'

	export let advertisementConfig

    const advertisementResponse = new AdvertisementRequest(advertisementConfig.type)

    let _document, swiperElement, getNewData, fetchedHTML, mySwiperSkeleton

    const uuidSelector = uuid()

	const mountSwiper = () => {
        setTimeout(() => {
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

            if (mySwiperSkeleton) {
                mySwiperSkeleton.remove()
            }

            swiperElement.on('reachEnd', function () {
                getNewData = true
            })
        }, 0);
    }

    getNewData = false

	onMount(() => {
        _document = document

        mySwiperSkeleton = _document.querySelector(`.mySwiperSkeleton-${ uuidSelector }`)
	})

    const getAdvertisementData = async () => {        
        const response = await advertisementResponse.fetchAdvertisementData()

        mountSwiper()

        return response
    }

    const getNewAdvertisementData = async () => {        
        const response = await advertisementResponse.fetchAdvertisementData()

        return response
    }

    const updateSlideItems = (fetchedHTML) => {
        if (getNewData == true) {
            if (fetchedHTML !== null && fetchedHTML !== undefined) {
                if (fetchedHTML instanceof HTMLElement) {
                    if (fetchedHTML.innerHTML.trim() !== '') {
                        const tempSliders = Array.from(fetchedHTML.querySelectorAll('.swiper-slide'))

                        swiperElement.appendSlide(tempSliders)
                    }
                }
            }
        }

        getNewData = false
    }

    $: updateSlideItems(fetchedHTML)
</script>

<div class="mySwiperSkeleton mySwiperSkeleton-{ uuidSelector }">
    {#each Array(10) as element }
        <AdvertisementItemSkeleton />
    {/each}
</div>

{#await getAdvertisementData() }
    { "" }
{:then allAdvertisementData }
    <div class="advertisementSwiper-{ uuidSelector }">
        <div class="swiper-wrapper">
            {#each allAdvertisementData.body as advertisementData (advertisementData.id) }
                <div class="swiper-slide">
                    <AdvertisementItem advertisementItemData={ advertisementData } />
                </div>
            {/each}
        </div>
    </div>
    <div class="swiperButtons">
        <div class="prev-btn swiper-button-prev-{ uuidSelector }"></div>
        <div class="next-btn swiper-button-next-{ uuidSelector }"></div>
    </div>
{:catch error }
    <h1 style="color: red">Error: { error }</h1>
{/await}

{#if getNewData }
    {#await getNewAdvertisementData() }
    <div class="spinner">
        <img src="/gifs/spinner.gif" alt="spinner">
    </div>
    {:then allAdvertisementData }
        <div class="tempSliderData" bind:this={ fetchedHTML }>
            {#each allAdvertisementData.body as advertisementData (advertisementData.id) }
                <div class="swiper-slide">
                    <AdvertisementItem advertisementItemData={ advertisementData } />
                </div>
            {/each}
        </div>
    {:catch error }
        <h1 style="color: red">Error: { error }</h1>
    {/await}
{/if}

<style lang="scss">
	@import '../../assets/css/components/advertisement/advertisementSlider.scss';
</style>