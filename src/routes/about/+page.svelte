<script>
</script>

<svelte:head>
    <title>About Me - Stana Andrew Portfolio</title>
    <meta name="description" content="Learn more about my background and skills." />
    <!-- Google Fonts for consistency -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
</svelte:head>

<section class="about-section glass">
    <div class="about-glow"></div>
    <h1>
        <span class="gradient-text">About Me</span>
        <span class="sparkle">👤</span>
    </h1>
    <p class="about-coming-soon">
        I am a curious analytic mind, very passionated about science and tech. <br />
        I started programming after gymnasium when I entered at high school at math-informatics profile. <br />
        In the mid of the high school I focused on competitive programming and data structs & algos, then
        I started doing fullstack webdev and developing small web canvas games.
        I am currently studying comp engineering and automatics at
        <a href="https://www.upt.ro/Universitatea-Politehnica-Timisoara_en.html">UPT</a>.
        and working at Intel. <br />
    </p>
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

    .about-section {
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
    }

    .about-glow {
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
        margin-bottom: 1.5rem;
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

    .about-coming-soon {
        font-size: 1.3rem;
        color: #e0e0e0;
        background: rgba(0,0,0,0.18);
        border-radius: 12px;
        padding: 0.7rem 1.2rem;
        box-shadow: 0 2px 12px 0 #00c3ff22;
        font-weight: 500;
        letter-spacing: 0.5px;
        max-width: 400px;
        margin: 2.5rem auto 0 auto;
        text-align: center;
    }

    @media (max-width: 600px) {
        .about-section {
            padding: 2rem 0.5rem 2rem 0.5rem;
        }
        h1 {
            font-size: 2rem;
        }
    }
</style>