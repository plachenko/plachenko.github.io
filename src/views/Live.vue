
<template>
  <div class="live">
    <div id="twitchPlayer" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

declare const Twitch: any;

@Component({
  name: 'Live'
})
export default class Live extends Vue {
  mounted(){
    const player = new Twitch.Player("twitchPlayer", {channel: 'plnrnd'});
    /*
    player.addEventListener('offline', ()=>{
      this.playerShow = false;
    });
    player.addEventListener('online', ()=>{
      this.playerShow = true;
    });
    */
  }
}
</script>
