<template>
  <fieldset>
      <div v-for="(option, idx) in options" :key="option.text">
        <div class="row d-flex align-items-center">
          <div class="col-md-4 col-sm-12">
            <input
              :id="id + idx"
              :name="id"
              type="radio"
              :value="option.value"
              @change="updateValue(option.value)"
            />
            <label class="fs-4 fw-light" :for="id + idx">{{ option.name }}</label>
          </div>
          <div class="col-md-6 col-sm-12">
            <slot v-if="option.value === value" :name="option.value" />
          </div>
        </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  model: {
    event: 'change'
  },
  props: ['id', 'value', 'options'],
  methods: {
    updateValue (value) {
      this.$emit('change', value)
    }
  }
}
</script>

<style>

</style>
