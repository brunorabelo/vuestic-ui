<template>
  <div>
    <va-rating class="mb-4" v-model="value" hover />
    <span> Value: {{ value }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 3,
    };
  },
};
</script>
