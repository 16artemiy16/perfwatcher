import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		include: ['perfwatcher'],
	},
	build: {
		commonjsOptions: {
			include: [/perfwatcher/, /node_modules/],
		},
	},
});
