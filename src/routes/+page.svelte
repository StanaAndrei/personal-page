<script>
    import { base } from '$app/paths'; // 1. Import base path

    // You can add JavaScript logic here if needed later
    // For example, animations on scroll, etc.
</script>

<svelte:head>
    <title>Stana Andrew | Portfolio</title>
    <meta name="description" content="Welcome to the personal portfolio of Stana Andrew." />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
</svelte:head>

<section class="hero">
    <div class="hero-glow"></div>
    <div class="hero-content">
        <div class="profile-pic-wrapper">
            <img src="{base}/pic.png" alt="Stana Andrew Profile Picture" class="profile-pic"/>
            <div class="profile-pic-glow"></div>
        </div>
        <div class="hero-text">
            <h1>
                <span class="gradient-text">Stana Andrew</span>
                <span class="sparkle">✨</span>
            </h1>
            <p class="subtitle">Showcasing my projects, skills, and experience.</p>
        </div>
    </div>
    <div class="hero-ornament"></div>
</section>

<section class="main-part glass">
    <p>Feel free to explore my work.</p>
    <p>
        You can contact me at
        <a href="mailto:stana.andrei.2003@gmail.com" class="contact-link">stana.andrei.2003@gmail.com</a>.
    </p>
    <p>
        We can also connect online via
        <a href="{base}/links" class="links-link">links page</a>.
    </p>
    <p style="">
        This site is like a journey which aggregates my professional experience.
        If you want to see a resume(most important part) of it go to the
        <a href="{base}/cv" class="links-link">CV page</a>.
    </p>
</section>

<style>
    :global(body) {
        font-family: 'Roboto', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: linear-gradient(120deg, #0f2027 0%, #2c5364 100%);
        min-height: 100vh;
        margin: 0;
        padding: 0;
        color: #f8f8f8;
        overflow-x: hidden;
    }

    /* Hero Section */
    .hero {
        position: relative;
        text-align: center;
        padding: 5rem 1rem 6rem 1rem;
        background: rgba(255,255,255,0.05);
        border-radius: 24px;
        margin: 3rem auto 4rem auto;
        max-width: 900px;
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.25);
        overflow: hidden;
        z-index: 1;
    }

    .hero-glow {
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

    .hero-content {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2.5rem;
        z-index: 2;
    }

    .profile-pic-wrapper {
        position: relative;
        display: inline-block;
    }

    .profile-pic {
        width: 170px;
        height: 170px;
        border-radius: 50%;
        border: 6px solid #fff8;
        box-shadow: 0 4px 32px 0 #00c3ff55, 0 2px 8px rgba(0,0,0,0.15);
        object-fit: cover;
        background: #fff2;
        z-index: 2;
        position: relative;
    }

    .profile-pic-glow {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 210px;
        height: 210px;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background: radial-gradient(circle, #00c3ff55 0%, #ffff1c22 60%, transparent 100%);
        filter: blur(30px);
        z-index: 1;
        pointer-events: none;
        animation: pulseGlow 2.5s infinite alternate;
    }

    @keyframes pulseGlow {
        0% { opacity: 0.7; }
        100% { opacity: 1; }
    }

    .hero-text {
        text-align: center;
        z-index: 2;
    }

    .hero-text h1 {
        margin-bottom: 0.5rem;
        font-size: 3.2rem;
        font-family: 'Montserrat', 'Roboto', sans-serif;
        font-weight: 900;
        letter-spacing: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        position: relative;
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
        font-size: 2.2rem;
        animation: sparkle 1.5s infinite alternate;
        filter: drop-shadow(0 0 8px #ffff1c);
    }

    @keyframes sparkle {
        0% { transform: scale(1) rotate(-10deg);}
        100% { transform: scale(1.2) rotate(10deg);}
    }

    .hero-text .subtitle {
        font-size: 1.3rem;
        color: #e0e0e0;
        max-width: 600px;
        margin: 0 auto;
        background: rgba(0,0,0,0.18);
        border-radius: 12px;
        padding: 0.7rem 1.2rem;
        box-shadow: 0 2px 12px 0 #00c3ff22;
        font-weight: 500;
        letter-spacing: 0.5px;
    }

    .hero-ornament {
        position: absolute;
        bottom: -60px;
        left: 50%;
        transform: translateX(-50%);
        width: 400px;
        height: 120px;
        background: conic-gradient(from 90deg, #00c3ff33, #ffff1c33, #00c3ff33);
        filter: blur(40px);
        z-index: 0;
        pointer-events: none;
    }

    /* Glassmorphism for main part */
    .glass {
        background: rgba(255,255,255,0.13);
        border-radius: 18px;
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.18);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1.5px solid rgba(255,255,255,0.18);
        margin: 0 auto 3rem auto;
        max-width: 700px;
        padding: 2.5rem 2rem;
        text-align: center;
        font-size: 1.18rem;
        color: #f8f8f8;
        position: relative;
        z-index: 2;
        transition: box-shadow 0.3s;
    }
    .glass:hover {
        box-shadow: 0 12px 48px 0 #00c3ff44, 0 2px 8px rgba(0,0,0,0.18);
    }

    .contact-link, .links-link {
        color: #00c3ff;
        font-weight: 700;
        text-decoration: none;
        background: linear-gradient(90deg, #00c3ff 0%, #ffff1c 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-fill-color: transparent;
        position: relative;
        transition: filter 0.2s, text-shadow 0.2s;
        filter: drop-shadow(0 2px 8px #00c3ff55);
    }
    .contact-link:hover, .links-link:hover {
        filter: drop-shadow(0 0 16px #ffff1c);
        text-decoration: underline;
    }

    /* Responsive adjustments */
    @media (min-width: 768px) {
        .hero-content {
            flex-direction: row;
            justify-content: center;
            gap: 4rem;
        }
        .hero {
            padding: 6rem 2rem 7rem 2rem;
        }
        .hero-text {
            text-align: left;
        }
        .hero-text h1 {
            font-size: 4rem;
        }
        .hero-text .subtitle {
            margin: 0;
            font-size: 1.4rem;
        }
        .glass {
            font-size: 1.22rem;
            padding: 3rem 3rem;
        }
    }

    @media (max-width: 500px) {
        .hero {
            padding: 2.5rem 0.5rem 3rem 0.5rem;
        }
        .glass {
            padding: 1.2rem 0.5rem;
        }
        .profile-pic {
            width: 120px;
            height: 120px;
        }
        .profile-pic-glow {
            width: 150px;
            height: 150px;
        }
    }
</style>