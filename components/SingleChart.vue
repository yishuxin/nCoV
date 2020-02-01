<template>
  <div class="card">
    <div class="card-img-bottom">
      <line-chart :chart-data="datacollection" />
    </div>
  </div>
</template>

<script>
import LineChart from "../components/line-chart";
export default {
  components: {
    LineChart
  },
  props: {
    filteredPlace: {
      type: Object
    }
  },
  mounted() {
    this.fillData();
  },
  data() {
    return {
      datacollection: {}
    };
  },
  methods: {
    fillData() {
      console.log(this.filteredPlace);

      this.datacollection = {
        datasets: [
          {
            data: [
              this.filteredPlace.confirmed,
              this.filteredPlace.cured,
              this.filteredPlace.dead
            ],
            backgroundColor: [
              "rgba(219, 6, 23, .7)",

              "rgba(13, 191, 75, .7)",
              "rgba(48, 48, 48, 1)"
            ],

            hoverBackgroundColor: ["#fbd2cd", "#fef5c9", "#d1e3f7"]
          }
        ],
        labels: ["已确诊病例", "治愈病例", "死亡病例"]
      };
    }
  }
};
</script>
