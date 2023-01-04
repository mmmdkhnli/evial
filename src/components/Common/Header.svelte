<script>
      // import { createEventDispatcher } from 'svelte'
      import Top from "./Top.svelte"
      import Navbar from "./Navbar.svelte"
	import NavbarMobile from "./NavbarMobile.svelte"
	import MobileMenu from "./MobileMenu.svelte"
      import { onMount } from "svelte"

      let mounted = false
      let innerWidth = 0

      onMount(() => {
            mounted = true
      })

      let isMenuOpened = { active: false }

      const openMobileMenu = event => {
            isMenuOpened = event.detail
      }

</script>

<svelte:window bind:innerWidth />

<header>
      {#if mounted }
            { #if (innerWidth < 1200) }
                  <NavbarMobile on:openMobileMenu={ openMobileMenu } />
                  <MobileMenu bind:isMenuOpened />
            { :else }
                  <Top />
                  <Navbar/>
            { /if }
      {:else}
            <Top />
            <Navbar/>
            <NavbarMobile on:openMobileMenu={ openMobileMenu } />
            <MobileMenu bind:isMenuOpened />
      {/if}
</header>

<style lang="scss">
      :global(header) {
            width: 100%;
            margin-bottom: 50px;

            @media screen and (max-width: 549px) {
                  & {
                        margin-bottom: 20px;
                  }
            }
      }
</style>