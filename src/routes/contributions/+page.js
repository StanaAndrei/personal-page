import contributions from '$lib/data/contributions.json';

/** @type {import('./$types').PageLoad} */
export function load() {
    return { contributions };
}
