import { c as create_ssr_component, e as escape } from "../../chunks/index-092e3fdc.js";
var TypeTest_svelte_svelte_type_style_lang = "";
const css = {
  code: '.svelte-1jndnu6{box-sizing:border-box}body.svelte-1jndnu6{display:flex;justify-content:center;align-items:center;min-height:100vh;min-width:100vw;margin:0}body.svelte-1jndnu6,.quote-input.svelte-1jndnu6{font-family:"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",\r\n			sans-serif}.container.svelte-1jndnu6{padding:1rem;border-radius:0.5rem;width:700px;max-width:90%}.timer.svelte-1jndnu6{position:absolute;top:20%;font-size:3rem;font-weight:bold;user-select:none}.quote-display.svelte-1jndnu6{margin-bottom:1rem;margin-left:calc(1rem + 2px);margin-right:calc(1rem + 2px);user-select:none}.quote-input.svelte-1jndnu6{background-color:transparent;border:2px solid #a1922e;outline:none;width:100%;height:8rem;margin:auto;resize:none;padding:0.5rem 1rem;font-size:1rem;border-radius:0.5rem}.quote-input.svelte-1jndnu6:focus{border-color:black}.correctSP.svelte-1jndnu6{color:white}.incorrectSP.svelte-1jndnu6{color:blue;text-decoration:underline}',
  map: null
};
const TypeTest = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let timer;
  $$result.css.add(css);
  return `<body class="${"bg-base-200 svelte-1jndnu6"}"><div class="${"timer text-5xl font-bold svelte-1jndnu6"}" id="${"timer"}">${escape(timer)}</div>
	<div class="${"container bg-base-300 svelte-1jndnu6"}"><div class="${"quote-display svelte-1jndnu6"}" id="${"quoteDisplay"}">${`Loading`}</div>
		
		<textarea spellcheck="${"false"}" id="${"quoteInput"}" class="${"quote-input svelte-1jndnu6"}">${""}</textarea></div>
</body>`;
});
export { TypeTest as default };
