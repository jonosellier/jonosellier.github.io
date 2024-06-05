import { browser } from '$app/environment';

export const media = {
	prefersReducedMotion: () =>
		browser && window.matchMedia('(prefers-reduced-motion: reduce)')?.matches
} as const;
