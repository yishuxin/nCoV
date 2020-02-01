<template>
  <div
    class="container mx-auto mt-10 relative h-64 w-64 flex-col items-center justify-center"
  >
    <div class="flex justify-center">
      <form @submit.prevent="handleSubmit" class="mx-auto my-4">
        <input class="mb-2 w-72 appearance-none p-2 bg-gray-100 border border-gray-200 text-gray-700 rounded leading-tight focus:outline-none focus:bg-white focus:border-teal-300 md:w-104" v-model="inputPlace" type="text" placeholder="输入城市或省名" />
      </form>
    </div>

    <client-only>
      <single-chart
        v-if="isFormSubmitted"
        :filteredPlace.sync="filteredPlace"
        :key="componentKey"
      />
    </client-only>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SingleChart from "@/components/SingleChart.vue";
export default {
  components: {
    SingleChart
  },
  async fetch({ store, error }) {
    try {
      if (store.getters["getlistByArea"] === undefined) {
        await store.dispatch("fetchData");
      }
    } catch (e) {
      error({
        statusCode: 503,
        message: "Server isn't unable to fetch data, please try again later."
      });
    }
  },
  data() {
    return {
      componentKey: 0,
      inputPlace: "",
      filteredPlace: {},
      isFormSubmitted: false
    };
  },
  methods: {
    handleSubmit() {
      const filteredProvinces = this.myData.listByArea.find(
        place => place.provinceName === this.inputPlace
      );

      const filteredProvinceShort = this.myData.listByArea.find(
        place => place.provinceShortName === this.inputPlace
      );

      const filteredCities = this.myData.listByArea.map(p => {
        return p.cities.find(c => c.cityName === this.inputPlace);
      });

      const filteredCity = filteredCities.filter(c => c !== undefined)[0];

      this.filteredPlace =
        filteredProvinces || filteredProvinceShort || filteredCity;

      this.isFormSubmitted = true;
      this.inputPlace = "";
      this.forceRerender();
    },
    forceRerender() {
      this.componentKey += 1;
    }
  },
  computed: {
    ...mapState({
      myData: state => state.returnedData
    })
  }
};
</script>
