<script>
    import { onMount, onDestroy } from 'svelte';

    // --- Configuration ---
    const birthDateString = '2003-06-23T09:15:00';
    const birthPlace = 'Arad, Romania';
    const knownLanguages = [
        'Romanian (Native)', 'English (Fluent)', 'German (Very basic)',
        '*I can also imitate the moldavian, magyar and oltenian(historically known as "Lesser Wallachian") accents'
    ];

    // --- State ---
    let birthDateFormat = 'ce'; // 'ce' or 'unix'
    let ageFormat = 'years'; // 'years' or 'seconds'
    let ageInSeconds = 0;
    let ageInYears = 0;
    let intervalId = null;

    // --- Derived Data & Logic ---
    const birthDate = new Date(birthDateString);

    const ceDateFormatter = new Intl.DateTimeFormat(undefined, { // Use user's locale
        year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', timeZoneName: 'short'
    });

    const numberFormatter = new Intl.NumberFormat(); // For adding commas to large numbers

    // Reactive calculation for formatted birth date
    $: formattedBirthDate = birthDateFormat === 'ce'
        ? ceDateFormatter.format(birthDate)
        : `${Math.floor(birthDate.getTime())} ms after unix epoch start`; // Unix timestamp is in ms

    // Function to calculate age
    function calculateAge() {
        const now = new Date();
        const diffMs = now.getTime() - birthDate.getTime();

        // Calculate years (more accurate than simple division)
        let years = now.getFullYear() - birthDate.getFullYear();
        const birthMonth = birthDate.getMonth();
        const birthDay = birthDate.getDate();
        const currentMonth = now.getMonth();
        const currentDay = now.getDate();
        if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
            years--;
        }
        ageInYears = years;

        // Calculate seconds
        ageInSeconds = Math.floor(diffMs / 1000);
    }

    // --- Lifecycle ---
    onMount(() => {
        calculateAge(); // Calculate initial age
        // Start interval to update seconds every second
        intervalId = setInterval(() => {
            // Only recalculate seconds for efficiency, years rarely change
            ageInSeconds = Math.floor((new Date().getTime() - birthDate.getTime()) / 1000);
            // Optional: Recalculate years occasionally if needed, e.g., once a minute or hour
            // if (ageInSeconds % 60 === 0) calculateAge();
        }, 1000);

        // Cleanup interval on component destroy
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    });

    // --- Event Handlers ---
    function toggleBirthDateFormat() {
        birthDateFormat = birthDateFormat === 'ce' ? 'unix' : 'ce';
    }

    function toggleAgeFormat() {
        ageFormat = ageFormat === 'years' ? 'seconds' : 'years';
        // Ensure age is calculated if switching back to years after a while
        if (ageFormat === 'years') {
            calculateAge();
        }
    }

</script>

<svelte:head>
    <title>Stats | Stana Andrew</title>
    <meta name="description" content="Personal statistics including age, birth date, and languages." />
    <!-- Google Fonts for consistency -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
</svelte:head>

<section class="stats-container glass">
    <div class="stats-glow"></div>
    <h2>
        <span class="gradient-text">Statistics</span>
        <span class="sparkle">📊</span>
    </h2>

    <ul class="stats-list">
        <li>
            <span class="label">Birth Date:</span>
            <span class="value">{formattedBirthDate}</span>
            <button on:click={toggleBirthDateFormat} class="toggle-btn">
                Show as {birthDateFormat === 'ce' ? 'Unix Time' : 'Common Era'}
            </button>
        </li>

        <li>
            <span class="label">Age:</span>
            {#if ageFormat === 'years'}
                <span class="value">{ageInYears} years</span>
            {:else}
                <span class="value" aria-live="off">{numberFormatter.format(ageInSeconds)} seconds</span>
            {/if}
            <button on:click={toggleAgeFormat} class="toggle-btn">
                Show in {ageFormat === 'years' ? 'Seconds' : 'Years'}
            </button>
        </li>

        <li>
            <span class="label">Birth Place:</span>
            <span class="value">{birthPlace}</span>
        </li>

        <li>
            <span class="label">Known Languages:</span>
            <ul class="language-list">
                {#each knownLanguages as lang}
                    <li>{lang}</li>
                {/each}
            </ul>
        </li>
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

    .stats-container {
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

    .stats-glow {
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

    h2 {
        font-family: 'Montserrat', 'Roboto', sans-serif;
        font-size: 2.5rem;
        font-weight: 900;
        letter-spacing: 2px;
        margin-bottom: 2.2rem;
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

    .stats-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .stats-list > li {
        background: rgba(255,255,255,0.18);
        padding: 1.1rem 1.7rem;
        margin-bottom: 1.3rem;
        border-radius: 14px;
        border: 1.5px solid rgba(255,255,255,0.18);
        box-shadow: 0 2px 16px 0 #00c3ff22, 0 1px 3px rgba(0,0,0,0.10);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.5rem 1rem;
        position: relative;
        overflow: hidden;
        z-index: 2;
        transition: transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s;
    }

    .stats-list > li:hover {
        transform: scale(1.03) translateX(8px) rotate(-1deg);
        box-shadow: 0 8px 32px 0 #00c3ff44, 0 2px 8px rgba(0,0,0,0.18);
        z-index: 3;
    }

    .label {
        font-weight: 700;
        color: #00c3ff;
        flex-basis: 150px;
        flex-shrink: 0;
        letter-spacing: 0.5px;
        font-size: 1.08rem;
        background: linear-gradient(90deg, #00c3ff 0%, #ffff1c 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        filter: drop-shadow(0 2px 8px #00c3ff55);
    }

    .value {
        color: #fff;
        flex-grow: 1;
        min-width: 100px;
        font-size: 1.08rem;
        font-weight: 500;
        letter-spacing: 0.2px;
        text-shadow: 0 1px 8px #00c3ff22;
    }

    .toggle-btn {
        margin-left: auto;
        padding: 0.35rem 0.9rem;
        font-size: 0.92rem;
        font-family: 'Montserrat', 'Roboto', sans-serif;
        background: linear-gradient(90deg, #00c3ff 0%, #ffff1c 100%);
        color: #222;
        border: none;
        border-radius: 6px;
        font-weight: 700;
        cursor: pointer;
        box-shadow: 0 2px 8px #00c3ff33;
        transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s;
        white-space: nowrap;
        outline: none;
        position: relative;
        z-index: 2;
    }

    .toggle-btn:hover,
    .toggle-btn:focus {
        background: linear-gradient(90deg, #ffff1c 0%, #00c3ff 100%);
        color: #111;
        box-shadow: 0 4px 16px #ffff1c55;
        transform: scale(1.07);
    }

    .language-list {
        list-style: none;
        padding: 0;
        margin: 0;
        flex-basis: 100%;
        margin-top: 0.5rem;
    }

    .language-list li {
        padding: 0.1rem 0;
        color: #fff;
        font-size: 1.02rem;
        text-shadow: 0 1px 8px #00c3ff22;
    }

    @media (max-width: 600px) {
        .stats-container {
            padding: 2rem 0.5rem 2rem 0.5rem;
        }
        h2 {
            font-size: 2rem;
        }
        .stats-list > li {
            padding: 0.8rem 0.7rem;
        }
        .label {
            flex-basis: 100%;
            margin-bottom: 0.25rem;
        }
        .toggle-btn {
            margin-left: 0;
            margin-top: 0.5rem;
        }
        .stats-list > li {
            flex-direction: column;
            align-items: flex-start;
        }
    }
</style>