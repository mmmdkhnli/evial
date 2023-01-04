<script>
    import { page } from '$app/stores'
</script>

<nav class="header__nav">
    <div class="header__nav-preferences">
        <a href="/" class="logo">Evial</a>
        <div class="navigations">
            <ul>
                <li>
                    <a class="{ $page.url.pathname === '/' ? 'active' : ''}" href="/">Ana səhifə</a>
                </li>
                <li>
                    <a class="{ $page.url.pathname === '/shopping' ? 'active' : ''}" href="/shopping">Alqı-satqı</a>
                </li>
                <li>
                    <a class="{ $page.url.pathname === '/rent' ? 'active' : ''}" href="/rent">Kirayə</a>
                </li>
                <li>
                    <a class="{ $page.url.pathname === '/agency' ? 'active' : ''}" href="/agency">Agentlik</a>
                </li>
                <li>
                    <a class="{ $page.url.pathname === '/residental-complexes' ? 'active' : ''}" href="/residental-complexes">Yaşayış kompleksləri</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<style lang="scss">
    @import '../../assets/css/components/common/navbar.scss';
</style>