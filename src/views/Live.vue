
<template>
  <div class="live">
    <video ref="videoPlayer" controls="true" autoplay id="videoPlayer" />
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
    const ip = process.env.VUE_APP_IP;
    const port = process.env.VUE_APP_PORT;
    const url = `http://${ip}:${port}/live/workstream/index.mpd`;
    const player = dashjs.MediaPlayer().create();
    const el = document.querySelector('#videoPlayer') as HTMLElement;

    player.initialize(el, url);
  }
}
</script>

<style scoped>
.live{
  position: relative;
  display: flex;
  padding-top: 30px;
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
