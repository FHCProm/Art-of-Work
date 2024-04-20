<template>
  <div v-if="props.visibility" class="tooltip-container">
    <div class="avatar-container">
      <img src="@/assets/officialPage/avatar.svg" class="avatar" />
      <div class="avatar-name">Chin Guo Ren</div>
    </div>
    <div class="tooltip-button">Setting</div>
    <div class="tooltip-button log-out">Log out</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  visibility: {
    type: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.tooltip-container {
  position: absolute;
  top: 47px;
  left: -148px;
  width: 200px;
  height: 170px;
  background: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  z-index: 100;
}

.avatar-container {
  display: flex;
  align-items: center;
}
.avatar {
  width: 50px;
  height: 50px;
}
.avatar-name {
  @include font-body;
  padding: 0 10px;
}

.avatar-name {
  width: 100%;
}

.tooltip-button {
  @include font-body;
  border: 1px solid var(--yellow-500);
  border-radius: 10px;
  text-align: center;
  width: 90%;
  height: 30px;
  margin-top: 1rem;
  &:hover {
    background: var(--yellow-300);
  }
}

.log-out {
  border: 1px solid var(--red-500);
  &:hover {
    background: var(--red-300);
  }
}

@media screen and (min-width: $breakpoint-small) {
  .tooltip-container {
    top: 57px;
  }
}
</style>
