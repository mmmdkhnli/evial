<script>
    export let titleConfig
</script>

<div class="commonTitle">
    <div class="banner-bg"></div>
    <div class="title-header">
        <div class="header-text">{ titleConfig.title }</div>
        { #if ('detail' in titleConfig) }
        <a class="more" href={ titleConfig.detail.url }>{ titleConfig.detail.title }</a>
        { /if }
    </div>
</div>

<style lang="scss">
    @import '../../assets/css/components/common/commonTitle.scss';
</style>