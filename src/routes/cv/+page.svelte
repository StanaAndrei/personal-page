<svelte:head>
    <title>CV / Resume - Stana Andrew Portfolio</title>
    <meta name="description" content="View my professional Curriculum Vitae (CV) / Resume." />
    <!-- Google Fonts for consistency -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
</svelte:head>

<section class="cv-section glass">
    <div class="cv-glow"></div>
    <div class="cv-header">
        <h1>
            <span class="gradient-text">My CV / Resume</span>
            <span class="sparkle">📄</span>
        </h1>
        <p>
            View my professional experience and qualifications below or
            <a href="https://docs.google.com/document/d/e/2PACX-1vSpd-VlBneNzAGMmI7L-p8HFpK6f9YqkdsuXfrC9IHY0Nn5audknJpuCtAb1GZjpA/pub"
               target="_blank" rel="noopener noreferrer" class="download-link">
                access it directly
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="external-link-icon"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
        </p>
        <div class="cv-divider"></div>
    </div>

    <div class="cv-card">
        <div class="cv-embed-container">
            <object
                    data="https://docs.google.com/document/d/e/2PACX-1vSpd-VlBneNzAGMmI7L-p8HFpK6f9YqkdsuXfrC9IHY0Nn5audknJpuCtAb1GZjpA/pub?embedded=true"
                    type="text/html"
                    class="cv-object">
                <p>Your browser doesn't support object embedding.
                    <a href="https://docs.google.com/document/d/e/2PACX-1vSpd-VlBneNzAGMmI7L-p8HFpK6f9YqkdsuXfrC9IHY0Nn5audknJpuCtAb1GZjpA/pub">View my CV here</a>
                </p>
            </object>
        </div>
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

    .cv-section {
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

    .cv-glow {
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

    .cv-header {
        text-align: center;
        margin-bottom: 2.5rem;
        position: relative;
        z-index: 2;
    }
    .cv-header h1 {
        font-size: 2.2rem;
        margin: 0 0 0.5rem;
        font-family: 'Montserrat', 'Roboto', sans-serif;
        font-weight: 900;
        letter-spacing: 1.5px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.6rem;
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
    .cv-header p {
        font-size: 1.08rem;
        color: #e0e0e0;
        margin: 0;
        background: rgba(0,0,0,0.18);
        border-radius: 12px;
        padding: 0.7rem 1.2rem;
        box-shadow: 0 2px 12px 0 #00c3ff22;
        font-weight: 500;
        letter-spacing: 0.5px;
        display: inline-block;
        max-width: 600px;
    }
    .download-link {
        color: #00c3ff;
        text-decoration: none;
        font-weight: 700;
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        background: linear-gradient(90deg, #00c3ff 0%, #ffff1c 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-fill-color: transparent;
        filter: drop-shadow(0 2px 8px #00c3ff55);
        transition: filter 0.2s, text-shadow 0.2s;
    }
    .download-link:hover {
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
    .download-link:hover .external-link-icon {
        opacity: 1;
    }
    .cv-divider {
        margin: 1.5rem auto 0 auto;
        width: 80%;
        height: 2px;
        background: linear-gradient(90deg, #00c3ff 0%, #ffff1c 100%);
        border-radius: 2px;
        opacity: 0.4;
    }
    .cv-card {
        background: rgba(255,255,255,0.18);
        border-radius: 16px;
        box-shadow: 0 2px 16px 0 #00c3ff22, 0 1px 3px rgba(0,0,0,0.10);
        overflow: hidden;
        position: relative;
        z-index: 2;
    }
    .cv-embed-container {
        width: 100%;
        height: 800px;
    }
    .cv-object {
        width: 100%;
        height: 100%;
        border: none;
        background: transparent;
    }
    @media (max-width: 900px) {
        .cv-section {
            padding: 2rem 0.5rem 2rem 0.5rem;
        }
        .cv-embed-container {
            height: 600px;
        }
    }
    @media (max-width: 480px) {
        .cv-embed-container {
            height: 400px;
        }
        .cv-header h1 {
            font-size: 1.3rem;
        }
    }
</style>