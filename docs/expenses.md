---
title: Expenses
outline: deep
---
<script setup lang="ts">
import FieldIcon from './icons/FieldIcon.vue';
import ScrollableScreenshot from './components/ScrollableScreenshot.vue';
</script>


# Expenses

[Open in Airtable](https://airtable.com/appAeUFSMOuOVDfCV/tbl4rs8m2aGUcyH90)

## Purpose
Captures every company out‑of‑pocket cost—receipts, subscriptions, travel, services—so we can track profitability by client and feed monthly cash‑flow projections.

<!-- <ScrollableScreenshot src="/tables/expenses.png" /> -->
<iframe class="airtable-embed" src="https://airtable.com/embed/appAeUFSMOuOVDfCV/shrXI4150y0dF7Wzj" frameborder="0" onmousewheel="" width="100%" height="260" style="background: transparent; border: 1px solid #ccc;"></iframe>

## Fields

| Type                                      | Field               | Key Options / Formula                                            | Notes                                                                                   |
| ----------------------------------------- | ------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| <FieldIcon type="singleLineText" />       | **Expense ID**      | Manual; suggest `YYYYMMDD-vendor-seq`                             | Human-readable slug that appears on the PDF receipt link.                               |
| <FieldIcon type="date" />                 | **Date**            | Format `l`                                                       | Use receipt / invoice date, not payment date.                                          |
| <FieldIcon type="currency" />             | **Amount**          | Precision 2                                                      | Enter **positive** value; cash-flow layer flips sign.                                  |
| <FieldIcon type="singleSelect" />         | **Category**        | ▫︎ Office Supplies ▫︎ Travel ▫︎ Meals ▫︎ Utilities ▫︎ Miscellaneous ▫︎ Services | Expand list as needed for reporting granularity.                                        |
| <FieldIcon type="multipleAttachments" />  | **Attachments**     | —                                                                | Upload PDF or photo of receipt; name files sensibly.                                   |
| <FieldIcon type="multipleRecordLinks" />  | **Client**          | —                                                                | Tag expense to a customer for pass-through or margin analysis. Optional.               |
| <FieldIcon type="multipleRecordLinks" />  | **Cashflow items**  | —                                                                | Created automatically via script; amount comes in as **negative** for cash analysis.  |


## Relationships

```mermaid
classDiagram
  Expenses --> "1" Clients : "belongs to"
  Expenses --> "1" Cashflow_items : "reflected in"
```

- **[Clients](https://airtable.com/appAeUFSMOuOVDfCV/tblLdpbp52Mhjog08)** (linked via *Client*)
- **[Cashflow items](https://airtable.com/appAeUFSMOuOVDfCV/tblZhFXFFYHJsmCVn)** (linked via *Cashflow items*)

## Gotchas

* **Positive vs negative**: keep *Amount* positive; downstream formula in Cashflow items multiplies by ‑1 so expenses appear as outflows.
* **Categorise consistently**; dashboards rely on Category for cost‑centre charts. Create new options sparingly.
* **Client link is optional**: Link only if the cost is project‑specific; leave blank for overheads.
* Large file uploads (>5 MB) slow sync—compress images before attaching.

## Calculated & AI fields
The **Cashflow items** linkage automatically creates negative cash flow entries for expense tracking, ensuring accurate financial projections. The **Category** field enables automated cost analysis and reporting across different business functions.
