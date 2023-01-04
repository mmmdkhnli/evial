<script>
    import AdvertisementContainer from "../../components/Advertisement/AdvertisementContainer.svelte"

    const advertisementConfig = [
        { 
            type: 'rentAdvertisements',
            title: 'Elanlar',
            flowType: 'primitive',
            order: 3
        }
    ]
</script>

{#each advertisementConfig as config (config.order) }
    <AdvertisementContainer advertisementConfig={config} />
{/each}

<svelte:head>
    <title>Kirayə</title>
</svelte:head>