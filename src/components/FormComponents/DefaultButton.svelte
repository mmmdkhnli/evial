<script>
    import { v4 as uuid } from '@lukeed/uuid'
	import { createEventDispatcher, onMount } from 'svelte'

    let _document
    
    onMount(() => {
        _document = document
    })

    const uuidSelector = uuid()

    export let buttonConfig = {
        text: "Davam etmək",
        handleClick: () => {}
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="button-default" on:click={ buttonConfig.handleClick }>
    <div class="btn" id="btn-{ uuidSelector }">{ buttonConfig.text }</div>
</div>

<style lang="scss">
    @import "../../assets/css/components/formElements/defaultButton.scss";
</style>