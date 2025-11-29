<script>
    import links from '$lib/data/links.js'; // Each link: { name, url, icon }
</script>

<!-- Font Awesome CDN (add once in your root layout if not already present) -->
<svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
</svelte:head>

<div class="social-links">
    {#each links.slice(0, 3) as link}
        <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} class="social-link">
            {#if link.icon}
                <i class={link.icon + " social-icon"} aria-hidden="true"></i>
            {/if}
            <span class="social-name">{link.name}</span>
        </a>
    {/each}
</div>

<style>
    .social-links {
        display: flex;
        justify-content: center;
        gap: 1.2rem;
        margin-bottom: 1.5rem;
        z-index: 2;
    }
    .social-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1.1rem;
        border-radius: 2rem;
        background: rgba(255,255,255,0.13);
        box-shadow: 0 2px 8px #00c3ff33;
        text-decoration: none;
        font-weight: 700;
        font-family: 'Montserrat', 'Roboto', sans-serif;
        font-size: 1.08rem;
        color: #fff;
        transition: background 0.18s, box-shadow 0.18s, transform 0.18s, color 0.18s;
        position: relative;
        overflow: hidden;
    }
    .social-link:hover {
        background: linear-gradient(90deg, #00c3ff 0%, #ffff1c 100%);
        color: #222;
        box-shadow: 0 4px 16px #00c3ff55;
        transform: scale(1.07);
        text-decoration: none;
    }
    .social-icon {
        font-size: 1.3em;
        background: linear-gradient(90deg, #00c3ff 0%, #ffff1c 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        filter: drop-shadow(0 2px 8px #00c3ff55);
        transition: filter 0.2s, color 0.2s;
    }
    .social-link:hover .social-icon {
        filter: drop-shadow(0 0 16px #ffff1c);
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
    .social-link:hover .social-name {
        filter: drop-shadow(0 0 16px #ffff1c);
    }
</style>