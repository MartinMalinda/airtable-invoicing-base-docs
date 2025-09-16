import DefaultTheme from "vitepress/theme";
// Use the default theme's Layout component rather than direct import
const ThemeLayout = DefaultTheme.Layout;
import { h, defineComponent } from "vue";
import "./custom.css";
import Wrench from "./Wrench.vue";
import External from "./External.vue";

export default {
  ...DefaultTheme,
  Layout: defineComponent({
    name: "CustomLayout",
    setup(_, { slots }) {
      return () =>
        h(ThemeLayout, null, {
          ...slots,
          // Inject Install button into navbar via nav-bar-content-after slot
          "nav-bar-content-before": () => [
            slots["nav-bar-content-before"]?.(),
            h(
              "a",
              {
                class: "install-button",
                href: "https://airtable.com/appAeUFSMOuOVDfCV/shr3VX8kLpmEqP5Qh",
                target: "_blank",
                rel: "noopener",
              },
              h(
                "span",
                { style: "display: flex; gap: 0.3em; align-items: center" },
                [h(External, { style: "width: 1em; height: 1em;" }), "Open"],
              ),
            ),
            h(
              "a",
              {
                class: "install-button",
                href: "https://airtable.com/addBaseFromShare/appAeUFSMOuOVDfCV/shr3VX8kLpmEqP5Qh?utm_source=airtable_shared_application",
                target: "_blank",
                rel: "noopener",
              },
              h(
                "span",
                { style: "display: flex; gap: 0.3em; align-items: center" },
                [h(Wrench, { style: "width: 1em; height: 1em;" }), "Install"],
              ),
            ),
          ],
        });
    },
  }),
};
