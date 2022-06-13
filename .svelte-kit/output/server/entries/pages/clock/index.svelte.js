import { g as now, l as loop, c as create_ssr_component, b as subscribe, h as set_store_value, e as escape, f as add_attribute, d as each, n as noop } from "../../../chunks/index-092e3fdc.js";
import { Clock } from "../../endpoints/clock/Clock.js";
import { w as writable } from "../../../chunks/index-3ef37466.js";
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "html, body{margin:0px;padding:0px;min-height:100%;width:100%}main.svelte-bcqjb.svelte-bcqjb{color:red;text-align:center;width:100%;min-height:100%;display:flex;justify-content:center;align-content:center;align-items:center;margin:0px}.grid-container.svelte-bcqjb.svelte-bcqjb{display:grid;grid-template-columns:auto auto auto;grid-gap:1em;padding:1em}.grid-container.svelte-bcqjb>div.svelte-bcqjb{text-align:center;padding:0;font-size:2em;height:100%;width:100%}svg.svelte-bcqjb.svelte-bcqjb{width:100%;height:100%}.clock-face.svelte-bcqjb.svelte-bcqjb{stroke:#000;fill:none}.minor.svelte-bcqjb.svelte-bcqjb{stroke:#000;stroke-width:0.4}.major.svelte-bcqjb.svelte-bcqjb{stroke:#000;stroke-width:0.8}.minute.svelte-bcqjb.svelte-bcqjb{stroke:rgb(180, 0, 0);stroke-width:1}.hour.svelte-bcqjb.svelte-bcqjb{stroke:#000;stroke-width:2}.column.svelte-bcqjb.svelte-bcqjb{display:flex;justify-content:center;align-content:center;align-items:center;flex-direction:column;width:100%;min-height:100%}cir.svelte-bcqjb.svelte-bcqjb{height:7em}rec.svelte-bcqjb.svelte-bcqjb{height:7em;width:75%}@keyframes svelte-bcqjb-gradient{33%{background-position:33%}50%{background-position:50%}}h3.svelte-bcqjb.svelte-bcqjb{color:red}p.svelte-bcqjb.svelte-bcqjb{font-size:2em;text-align:center}span.svelte-bcqjb.svelte-bcqjb{display:inline-block;font-size:3em;color:black}.button-3d.svelte-bcqjb.svelte-bcqjb{position:relative;width:auto;display:inline-block;color:#000000;text-decoration:none;border-radius:20px;text-align:center;padding:16px 18px 14px;margin:12px;-webkit-transition:all 0.1s;-moz-transition:all 0.1s;transition:all 0.1s}.button-3d.svelte-bcqjb.svelte-bcqjb:active{-webkit-box-shadow:0px 2px 0px #000000;-moz-box-shadow:0px 2px 0px #000000;box-shadow:0px 2px 0px #000000;position:relative;top:4px}#C-button1.svelte-bcqjb.svelte-bcqjb{border-radius:10px;color:#000000}#C-button2.svelte-bcqjb.svelte-bcqjb{border-radius:20px;color:#000000}@media only screen and (max-width: 870px){.grid-container.svelte-bcqjb.svelte-bcqjb{display:flex;flex-direction:column;column-gap:1em;height:100%;padding:1em}}",
  map: null
};
const Clock_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $hours, $$unsubscribe_hours = noop, $$subscribe_hours = () => ($$unsubscribe_hours(), $$unsubscribe_hours = subscribe(hours, ($$value) => $hours = $$value), hours);
  let $minutes, $$unsubscribe_minutes = noop, $$subscribe_minutes = () => ($$unsubscribe_minutes(), $$unsubscribe_minutes = subscribe(minutes, ($$value) => $minutes = $$value), minutes);
  let clock = new Clock(23, 50);
  let hours = spring();
  $$subscribe_hours();
  let minutes = spring();
  $$subscribe_minutes();
  set_store_value(minutes, $minutes = parseInt(clock.time.hour) * 60 + parseInt(clock.time.minute), $minutes);
  set_store_value(hours, $hours = parseInt(clock.time.hour), $hours);
  function tick() {
    clock.tick();
    clock = clock;
    if (clock.time.hour + clock.time.minute == 0) {
      $$subscribe_hours(hours = spring());
      $$subscribe_minutes(minutes = spring());
      set_store_value(minutes, $minutes = parseInt(clock.time.hour) * 60 + parseInt(clock.time.minute), $minutes);
      set_store_value(hours, $hours = parseInt(clock.time.hour), $hours);
    } else {
      hours.set(parseInt(clock.time.hour));
      minutes.set(parseInt(clock.time.hour) * 60 + parseInt(clock.time.minute));
    }
  }
  setInterval(tick, 1e3);
  $$result.css.add(css);
  $$unsubscribe_hours();
  $$unsubscribe_minutes();
  return `<main class="${"bg-base-100 svelte-bcqjb"}"><div class="${"grid-container bg-base-200 svelte-bcqjb"}"><div class="${"column bg-base-300 svelte-bcqjb"}"><div><h3 class="${"svelte-bcqjb"}">${clock.alarmIsTrigger == true ? `WAKE UP!!` : `Alarm: ${escape(clock.alarmTime)}`}</h3>
				<div><span class="${"svelte-bcqjb"}">${escape(clock.time.hour)}</span>
					<span class="${"svelte-bcqjb"}">:</span>
					<span class="${"svelte-bcqjb"}">${escape(clock.time.minute)}</span></div>
				<button class="${"button-3d bg-base-200 svelte-bcqjb"}" id="${"C-button1"}">ToggleAlarm</button>
				<input type="${"time"}" class="${"bg-base-200"}"${add_attribute("value", clock.setAlarmFromString, 0)}>
				<p id="${"time"}" class="${"svelte-bcqjb"}"></p>
				<p id="${"alarm"}" class="${"svelte-bcqjb"}"></p></div></div>
		<div class="${"column bg-base-300 svelte-bcqjb"}"><h3 class="${"svelte-bcqjb"}">${clock.alarmIsTrigger == true ? `WAKE UP!!` : `Alarm: ${escape(clock.alarmTime)}`}</h3>
			<cir class="${"svelte-bcqjb"}"><svg viewBox="${"-50 -50 100 100"}" style="${"height:inherit"}" class="${"svelte-bcqjb"}"><circle class="${"clock-face svelte-bcqjb"}" r="${"48"}"></circle>${each([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55], (minute) => {
    return `<line class="${"major svelte-bcqjb"}" y1="${"40"}" y2="${"45"}" transform="${"rotate(" + escape(30 * minute) + ")"}"></line>
						${each([1, 2, 3, 4], (offset) => {
      return `<line class="${"minor svelte-bcqjb"}" y1="${"42"}" y2="${"45"}" transform="${"rotate(" + escape(6 * (minute + offset)) + ")"}"></line>`;
    })}`;
  })}<line class="${"hour svelte-bcqjb"}" y1="${"33"}" y2="${"38"}" transform="${"rotate(" + escape(6 / 12 * $minutes - 180) + ")"}"></line><g transform="${"rotate(" + escape(6 * $minutes - 180) + ")"}"><line class="${"minute svelte-bcqjb"}" y1="${"30"}" y2="${"38"}"></line></g></svg></cir>
			<div><button class="${"button-3d bg-base-200 svelte-bcqjb"}" id="${"C-button2"}">ToggleAlarm</button>
				<input type="${"time"}" class="${"bg-base-200"}"${add_attribute("value", clock.setAlarmFromString, 0)}></div></div>
		<div class="${"column bg-base-300 svelte-bcqjb"}"><h3 class="${"svelte-bcqjb"}">${clock.alarmIsTrigger == true ? `WAKE UP!!` : `Alarm: ${escape(clock.alarmTime)}`}</h3>
			<rec class="${"svelte-bcqjb"}"><svg width="${"20"}" height="${"10"}" style="${"height:inherit"}" class="${"svelte-bcqjb"}"><rect width="${"100%"}" height="${"100%"}" style="${"fill:rgb(79,79,79);stroke-height:1;stroke:rgb(0,0,0)"}"></rect><rect height="${escape(clock.time.minute / 60 * 100) + "%"}" width="${"50%"}" style="${"fill:rgb(0,0,0);stroke-height:1;stroke:rgb(0,0,0)"}"></rect><rect height="${escape(clock.time.minute / 60 + clock.time.hour / 24 * 100) + "%"}" width="${"50%"}" x="${"50%"}" style="${"fill:rgb(0,0,0);stroke-height:1;stroke:rgb(0,0,0)"}"></rect></svg></rec>
			<p class="${"svelte-bcqjb"}"></p>
			<div><button class="${"button-3d bg-base-200 svelte-bcqjb"}" id="${"C-button2"}">ToggleAlarm</button>
				<input type="${"time"}" class="${"bg-base-200"}"${add_attribute("value", clock.setAlarmFromString, 0)}></div>
			<p id="${"time"}" class="${"svelte-bcqjb"}"></p>
			<p id="${"alarm"}" class="${"svelte-bcqjb"}"></p></div></div>
</main>`;
});
export { Clock_1 as default };
