<template>
  <div>
    <va-chip
      v-for="(color, index) in colors"
      :key="index"
      :color="color"
      class="mr-4"
    >
      {{ color }}
    </va-chip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: ["primary", "danger", "success", "warning", "#7f1f90"],
    };
  },
};
</script>
