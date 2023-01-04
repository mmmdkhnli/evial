<script>
    import AdvertisementContainer from "../../components/Advertisement/AdvertisementContainer.svelte"

    const advertisementConfig = [
        { 
            type: 'vipAdversitements',
            title: 'VIP elanlar',
            flowType: 'complex',
            order: 1,
            detail: {
                title: 'Bütün VIP elanlar',
                url: '#page'
            }
        },
        { 
            type: 'premiumAdversitements',
            title: 'Premium elanlar',
            flowType: 'complex',
            order: 2,
            detail: {
                title: 'Bütün Premium elanlar',
                url: '#page'
            }
        },
        { 
            type: 'advertisements',
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
    <title>Alqı-satqı</title>
</svelte:head>