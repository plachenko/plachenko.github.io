
<template>
  <div class="live">
    <video ref="videoPlayer" controls="true" autoplay="" id="videoPlayer" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import dashjs from 'dashjs';


@Component({
  name: 'Live'
})
export default class Live extends Vue {
  mounted(){
    const url = "http://localhost:8085/live/stream/index.mpd";
    const player = dashjs.MediaPlayer().create();

    player.initialize(document.querySelector('#videoPlayer') as HTMLElement, url);
  }
}
</script>

<style scoped>
.live{
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  place-content: center;
}

#videoPlayer{
  width: 100%;
  max-width: 800px;
  flex:1;
}

</style>
