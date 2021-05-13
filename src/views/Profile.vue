<template>
  <div>
    <b-card title="Reports 🔒">
        <h4>First Name: </h4>
        <h4>Last Name: </h4>
        <h4>ID Number: </h4>
        <h4>Address: </h4>
        <h4>E-mail: </h4>
      <b-button
        type="submit"
        variant="primary"
        to="/update-profile"
      >Updated</b-button>
    </b-card>
  </div>
</template>
<script>
import { BCard, BButton } from 'bootstrap-vue'
import axios from 'axios'

export default {
  components: {
    BCard,
    BButton,
  },
  data() {
    return {
      members: {},
    }
  },
  mounted() {
    axios
      .get('http://172.16.32.15:8000/api/members')
      .then(response => {
        this.info = response.data.bpi
      })
    //   .catch(error => {
    // console.log(error)
    // this.errored = true
    //   })
    //   .finally(() => this.loading = false)
  },
  methods: {

  },
}
</script>

<style>
button {
  margin: 10px;
  float: right;
}
</style>
