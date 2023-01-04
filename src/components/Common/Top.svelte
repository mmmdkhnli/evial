<script>
    import { siteLang } from '$lib/stores/siteLang'
    import { clickOutside } from '$lib/helpers/events'
    import { get } from 'svelte/store'
    // import { getContext, setContext, onMount } from "svelte"
	import ArrowDown from "../../assets/icons/ArrowDown.svelte"
	import Login from "../../assets/icons/Login.svelte"

    // let siteLangs = getContext('siteLangs')

    // console.log(siteLangs);


    const languages = get(siteLang)

    let selectedLang = undefined
    let otherLangList = []
    let showLangList = false

    languages.forEach(language => {
      if (language.active) selectedLang = language
      else otherLangList.push(language)  
    })

    const switchLang = (selectedLang) => {
        // const newSiteLang = [
        //     { lang: 'az', title: 'AZ', active: false },
        //     { lang: 'ru', title: 'RU', active: true }
        // ]

        // siteLang.update((oldValue) => newSiteLang)
        console.log(selectedLang)
    }
</script>

<div class="header__top">
    <div class="header__top-preferences">
        <div class="header__top__lang-preference">
            <div class="lang-container" use:clickOutside on:click_outside={ () => {
                showLangList = false
            } }>
                <div class="selected-lang" on:click={ () => {
                    showLangList = !showLangList
                } }>
                    <div class="lang-title">{ selectedLang.title }</div>
                    <div class="arrow { showLangList ? 'reverse' : '' }">
                        <ArrowDown/>
                    </div>
                </div>
                {#if showLangList && (otherLangList.length > 0) }
                <div class="lang-list">
                    { #each otherLangList as language }
                        <div class="item" on:click={ () => {
                            switchLang(language.lang)
                        } }>{ language.title }</div>
                    {/each }
                </div>
                {/if}
            </div>
        </div>
        <div class="header__top__nav-preference">
            <a class="item" href="tel:0121234455">Dəstək xidməti: (012) 123 44 55</a>
            <a class="item" href="/favourites">Seçilmişlər</a>
            <a class="item" href="/create">
                <div class="adversity">Elan yerləşdir</div>
            </a>
            <a class="item" href="#login">
                <div class="login">
                    <Login/>
                    <span>Giriş</span>
                </div>
            </a>
        </div>
    </div>
</div>

<style lang="scss">
    @import '../../assets/css/components/common/top.scss';
</style>