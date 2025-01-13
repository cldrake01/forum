export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Di_o2eBT.js","app":"_app/immutable/entry/app.DUFQxkIQ.js","imports":["_app/immutable/entry/start.Di_o2eBT.js","_app/immutable/chunks/entry.D04LS7R-.js","_app/immutable/chunks/runtime.OK1iRiYl.js","_app/immutable/chunks/index-client.B3wO8EeP.js","_app/immutable/entry/app.DUFQxkIQ.js","_app/immutable/chunks/runtime.OK1iRiYl.js","_app/immutable/chunks/disclose-version.C7h3frRC.js","_app/immutable/chunks/props.BNe616i-.js","_app/immutable/chunks/svelte-component.C6BWTL0n.js","_app/immutable/chunks/index-client.B3wO8EeP.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
