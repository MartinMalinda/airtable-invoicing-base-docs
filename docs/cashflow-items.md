---
title: Cashflow items
outline: deep
---

# Cashflow items

[Open in Airtable](https://airtable.com/appAeUFSMOuOVDfCV/tblZhFXFFYHJsmCVn)

## Purpose
Unified ledger that normalises **Hours**, **Projects**, and **Expenses** into a single table for monthly cash‑flow and P&L dashboards. Each record references exactly *one* underlying source (billable hours entry, fixed‑price project, or expense) and converts it to a common sign (+ revenue / – cost) and currency field.

## Fields

| Field | Type | Key Options / Formula | Notes |
| ----- | ---- | --------------------- | ----- |
| **Name** | formula (primary) | <details><summary>Formula</summary>`IF(Billable hours, Billable hours, IF(Billed projects, Billed projects, Expense))`</details> | Mirrors the linked record's name for quick recognition. |
| **Type** | formula → single‑select ▫︎ Hours ▫︎ Project ▫︎ Expense | <details><summary>Formula</summary>`IF(Billable hours, 'Hours', IF(Billed projects, 'Project', 'Expense'))`</details> | Evaluates which link field is populated. Drives colour coding in charts. |
| **Created By** | system | — | Audit trail for manual adds. |
| **Billable hours** | link → [**Billable hours**](https://airtable.com/appAeUFSMOuOVDfCV/tblBhPqOGFIV86qsb) | Single link | Positive revenue inflow. |
| **Billed projects** | link → [**Billed projects**](https://airtable.com/appAeUFSMOuOVDfCV/tbl0oXRRiB7Fj1vEl) | Single link | Positive lump‑sum inflow. |
| **Expense** | link → [**Expenses**](https://airtable.com/appAeUFSMOuOVDfCV/tbl4rs8m2aGUcyH90) | Single link | Negative outflow. |
| **Date** | formula (date) | <details><summary>Formula</summary>`IF({Date (from Hours)}, {Date (from Hours)}, IF({Date (from Project)}, {Date (from Project)}, {Date (from Expense)}))`</details> | Picks whichever linked record provides a date. |
| **Currency** | formula → single‑select | <details><summary>Formula</summary>`IF({Currency (from Hours)}, {Currency (from Hours)}, IF({Currency (from Project)}, {Currency (from Project)}, 'USD'))`</details> | Chooses currency from Hours or Project link. Expenses may differ but usually match base currency. |
| **Amount** | formula (currency) | <details><summary>Formula</summary>`IF(Expense, {Amount (from Expense)} * -1, IF({Billable hours}, {Billable (USD)}, {Price (USD)}))`</details> | Ensures expenses show as **negative**; revenue as positive. Always in USD. |
| **Months ago** | formula (number) | <details><summary>Formula</summary>`FLOOR(DATETIME_DIFF(TODAY(), Date, 'month'))`</details> | Facilitates cohort / trailing‑12‑month charts. |
| **Client** | formula (single‑line text) | <details><summary>Formula</summary>`IF({Client (from Hours)}, {Client (from Hours)}, IF({Client (from Project)}, {Client (from Project)}, {Client (from Expense)}))`</details> | Cascades client name from whichever link field is present. |
| **Date (from Hours)** | lookup | from Billable hours → **Date** | Hidden lookup feeding canonical Date formula. |
| **Date (from Project)** | lookup | from Billed projects → **Delivery Date** | Hidden lookup feeding canonical Date formula. |
| **Date (from Expense)** | lookup | from Expense → **Date** | Hidden lookup feeding canonical Date formula. |
| **Billable (USD)** | lookup | from Billable hours → **Billable (USD)** | Hidden lookup feeding canonical Amount formula. |
| **Price (USD)** | lookup | from Billed projects → **Price (USD)** | Hidden lookup feeding canonical Amount formula. |
| **Amount (from Expense)** | lookup | from Expense → **Amount** | Hidden lookup feeding canonical Amount formula. |
| **Currency (from Hours)** | lookup | from Billable hours → **Currency** | Hidden lookup feeding canonical Currency formula. |
| **Currency (from Project)** | lookup | from Billed projects → **Currency** | Hidden lookup feeding canonical Currency formula. |
| **Client (from Hours)** | lookup | from Billable hours → **Client** | Hidden lookup feeding canonical Client formula. |
| **Client (from Project)** | lookup | from Billed projects → **Client** | Hidden lookup feeding canonical Client formula. |
| **Client (from Expense)** | lookup | from Expense → **Client** | Hidden lookup feeding canonical Client formula. |

## Relationships

```mermaid
classDiagram
  Cashflow_items --> "0..1" Billable_hours
  Cashflow_items --> "0..1" Billed_projects
  Cashflow_items --> "0..1" Expenses
```

- **[Billable hours](https://airtable.com/appAeUFSMOuOVDfCV/tblBhPqOGFIV86qsb)** (linked via *Billable hours*)
- **[Billed projects](https://airtable.com/appAeUFSMOuOVDfCV/tbl0oXRRiB7Fj1vEl)** (linked via *Billed projects*)
- **[Expenses](https://airtable.com/appAeUFSMOuOVDfCV/tbl4rs8m2aGUcyH90)** (linked via *Expense*)

## Gotchas

* **Exactly one link**: hours *or* project *or* expense—never more than one. Use an automation/script to enforce.
* **Sign convention**: Revenue is positive, expenses negative. Do not manually edit *Amount*; edit the source record instead.
* **Currency consistency**: Source formulas convert to USD for unified reporting; adjust FX rates periodically.
* **Months‑ago field** powers rolling‑window charts; value refreshes daily at midnight.
* **Deleting a source record** breaks the link and will set Amount to zero—dashboards may dip unexpectedly.
* **Manual additions discouraged**: Create Cashflow items via the dedicated script so formulas populate correctly.

## Calculated & AI fields
The **Name**, **Type**, **Date**, **Currency**, **Amount**, **Months ago**, and **Client** fields are all formula-driven, automatically pulling data from whichever source record is linked. The **Amount** field applies proper sign convention (positive for revenue, negative for expenses) and normalizes all values to USD for consistent financial reporting. Hidden lookup fields feed these formulas but are typically not displayed in the interface.