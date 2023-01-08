<script>
	import CommonTitle from '../../../components/Common/CommonTitle.svelte'
    import checkAuth from '$lib/helpers/checkAuth'
    import DefaultInput from '../../../components/FormComponents/DefaultInput.svelte'
    import DefaultButton from '../../../components/FormComponents/DefaultButton.svelte'
    import DefaultDropdown from '../../../components/FormComponents/DefaultDropdown.svelte'
    import IMask from 'imask'
	import { onMount } from 'svelte'
    import { serializeForm } from '$lib/helpers/events'

    let _document, showPasswordComponent = false

    export let data

    onMount(() => {
        _document = document
    })

    // const submitForm = (e) => {
    //     e.preventDefault()
    //     const mainForm = _document.querySelector('.mainForm')
    //     const formData = serializeForm(mainForm)
    
    //     console.log(formData)
    // }

    const signNext = (e) => {
        setTimeout(() => {
            showPasswordComponent = true
        }, 80)

        e.target.parentElement.style.transition = '0.1s margin'
        e.target.parentElement.style.marginBottom = '-60px'
    }
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
                    <DefaultInput inputConfig={
                        {
                            type: 'text',
                            name: 'relevantPerson',
                            label: 'Əlaqədar şəxs:*'
                        }
                    } />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <DefaultInput inputConfig={
                        {
                            type: 'text',
                            name: 'userEmail',
                            label: 'E-mail:*'
                        }
                    } />
                </div>
                <div class="col">
                    <DefaultInput inputConfig={ 
                        { 
                            type: 'text', 
                            name: 'userContactNumber', 
                            label: 'Telefon:*',
                            mask: {
                                addMask: true,
                                maskType: 'contact',
                                maskModule: IMask,
                                maskContent: '+{994}000000000'
                            }
                        } 
                    } />
                </div>
                <div class="col">
                    {#if showPasswordComponent }
                        <DefaultInput inputConfig={ 
                            { 
                                type: 'password',
                                name: 'fetchedPassword',
                                label: 'Şifrə:*'
                            }
                        } />
                    {/if}

                    <DefaultButton buttonConfig={
                        {
                            text: "Davam etmək",
                            handleClick: signNext
                        }
                    } />
                </div>
            </div>
        </form>
    </div>

    <CommonTitle titleConfig={ data.advertisementInfo } />

    <div id="advertisementInfo">
        <div class="fields">
            <form method="POST" class="mainForm">
                <div class="row">
                    <div class="col">
                        <DefaultDropdown dropdownConfig={ {
                            name: 'category',
                            options: [
                                { id: 1, title: 'Mənzil - yeni tikili', selected: true },
                                { id: 2, title: 'Mənzil - köhnə tikili' },
                                { id: 3, title: 'Ev/villa' },
                                { id: 4, title: 'Obyekt' },
                            ]
                        } } />
                    </div>
                </div>
                <DefaultInput inputConfig={
                    { 
                        type: 'text',
                        name: 'address',
                        label: 'Ünvan:*'
                    }
                } />
            </form>
        </div>
        <div class="rules">
            <div class="title">{ data.ruleData.title }</div>
            <ul class="content">
                {#each data.ruleData.rules as rule }
                    <li>{ rule }</li>
                {/each}
            </ul>
        </div>
    </div>
</div>

<svelte:head>
    <title>{ data.pageTitle }</title>
</svelte:head>

<style lang="scss">
    @import "../../../assets/css/pages/create/advertisement.scss";
</style>