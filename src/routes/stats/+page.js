import stats from '$lib/data/stats.json';

/** @type {import('./$types').PageLoad} */
export function load() {
    return { stats };
}
