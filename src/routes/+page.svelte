<script>
    import advertisementConfig from "$lib/config/advertisementConfig"

	import Slider from "../components/Home/MainSlider/Slider.svelte"
    import AdvertisementContainer from "../components/Advertisement/AdvertisementContainer.svelte"

    const advertisementConfigCollection = [
        advertisementConfig().vipAdvertisements,
        advertisementConfig().premiumAdvertisements,
        // advertisementConfig().recentlyViewed,
    ]
</script>

<!-- <Slider/> -->

{#each advertisementConfigCollection as config (config.order) }
    <AdvertisementContainer advertisementConfig={config} />
{/each}

<svelte:head>
    <title>Evial</title>
</svelte:head>