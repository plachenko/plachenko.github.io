<template>
  <div>
    <!--
    <form>
      <input type="file" id="myFile" name="filename">
      <input type="submit">
    </form>
    -->
    <!--
    <div>
      <span>Drop File</span>
    </div>
    -->
    <div class="ee-Ji-If ee-Df-If"><div class="ee-Ji-hc ee-Df-ie" style="height: 20px;"><div id="picker:ht" class="ee-Df-tc" role="heading" aria-level="1">Select profile photo</div><div class="ee-Df-db"><div role="button" class="a-b-c d-u d-u-R" tabindex="0" data-tooltip="Close" aria-label="Close" style="user-select: none;"><div class="ee-kk-db-Ii"></div></div></div></div><div class="ee-Ji-eb ee-Df-eb" style="top: 54px;"><div class="ee-Ji-If ee-Hi-Zb-If"><div class="ee-Ji-hc ee-Hi-Zb-ie" style="height: 50px;"><div class="ee-Hi-Zb-Ii-Yb-mh" id=":3"><div class="a-Ii-Yb a-Ii-Yb-Zb a-Ii-Yb-hc" role="tablist" tabindex="0" style="user-select: none;"><div class="a-Ii a-Ii-w" role="tab" aria-selected="true" id=":5" style="user-select: none;"><div class="ee-Hi-Zb-Tj" style="user-select: none;">Upload photos</div></div><div class="a-Ii" role="tab" aria-selected="false" id=":6" style="user-select: none;"><div class="ee-Hi-Zb-Tj" style="user-select: none;">Your photos</div></div><div class="a-b-c a-kb-u" role="tab" aria-hidden="true" aria-expanded="false" aria-haspopup="true" id=":7" style="user-select: none; display: none;"><div class="a-b-c a-kb-u-pb-qb" style="user-select: none;"><div class="a-b-c a-kb-u-rb-qb" style="user-select: none;"><div class="a-b-c a-kb-u-mb" style="user-select: none;"><div style="user-select: none;">More<div class="ee-wj-n-Vj-Wj-me" style="user-select: none;"></div></div></div><div class="a-b-c a-kb-u-nb" style="user-select: none;">&nbsp;</div></div></div></div></div></div></div><div class="ee-Ji-eb ee-Hi-Zb-eb" style="top: 51px;"><div><div class="ee-Ji-If ee-Ki-If"><div class="ee-Ji-eb ee-Ki-eb" style="bottom: 70px;"><div class="ee-eb ee-eg ee-ko"><div class="ee-ko-hj"><div class="d-Lb d-Lb-Nb" aria-live="assertive" aria-atomic="true"></div></div><div class="ee-No ee-ah-Qd-Oo" aria-hidden="false" style="left: 0px; width: auto; height: auto;"><div class="ee-No-Rd ee-No-jp"><div class="ee-No-hp"><div class="ee-No-ip ee-No-mp" style="opacity: 1;"><div class="ee-wj-Fl-eg-Hk"></div><div class="ee-No-tc">Drag a profile photo here</div><div class="ee-No-kp"><div><div class="ee-No-lp">— or —</div><div id=":e.select-files-button"></div></div></div><div id=":e.select-files-button"><div role="button" class="a-b-c d-u d-u-Q" tabindex="0" style="user-select: none;">Select a photo from your computer</div></div></div></div></div><div class="ee-Fc-eg-td-u"><button style="display: none;"></button><input type="file" style="height: 0px; visibility: hidden; position: absolute;"></div></div><div class="ee-ko-Xb-mh" style="display: none;"><div class="ee-ko-Xb-tc">Uploading</div><div class="ee-ko-Xb"><div class="Xb-Yb-Zb ee-Xb-Yb" aria-valuemin="0" aria-valuemax="100" aria-atomic="true" aria-live="polite" aria-label="Progress Started" role="status"><div class="Xb-Yb-O" style="width: 0%;"></div></div></div></div></div></div><div class="ee-Ji-ic ee-Ki-ie ee-ko-Ki" style="height: 69px;"><div class="ee-Ki-Qi-ze"><div><div role="button" class="a-b-c d-u d-u-F d-u-D" id="picker:ap:0" guidedhelpid="ghid-psc" aria-disabled="true" style="user-select: none;">Set as profile photo</div><div role="button" class="a-b-c d-u d-u-Q" tabindex="0" id="picker:ap:1" style="user-select: none;">Cancel</div></div></div><div class="ee-Ki-eg-u-Qi-ze"><div role="button" class="a-b-c d-u d-u-Q ee-Ki-eg-u" tabindex="0" id="picker:ap:2" style="user-select: none; display: none; visibility: hidden;"><div class="ee-F-eg-u-x ee-wj-Nd-eg-f a-b-c"></div><span class="ee-F-eg-u-tc">Upload More</span></div></div><div class="ee-Ki-ej-Nb" role="status" aria-live="polite" style="display: none; margin-top: 35px;"></div><table class="ee-Ki-ej" style="max-width: 787px;"><tbody><tr><td class="ee-Ki-ej-fj">Your profile photo is visible to everyone, across Google products.
      <a href="https://support.google.com/accounts/answer/6304920" target="_blank">
      Learn more </a></td></tr></tbody></table></div></div></div></div></div></div></div>
  </div>
</template>
<style>
    background-clip: padding-box;
    border: solid transparent;
    width: 16px;
    border-width: 0 0 0 4px;
    -webkit-user-select: none;
    font-family: Roboto,Arial,sans-serif;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;

    color: #202124;

</style>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
  name: 'Upload'
})
export default class Upload extends Vue {

}
</script>
