import api from '../../libs/axios'

export default {
  namespaced: true,
  state: {
    reports: [],
    message: '',
    show: true,
  },
  getters: {
    getPost(state) {
      return state.message
    },
    getReports(state) {
      return state.reports
    },
    getUpdated(state) {
      return state.message
    },
  },
  actions: {
    async getReports({ commit }) {
      api.get('/reports').then(response => {
        commit('SET_REPORTS', response.data)
      })
    },
    async storeReport({ commit }, message) {
      api
        .post('/reports/1', {
          message,
        })
        .then(response => {
          commit('ADD_REPORT', response.data)
        })
    },
    async deleteReport({ commit }, id) {
      // mo dawat ug commit
      api.delete(`/report/${id}`).then(response => {
        console.log(response)
        commit('DELETE_REPORT', id)
      })
    },
    async updateReport({ commit }, { id, message }) {
      api
        .put(`/report/update/${id}`, {
          message,
        })
        .then(response => {
          console.log(response)
          commit('UPDATE_MESSAGE', id, message)
        })
    },
  },
  modules: {},
  mutations: {
    SET_REPORTS(state, reports) {
      state.reports = reports
    },
    ADD_REPORT(state, report) {
      state.reports.unshift(report)
    },
    DELETE_REPORT(state, id) {
      const index = state.reports.findIndex(report => report.id === id)
      state.reports.splice(index, 1)
    },
    UPDATE_MESSAGE(state, id, message) {
      const index = state.reports.findIndex(report => report.id === id)
      state.reports.splice(index, 1, message)
    },
  },
}
// Mutations -> commit
// Actions -> dispatch
