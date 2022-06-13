export { matchers } from './client-matchers.js';

export const components = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\..\\src\\routes\\__error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\searchEngine\\index.svelte"),
	() => import("..\\..\\src\\routes\\searchEngine\\Results.svelte"),
	() => import("..\\..\\src\\routes\\searchEngine\\Spinner.svelte"),
	() => import("..\\..\\src\\routes\\searchEngine\\Search.svelte"),
	() => import("..\\..\\src\\routes\\TypeTest.svelte"),
	() => import("..\\..\\src\\routes\\clock\\index.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"searchEngine": [[0, 3], [1]],
	"searchEngine/Results": [[0, 4], [1]],
	"searchEngine/Spinner": [[0, 5], [1]],
	"searchEngine/Search": [[0, 6], [1]],
	"TypeTest": [[0, 7], [1]],
	"clock": [[0, 8], [1]]
};