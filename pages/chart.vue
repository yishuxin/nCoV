<template>
  <no-ssr>
    <div>
      <div>
        <!-- <ChartBar />
        <ChartDoughnut /> -->
        <ChartLine />
      </div>
    </div>
  </no-ssr>
</template>

<script>
import ChartBar from "@/components/chart-bar";
import ChartDoughnut from "@/components/chart-doughnut";
import ChartLine from "@/components/chart-line";
export default {
  components: {
    ChartBar,
    ChartDoughnut,
    ChartLine
  },

  computed: {
    listByArea() {
      return this.$store.getters["getlistByArea"];
    }
  }
};
</script>

<style></style>
