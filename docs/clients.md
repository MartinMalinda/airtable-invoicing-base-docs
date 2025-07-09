---
title: Clients
outline: deep
---
<script setup lang="ts">
import FieldIcon from './icons/FieldIcon.vue'
import ScrollableScreenshot from './components/ScrollableScreenshot.vue';
</script>

# Clients

[Open in Airtable](https://airtable.com/appAeUFSMOuOVDfCV/tblLdpbp52Mhjog08)

## Purpose
Single source of truth for every customer our consultancy serves. Stores contact details, default billing settings (hourly rate & currency), and high-level financial roll-ups (lifetime revenue, unpaid balance). Child records such as billable hours, invoices, projects and expenses all link here.

<!-- <ScrollableScreenshot src="/tables/clients.png" /> -->
<iframe class="airtable-embed" src="https://airtable.com/embed/appAeUFSMOuOVDfCV/shr8BRqZUyjDbDO5g" frameborder="0" onmousewheel="" width="100%" height="325" style="background: transparent; border: 1px solid #ccc;"></iframe>

## Fields

| Type                                      | Field                                 | Key Options / Formula                                                                 | Notes                                                                                                              |
| ----------------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| <FieldIcon type="singleLineText" />     | **Client Name**                       | —                                                                                     | Primary display name. Keep it short for nicer concatenations in other tables.                                     |
| <FieldIcon type="email" />              | **Email**                             | —                                                                                     | Used by automations to send invoices / hour logs.                                                                  |
| <FieldIcon type="phoneNumber" />        | **Phone**                             | —                                                                                     | Optional. International format recommended.                                                                         |
| <FieldIcon type="singleLineText" />     | **Address**                           | —                                                                                     | “Street × City × Country” all in one line; feeds the AI-split fields below.                                        |
| <FieldIcon type="currency" />           | **Hourly rate**                       | Precision 0                                                                          | Default rate applied to new *Billable hours* entries via lookup.                                                   |
| <FieldIcon type="singleSelect" />       | **Currency**                          | ▫︎ EUR ▫︎ CZK ▫︎ USD                                                                   | Pick the same currency as the hourly rate; critical for correct conversions downstream.                           |
| <FieldIcon type="singleSelect" />       | **Language**                          | ▫︎ English ▫︎ Czech                                                                   | Drives the language of email templates.                                                                            |
| <FieldIcon type="checkbox" />           | **Billable Hours Email Notification** | —                                                                                     | When checked, daily automation emails a summary of new hours to the client.                                        |
| <FieldIcon type="aiText" />             | **Address line 1**                    | *Prompt*: “Extract Address Line 1 from `{Address}`”                                    | Auto-splits `Address`. Re-run if the master address changes.                                                        |
| <FieldIcon type="aiText" />             | **Address line 2**                    | *Prompt*: “Extract Address Line 2 from `{Address}`”                                    | Returns empty if none.                                                                                             |
| <FieldIcon type="aiText" />             | **City**                              | *Prompt*: “Extract City from `{Address}`”                                             | Good for grouping/reporting by geography.                                                                          |
| <FieldIcon type="aiText" />             | **State**                             | *Prompt*: “Extract State from `{Address}`”                                            | Blank for non-federal countries.                                                                                   |
| <FieldIcon type="aiText" />             | **Country**                           | *Prompt*: “Extract Country from `{Address}`”                                          | Good for grouping/reporting by geography.                                                                          |
| <FieldIcon type="multipleRecordLinks" />| **Invoices**                          | —                                                                                     | Links to **Invoices**; multiple links allowed.                                                                      |
| <FieldIcon type="multipleRecordLinks" />| **Billable hours**                    | —                                                                                     | Links to **Billable hours**; multiple links allowed.                                                                |
| <FieldIcon type="multipleRecordLinks" />| **Billed projects**                   | —                                                                                     | Links to **Billed projects**; multiple links allowed.                                                               |
| <FieldIcon type="multipleRecordLinks" />| **Expenses**                          | —                                                                                     | Links to **Expenses**; multiple links allowed.                                                                      |
| <FieldIcon type="rollup" />             | **Billable hours (total)**            | Aggregation: `SUM(values)` on the Hours field                                         |                                                                                                                    |
| <FieldIcon type="rollup" />             | **Billable hours (unpaid)**           | Filter: link not tied to a *Paid* invoice                                             |                                                                                                                    |
| <FieldIcon type="rollup" />             | **Projects (revenue) (total) (USD)**  | Rollup of *Price (USD)* in child table                                                | Values already converted to USD in the child table.                                                                |
| <FieldIcon type="formula" />            | **Revenue (total) (USD)**             | `{Billable hours (revenue) (total) (USD)} + {Projects (revenue) (total) (USD)}`       | Lifetime gross billings.                                                                                            |
| <FieldIcon type="formula" />            | **To be paid (USD)**                  | `{Billable hours (unpaid) (USD)} + {Projects (unpaid) (USD)}`                         | Outstanding balance visible to the AM team.                                                                         |
| <FieldIcon type="multipleAttachments" />| **Logo**                              | —                                                                                     | Add client logo once; mail-merge uses it on invoice PDFs (aim for < 200 KB SVG/PNG).                                |

## Relationships

```mermaid
classDiagram
  Clients <-- "*" Invoices
  Clients <-- "*" Billable_hours
  Clients <-- "*" Billed_projects
  Clients <-- "*" Expenses
