
# Invoicing Airtable Base


This Airtable base simplifies client billing, invoicing, expense tracking, and cash‑flow reporting in one place:

* **Automatic syncing** of hourly rates, currencies, and client links across tables.
* **One‑click invoicing** that gathers unbilled hours and projects into a draft invoice.
* **Real‑time cash‑flow view** showing what’s been billed, paid, or outstanding.
* **Client portal** which allows clients to see project status and current and past invoices


Use this setup to cut repetitive data entry, avoid mistakes, and instantly see your income and costs by client.

## Tables and their relationships

```mermaid
classDiagram
  Clients           <|-- Billable_hours
  Clients           <|-- Billed_projects
  Clients           <|-- Expenses

  Invoices          --> Clients
  Invoices          <|-- Billable_hours
  Invoices          <|-- Billed_projects

  Cashflow_Items     "0..1" --|> Billable_hours
  Cashflow_Items     "0..1" --|> Billed_projects
  Cashflow_Items     "0..1" --|> Expenses
```
