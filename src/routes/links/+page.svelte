<script>
    import links from '$lib/data/links.js';
</script>

<svelte:head>
    <title>Links - Stana Andrew Portfolio</title>
    <meta name="description" content="Find me online on various platforms." />
    <!-- Google Fonts for consistency -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
    <!-- Font Awesome 6 for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer" />
</svelte:head>

<section class="links-section glass">
    <div class="links-glow"></div>
    <h1>
        <span class="gradient-text">Links</span>
        <span class="sparkle">🌐</span>
    </h1>
    <p class="subtitle">Here are some places where you can find me or my work online:</p>

    <ul class="links-list">
        {#each links as link (link.url)}
            <li>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {#if link.icon}
                        <i class={link.icon + " social-icon"} aria-hidden="true"></i>
                    {/if}
                    <span class="social-name">{link.name}</span>
                </a>
            </li>
        {/each}
    </ul>
</section>

<style>
    :global(body) {
        font-family: 'Roboto', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: linear-gradient(120deg, #0f2027 0%, #2c5364 100%);
        color: #f8f8f8;
        margin: 0;
        padding: 0;
        min-height: 100vh;
        overflow-x: hidden;
    }

    .links-section {
        position: relative;
        max-width: 700px;
        margin: 4rem auto 3rem auto;
        padding: 3.5rem 2rem 3rem 2rem;
        border-radius: 24px;
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
        background: rgba(255,255,255,0.10);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border: 1.5px solid rgba(255,255,255,0.18);
        z-index: 1;
        overflow: hidden;
    }

    .links-glow {
        position: absolute;
        top: -80px;
        left: 50%;
        transform: translateX(-50%);
        width: 600px;
        height: 300px;
        background: radial-gradient(circle, #00c3ff55 0%, #ffff1c22 60%, transparent 100%);
        filter: blur(60px);
        z-index: 0;
        pointer-events: none;
    }

    h1 {
        font-family: 'Montserrat', 'Roboto', sans-serif;
        font-size: 2.8rem;
        font-weight: 900;
        letter-spacing: 2px;
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.6rem;
        position: relative;
        z-index: 2;
    }

    .gradient-text {
        background: linear-gradient(90deg, #00c3ff 0%, #ffff1c 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        filter: drop-shadow(0 2px 8px #00c3ff55);
        animation: gradientMove 3s linear infinite alternate;
    }

    @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
    }

    .sparkle {
        font-size: 2rem;
        animation: sparkle 1.5s infinite alternate;
        filter: drop-shadow(0 0 8px #ffff1c);
    }

    @keyframes sparkle {
        0% { transform: scale(1) rotate(-10deg);}
        100% { transform: scale(1.2) rotate(10deg);}
    }

    .subtitle {
        font-size: 1.2rem;
        color: #e0e0e0;
        background: rgba(0,0,0,0.18);
        border-radius: 12px;
        padding: 0.7rem 1.2rem;
        box-shadow: 0 2px 12px 0 #00c3ff22;
        font-weight: 500;
        letter-spacing: 0.5px;
        margin-bottom: 2.5rem;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

    .links-list {
        list-style: none;
        padding: 0;
        margin: 0;
        z-index: 2;
        position: relative;
    }

    .links-list li {
        margin-bottom: 1.3rem;
        background: rgba(255,255,255,0.18);
        border-radius: 14px;
        box-shadow: 0 2px 16px 0 #00c3ff22, 0 1px 3px rgba(0,0,0,0.10);
        transition: transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s;
        padding: 1.1rem 1.7rem;
        position: relative;
        overflow: hidden;
    }

    .links-list li:hover {
        transform: scale(1.04) translateX(8px) rotate(-1deg);
        box-shadow: 0 8px 32px 0 #00c3ff44, 0 2px 8px rgba(0,0,0,0.18);
        z-index: 3;
    }

    .links-list a {
        font-weight: 700;
        font-size: 1.18em;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.8rem;
        color: #fff;
        background: linear-gradient(90deg, #00c3ff 0%, #ffff1c 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-fill-color: transparent;
        filter: drop-shadow(0 2px 8px #00c3ff55);
        transition: filter 0.2s, text-shadow 0.2s;
        position: relative;
        z-index: 2;
    }

    .links-list a:hover {
        filter: drop-shadow(0 0 16px #ffff1c);
        text-decoration: underline;
    }
    .social-icon {
        font-size: 1.5em;
        background: linear-gradient(90deg, #00c3ff 0%, #ffff1c 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        filter: drop-shadow(0 2px 8px #00c3ff55);
        transition: filter 0.2s, color 0.2s, transform 0.2s;
        margin-right: 0.7rem;
        width: 2.2em;      /* Increased from 28px (~1.75em) to 2.2em */
        min-width: 2.2em;  /* Ensures enough space for all icons */
        text-align: center;
        display: inline-block;
        vertical-align: middle;
    }
    .links-list li:hover .social-icon {
        filter: drop-shadow(0 0 16px #ffff1c);
        transform: scale(1.2) rotate(-8deg);
    }
    .social-name {
        background: linear-gradient(90deg, #00c3ff 0%, #ffff1c 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        filter: drop-shadow(0 2px 8px #00c3ff55);
        transition: filter 0.2s, color 0.2s;
    }
    .links-list li:hover .social-name {
        filter: drop-shadow(0 0 16px #ffff1c);
    }

    @media (max-width: 600px) {
        .links-section {
            padding: 2rem 0.5rem 2rem 0.5rem;
        }
        h1 {
            font-size: 2rem;
        }
        .links-list li {
            padding: 0.8rem 0.7rem;
        }
    }
</style>