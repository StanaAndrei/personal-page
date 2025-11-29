<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import '../app.css'; // Import the global styles
</script>

<div class="app-container">
    <Header />

    <main>
        <slot /> <!-- Page content will be injected here -->
    </main>

    <Footer />
</div>

<!-- Only one style tag for component-specific styles -->
<style>
    .app-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    /* Style the main element specifically within this layout component */
    main {
        max-width: 1200px;
        margin: 2rem auto;
        padding: 0 1rem;
        flex-grow: 1; /* Ensures main content pushes footer down */
    }
</style>