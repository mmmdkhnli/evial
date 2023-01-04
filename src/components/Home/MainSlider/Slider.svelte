<div id="main-slider">
    Some slider items
</div>

<style lang="scss">
    #main-slider {
        width: 100%;
        height: 900px;
        background-color: #c9c9c9;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;

        @media screen and (max-width: 549px) {
            & {
                height: 400px;
            }
        }
    }
</style>