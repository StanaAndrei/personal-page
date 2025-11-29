<script>
    import { browser } from '$app/environment';

    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function closeMenu() {
        isMenuOpen = false;
    }

    function handleResize() {
        if (browser && window.innerWidth >= 768 && isMenuOpen) {
            isMenuOpen = false;
        }
    }
</script>

<svelte:window on:resize={handleResize} />

<header>
    <nav>
        <!-- <a href="/" class="brand-logo" on:click={closeMenu}>MyPortfolio</a> -->

        <button
                class="hamburger"
                on:click={toggleMenu}
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
                aria-controls="nav-links-list"
        >
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>

        <ul class="nav-links" class:show-mobile-menu={isMenuOpen} id="nav-links-list">
            <li><a href="/" on:click={closeMenu}>Home</a></li>
            <li><a href="/about" on:click={closeMenu}>About</a></li>
            <li><a href="/projects" on:click={closeMenu}>Projects</a></li>
            <li><a href="/awards" on:click={closeMenu}>Awards</a></li>
            <li><a href="/stats" on:click={closeMenu}>Stats</a></li>
            <li><a href="/experience" on:click={closeMenu}>Experience</a></li>
            <li><a href="/contributions" on:click={closeMenu}>Contributions</a></li>
            <li><a href="/cv" on:click={closeMenu}>CV</a></li>
            <li><a href="/links" on:click={closeMenu}>Links</a></li>
        </ul>
    </nav>
</header>

<style>
    :root {
        --primary-color: #0f2027;
        --header-text-color: #fff;
        --breakpoint-md: 768px;
        --header-height: 60px;
    }

    html {
        scroll-padding-top: var(--header-height);
        scroll-behavior: smooth;
    }

    header {
        background: rgba(15,32,39,0.85);
        color: var(--header-text-color);
        position: sticky;
        top: 0;
        z-index: 100;
        box-shadow: 0 2px 12px 0 #00c3ff33;
        height: var(--header-height);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    }

    nav {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
        display: flex;
        align-items: center;
        height: 100%;
        position: relative;
        justify-content: center;
    }

    .nav-links {
        display: none;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .nav-links li {
        padding: 0;
        position: relative;
    }

    .nav-links a {
        color: var(--header-text-color);
        font-weight: 700;
        font-family: 'Montserrat', 'Roboto', sans-serif;
        text-decoration: none;
        padding: 0.5rem 1.1rem;
        display: block;
        border-radius: 8px;
        white-space: nowrap;
        position: relative;
        transition: background 0.18s, color 0.18s, box-shadow 0.18s;
        background: none;
        z-index: 1;
        font-size: 1.08rem;
        letter-spacing: 0.5px;
        overflow: visible;
    }

    .nav-links a::after {
        content: '';
        display: block;
        height: 3px;
        border-radius: 2px;
        margin-top: 4px;
        background: linear-gradient(90deg, #00c3ff 0%, #ffff1c 100%);
        opacity: 0;
        transform: scaleX(0);
        transition: opacity 0.2s, transform 0.2s;
    }

    .nav-links a:hover,
    .nav-links a:focus {
        color: #222;
        background: linear-gradient(90deg, #00c3ff22 0%, #ffff1c22 100%);
        box-shadow: 0 2px 12px 0 #00c3ff33;
        outline: none;
    }

    .nav-links a:hover::after,
    .nav-links a:focus::after {
        opacity: 1;
        transform: scaleX(1);
    }

    .nav-links li.active a,
    .nav-links a[aria-current="page"] {
        color: #222;
        background: linear-gradient(90deg, #00c3ff 0%, #ffff1c 100%);
        box-shadow: 0 2px 12px 0 #00c3ff55;
    }

    .nav-links li.active a::after,
    .nav-links a[aria-current="page"]::after {
        opacity: 1;
        transform: scaleX(1);
    }

    .hamburger {
        display: block;
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        padding: 10px;
        margin-left: auto;
        z-index: 110;
        line-height: 0;
    }

    .hamburger-box {
        width: 30px;
        height: 24px;
        display: inline-block;
        position: relative;
    }
    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after {
        width: 100%;
        height: 3px;
        background: linear-gradient(90deg, #00c3ff 0%, #ffff1c 100%);
        border-radius: 2px;
        position: absolute;
        left: 0;
        transition: transform 0.2s, background 0.2s;
    }
    .hamburger-inner {
        top: 50%;
        transform: translateY(-50%);
    }
    .hamburger-inner::before,
    .hamburger-inner::after {
        content: '';
        display: block;
    }
    .hamburger-inner::before {
        top: -10px;
    }
    .hamburger-inner::after {
        bottom: -10px;
    }
    .hamburger[aria-expanded='true'] .hamburger-inner {
        background: transparent;
    }
    .hamburger[aria-expanded='true'] .hamburger-inner::before {
        transform: translateY(10px) rotate(45deg);
    }
    .hamburger[aria-expanded='true'] .hamburger-inner::after {
        transform: translateY(-10px) rotate(-45deg);
    }

    /* --- Mobile Menu --- */
    .nav-links.show-mobile-menu {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(15,32,39,0.95);
        padding: 1.2rem 0.5rem 1.2rem 0.5rem;
        box-shadow: 0 8px 32px 0 #00c3ff44;
        border-top: 1.5px solid rgba(255,255,255,0.18);
        z-index: 105;
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border-radius: 0 0 18px 18px;
        animation: menuFadeIn 0.25s;
    }

    @keyframes menuFadeIn {
        from { opacity: 0; transform: translateY(-10px);}
        to { opacity: 1; transform: translateY(0);}
    }

    .nav-links.show-mobile-menu li {
        width: 100%;
        text-align: center;
        margin-bottom: 0.5rem;
    }
    .nav-links.show-mobile-menu li:last-child {
        margin-bottom: 0;
    }
    .nav-links.show-mobile-menu a {
        padding: 0.8rem 1.2rem;
        width: 100%;
        font-size: 1.15rem;
    }

    /* --- Desktop Styles --- */
    @media (min-width: 768px) {
        .hamburger {
            display: none;
        }
        nav {
            justify-content: center;
        }
        .nav-links {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.5rem;
            position: static;
            background: transparent;
            padding: 0;
            box-shadow: none;
            border-top: none;
            height: 100%;
            width: auto;
        }
        .nav-links li {
            width: auto;
            margin-bottom: 0;
        }
        .nav-links a {
            padding: 0.4rem 1rem;
            font-size: 1.08rem;
        }
    }
</style>