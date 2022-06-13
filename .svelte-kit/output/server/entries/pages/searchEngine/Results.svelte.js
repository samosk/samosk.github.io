import { c as create_ssr_component, d as each, e as escape, f as add_attribute } from "../../../chunks/index-092e3fdc.js";
var Results_svelte_svelte_type_style_lang = "";
const css = {
  code: "#item.svelte-11ierbf{border-radius:25px;border:2px solid #ffffff;padding:8px;margin-top:5px;margin-bottom:5px;width:100%;box-sizing:border-box;word-wrap:break-word}h3.svelte-11ierbf{word-wrap:break-word;word-break:normal}p.svelte-11ierbf{padding:2px}a.svelte-11ierbf{color:#710193}a.svelte-11ierbf:hover{color:#0000ff;transition:200ms}.svelte-11ierbf::-webkit-scrollbar{width:15px;height:15px}.svelte-11ierbf::-webkit-scrollbar-track{border-radius:10px}.svelte-11ierbf::-webkit-scrollbar-thumb{background:#81d4fa;border-radius:50px}.max-chars.svelte-11ierbf{word-break:break-word;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;line-height:2em;max-height:8em;-webkit-line-clamp:3;-webkit-box-orient:vertical}.date.svelte-11ierbf{display:-webkit-box;overflow:hidden;-webkit-line-clamp:1;-webkit-box-orient:vertical;max-width:5rem;text-overflow:clip}",
  map: null
};
const Results = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { json } = $$props;
  if ($$props.json === void 0 && $$bindings.json && json !== void 0)
    $$bindings.json(json);
  $$result.css.add(css);
  return `${json && "data" in json && "items" in json.data && json.data.items.length > 0 ? `<div id="${"item-holder"}" class="${"bg-base-200 svelte-11ierbf"}">${each(json.data.items, (item) => {
    return `${item.type == "dataverse" ? `<div id="${"item"}" class="${"bg-base-300 svelte-11ierbf"}">${each(Object.entries(item), ([key, value]) => {
      return ``;
    })}
                    <p class="${"svelte-11ierbf"}">${escape(item.url)}</p>
                    <h2 class="${"svelte-11ierbf"}"><a${add_attribute("href", item.url, 0)} class="${"svelte-11ierbf"}">${escape(item.identifier)}
                        </a></h2>
                    <h3 class="${"max-chars svelte-11ierbf"}">${escape(item.description)}</h3>
                    <h4 class="${"date svelte-11ierbf"}">${escape(item.published_at)}</h4>
                </div>` : ``}`;
  })}</div>` : `${json ? `<div class="${"bg-base-300 svelte-11ierbf"}"><h2 class="${"svelte-11ierbf"}">Invalid search request</h2></div>` : ``}`}`;
});
export { Results as default };
