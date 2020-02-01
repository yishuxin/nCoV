<template>
  <div class="card">
    <div class="card-body">
      <h2 class="card-title">Doughnut</h2>
    </div>

    <div class="card-img-bottom">
      <chartjs-doughnut
        :bind="true"
        :datasets="datasets"
        :labels="labels"
        :option="option"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datasets: [
        {
          data: [7753, 12139, 131, 170],
          backgroundColor: [
            "rgba(219, 6, 23, .7)",
            "rgba(255, 204, 0, 1)",
            "rgba(13, 191, 75, .7)",
            "rgba(48, 48, 48, 1)"
          ],

          hoverBackgroundColor: ["#fbd2cd", "#fef5c9", "#d1e3f7"]
        }
      ],
      labels: ["已确诊病例", "疑似病例", "治愈病例", "死亡病例"],
      option: {
        responsive: true
      }
    };
  }
};
</script>
