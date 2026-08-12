import links from '$lib/data/links.json';

/** @type {import('./$types').PageLoad} */
export function load() {
    return { links };
}
