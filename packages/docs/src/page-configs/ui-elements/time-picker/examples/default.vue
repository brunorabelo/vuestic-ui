<template>
  <h6>{{ value.getHours() }}:{{ value.getMinutes() }}:{{ value.getSeconds() }}</h6>

  <va-time-picker v-model="value" />
</template>

<script>
export default {
  data () {
    return {
      value: new Date(),
    }
  },
}
</script>
