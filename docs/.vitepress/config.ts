import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Airtable Base Docs',
  description: 'Data dictionary & developer guide for the consulting‑firm Airtable base',
  lang: 'en-US',
  themeConfig: {
    logo: '/logo.svg',
    sidebar: {
      '/': [
        { text: 'Overview', link: '/' },
        {
          text: 'Tables',
          items: [
            { text: 'Clients', link: '/clients' },
            { text: 'Invoices', link: '/invoices' },
            { text: 'Billable hours', link: '/billable-hours' },
            { text: 'Billed projects', link: '/billed-projects' },
            { text: 'Expenses', link: '/expenses' },
            { text: 'Cashflow items', link: '/cashflow-items' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your/repo' }
    ]
  }
})