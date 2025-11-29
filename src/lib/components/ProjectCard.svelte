<script>
    import { base } from '$app/paths'; // 1. Import base path

    // Expects a project object { slug, title, description, projectUrl?, tags? }
    export let project;
</script>

<div class="card">
    <div class="card-content">
        {#if project.projectUrl}
            <h3>
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" class="title-link">
                    <span class="gradient-text">{project.title}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="external-link-icon"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
            </h3>
        {:else}
            <h3><span class="gradient-text">{project.title}</span></h3>
        {/if}

        <p class="project-description">{project.description}</p>

        {#if project.tags && project.tags.length}
            <div class="tech-list">
                {#each project.tags as tag (tag)}
                    <span class="tech-tag">{tag}</span>
                {/each}
            </div>
        {/if}

        <a href="{base}/projects/{project.slug}" class="details-link">View Details</a>
    </div>
</div>

<style>
    .card {
        border: 1.5px solid rgba(255,255,255,0.18);
        border-radius: 16px;
        background: rgba(255,255,255,0.18);
        box-shadow: 0 2px 16px 0 #00c3ff22, 0 1px 3px rgba(0,0,0,0.10);
        transition: transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        position: relative;
    }
    .card:hover {
        transform: scale(1.04) translateY(-6px) rotate(-1deg);
        box-shadow: 0 8px 32px 0 #00c3ff44, 0 2px 8px rgba(0,0,0,0.18);
        z-index: 3;
    }
    .card-content {
        padding: 1.5rem 1.5rem 1.2rem 1.5rem;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
    h3 {
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-size: 1.18rem;
        font-weight: 700;
        letter-spacing: 0.5px;
    }
    .gradient-text {
        background: linear-gradient(90deg, #00c3ff 0%, #ffff1c 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        filter: drop-shadow(0 2px 8px #00c3ff55);
    }
    .title-link {
        text-decoration: none;
        font-weight: 700;
        font-size: inherit;
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
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
    }
    .title-link:hover .external-link-icon {
        opacity: 1;
    }
    .project-description {
        margin-bottom: 1rem;
        font-size: 1.05rem;
        color: #fff;
        flex-grow: 1;
        text-shadow: 0 1px 8px #00c3ff22;
        line-height: 1.6;
    }
    .tech-list {
        margin-top: 0.75rem;
        margin-bottom: 1rem;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
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
    .details-link {
        display: inline-block;
        margin-top: auto;
        padding: 0.5rem 1.1rem;
        background: linear-gradient(90deg, #00c3ff 0%, #ffff1c 100%);
        color: #222;
        border-radius: 6px;
        text-decoration: none;
        text-align: center;
        font-weight: 700;
        font-family: 'Montserrat', 'Roboto', sans-serif;
        font-size: 1rem;
        box-shadow: 0 2px 8px #00c3ff33;
        transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s;
        align-self: flex-start;
        outline: none;
        border: none;
    }
    .details-link:hover {
        background: linear-gradient(90deg, #ffff1c 0%, #00c3ff 100%);
        color: #111;
        box-shadow: 0 4px 16px #ffff1c55;
        transform: scale(1.07);
        text-decoration: underline;
    }
</style>