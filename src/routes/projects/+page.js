import projects from '$lib/data/projects.json';

/** @type {import('./$types').PageLoad} */
export function load() {
    return { projects };
}
