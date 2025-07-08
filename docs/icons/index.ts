// docs/icons/index.ts
import aiText from "./aiText";
import autoNumber from "./autoNumber";
import checkbox from "./checkbox";
import currency from "./currency";
import date from "./date";
import duration from "./duration";
import email from "./email";
import formula from "./formula";
import multilineText from "./multilineText";
import multipleAttachments from "./multipleAttachments";
import multipleLookupValues from "./multipleLookupValues";
import multipleRecordLinks from "./multipleRecordLinks";
import multipleSelects from "./multipleSelects";
import number from "./number";
import percent from "./percent";
import phoneNumber from "./phoneNumber";
import rating from "./rating";
import richText from "./richText";
import rollup from "./rollup";
import singleCollaborator from "./singleCollaborator";
import singleLineText from "./singleLineText";
import singleSelect from "./singleSelect";
import time from "./time";
import url from "./url";

// define your FieldType to match the Airtable field types you use
export type FieldType =
  | "aiText"
  | "autoNumber"
  | "checkbox"
  | "currency"
  | "date"
  | "duration"
  | "email"
  | "formula"
  | "multilineText"
  | "multipleAttachments"
  | "multipleLookupValues"
  | "multipleRecordLinks"
  | "multipleSelects"
  | "number"
  | "percent"
  | "phoneNumber"
  | "rating"
  | "richText"
  | "rollup"
  | "singleCollaborator"
  | "singleLineText"
  | "singleSelect"
  | "time"
  | "url";

export const iconMap: Record<FieldType, string> = {
  aiText,
  autoNumber,
  checkbox,
  currency,
  date,
  duration,
  email,
  formula,
  multilineText,
  multipleAttachments,
  multipleLookupValues,
  multipleRecordLinks,
  multipleSelects,
  number,
  percent,
  phoneNumber,
  rating,
  richText,
  rollup,
  singleCollaborator,
  singleLineText,
  singleSelect,
  time,
  url,
};
