<template>
  <div class="line-layout-container" :class="classes">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  mobileBorderTop: {
    type: Boolean,
  },
  mobileBorderRight: {
    type: Boolean,
  },
  mobileBorderBottom: {
    type: Boolean,
  },
  mobileBorderLeft: {
    type: Boolean,
  },
  tabletBorderTop: {
    type: Boolean,
  },
  tabletBorderRight: {
    type: Boolean,
  },
  tabletBorderBottom: {
    type: Boolean,
  },
  tabletBorderLeft: {
    type: Boolean,
  },
});

const classes = computed(() => ({
  "mobile-border-top": props.mobileBorderTop,
  "mobile-border-right": props.mobileBorderRight,
  "mobile-border-bottom": props.mobileBorderBottom,
  "mobile-border-left": props.mobileBorderLeft,
  "tablet-border-top": props.tabletBorderTop,
  "tablet-border-right": props.tabletBorderRight,
  "tablet-border-bottom": props.tabletBorderBottom,
  "tablet-border-left": props.tabletBorderLeft,
}));
</script>

<style lang="scss" scoped>
.line-layout-container {
  background: var(--white);
}
.mobile-border-top {
  border-top: 1.5px solid var(--gray-300);
}
.mobile-border-right {
  border-right: 1.5px solid var(--gray-300);
}
.mobile-border-bottom {
  border-bottom: 1.5px solid var(--gray-300);
}
.mobile-border-left {
  border-left: 1.5px solid var(--gray-300);
}
@media screen and (min-width: $breakpoint-small) {
  .tablet-border-top {
    border-top: 1.5px solid var(--gray-300);
  }
  .tablet-border-right {
    border-right: 1.5px solid var(--gray-300);
  }
  .tablet-border-bottom {
    border-bottom: 1.5px solid var(--gray-300);
  }
  .tablet-border-left {
    border-left: 1.5px solid var(--gray-300);
  }
}
</style>
