import { error } from '@sveltejs/kit';
import { getProjectBySlug } from '$lib/data/projects.js';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    const project = getProjectBySlug(params.slug);

    if (!project) {
        throw error(404, 'Project not found');
    }

    return {
        project
    };
}