<template>
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2.5" y="19" width="20" height="2" rx="1" :fill="colors.primary" />
    <path d="M4 14C4 13.4477 4.44772 13 5 13C5.55228 13 6 13.4477 6 14V16C6 16.5523 5.55228 17 5 17C4.44772 17 4 16.5523 4 16V14Z" :fill="colors.primary" />
    <path d="M14 10C14 9.44772 14.4477 9 15 9C15.5523 9 16 9.44772 16 10V16C16 16.5523 15.5523 17 15 17C14.4477 17 14 16.5523 14 16V10Z" :fill="colors.primary" />
    <path d="M9 6.5C9 5.94772 9.44772 5.5 10 5.5C10.5523 5.5 11 5.94772 11 6.5V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V6.5Z" :fill="colors.primary" />
    <path d="M19 3.5C19 2.94771 19.4477 2.5 20 2.5C20.5523 2.5 21 2.94772 21 3.5V16C21 16.5523 20.5523 17 20 17C19.4477 17 19 16.5523 19 16V3.5Z" :fill="colors.primary" />
  </svg>
</template>

<script>
import { useColors } from 'vuestic-ui/src/composables'

export default {
  name: 'IconAdmin',
  computed: {
    colors () {
      return useColors().getColors()
    },
  },
}
</script>
