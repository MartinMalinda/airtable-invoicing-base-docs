<script lang="ts" setup>
import { computed } from "vue";
import { iconMap, FieldType } from "./index";

// Props:
// - `type`: an Airtable field type key matching your `iconMap`
// - `title`: what you want the `<title>` attr on the SVG wrapper to be
const props = defineProps<{
  type: FieldType;
  title?: string;
}>();

// pick the correct SVG (as a string)
const svgHtml = computed(() => iconMap[props.type] || "");
</script>

<template>
  <div
    v-if="svgHtml"
    v-html="svgHtml"
    :title="props.title || props.type"
    class="field-icon"
  />
</template>

<style scoped>
.field-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  position: relative;
}

::v-deep(svg) {
  position: absolute;
  top: 0;
  left: 0;
  width: 1em;
  height: 1em;
}
</style>
