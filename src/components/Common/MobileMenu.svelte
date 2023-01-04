<script>
    import { clickOutside } from '$lib/helpers/events'
	import Close from "../../assets/icons/Close.svelte"

    export let isMenuOpened = { active: false }

    const closeOpenedMenu = () => {
        isMenuOpened.active = false
    }
</script>
<div id="mobile__menu" class="{ isMenuOpened.active ? 'show' : '' }" use:clickOutside on:click_outside={ () => {
    isMenuOpened.active = false
} }>
    <div class="mobile__menu-header">
        <a href="/" id="logo" on:click={ () => {
            closeOpenedMenu()
        } }>Evial</a>
        <div id="close__menu" on:click={ () => {
            isMenuOpened.active = false
        } }>
            <Close />
        </div>
    </div>
    <div class="line blue"></div>
    <div class="navigations">
        <div class="nav-item" on:click={ () => {
            closeOpenedMenu()
        } }>Giriş</div>
        <a href="/favourites" class="nav-item" on:click={ () => {
            closeOpenedMenu()
        } }>Seçilmişlər</a>
    </div>
    <div class="line"></div>
    <div class="navigations">
        <a href="/shopping" class="nav-item" on:click={ () => {
            closeOpenedMenu()
        } }>Alqı-satqı</a>
        <a href="/rent" class="nav-item" on:click={ () => {
            closeOpenedMenu()
        } }>Kirayə</a>
        <a href="/agency" class="nav-item" on:click={ () => {
            closeOpenedMenu()
        } }>Agentlik</a>
        <a href="/residental-complexes" class="nav-item" on:click={ () => {
            closeOpenedMenu()
        } }>Yaşayış kompleksləri</a>
    </div>
    <div class="line"></div>
    <div class="navigations">
        <a href="/about" class="nav-item" on:click={ () => {
            closeOpenedMenu()
        } }>Haqqımızda</a>
        <a href="/user-agreement" class="nav-item" on:click={ () => {
            closeOpenedMenu()
        } }>İstifadəçi razılaşması</a>
        <a href="/sitemap" class="nav-item" on:click={ () => {
            closeOpenedMenu()
        } }>Saytın xəritəsi</a>
    </div>
    <div class="line"></div>
    <div class="other-details">
        <div class="detail-item">Dəstək xidməti:</div>
        <a class="detail-item" href="tel:0121234455" on:click={ () => {
            closeOpenedMenu()
        } }>(012) 123 44 55</a>
        <div class="detail-item" on:click={ () => {
            closeOpenedMenu()
        } }>Rus versiya</div>
    </div>
</div>

<style lang="scss">
    @import '../../assets/css/components/common/mobileMenu.scss';
</style>