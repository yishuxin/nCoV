<template>
  <div>
    <div class="relative mx-10">
      <chartjs-line :datasets="datasets" :labels="labels" :options="options" />
    </div>
    <div>last updated: {{ updatedTime }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datasets: [
        {
          data: [],
          label: "confirmed",
          backgroundColor: [
            "rgba(219, 6, 23, .7)",
            "rgba(255, 204, 0, 1)",
            "rgba(13, 191, 75, .7)",
            "rgba(48, 48, 48, 1)"
          ],
          hoverBackgroundColor: ["#fbd2cd", "#fef5c9", "#d1e3f7"]
        }
      ],

      labels: [],
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  created() {
    this.labels = this.listOfProvinces;
    this.datasets[0].data = this.numberOfConfirmed;
  },

  computed: {
    updatedTime() {
      return this.$store.getters["getUpdatedTime"];
    },
    listOfProvinces() {
      const areas = this.$store.getters["getlistByArea"];
      return areas.map(p => p.provinceShortName);
    },
    numberOfConfirmed() {
      return this.$store.getters["getlistByArea"].map(p => p.confirmed);
    }
  }
};
</script>
