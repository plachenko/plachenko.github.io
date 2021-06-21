
<template>
  <div>
    <h2 class="innerTitle">This page does not exist in this reality.</h2>
    <h2 class="innerTitle" style="padding-top: 10px;">
      <a href="https://github.com/plachenko/plachenko.github.io/issues" target="_blank">Should it?</a>
    </h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'PageNotFound'
})
export default class PageNotFound extends Vue {
}
</script>
