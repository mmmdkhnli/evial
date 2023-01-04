<script>
    export let pageData
</script>

<section class="static__page">
    <div class="static__page-header">
        <div class="header-banner"></div>
        <div class="header-title">{ pageData.pageHeader }</div>
    </div>
    <div class="content"> { @html pageData.content } </div>
</section>

<style lang="scss">
    @import '../../assets/css/components/common/commonStatic.scss';
</style>

<svelte:head>
    <title>{ pageData.title }</title>
</svelte:head>