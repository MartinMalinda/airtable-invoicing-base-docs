import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Airtable Base Docs",
  description:
    "Data dictionary & developer guide for the consulting‑firm Airtable base",
  lang: "en-US",
  themeConfig: {
    logo: "/logo.svg",
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
        {
          text: "Interfaces",
          items: [
            { text: "View clients", link: "/interfaces/clients-internal" },
            { text: "Invoices", link: "/interfaces/invoices" },
            { text: "Client Portal", link: "/interfaces/client-portal" },
          ],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/your/repo" }],
  },
});
