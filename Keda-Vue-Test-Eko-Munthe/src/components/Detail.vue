<template>
  <div class="container">
    <h1 class="text-center">
      Keda Tech 2nd Phase Technichal Test
    </h1>
    <div class="jumbotron">
      <form @submit.prevent="showData">
        <RadioButton id="FormRadio" v-model="radioButton" :options="
          [
            {
              value: 'textField',
              name: 'Text Field'
            },
            {
              value: 'dateField',
              name: 'Date Field'
            },
            {
              value: 'otherField',
              name: 'Other Field'
            }
          ]
        " label="radioButton" >

          <template #textField>
            <div class="form-floating">
              <label for="textField">Inner Components.</label>
              <input
                type="text"
                class="form-control"
                id="textField"
                name="textField"
                v-model="textField"
                placeholder="Hey!"
              />
            </div>
          </template>

          <template #dateField>
            <div class="form-floating">
              <label for="dateField">Inner Components </label>
              <br />
              <input
                type="date"
                class="form-control"
                id="dateField"
                name="dateField"
                v-model="dateField"
              />
            </div>
          </template>

          <template #otherField>
            <div class="form-floating">
              <label class="d-flex" for="otherFieldPositon"><span class="mr-auto">Representative's Position (at Work) </span><span class="text-danger ml-auto">Required!</span></label>
              <input
                type="text"
                class="form-control"
                id="otherFieldPositon"
                name="otherFieldPositon"
                v-model="otherFieldPositon"
                placeholder="CEO"
                required
              />
              <label class="d-flex mt-3" for="otherFieldName"><span class="mr-auto">Representative's Name </span><span class="text-danger ml-auto">Required!</span></label>
              <input
                type="text"
                class="form-control"
                id="otherFieldName"
                name="otherFieldName"
                v-model="otherFieldName"
                placeholder="Hanayo Koizumi"
                required
              />
              <label class="d-flex mt-3" for="otherFieldAddress"><span class="mr-auto">Representative's Address </span><span class="text-danger ml-auto">Required!</span></label>
              <input
                type="text"
                class="form-control"
                id="otherFieldAddress"
                name="otherFieldAddress"
                v-model="otherFieldAddress"
                placeholder="Tokyo"
                required
              />
            </div>
          </template>

        </RadioButton>
        <button class="btn btn-info" type="submit">Show All Data</button>
      </form>
      <div class="card mt-2" v-if="showCard === true" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Detail</h5>
          <p class="card-text">
            Name: {{otherFieldName}} <br />
            Position: {{otherFieldPosition}} <br />
            Address: {{otherFieldAddress}} <br />
            Message: {{textField}} <br/>
            Date: {{dateField}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from './RadioButton.vue'

export default {
  components: { RadioButton },
  data () {
    return {
      radioButton: null,
      textField: '',
      dateField: '',
      otherFieldPositon: '',
      otherFieldName: '',
      otherFieldAddress: '',
      showCard: false
    }
  },
  methods: {
    showData () {
      if (this.showCard === false) {
        this.showCard = true
      } else {
        this.showCard = false
      }
      console.log(this.showCard)
    }
  }
}
</script>

<style>

</style>
