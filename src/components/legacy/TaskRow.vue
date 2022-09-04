<template>
  <div class="table-row bg-gray-500">
    <div class="table-cell border-b border-gray-200 py-2 px-2">
      {{ formattedDate }}
    </div>
    <div class="table-cell border-b border-gray-200 py-2">
      {{ taskInfo.taskDescription }}
    </div>
    <div class="table-cell border-b border-gray-200 py-2">
      {{ taskInfo.duration }}
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: ["taskInfo"],
  data() {
    return {};
  },
  computed: {
    formattedDate() {
      return moment.unix(this.taskInfo.date).format("D-M-YYYY, h:mm:ss a");
    },
  },
};
</script>

<style>
</style>