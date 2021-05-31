<template>
  <div>
      <!-- Create Reports  -->
    <b-card title="Create Report 🚀">
      <b-form @submit.prevent="submit">
        <b-from-group>
          <b-form-textarea
            id="textarea"
            v-model="message"
            placeholder="Create report..."
            rows="3"
            max-rows="6"
          />
          <b-button
            variant="primary"
            @click="submit"
          >
            Post
          </b-button>
        </b-from-group>
      </b-form>
    </b-card>

    <!-- Edit/Delete Reports  -->
    <div
      v-for="report in reports"
      :key="report.id"
      class="report-content"
    >
      <b-card>
        <!-- title="Reports 🔒" -->
        <b-header><strong>{{ report.user.first_name }} {{ report.user.last_name }}</strong>
          {{ report.created_at }}
          <b-button-group>
            <b-dropdown>
              <b-dropdown-item @click="editButton(report.id)">Edit</b-dropdown-item>
              <b-dropdown-divider />
              <b-dropdown-item
                @click="delButton(report.id)"
              >Delete</b-dropdown-item>
            </b-dropdown>
          </b-button-group>
        </b-header>
        <hr>
        <p>{{ report.message }}</p>
        <b-form @submit.prevent="update">
        <b-from-group>
        <div :id="report.id.toString()" style="display:none">
             <b-form-textarea
            id="textarea"
            placeholder="Edit report..."
            rows="3"
            v-model="report.message"
            max-rows="6"
          />
          <b-button
            variant="primary"
            @click="update(report.id, report.message)"
          >
            Update Message
          </b-button>
        </div>
        </b-from-group>
      </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
import {
  BCard,
  BFormTextarea,
  BButton,
  BDropdown,
  BDropdownItem,
  BDropdownDivider,
  BButtonGroup,
} from 'bootstrap-vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    BCard,
    BFormTextarea,
    BButton,
    BDropdown,
    BDropdownItem,
    BDropdownDivider,
    BButtonGroup,
  },
  data() {
    return {
      message: '',
    }
  },
  mounted() {
    this.$store.dispatch('users/getReports')
  },
  methods: {
    submit() {
      this.$store.dispatch('users/storeReport', this.message)
      this.message = ''
    },
    delButton(id) {
      this.$store.dispatch('users/deleteReport', id)
    },
    editButton(reportId) {
      document.getElementById(reportId).style.display = 'block'
    },
    update(id, message) {
      this.$store.dispatch('users/updateReport', { id, message })
    },
  },
  computed: {
    ...mapGetters({
      reports: 'users/getReports',
    }),
  },
}
</script>

<style>
button {
  margin: 10px;
  float: right;
}

.dropdown {
    float: right;

}

</style>
