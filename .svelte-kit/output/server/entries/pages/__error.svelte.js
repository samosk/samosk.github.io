import { c as create_ssr_component, e as escape } from "../../chunks/index-092e3fdc.js";
var __error_svelte_svelte_type_style_lang = "";
const css = {
  code: ".error.svelte-117jjaa{height:100vh;display:grid;gap:var(--spacing-32);place-content:center;place-items:center}",
  map: null
};
const load = ({ error, status }) => {
  return {
    props: { title: `${status}: ${error.message}` }
  };
};
const _error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css);
  return `




<div class="${"error svelte-117jjaa"}"><h1>${escape(title)}</h1>
</div>`;
});
export { _error as default, load };
