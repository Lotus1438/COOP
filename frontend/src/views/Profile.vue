<template>
    <div>
      <b-card title="Reports 🔒">
      <b-card->We carefully crafted JWT flow so you can implement JWT with ease and with minimum efforts.</b-card->
      <b-card-text>Please read our  JWT Documentation to get more out of JWT authentication.</b-card-text>
        <br>
        <b-button type="submit" variant="primary" to="/update-profile" >Updated</b-button>

    </b-card>
    </div>
</template>
<script>
import { BCard, BButton } from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BButton,
  },
  mounted() {
    axois
      .get('http://172.16.32.15:8000/api/members')
      .then(response => {
        this.info = response.data.bpi
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  },
}
</script>

<style>
button{
    margin: 10px;
    float: right;
}
</style>
