<script>
	import { onMount } from 'svelte'
	import { v4 as uuid } from '@lukeed/uuid'
	import { getTransfromXValue } from '$lib/helpers/style'
	import '$lib/vendor/swiper/swiper-bundle.min.js'
	import '$lib/vendor/swiper/swiper-bundle.min.css'

	export let advertisementItemData

	const uuidSelector = uuid()

	let _document, imageSlider, swiperElement

	const mountSwiper = () => {
		const imageLinks = [
			"https://cdn.pixabay.com/photo/2020/02/16/20/29/nyc-4854718__340.jpg",
			"https://www.history.com/.image/t_share/MTU3ODc4NjAzNTE1NTA0MzUx/gettyimages-555173607-2.jpg",
			"https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg",
			"https://officechai.com/wp-content/uploads/2015/05/Cyberecture-egg-shaped-building-mumbai.jpg",
			"http://www.officechai.com/wp-content/uploads/2015/05/Fisheries-Department-Building-Hyderabad.jpg"
		]

		const mainClassName = imageSlider.parentElement.parentElement.classList[1]
		
		let swiperWrapperContent = ""

		swiperWrapperContent += `<div class="swiper-wrapper-img ${ mainClassName }">`

		imageLinks.forEach(url => {
			swiperWrapperContent += `
							<div class="swiper-slide-img ${ mainClassName }">
								<img data-src="${ url }" class="${ mainClassName } swiper-lazy advertisement-image" />
								<div class="skeleton ${ mainClassName }"></div>
							</div>`
		})

		swiperWrapperContent += `</div>
								<div class="__prev__ swiper-button-prev-img-${ uuidSelector } ${ mainClassName }"></div>	
								<div class="__next__ swiper-button-next-img-${ uuidSelector } ${ mainClassName }"></div>`

		_document.querySelector(`.swiper-${ uuidSelector }`).insertAdjacentHTML('beforeend', swiperWrapperContent)

		swiperElement = new Swiper(`.swiper-${ uuidSelector }`, {
            slidesPerView: 1,
            wrapperClass: 'swiper-wrapper-img',
			slideClass: 'swiper-slide-img',
            navigation: {
                nextEl: `.swiper-button-next-img-${ uuidSelector }`,
                prevEl: `.swiper-button-prev-img-${ uuidSelector }`
            },
			loop: true,
			lazy: true,
			nested: true
        })

		swiperElement.on('lazyImageReady', (swiper, slide, image) => {
			slide.querySelector('.skeleton').remove()
			image.style.display = 'block'
		})

		imageSlider.addEventListener('mouseenter', e => {
			e.target.querySelector('.__prev__').style.display = 'block'
			e.target.querySelector('.__next__').style.display = 'block'
		})

		imageSlider.addEventListener('mouseleave', e => {
			e.target.querySelector('.__prev__').style.display = 'none'
			e.target.querySelector('.__next__').style.display = 'none'
		})
	}

	onMount(() => {
		_document = document
		imageSlider = _document.querySelector(`.swiper-${ uuidSelector }`)

		mountSwiper()
	})
</script>

<a href="#item" class="advertisement__item">
	<div class="advertisement__item-slider">
		<div class="swiper-{ uuidSelector }">
		</div>
	</div>
	<div class="advertisement__item-price">{advertisementItemData?.price} azn</div>
	<div class="advertisement__item-details">
		<p>{advertisementItemData?.township} ray.</p>
		<p>{advertisementItemData?.details}</p>
		<p>Baxış sayı: {advertisementItemData?.viewCount}</p>
		<p>Yeniləndi: {advertisementItemData?.updatedAt}</p>
	</div>
</a>

<style lang="scss">
	@import '../../assets/css/components/advertisement/advertisementItem.scss';
</style>
