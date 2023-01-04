<script>
    import AdvertisementSlider from "./AdvertisementSlider.svelte"
    import AdvertisementNonSlider from "./AdvertisementNonSlider.svelte"

    export let advertisementConfig
</script>

<section class="advertisement__container">
    <div class="inner">
        <div class="banner-bg"></div>
        <div class="advertisement__container-header">
            <div class="advertisement__container-title">{ advertisementConfig.title }</div>
            { #if ('detail' in advertisementConfig) }
            <a class="more" href={ advertisementConfig.detail.url }>{ advertisementConfig.detail.title }</a>
            { /if }
        </div>
        <div class="advertisement__container-items">
            { #if advertisementConfig.flowType === 'slider' }
                <AdvertisementSlider advertisementConfig={ advertisementConfig } />
            { :else if advertisementConfig.flowType ==='non-slider' }
                <AdvertisementNonSlider />
            { /if }
        </div>
    </div>
</section>

<style lang="scss">
    @import '../../assets/css/components/advertisement/advertisementContainer.scss';
</style>