import Api from '../../services/api/api'
import * as types from '../types/reports'

export default {
  state: {
    reports: [],
    message: 'null',
  },

  getters: {
    [types.GETTER_REPORT]: state => state.reports,
  },

  actions: {
    async [types.ACTION_SET_REPORTS]({ commit }) {
      const res = await Api.get('/reports')
      commit(types.MUTATION_SET_REPORTS, res.data)
    },
    async [types.ACTION_ADD_REPORT]({ commit }, message) {
      const res = await Api.post('/reports/1', { message })
      console.log(res, message)
      commit(types.MUTATION_ADD_REPORT, res.data, message)
    },
    async [types.ACTION_DELETE_REPORT]({ commit }, id) {
      await Api.delete(`/report/${id}`)
      commit(types.MUTATION_DELETE_REPORT, id)
    },
    async [types.ACTION_UPDATE_REPORT]({ commit }, id, message) {
      const res = await Api.put(`/report/update/${id}`, { message })
      console.log(res, message)
      commit(types.MUTATION_UPDATE_REPORT, id, res.data, message)
    },
  },

  mutations: {
    [types.MUTATION_SET_REPORTS](state, reports) {
      state.reports = reports
    },
    [types.MUTATION_ADD_REPORT](state, report) {
      state.reports.unshift(report)
    },
    [types.MUTATION_DELETE_REPORT](state, id) {
      state.reports = state.reports.filter(report => report.id !== parseInt(id, 10))
    },
    [types.MUTATION_UPDATE_REPORT](state, id, message) {
      const index = state.reports.findIndex(report => report.id === id)
      state.reports.splice(index, 1, message)
    },
  },
}
