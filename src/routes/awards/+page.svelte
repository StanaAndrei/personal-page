<script>
    import { awards } from '$lib/data/awards.js';

    // Sort awards by date, descending (most recent first).
    const sortedAwards = [...awards].sort((a, b) => {
        const dateA = a.date ?? -Infinity;
        const dateB = b.date ?? -Infinity;
        return dateB - dateA;
    });
</script>

<svelte:head>
    <title>Awards & Recognition | Stana Andrew</title>
    <meta name="description" content="A list of awards and recognitions received." />
    <!-- Google Fonts for consistency -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
</svelte:head>

<section class="awards-container glass">
    <div class="awards-glow"></div>
    <h2>
        <span class="gradient-text">Awards & Recognition</span>
        <span class="sparkle">🏅</span>
    </h2>

    {#if sortedAwards && sortedAwards.length > 0}
        <div class="awards-list">
            {#each sortedAwards as award (award.title + (award.date || 'nodate'))}
                <article class="award-entry">
                    <header class="award-header">
                        <h3 class="award-title">{award.title}</h3>
                        {#if award.date}
                            <span class="award-date">{award.date}</span>
                        {/if}
                    </header>
                    <p class="award-description">{award.description}</p>
                </article>
            {/each}
        </div>
    {:else}
        <p class="no-awards-message">No awards information available yet.</p>
    {/if}
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

    .awards-container {
        position: relative;
        max-width: 1000px;
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

    .awards-glow {
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

    h2 {
        font-family: 'Montserrat', 'Roboto', sans-serif;
        font-size: 2.5rem;
        font-weight: 900;
        letter-spacing: 2px;
        margin-bottom: 2.5rem;
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

    .awards-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 2rem;
        z-index: 2;
        position: relative;
    }

    .award-entry {
        background: rgba(255,255,255,0.18);
        padding: 1.5rem;
        border-radius: 16px;
        border: 1.5px solid rgba(255,255,255,0.18);
        box-shadow: 0 2px 16px 0 #00c3ff22, 0 1px 3px rgba(0,0,0,0.10);
        display: flex;
        flex-direction: column;
        transition: transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s;
        position: relative;
        overflow: hidden;
    }

    .award-entry:hover {
        transform: scale(1.04) translateY(-6px) rotate(-1deg);
        box-shadow: 0 8px 32px 0 #00c3ff44, 0 2px 8px rgba(0,0,0,0.18);
        z-index: 3;
    }

    .award-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 0.75rem;
        gap: 1rem;
    }

    .award-title {
        margin: 0;
        color: #00c3ff;
        font-size: 1.18rem;
        font-weight: 700;
        flex-grow: 1;
        background: linear-gradient(90deg, #00c3ff 0%, #ffff1c 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        filter: drop-shadow(0 2px 8px #00c3ff55);
    }

    .award-date {
        font-size: 0.98rem;
        font-weight: 600;
        color: #ffff1c;
        background: rgba(0,195,255,0.13);
        padding: 0.18rem 0.7rem;
        border-radius: 6px;
        white-space: nowrap;
        flex-shrink: 0;
        box-shadow: 0 1px 8px #00c3ff22;
        letter-spacing: 0.5px;
    }

    .award-description {
        margin: 0;
        color: #fff;
        line-height: 1.6;
        font-size: 1.05rem;
        flex-grow: 1;
        text-shadow: 0 1px 8px #00c3ff22;
    }

    .no-awards-message {
        text-align: center;
        color: #e0e0e0;
        margin-top: 2rem;
        font-size: 1.2rem;
        background: rgba(0,0,0,0.18);
        border-radius: 12px;
        padding: 0.7rem 1.2rem;
        box-shadow: 0 2px 12px 0 #00c3ff22;
        font-weight: 500;
        letter-spacing: 0.5px;
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
    }

    @media (max-width: 600px) {
        .awards-container {
            padding: 2rem 0.5rem 2rem 0.5rem;
        }
        h2 {
            font-size: 2rem;
        }
        .awards-list {
            gap: 1.2rem;
        }
    }
    @media (max-width: 400px) {
        .awards-list {
            grid-template-columns: 1fr;
        }
    }
</style>