<template>
  <div>
    <b-form-input
      id="inline-form-input-name"
      v-model="search"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Search"
      type="text"
      @v-on:Keyup="autoComplete"
    />

    <br><br><br>

    <b-table
      striped
      hover
      :items="members"
    />
  </div>
</template>
<script>
import { BTable, BFormInput } from 'bootstrap-vue'
import axios from 'axios'

export default {
  components: {
    BTable,
    BFormInput,
  },
  data() {
    return {
      members: null,

      //   fields: [
      //     {
      //       key: 'fistname',
      //       sortable: true,
      //     },
      //     {
      //       key: 'lastname',
      //       sortable: false,
      //     },
      //     {
      //       key: 'id',
      //       label: 'ID NUMBER',
      //       sortable: true,
      //       variant: 'danger',
      //     },
      //   ],

      items: null,
    }
  },
  computed: {
    members_list() {
      return this.members
    },
  },
  mounted() {
    const BASE_URL = 'http://127.0.0.1:8000/api'
    // axios.defaults.headers.common.Authorization = 'Bearer 4|OFUccVLJmN9lLy7gXQkFwES01jKYjLpMMu8WWufo'
    // axios.defaults.withCredentials = true

    // setTimeout(() => {
    //   this.items = [
    //     {
    //       isActive: true,
    //       id_number: 19104971,
    //       name: 'Dickerson',
    //       role: 'Member/Secretary',
    //     },
    //     {
    //       isActive: false,
    //       id_number: 19103245,
    //       name: 'Larsen',
    //       role: 'Member',
    //     },
    //     {
    //       isActive: false,
    //       id_number: 19107895,
    //       name: 'Geneva',
    //       role: 'Member/Instructor',
    //     },
    //     {
    //       isActive: true,
    //       id_number: 19102579,
    //       name: 'Jami',
    //       role: 'Member',
    //     },
    //   ]
    // }, 3000)
    axios
      .get(`${BASE_URL}/users`)
      .then(({ data }) => {
        console.log(data)
        this.members = data
      })
      .catch(error => {
        console.error(error)
      })
  },
  methods: {
    getUser() {
      //   axios.get('http://172.16.32.15:8000/api/members')
      //     .then(response => {
      //       this.members = response.data.members
      //     })
    },
    autoComplete() {
      console.log(this.search)
    //   axios.post(this.BASE_URL)
    },
  },
}
</script>
<style>
.mb-2 {
  width: 250px;
  float: right;
}
</style>
