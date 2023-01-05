<script>
    import { v4 as uuid } from '@lukeed/uuid'

    export let inputConfig = {
        type: "text"
    }

    const uuidSelector = uuid()
</script>

<div class="input-default">
    <input type="{ inputConfig.type }" id="field-{ uuidSelector }" name="{ inputConfig.name }" class="form__field" placeholder="{ inputConfig.label }">
    <label for="field-{ uuidSelector }" class="form__label">{ inputConfig.label }</label>
</div>

<style lang="scss">
    @import "../../assets/css/components/formElements/defaultInput.scss";
</style>