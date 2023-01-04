<script>
    import liveinternet from '../../assets/images/liveinternet.png'
    import Facebook from '../../assets/icons/Facebook.svelte'
    import Twitter from '../../assets/icons/Twitter.svelte'
    import Instagram from '../../assets/icons/Instagram.svelte'
</script>

<footer>
    <div class="footer__inner">
        <div class="footer__top">
            <div class="logo">Evial</div>
            <a href="/create-ad" class="create-ad">Reklam yerləşdirin</a>
        </div>

        <div class="seperator"></div>

        <div class="footer__bottom">
            <div class="footer__bottom-l">
                <div class="footer__bottom-l__top">
                    <div class="short-nav">
                        <ul>
                            <li>
                                <a href="/about">Haqqımızda</a>
                            </li>
                            <li>
                                <a href="/user-agreement">İstifadəçi razılaşması</a>
                            </li>
                            <li>
                                <a href="/sitemap">Saytın xəritəsi</a>
                            </li>
                        </ul>
                    </div>
                    <div class="copyright">
                        <span>© 2022 Evial MMC. Bütün hüquqlar qorunur.</span>
                    </div>
                </div>
                <div class="footer__bottom-l__bottom">
                    <div class="social-links">
                        <a href="#facebook" class="item">
                            <Facebook />
                        </a>
                        <a href="#twitter" class="item">
                            <Twitter />
                        </a>
                        <a href="#instagram" class="item">
                            <Instagram />
                        </a>
                    </div>
                    <div class="created-by">
                        <span>Built in by KeyTD</span>
                    </div>
                </div>
            </div>
            <div class="footer__bottom-r">
                <img src="{ liveinternet }" alt="liveinternet" class="liveinternet">
            </div>
        </div>
    </div>
</footer>

<style lang="scss">
    @import '../../assets/css/components/common/footer.scss';
</style>