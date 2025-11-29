<script>
    import { workExperience } from '$lib/data/experience.js';

    function parseMonthYear(dateString) {
        if (!dateString) return null;
        const parts = String(dateString).trim().split(' ');
        if (parts.length !== 2) return null;
        const month = parseInt(parts[0], 10);
        const year = parseInt(parts[1], 10);
        if (isNaN(month) || isNaN(year) || month < 1 || month > 12 || year < 1000 || year > 3000) {
            console.warn(`Invalid date string format encountered: "${dateString}"`);
            return null;
        }
        return new Date(year, month - 1, 1);
    }

    const displayDateFormatter = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        year: 'numeric'
    });

    function formatDateForDisplay(dateObj) {
        if (!dateObj) return 'Present';
        try {
            if (isNaN(dateObj.getTime())) return 'Invalid Date';
            return displayDateFormatter.format(dateObj);
        } catch (e) {
            console.error("Error formatting date:", dateObj, e);
            return 'Error';
        }
    }

    const processedExperience = workExperience
        .map(job => ({
            ...job,
            startDateObj: parseMonthYear(job.startDate),
            endDateObj: parseMonthYear(job.endDate)
        }))
        .filter(job => job.startDateObj instanceof Date)
        .sort((a, b) => {
            const timeA = a.endDateObj ? a.endDateObj.getTime() : Infinity;
            const timeB = b.endDateObj ? b.endDateObj.getTime() : Infinity;
            if (timeB !== timeA) return timeB - timeA;
            const startTimeA = a.startDateObj.getTime();
            const startTimeB = b.startDateObj.getTime();
            return startTimeB - startTimeA;
        });
</script>

<svelte:head>
    <title>Work Experience | Stana Andrew</title>
    <meta name="description" content="Overview of professional work experience." />
    <!-- Google Fonts for consistency -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Roboto:wght@400;500&display=swap" rel="stylesheet">
</svelte:head>

<section class="experience-container glass">
    <div class="experience-glow"></div>
    <h2>
        <span class="gradient-text">Work Experience</span>
        <span class="sparkle">💼</span>
    </h2>

    {#if processedExperience && processedExperience.length > 0}
        <div class="timeline">
            {#each processedExperience as job (job.company + job.title)}
                <article class="job-entry">
                    <div class="job-header">
                        <h3 class="job-company">{job.company}</h3>
                        <p class="job-title">{job.title}</p>
                        <p class="job-dates">
                            {formatDateForDisplay(job.startDateObj)} – {formatDateForDisplay(job.endDateObj)}
                        </p>
                        {#if job.location}
                            <p class="job-location">{job.location}</p>
                        {/if}
                    </div>

                    {#if job.description && job.description.length > 0}
                        <ul class="job-description">
                            {#each job.description as point}
                                <li>{point}</li>
                            {/each}
                        </ul>
                    {/if}

                    {#if job.technologies && job.technologies.length > 0}
                        <div class="technologies-section">
                            <h4 class="tech-heading">Technologies Used:</h4>
                            <ul class="tech-list">
                                {#each job.technologies as tech (tech)}
                                    <li class="tech-tag">{tech}</li>
                                {/each}
                            </ul>
                        </div>
                    {/if}
                </article>
            {/each}
        </div>
    {:else}
        <p class="no-experience-message">No work experience information available or could be processed.</p>
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

    .experience-container {
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

    .experience-glow {
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

    .timeline {
        position: relative;
        z-index: 2;
    }

    .job-entry {
        background: rgba(255,255,255,0.18);
        padding: 1.5rem 2rem;
        margin-bottom: 2rem;
        border-radius: 16px;
        border: 1.5px solid rgba(255,255,255,0.18);
        box-shadow: 0 2px 16px 0 #00c3ff22, 0 1px 3px rgba(0,0,0,0.10);
        position: relative;
        transition: transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s;
        overflow: hidden;
    }

    .job-entry:hover {
        transform: scale(1.03) translateY(-6px) rotate(-1deg);
        box-shadow: 0 8px 32px 0 #00c3ff44, 0 2px 8px rgba(0,0,0,0.18);
        z-index: 3;
    }

    .job-header {
        margin-bottom: 1rem;
    }

    .job-company {
        margin: 0 0 0.25rem 0;
        color: #00c3ff;
        font-size: 1.3rem;
        font-weight: 700;
        background: linear-gradient(90deg, #00c3ff 0%, #ffff1c 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        filter: drop-shadow(0 2px 8px #00c3ff55);
    }

    .job-title {
        margin: 0 0 0.5rem 0;
        color: #ffff1c;
        font-size: 1.1rem;
        font-style: italic;
        font-weight: 600;
        text-shadow: 0 1px 8px #00c3ff22;
    }

    .job-dates, .job-location {
        margin: 0.25rem 0;
        font-size: 0.98rem;
        color: #e0e0e0;
        font-weight: 500;
        text-shadow: 0 1px 8px #00c3ff22;
    }

    .job-description {
        list-style: disc;
        padding-left: 1.5rem;
        margin: 0;
        color: #fff;
        line-height: 1.6;
    }

    .job-description li {
        margin-bottom: 0.5rem;
        overflow-wrap: break-word;
        text-shadow: 0 1px 8px #00c3ff22;
    }

    .job-description li:last-child {
        margin-bottom: 0;
    }

    .technologies-section {
        margin-top: 1.5rem;
        padding-top: 1rem;
        border-top: 1px solid #00c3ff33;
    }

    .tech-heading {
        font-size: 0.9rem;
        font-weight: 700;
        color: #00c3ff;
        margin: 0 0 0.75rem 0;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        background: linear-gradient(90deg, #00c3ff 0%, #ffff1c 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        filter: drop-shadow(0 2px 8px #00c3ff55);
    }

    .tech-list {
        list-style: none;
        padding: 0;
        margin: 0;
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

    .no-experience-message {
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
        .experience-container {
            padding: 2rem 0.5rem 2rem 0.5rem;
        }
        h2 {
            font-size: 2rem;
        }
        .job-entry {
            padding: 1rem 1.5rem;
        }
        .job-company {
            font-size: 1.2rem;
        }
        .job-title {
            font-size: 1rem;
        }
    }
</style>