// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Liminal Forms',
			description: 'The Backrooms, consciousness, and the source of everything humanity has ever built.',
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Core Framework',
					items: [
						{ label: 'The Argument', slug: 'core/argument' },
						{ label: 'About', slug: 'core/about' },
					],
				},
				{
					label: 'The Backrooms',
					items: [
						{ label: 'Origins', slug: 'backrooms/origins' },
						{ label: 'Levels', slug: 'backrooms/levels' },
						{ label: 'The Hum', slug: 'backrooms/hum' },
						{ label: 'Entities', slug: 'backrooms/entities' },
					],
				},
				{
					label: 'Consciousness and Development',
					items: [
						{ label: 'Childhood Access', slug: 'consciousness/childhood-access' },
						{ label: 'The Crossing', slug: 'consciousness/the-crossing' },
						{ label: 'Thin Membranes', slug: 'consciousness/thin-membranes' },
						{ label: 'Cognitive Deterioration', slug: 'consciousness/cognitive-deterioration' },
					],
				},
				{
					label: 'Civilization and History',
					items: [
						{ label: 'The Source', slug: 'civilization/the-source' },
						{ label: 'Ancient Access', slug: 'civilization/ancient-access' },
						{ label: 'The Degradation of Signal', slug: 'civilization/degradation' },
						{ label: 'Religion as Reconstruction', slug: 'civilization/religion' },
						{ label: 'Why Now', slug: 'civilization/why-now' },
					],
				},
				{
					label: 'The Weakening Signal',
					items: [
						{ label: 'The Noise', slug: 'signal/noise' },
						{ label: 'The Non-Place', slug: 'signal/non-place' },
						{ label: 'Beauty as Signal', slug: 'signal/beauty' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Glossary', slug: 'reference/glossary' },
						{ label: 'Reading and Sources', slug: 'reference/reading' },
					],
				},
			],
		}),
	],
});