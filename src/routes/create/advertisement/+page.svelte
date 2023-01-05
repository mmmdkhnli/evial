<script>
	import CommonTitle from '../../../components/Common/CommonTitle.svelte'
    import checkAuth from '$lib/helpers/checkAuth'
    import DefaultInput from '../../../components/FormComponents/DefaultInput.svelte'

    export let data
</script>

<div class="page">
    <CommonTitle titleConfig={ data.titleConfig } />

    <div id="create-detail">
        <p>Evial.az-da bir ay ərzində 1 pulsuz elan yerləşdirmək olar. Hər bir növbəti elanın qiyməti - <b>5 AZN</b>. Siz 1 pulsuz elanyerləşdirə bilərsiniz.</p>
    </div>

    <div id="signContainer">
        <form method="POST" class="signForm">
            <div class="row">
                <div class="col">
                    <DefaultInput inputConfig={ { type: 'text', name: 'relevantPerson', label: 'Əlaqədar şəxs:*' } } />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <DefaultInput inputConfig={ { type: 'text', name: 'userEmail', label: 'E-mail:*' } } />
                </div>
                <div class="col">
                    <DefaultInput inputConfig={ { type: 'text', name: 'userContactNumber', label: 'Telefon:*' } } />
                </div>
                <div class="col">
                    <DefaultInput inputConfig={ { type: 'password', name: 'fetchedPassword', label: 'Şifrə:*', showPassword: true } } />
                </div>
            </div>
        </form>
    </div>
</div>

<svelte:head>
    <title>{ data.pageTitle }</title>
</svelte:head>

<style lang="scss">
    @import "../../../assets/css/pages/create/advertisement.scss";
</style>