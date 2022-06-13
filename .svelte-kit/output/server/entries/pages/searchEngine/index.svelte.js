import { c as create_ssr_component, b as subscribe, v as validate_component, i as is_promise, n as noop } from "../../../chunks/index-092e3fdc.js";
import Spinner from "./Spinner.svelte.js";
import Results from "./Results.svelte.js";
import { S as Search, p as promise } from "../../../chunks/Search-0f4d604c.js";
import "../../../chunks/index-3ef37466.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{padding:0;margin:0}main.svelte-1y135{height:100vh;width:100vw;display:flex;flex:start;align-items:center;flex-direction:column;gap:25px;box-sizing:border-box}@keyframes svelte-1y135-gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}",
  map: null
};
const SearchEngine = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $promise, $$unsubscribe_promise;
  $$unsubscribe_promise = subscribe(promise, (value) => $promise = value);
  $$result.css.add(css);
  $$unsubscribe_promise();
  return `<main class="${"bg-base-200 svelte-1y135"}">${validate_component(Search, "Search").$$render($$result, {}, {}, {})}

    ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
        ${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}
    `;
    }
    return function(result) {
      return `
        ${validate_component(Results, "Results").$$render($$result, { json: result }, {}, {})}
    `;
    }(__value);
  }($promise)}
</main>`;
});
export { SearchEngine as default };
