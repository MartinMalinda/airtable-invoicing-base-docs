# Automation · Billed projects → Cashflow items

**Purpose**  Whenever a *Billed projects* record has a **Client** but no linked **Cashflow item**, Airtable automatically:

1. **Detects the record** (trigger: *Cashflow items is empty* **and** *Client is not empty*).
2. **Creates** a matching record in *Cashflow items* and links it back to the project.

This ensures every fixed‑price deliverable instantly shows up in the cash‑flow ledger—no manual copying, no duplicates.

---

## Copy‑paste prompt for Airtable AI Assist

```text
Create an automation:

• Trigger
  - Type: “When record matches conditions”
  - Table: Billed projects
  - Conditions:
      1. Field “Cashflow items” is empty
      2. Field “Client” is not empty

• Action
  - Type: “Create record”
  - Table: Cashflow items
  - Set field “Billed projects” to airtableRecordId()   // link the new Cashflow item back to the triggering record
```

Paste this block into the **AI Assist** prompt inside Automations; Airtable will scaffold the trigger and action for you.
