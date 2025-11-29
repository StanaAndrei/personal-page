<script>
    const currentYear = new Date().getFullYear();
</script>

<footer class="glass-footer">
    <p class="footer-text">&copy; {currentYear} Stana Andrew. All rights reserved.</p>
</footer>

<style>
    .glass-footer {
        text-align: center;
        padding: 2.5rem 1rem 1.5rem 1rem;
        margin-top: 3rem;
        background: rgba(255,255,255,0.10);
        color: #f8f8f8;
        font-size: 1em;
        border-radius: 24px 24px 0 0;
        box-shadow: 0 -8px 32px 0 rgba(31, 38, 135, 0.18);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border-top: 1.5px solid rgba(255,255,255,0.18);
        overflow: hidden;
        z-index: 1;
    }

    .footer-text {
        color: #e0e0e0;
        font-size: 1em;
        letter-spacing: 0.5px;
        text-shadow: 0 1px 8px #00c3ff22;
        margin: 0;
        z-index: 2;
        position: relative;
        font-family: 'Montserrat', 'Roboto', sans-serif;
        font-weight: 500;
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

    @media (max-width: 600px) {
        .glass-footer {
            padding: 1.5rem 0.5rem 1rem 0.5rem;
            border-radius: 18px 18px 0 0;
        }
    }
</style>