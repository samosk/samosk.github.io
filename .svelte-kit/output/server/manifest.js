export const manifest = {
	appDir: "_app",
	assets: new Set([".nojekyll","majaicon.png","majalogo.png","maja_huvudentre.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		entry: {"file":"start-378e8a11.js","js":["start-378e8a11.js","chunks/vendor-5a9aba3c.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "searchEngine",
				pattern: /^\/searchEngine\/?$/,
				names: [],
				types: [],
				path: "/searchEngine",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "searchEngine/Results",
				pattern: /^\/searchEngine\/Results\/?$/,
				names: [],
				types: [],
				path: "/searchEngine/Results",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "searchEngine/Spinner",
				pattern: /^\/searchEngine\/Spinner\/?$/,
				names: [],
				types: [],
				path: "/searchEngine/Spinner",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "searchEngine/Search",
				pattern: /^\/searchEngine\/Search\/?$/,
				names: [],
				types: [],
				path: "/searchEngine/Search",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "searchEngine/Stores",
				pattern: /^\/searchEngine\/Stores\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/searchEngine/Stores.js')
			},
			{
				type: 'page',
				id: "TypeTest",
				pattern: /^\/TypeTest\/?$/,
				names: [],
				types: [],
				path: "/TypeTest",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "clock",
				pattern: /^\/clock\/?$/,
				names: [],
				types: [],
				path: "/clock",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "clock/Clock",
				pattern: /^\/clock\/Clock\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/clock/Clock.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
