<script>
    const users = ['Sahib', 'Alim', 'Orxan - Emlak', 'Qasım m.', 'Natella xanım', 'Elvin İsgəndərov', 'Məcid', 'Aygün X.', 'Zəhra əmlak', 'Euro Home', 'Rəhman', 'Emil', 'TACEMLAK', 'Anar Xırdalan Əmlak', 'Brand House', 'Villa Haus']

    $: innerWidth = 0
    $: activeUsers = innerWidth <= 767 ? users.slice(0, 9) : users

</script>

<svelte:window bind:innerWidth />

<section id="useful__links">
    <div class="inner">
        <div class="content">
            <div class="title">İstifadəçilərimiz</div>
            <div class="agents">
                { #each activeUsers as user }
                    <div class="agent">
                        <a href="#agent">{ user }</a>
                    </div>
                {/each }
            </div>
        </div>
        <div class="content">
            <div class="title">Faydalı linklər</div>
            <div class="links">
                { #each Array(8) as link}
                    <a href="#link" class="link">Bakida gunluk kiraye evler</a>
                {/each }
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @import '../../assets/css/components/common/usefullinks.scss';
</style>