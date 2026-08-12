<script>
    import JSZip from 'jszip';
    import awards from '$lib/data/awards.json';
    import contributions from '$lib/data/contributions.json';
    import experience from '$lib/data/experience.json';
    import links from '$lib/data/links.json';
    import projects from '$lib/data/projects.json';
    import stats from '$lib/data/stats.json';
    import about from '$lib/data/about.json';
    import home from '$lib/data/home.json';

    let isZipping = false;

    async function downloadData() {
        isZipping = true;
        try {
            const zip = new JSZip();
            zip.file('awards.json', JSON.stringify(awards, null, 2));
            zip.file('contributions.json', JSON.stringify(contributions, null, 2));
            zip.file('experience.json', JSON.stringify(experience, null, 2));
            zip.file('links.json', JSON.stringify(links, null, 2));
            zip.file('projects.json', JSON.stringify(projects, null, 2));
            zip.file('stats.json', JSON.stringify(stats, null, 2));
            zip.file('about.json', JSON.stringify(about, null, 2));

            const content = await zip.generateAsync({ type: 'blob' });
            const url = URL.createObjectURL(content);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'portfolio_data.zip';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Failed to generate zip", error);
            alert("Failed to download data.");
        } finally {
            isZipping = false;
        }
    }
</script>

<svelte:head>
    <title>Mine | {home.name}</title>
    <meta name="description" content="Mine page." />
    <!-- Google Fonts for consistency -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
</svelte:head>

<section class="mine-section glass">
    <div class="mine-glow"></div>
    <h1>
        <span class="gradient-text">Mine</span>
    </h1>
    
    <div class="actions">
        <button on:click={downloadData} class="download-btn" disabled={isZipping}>
            {isZipping ? 'Zipping...' : 'Download Data (.zip)'}
        </button>
    </div>
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

    .mine-section {
        position: relative;
        max-width: 800px;
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
        text-align: center;
    }

    .mine-glow {
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
        margin: 0;
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

    .actions {
        margin-top: 2rem;
        position: relative;
        z-index: 2;
    }

    .download-btn {
        padding: 0.8rem 1.5rem;
        font-size: 1.1rem;
        font-family: 'Montserrat', 'Roboto', sans-serif;
        background: linear-gradient(90deg, #00c3ff 0%, #ffff1c 100%);
        color: #222;
        border: none;
        border-radius: 8px;
        font-weight: 700;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 195, 255, 0.4);
        transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
        outline: none;
    }

    .download-btn:hover:not(:disabled) {
        transform: scale(1.05);
        box-shadow: 0 6px 20px rgba(255, 255, 28, 0.5);
    }

    .download-btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    @media (max-width: 600px) {
        .mine-section {
            padding: 2rem 0.5rem 2rem 0.5rem;
        }
        h1 {
            font-size: 2rem;
        }
    }
</style>
