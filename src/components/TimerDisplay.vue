<template>
  <div
    class="
      flex flex-col
      items-center
      justify-center
      h-96
      w-96
      rounded-full
      border-2 border-black
      timer
    "
  >
    <p>break in :</p>
    <div class="text-3xl flex">
      <div class="mr-1">{{ time }}</div>
      <div>seconds</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      secondCountdown: 100,
    };
  },
  props: ["time"],
};
</script>

<style>
</style>