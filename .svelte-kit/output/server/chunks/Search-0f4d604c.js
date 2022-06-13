import { c as create_ssr_component, b as subscribe, f as add_attribute } from "./index-092e3fdc.js";
import { w as writable } from "./index-3ef37466.js";
const promise = writable();
var Search_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-z0ppt0.svelte-z0ppt0{display:flex;gap:10px;width:50%;justify-self:center;align-items:center;transition:all 1s}form.svelte-z0ppt0.svelte-z0ppt0,form.svelte-z0ppt0 input.svelte-z0ppt0{width:100%;margin-top:5%;margin-left:5%}div.searched.svelte-z0ppt0.svelte-z0ppt0{display:flex;align-self:flex-start;justify-self:start;flex:start;margin:0}",
  map: null
};
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_promise;
  $$unsubscribe_promise = subscribe(promise, (value) => value);
  let question;
  $$result.css.add(css);
  $$unsubscribe_promise();
  return `${`<p id="${"bild"}"><img src="${"https://pbs.twimg.com/profile_images/1163151704973615105/62PeCDbZ_400x400.jpg"}" alt="${"yeas"}" width="${"100em"}"></p>`}


<div class="${["svelte-z0ppt0", ""].join(" ").trim()}"><form class="${"svelte-z0ppt0"}"><input class="${"bg-base-300 svelte-z0ppt0"}"${add_attribute("value", question, 0)}></form>
</div>`;
});
export { Search as S, promise as p };
