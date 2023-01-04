<script>
    import { createEventDispatcher } from 'svelte'
	import DropDown from "../../assets/icons/DropDown.svelte"
    import { clickOutside } from '$lib/helpers/events'

    let showSearchBody = false

    const dispatch = createEventDispatcher()
    
    const openMobileMenu = () => {
        dispatch('openMobileMenu', { active: true })
    }
</script>

<nav>
    <div class="nav__left">
        <div class="hamburger" on:click={ openMobileMenu }>
            {#each Array(3) as element }
                <div class="row">
                    <div class="shape1"></div>
                    <div class="shape2"></div>
                </div>
            {/each}
        </div>
        <a href="/" class="logo">Evial</a>
    </div>
    <div class="nav__right">
        <a class="create" href="/create"> </a>
        <div class="search" on:click={ () => showSearchBody = !showSearchBody }  use:clickOutside on:click_outside={ () => {
            showSearchBody = false
        } }>
            <div class="search-header">
                <div class="title">Axtarış</div>
                <div class="arrow { showSearchBody ? 'reverse' : '' }">
                    <DropDown />
                </div>
            </div>
            {#if showSearchBody }
                <div class="search-body"></div>
            {/if}
        </div>
    </div>
</nav>

<style lang="scss">
    @import '../../assets/css/components/common/navbarMobile.scss';
</style>