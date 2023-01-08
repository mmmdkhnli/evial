<script>
    import { v4 as uuid } from '@lukeed/uuid'
	import { onMount } from 'svelte'
    import { clickOutside } from '$lib/helpers/events'

    let _document, 
        selectboxValue, 
        dropdownHeaderTitle = 'Kateqoriya seçin',
        dropdownHeaderId = 0,
        showBody = false,
        options = [],
        BreakException = {}
    onMount(() => {
        _document = document

        options = dropdownConfig?.options ?? []

        try {
            options.forEach(element => {
                if (element?.selected === true) {
                    selectboxValue = element.id

                    dropdownHeaderTitle = element.title
                    dropdownHeaderId = element.id

                    throw BreakException
                }
            })
        } catch (e) {
            if (e !== BreakException) throw e
        }
    })

    const uuidSelector = uuid()

    export let dropdownConfig

    const handleClickOutside = () => {
        showBody = false
    }

    const handleClickOption = (e) => {
        const dataValue = Number(e.target.getAttribute('data-value'))

        _document.getElementById(`select-${ uuidSelector }`).value = dataValue

        options.map(option => {
            if (option.id === dataValue) {
                option.selected = true

                dropdownHeaderTitle = option.title
                dropdownHeaderId = option.id
                selectboxValue = option.id
            } else {
                delete option.selected
            }
        })

        options = options
    }
</script>

<div class="dropdown-default">
    <select name={ dropdownConfig.name } id="select-{ uuidSelector }" bind:value={ selectboxValue }>
        {#each options as option (option.id) }
            <option value="{ option.id }" >{ option.title }</option>
        {/each}
    </select>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="dropdown" id="dropdown-{ uuidSelector }" on:click={ () => { showBody = !showBody } } use:clickOutside on:click_outside={ handleClickOutside }>
        <div class="dropdownHeader" data-value={ dropdownHeaderId }>{ dropdownHeaderTitle }</div>
        <div class="dropdownBody { showBody ? 'show' : '' }">
            {#each options as option (option.id) }
                <div class="option { option?.selected === true ? 'selected' : '' }" data-value={ option.id } on:click={ (e) => { handleClickOption(e) } }>{ option.title }</div>
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
    @import "../../assets/css/components/formElements/defaultDropdown.scss";
</style>