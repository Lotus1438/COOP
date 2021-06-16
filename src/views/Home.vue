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
        <b-header><strong>{{ report.first_name }} {{ report.last_name }}</strong>
          {{ report.created_at }}
          <b-button-group>
            <b-dropdown>
              <b-dropdown-item
                @click="editButton(report.id)"
              >Edit</b-dropdown-item>
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
            <div
              :id="report.id"
              style="display:none"
            >
              <b-form-textarea
                id="textarea"
                v-model="report.message"
                placeholder="Edit report..."
                rows="3"
                max-rows="6"
              />
              <b-button
                variant="danger"
                @click="cancel()"
              >
                Cancel
              </b-button>
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
  BForm,
  //   BFormGroup,
} from 'bootstrap-vue'
import { mapGetters, mapActions } from 'vuex'
import * as reportTypes from '../store/types/reports'

export default {
  components: {
    BCard,
    BFormTextarea,
    BButton,
    BDropdown,
    BDropdownItem,
    BDropdownDivider,
    BButtonGroup,
    BForm,
    // BFormGroup,
  },
  data() {
    return {
      message: '',
    }
  },
  computed: {
    ...mapGetters({
      reports: reportTypes.GETTER_REPORT,
    }),
  },
  mounted() {
    this.getReports()
  },
  methods: {
    ...mapActions({
      getReports: reportTypes.ACTION_SET_REPORTS,
      postReport: reportTypes.ACTION_ADD_REPORT,
      deleteReport: reportTypes.ACTION_DELETE_REPORT,
      updateReport: reportTypes.ACTION_UPDATE_REPORT,
    }),
    submit() {
      //   this.$store.dispatch('users/storeReport', this.message)
      this.postReport(this.message)
      this.message = ''
    },
    delButton(id) {
    //   this.$store.dispatch('users/deleteReport', id)
      this.deleteReport(id)
    },
    editButton(reportId) {
      document.getElementById(reportId).style.display = 'block'
    },
    update(id) {
    //   this.$store.dispatch('users/updateReport', { id, message })
      console.log(this.message)
      this.updateReport(id, this.message)
      document.getElementById(id).style.display = 'none'
    },
    cancel() {
      console.log('closed')
      //   document.getElementById(reportId).style.display = 'none'
    },
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
