<template>
  <div class="row-goal">
    <div class="row-goal-duration">{{ duration }}</div>
    <div class="row-goal-title">{{ title }}</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import moment from "moment";

const props = defineProps({
  title: {
    required: true,
    type: String,
  },
  startedAt: {
    required: true,
    type: Number,
  },
  durationInUnix: {
    required: true,
    type: Number,
  },
});

const duration = ref(null);
onMounted(() => {
  let firstUnitValue = undefined;
  let firstUnit = undefined;
  let secondUnitValue = undefined;
  let secondUnit = undefined;

  let durationObject = moment.duration(props.durationInUnix, "seconds");
  let day = parseInt(durationObject.asDays());
  let hour = parseInt(durationObject.asHours());
  let minute = parseInt(durationObject.asMinutes());
  let second = parseInt(durationObject.asSeconds());

  if (day > 0) {
    console.log(day);
    firstUnitValue = durationObject.days();
    firstUnit = day > 1 ? "days" : "day";
  }
  if (hour > 0) {
    if (firstUnitValue != undefined) {
      secondUnitValue = durationObject.hours();
      secondUnit = hour > 1 ? "hours" : "hour";
    } else {
      firstUnitValue = durationObject.hours();
      firstUnit = day > 1 ? "hours" : "hour";
    }
  }

  if (minute > 0) {
    if (firstUnitValue != undefined) {
      secondUnitValue = durationObject.minutes();
      secondUnit = minute > 1 ? "minutes" : "minute";
    } else {
      firstUnitValue = durationObject.minutes();
      firstUnit = day > 1 ? "minutes" : "minute";
    }
  }

  if (second > 0) {
    if (firstUnitValue != undefined) {
      secondUnitValue = durationObject.seconds();
      secondUnit = second > 1 ? "seconds" : "second";
    } else {
      firstUnitValue = durationObject.seconds();
      firstUnit = day > 1 ? "seconds" : "seconds";
    }
  }
  if (secondUnitValue == 0) {
    duration.value = `${firstUnitValue} ${firstUnit}`;
  } else {
    duration.value = `${firstUnitValue} ${firstUnit} ${secondUnitValue} ${secondUnit}`;
  }
});
</script>

<style scoped lang="scss">
.row-goal {
  font-size: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  &-duration {
    @include font-label;
  }
  &-title {
    @include font-headline;
  }
  &:hover {
    background: var(--gray-200);
  }
}
</style>
