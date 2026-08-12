import awards from '$lib/data/awards.json';

/** @type {import('./$types').PageLoad} */
export function load() {
    return { awards };
}
