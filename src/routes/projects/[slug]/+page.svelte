<script>
    import { base } from '$app/paths'; // 1. Import base

    /** @type {import('./$types').PageData} */
    export let data; // Data loaded from +page.js

    const { project } = data;

    // 2. Helper to handle links safely.
    // If a link starts with '/', prepends the base path. Otherwise (https://), leaves it alone.
    const getSafeLink = (url) => url.startsWith('/') ? `${base}${url}` : url;
</script>

<svelte:head>
    <title>{project.title} - Stana Andrew Portfolio</title>
    <meta name="description" content={project.description} />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
</svelte:head>

<article class="project-article glass">
    <div class="project-glow"></div>
    {#if project.projectUrl}
        <h1>
            <a href={getSafeLink(project.projectUrl)} target="_blank" rel="noopener noreferrer" class="title-link">
                <span class="gradient-text">{project.title}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="external-link-icon"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
        </h1>
    {:else}
        <h1><span class="gradient-text">{project.title}</span></h1>
    {/if}

    <div class="project-content">
        <h2>Description</h2>
        <p class="project-description">{project.description}</p>

        {#if project.tags && project.tags.length}
            <div class="tags-section">
                <h2>Technologies / Skills</h2>
                <div class="tech-list">
                    {#each project.tags as tag (tag)}
                        <span class="tech-tag">{tag}</span>
                    {/each}
                </div>
            </div>
        {/if}

        <h2>Details</h2>
        <div class="project-details">{project.details || 'More details coming soon.'}</div>

        {#if project.projectUrl}
            <div class="project-link-section">
                <h2>Project Link</h2>
                <a href={getSafeLink(project.projectUrl)} target="_blank" rel="noopener noreferrer" class="button-link">
                    Visit Project
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="external-link-icon"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
            </div>
        {/if}

    </div>
</article>

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

    .project-article {
        position: relative;
        max-width: 900px;
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

    .project-glow {
        position: absolute;
        top: -80px;
        left: 50%;
        transform: translateX(-50%);
        width: 700px;
        height: 320px;
        background: radial-gradient(circle, #00c3ff55 0%, #ffff1c22 60%, transparent 100%);
        filter: blur(60px);
        z-index: 0;
        pointer-events: none;
    }

    h1 {
        margin-bottom: 1.5rem;
        font-size: 2.2rem;
        font-family: 'Montserrat', 'Roboto', sans-serif;
        font-weight: 900;
        letter-spacing: 1.5px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
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
    .title-link {
        text-decoration: none;
        font-weight: inherit;
        font-size: inherit;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        color: inherit;
        transition: filter 0.2s;
    }
    .title-link:hover {
        filter: drop-shadow(0 0 16px #ffff1c);
        text-decoration: underline;
    }
    .external-link-icon {
        width: 0.9em;
        height: 0.9em;
        stroke: currentColor;
        opacity: 0.7;
        transition: opacity 0.2s ease;
        vertical-align: middle;
    }
    .title-link:hover .external-link-icon,
    .button-link:hover .external-link-icon {
        opacity: 1;
    }

    .project-content h2 {
        margin-top: 2.5rem;
        margin-bottom: 1rem;
        border-bottom: 2px solid #00c3ff;
        padding-bottom: 0.5rem;
        display: inline-block;
        font-size: 1.2rem;
        font-family: 'Montserrat', 'Roboto', sans-serif;
        font-weight: 700;
        background: linear-gradient(90deg, #00c3ff 0%, #ffff1c 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        filter: drop-shadow(0 2px 8px #00c3ff55);
    }
    .project-description, .project-details {
        color: #fff;
        font-size: 1.05rem;
        line-height: 1.6;
        text-shadow: 0 1px 8px #00c3ff22;
    }
    .tags-section {
        margin-top: 2rem;
    }
    .tech-list {
        margin-top: 0.5rem;
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
    }
    .tech-tag {
        display: inline-block;
        background: linear-gradient(90deg, #00c3ff 0%, #ffff1c 100%);
        color: #222;
        padding: 0.25rem 0.8rem;
        border-radius: 1rem;
        font-size: 0.88rem;
        font-weight: 700;
        line-height: 1.4;
        white-space: nowrap;
        box-shadow: 0 2px 8px #00c3ff33;
        transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s;
        outline: none;
        border: none;
    }
    .tech-tag:hover {
        background: linear-gradient(90deg, #ffff1c 0%, #00c3ff 100%);
        color: #111;
        box-shadow: 0 4px 16px #ffff1c55;
        transform: scale(1.07);
    }
    .project-link-section {
        margin-top: 2.5rem;
    }
    .button-link {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        background: linear-gradient(90deg, #00c3ff 0%, #ffff1c 100%);
        color: #222;
        border-radius: 6px;
        text-decoration: none;
        font-weight: bold;
        font-family: 'Montserrat', 'Roboto', sans-serif;
        font-size: 1rem;
        box-shadow: 0 2px 8px #00c3ff33;
        transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s;
        outline: none;
        border: none;
    }
    .button-link:hover {
        background: linear-gradient(90deg, #ffff1c 0%, #00c3ff 100%);
        color: #111;
        box-shadow: 0 4px 16px #ffff1c55;
        transform: scale(1.07);
        text-decoration: underline;
    }
    @media (max-width: 600px) {
        .project-article {
            padding: 2rem 0.5rem 2rem 0.5rem;
        }
        h1 {
            font-size: 1.3rem;
        }
        .project-content h2 {
            font-size: 1rem;
        }
    }
</style>