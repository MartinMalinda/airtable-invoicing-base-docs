<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  src: string;
}>();

const img = ref<HTMLImageElement | null>(null);
const wrapper = ref<HTMLElement | null>(null);

const SCALE = 0.5;

function adjustSize() {
  if (img.value && wrapper.value) {
    const { naturalWidth, naturalHeight } = img.value;
    wrapper.value.style.width = `${naturalWidth * SCALE}px`;
    wrapper.value.style.height = `${naturalHeight * SCALE}px`;
  }
}
</script>
<template>
  <div ref="container" style="overflow-x: auto; width: 100%">
    <div
      ref="wrapper"
      style="transform: scale(0.5); transform-origin: top left"
    >
      <img
        :src="src"
        ref="img"
        style="display: block; width: auto; max-width: none; border-radius: 8px"
        @load="adjustSize"
      />
    </div>
  </div>
</template>
