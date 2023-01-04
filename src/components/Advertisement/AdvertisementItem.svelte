<script>
	import { onMount } from 'svelte'
	import { v4 as uuid } from '@lukeed/uuid'
	import { getTransfromXValue } from '$lib/helpers/style'

	export let advertisementItemData

	const uuidSelector = uuid()

	let _document, imageSlider, mainImageMounted = false, allImagesFetched = false

	const getAdvertisementMainImage = async () => {
		const collectionID = 219941
		const numImagesAvailable = 982
		const randomNumber = Math.floor(Math.random() * numImagesAvailable)

		// ---------------------------------------------------------------

		fetch(`https://source.unsplash.com/collection/${collectionID}/?sig=${randomNumber}`)
			.then(response => response.blob())
			.then(imageBlob => {
				const imageObjectURL = URL.createObjectURL(imageBlob)
				const mainItem = imageSlider.querySelector('.item.main')
				const mainItemImg = mainItem.querySelector('img')

				mainItem.classList.remove('skeleton')
				mainItemImg.src = imageObjectURL
				mainItemImg.style.visibility = 'visible'
				mainImageMounted = true
			})
	}

	const getAdvertisementImages = async mainSvelteClass => {
		const collectionID = 219941
		const numImagesAvailable = 982
		const randomNumber = Math.floor(Math.random() * numImagesAvailable)

		// ---------------------------------------------------------------

		const tempSelector = uuid()
		const tempHTML = `
					<div class="item skeleton temp-${ tempSelector } ${ mainSvelteClass }">
						<img src="" alt="advertisement" class="${ mainSvelteClass }" />
					</div>`

		imageSlider.querySelector('.items').insertAdjacentHTML('beforeend', tempHTML)
		
		fetch(`https://source.unsplash.com/collection/${collectionID}/?sig=${randomNumber}`)
			.then(response => response.blob())
			.then(imageBlob => {
				const imageObjectURL = URL.createObjectURL(imageBlob)
				const item = imageSlider.querySelector(`.temp-${ tempSelector }`)
				const image = item.querySelector('img')

				item.classList.remove('skeleton')
				image.src = imageObjectURL
				image.style.visibility = 'visible'
			})
	}

	onMount(() => {
		_document = document
		imageSlider = _document.querySelector(`.slider-${ uuidSelector }`)

		getAdvertisementMainImage()

		const mainSvelteClass = Array.from(imageSlider.querySelector('.main').classList)[3]
		const mainItem = imageSlider?.querySelector('.item.main')
		const sliderItemsWrapper = imageSlider.querySelector('.items')

		imageSlider.addEventListener('mouseenter', () => {
			if (mainImageMounted) imageSlider.parentElement.querySelector('.slider-navigations').style.display = 'block'
		})

		imageSlider.addEventListener('mouseleave', () => {
			if (mainImageMounted) imageSlider.parentElement.querySelector('.slider-navigations').style.display = 'none'
		})

		imageSlider?.querySelector('.prev').addEventListener('click', e => {
			const mainItemWIdth = mainItem.getBoundingClientRect().width
			// const mainItemWIdth = mainItem.clientWidth
			const mainItemTranslateX = getTransfromXValue(sliderItemsWrapper)

			if (!allImagesFetched) {
				for (let index = 0; index < 3; index++) {
					getAdvertisementImages(mainSvelteClass)
				}

				allImagesFetched = true
			}

			if (mainItemTranslateX < 0) {
				const currentStep = sliderItemsWrapper.getAttribute('data-swipe-step')

				sliderItemsWrapper.setAttribute('data-swipe-step', (Number(currentStep) - 1))

				sliderItemsWrapper.style.transform = `translateX(${ mainItemTranslateX + mainItemWIdth }px)`
			}
		})

		imageSlider?.querySelector('.next').addEventListener('click', e => {
			const mainItemWIdth = mainItem.getBoundingClientRect().width
			// const mainItemWIdth = mainItem.clientWidth
			const mainItemTranslateX = getTransfromXValue(sliderItemsWrapper)

			if (!allImagesFetched) {
				for (let index = 0; index < 3; index++) {
					getAdvertisementImages(mainSvelteClass)
				}
				
				allImagesFetched = true
			}

			const itemCount = sliderItemsWrapper.querySelectorAll('.item').length
			const maxTransformValue = (itemCount - 1) * mainItemWIdth

			if (Math.abs(mainItemTranslateX) < maxTransformValue) {
				const currentStep = sliderItemsWrapper.getAttribute('data-swipe-step')

				sliderItemsWrapper.setAttribute('data-swipe-step', (Number(currentStep) + 1))

				sliderItemsWrapper.style.transform = `translateX(${ mainItemTranslateX - mainItemWIdth }px)`
			}
		})

		window.addEventListener('resize', () => {
			const mainItemWIdth = mainItem.getBoundingClientRect().width
			const currentStep = sliderItemsWrapper.getAttribute('data-swipe-step')
			const itemCount = sliderItemsWrapper.querySelectorAll('.item').length

			console.log(itemCount);
		})
	})
</script>

<div class="advertisement__item">
	<div class="advertisement__item-slider">
		<div class="slider-{ uuidSelector }">
			<div class="items" data-swipe-step="0">
				<div class="item main skeleton">
					<img src="" alt="advertisement" />
				</div>
			</div>
			<div class="slider-navigations">
				<div class="prev"></div>
				<div class="next"></div>
			</div>
		</div>
	</div>
	<a href="#item">
		<div class="advertisement__item-price">{advertisementItemData?.price} azn</div>
		<div class="advertisement__item-details">
			<p>{advertisementItemData?.township} ray.</p>
			<p>{advertisementItemData?.details}</p>
			<p>Baxış sayı: {advertisementItemData?.viewCount}</p>
			<p>Yeniləndi: {advertisementItemData?.updatedAt}</p>
		</div>
	</a>
</div>

<style lang="scss">
	@import '../../assets/css/components/advertisement/advertisementItem.scss';
</style>
