import DataService from "@/services/DataService";
import moment from "moment";

export const state = () => ({
  returnedData: {}
});

export const mutations = {
  SET_DATA(state, data) {
    state.returnedData = data;
  }
};

export const actions = {
  fetchData({ commit }) {
    return DataService.getData().then(res => {
      commit("SET_DATA", res.data.data);
    });
  }
};

export const getters = {
  getUpdatedTime: state =>
    moment(state.returnedData.statistics.modifyTime).format(
      "MMMM Do YYYY, h:mm:ss a"
    ),
  getlistByArea: state => {
    return state.returnedData.listByArea;
  }
};
