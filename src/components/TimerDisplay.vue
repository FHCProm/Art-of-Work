<template>
  <div
    class="
      relative
      flex flex-col
      items-center
      justify-center
      h-96
      w-96
      rounded-full
      border-2 border-black
    "
  >
    <p>break in :</p>
    <div class="text-3xl flex timer">
      <div class="mr-1">{{ time }}</div>
      <div>seconds</div>
    </div>

    <button
      @click="showDetail"
      class="
        absolute
        text-center
        top-4
        border-2 border-gray-300
        rounded-full
        px-2
      "
    >
      details
    </button>

    <div v-if="detailVisible" class="absolute w-1/2 top-12 leading-none">
      {{ message }}
    </div>

    <button
      class="
        absolute
        text-center
        bottom-4
        border-2 border-gray-300
        rounded-full
        px-2
      "
    >
      cancel
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      secondCountdown: 100,
      detailVisible: false,
    };
  },
  props: ["time", "message"],
  methods: {
    showDetail() {
      this.detailVisible = true;
    },
  },
};
</script>

<style>
</style>