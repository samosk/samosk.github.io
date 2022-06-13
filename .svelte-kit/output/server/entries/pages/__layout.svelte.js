import { c as create_ssr_component, b as subscribe } from "../../chunks/index-092e3fdc.js";
import { w as writable } from "../../chunks/index-3ef37466.js";
var app = "";
const THEMES = {
  DARK: "luxury",
  LIGHT: "pastel"
};
const initialValue = THEMES.LIGHT;
const theme = writable(initialValue);
theme.subscribe((value) => {
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-wi4i5e{position:absolute;bottom:0;left:0;right:0}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$result.css.add(css);
  $$unsubscribe_theme();
  return `${$$result.head += `<link rel="${"stylesheet"}" href="${"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}" data-svelte="svelte-139h9gp">`, ""}

<main><div class="${"h-screen drawer w-full"}"><input id="${"my-drawer-3"}" type="${"checkbox"}" class="${"drawer-toggle"}">
    <div class="${"flex flex-col drawer-content"}">
      <div class="${"w-full navbar bg-base-300"}"><div class="${"flex-none lg:hidden"}"><label for="${"my-drawer-3"}" class="${"btn btn-square btn-ghost"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" class="${"inline-block w-6 h-6 stroke-current"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h16M4 18h16"}"></path></svg></label></div>

        <div class="${"flex-1 px-2 mx-2"}">
          \u{1F36F}
          <div class="${"inline-block"}"><div class="${"form-control"}"><label class="${"cursor-pointer label"}"><input type="${"checkbox"}" class="${"toggle toggle-primary"}" ${$theme !== THEMES.DARK ? "checked" : ""}></label></div></div>
          \u{1F518}
        </div>

        <div class="${"flex-none hidden lg:block"}"><ul class="${"menu menu-horizontal"}">
            <li><a href="${"/"}">Hem</a></li>
            <li><a href="${"/TypeTest"}">TypeTest</a></li>
            
            <li><a href="${"/searchEngine"}">SearchEngine</a></li>
            <li><a href="${"/clock"}">Clock</a></li>
            <li><a href="${"https://github.com/samosk/samosk.github.io"}"><i class="${"fa fa-github-square"}" style="${"font-size:36px"}"></i></a></li></ul></div></div>
      

      ${slots.default ? slots.default({}) : ``}</div>
    <div class="${"drawer-side"}"><label for="${"my-drawer-3"}" class="${"drawer-overlay"}"></label>
      <ul class="${"p-4 overflow-y-auto menu w-80 bg-base-100"}">
        <li><a href="${"/"}">Hem</a></li>
        <li><a href="${"/TypeTest"}">TypeTest</a></li>
        <li><a href="${"/searchEngine"}">SearchEngine</a></li>
        <li><a href="${"/clock"}">Clock</a></li></ul></div></div></main>

<footer class="${"px-10 py-4 border-t footer bg-base-200 text-base-content border-base-300 svelte-wi4i5e"}"><div><img alt="${"Maja Beskowgymnasiet Logo"}" src="${"/majalogo.png"}" class="${"max-w-sm rounded-lg shadow-2xl"}"></div>
</footer>`;
});
export { _layout as default };
