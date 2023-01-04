<script>
    import Header from "../components/Common/Header.svelte"
    import Footer from "../components/Common/Footer.svelte"
    import UsefulLinks from "../components/Common/UsefulLinks.svelte"
	import { onMount } from "svelte"
</script>

<div class="app-container">
    <Header />

    <main>
        <slot/>
    </main>

    <UsefulLinks />
    <Footer/>
</div>

<style global lang="scss">
    @import '../assets/css/common.scss';
</style>