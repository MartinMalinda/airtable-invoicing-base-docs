import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid(
  defineConfig({
    title: "Airtable Invoicing Base",
    description:
      "Data dictionary & developer guide for the consulting‑firm Airtable base",
    lang: "en-US",
    mermaid: {},
    themeConfig: {
      logo: "/logo.svg",
      // Top navigation menu
      nav: [
        // {
        //   text: "Install",
        //   link: "https://airtable.com/addBaseFromShare/appAeUFSMOuOVDfCV/shr3VX8kLpmEqP5Qh?utm_source=airtable_shared_application"
        // }
      ],
      sidebar: {
        "/": [
          { text: "Overview", link: "/" },
          {
            text: "Tables",
            items: [
              { text: "Clients", link: "/clients" },
              { text: "Invoices", link: "/invoices" },
              { text: "Billable hours", link: "/billable-hours" },
              { text: "Billed projects", link: "/billed-projects" },
              { text: "Expenses", link: "/expenses" },
              { text: "Cashflow items", link: "/cashflow-items" },
            ],
          },
          {
            text: "Interfaces",
            items: [
              { text: "Clients", link: "/interfaces/clients-internal" },
              { text: "Invoices", link: "/interfaces/invoices" },
              { text: "Client Portal", link: "/interfaces/client-portal" },
            ],
          },
          {
            text: "Automations",
            items: [
              {
                text: "Create Invoice Button",
                link: "/automations/create-invoice-button",
              },
              {
                text: "Billable Hours Rate Currency",
                link: "/automations/billable-hours-rate-currency",
              },
              {
                text: "Billable Projects Set Currency",
                link: "/automations/billable-projects-set-currency",
              },
              {
                text: "Cashflow Item Billable Hours",
                link: "/automations/cashflow-item-billable-hours",
              },
              {
                text: "Cashflow Item Billed Projects",
                link: "/automations/cashflow-item-billed-projects",
              },
              {
                text: "Cashflow Item Expense",
                link: "/automations/cashflow-item-expense",
              },
              {
                text: "Cashflow Item Remove",
                link: "/automations/cashflow-item-remove",
              },
            ],
          },
        ],
      },
      socialLinks: [
        {
          icon: "linkedin",
          link: "https://www.linkedin.com/in/martin-malinda-58b03253/",
        },
        {
          icon: {
            svg: `<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
          },
          link: "https://www.martinmalinda.cz/",
        },
      ],
    },
  }),
);
