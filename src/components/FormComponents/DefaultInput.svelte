<script>
    import { v4 as uuid } from '@lukeed/uuid'
	import { onMount } from 'svelte'

    const uuidSelector = uuid()

    let _document

    export let inputConfig = {
        type: "text"
    }


    onMount(() => {
        _document = document

        if ('mask' in inputConfig && inputConfig.mask.addMask === true) {
            switch (inputConfig.mask.maskType) {
                case 'contact':
                    inputConfig.mask.maskModule(
                        _document.getElementById(`field-${ uuidSelector }`),
                        {
                            mask: inputConfig.mask.maskContent
                        }
                    )
                break;
            }
        }
    })
</script>

<div class="input-default">
    <input type="{ inputConfig.type }" id="field-{ uuidSelector }" name="{ inputConfig.name }" class="form__field" autocomplete="off" placeholder="{ inputConfig.label }">
    <label for="field-{ uuidSelector }" class="form__label">{ inputConfig.label }</label>
</div>

<style lang="scss">
    @import "../../assets/css/components/formElements/defaultInput.scss";
</style>