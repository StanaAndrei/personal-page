import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            // default options are usually fine
            pages: 'build',
            assets: 'build',
            fallback: '404.html',
            precompress: false,
            strict: true
        }),
        paths: {
            // IF your repo is 'my-app', this should be '/my-app'
            // IF this is a user site (username.github.io), leave this empty ''
            base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
        }
    }
};

export default config;