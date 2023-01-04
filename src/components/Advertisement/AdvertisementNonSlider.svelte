<script>
	import AdvertisementItem from "./AdvertisementItem.svelte"
</script>

<div class="advertisement__non__slider">
    {#each Array(20) as el }
        <AdvertisementItem />
    {/each}
</div>

<style lang="scss">
    .advertisement__non__slider {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 20px 50px;
    }    
</style>