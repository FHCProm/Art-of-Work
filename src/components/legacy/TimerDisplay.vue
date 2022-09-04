<template>
  <div class="flex flex-row items-center justify-center h-64 w-full">
    <div class="text-6xl flex timer">
      <div>{{ hourConversion }}:</div>
      <div>{{ minuteConversion }}:</div>
      <div class="">{{ secondConversion }}</div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      secondCountdown: 100,
      detailVisible: false,
    };
  },
  computed: {
    hourConversion() {
      return this.standardizeTime(moment.duration(this.time * 1000).hours());
    },
    minuteConversion() {
      return this.standardizeTime(moment.duration(this.time * 1000).minutes());
    },
    secondConversion() {
      return this.standardizeTime(moment.duration(this.time * 1000).seconds());
    },
  },
  props: {
    time: {
      type: Number,
      required: true,
    },
  },
  methods: {
    standardizeTime(value) {
      if (value / 10 < 1) {
        return `0${value}`;
      } else {
        return value;
      }
    },
  },
};
</script>


<style>
</style>