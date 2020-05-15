<template>
  <div class="register-wrap">
    <h1>register</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Register',
})
export default class extends Vue {}
</script>

<style scoped lang="scss">
.register-wrap {
  h1 {
    color: '#cccccc';
  }
}
</style>
