<template>
  <div>
    <b-card>
 <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="First Name:"
        label-for="input-1" key=""
      >
        <b-form-input
          id="input-1"
          v-model="form.fname"
          type="text"
          placeholder="Enter First Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.lname"
          placeholder="Enter Last Name"
          required
        ></b-form-input>
      </b-form-group>

        <b-form-group id="input-group-4" label="Gender:" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="male">Male</b-form-checkbox>
          <b-form-checkbox value="female">Female</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

       <b-form-group id="input-group-3" label="Birthdate:" label-for="input-3">
        <b-form-input
          id="input-3"
          type="date"
          v-model="form.bdate"
          required
        ></b-form-input>
      </b-form-group>

       <b-form-group id="input-group-4" label="Current Address:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.address"
          placeholder="Enter Current Address"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Role:" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="committe">Committee</b-form-checkbox>
          <b-form-checkbox value="member">Member</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-form-group id="input-group-5" label="ID Number:" label-for="input-5">
        <b-form-input
          id="input-5"
          type="number"
          v-model="form.id_number"
          placeholder="Enter ID Number"
          required
        ></b-form-input>
      </b-form-group>

       <b-button type="submit" variant="primary">Updated</b-button>
      <b-button type="submit" variant="danger" to="/profile">Cancel</b-button>
    </b-form>
    </b-card>

  </div>
</template>
<script>
import {
  BCard, BForm, BFormGroup, BFormInput, BButton, BFormCheckbox,
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BForm,
    BFormGroup,
    BFormInput,
    BButton,
    BFormCheckbox,
  },
  data() {
    return {
      form: {
        fname: '',
        lname: '',
        bdate: '',
        address: '',
        id_number: '',
        food: null,
        checked: [],
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true,
    }
  },
}
</script>

<style>
button{
    margin: 10px;
    float: right;
}
#input-group-4{
     /* display: block; */
     content: "";
     clear: both;
     display: table;
}
</style>
