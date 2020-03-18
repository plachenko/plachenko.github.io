<template>
  <div id="app">
    <div id="header">
      <h1>Denis Perchenko</h1>
      <ul>
        <li><router-link to="/">Web</router-link></li>
        <li><router-link to="/3D">3D portfolio</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>
    <!-- <div style="height: 100px; margin: 10px; border: 2px solid; box-sizing: border-box; padding: 10px; text-align: center;">Latest Activity...</div> -->
    <div id="live_banner" v-show="playerShow">
      <span>Live</span>
    </div>
    <div id="twitchPlayer" v-show="playerShow" />
    <div style="min-height: 400px;">
      <!-- <transition appear @enter="enter" @leave="leave"> -->
        <router-view />
      <!-- </transition> -->
    </div>
    <div style="text-align:center; padding-top: 10px; border-top: 1px dashed; margin-top: 30px;">
      <ul id="bot">
        <li id="gh"><a href="https://www.github.com/plachenko" target="_blank"><div class="logo" /><span style="display: inline-block; padding-top: 2px;">Github</span></a></li>
        <li id="ln"><a href="https://www.linkedin.com/in/denis-perchenko-b4ba2a7/" target="_blank"><div class="logo" /><span style="display: inline-block; padding-top: 2px;">LinkedIn</span></a></li>
        <li id="tw"><a href="https://www.twitch.tv/plnrnd/" target="_blank"><div class="logo" /><span style="display: inline-block; padding-top: 2px;">Twitch</span></a></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import gsap from 'gsap';
import { Component, Vue } from 'vue-property-decorator';

declare const Twitch: any;

@Component({})
export default class App extends Vue {
  private playerShow = false;
  private contentShow = false;

  private enter(el: HTMLElement, done: any){
    gsap.from(el, .3, {opacity: 0, right: 100, onComplete: () => {
        done();
        this.contentShow = false;
      }
    })
  }

  private leave(el: HTMLElement, done: any){
    gsap.to(el, .3, {opacity: 0, left: 100, onComplete: () => {
        done();
        this.contentShow = true;
      }
    })
  }

  private mounted(){

    const player = new Twitch.Player("twitchPlayer", {channel: 'plnrnd'});
    player.addEventListener('offline', ()=>{
      this.playerShow = false;
    });
    player.addEventListener('online', ()=>{
      this.playerShow = true;
    });

  }
}
</script>

<style>
body{
  padding: 0px;
  margin: 0px;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-flow: column;
  }
  #header{
    flex:1;
    display: flex;
    text-align: center;
    flex-flow: column;
    align-items: center;
    border-bottom: 1px dashed;
    }
    #header h1{
      border-bottom: 2px solid;
      padding: 20px 0px;
      margin: 0px;
      width: 290px;
    }
  #repo_container{
    display: flex;
    flex: 1;
    flex-flow: row;
    flex-wrap: wrap;
    }
    .repo{
      height: 150px;
      margin: 10px;
      flex:1 30%;
      border-radius: 5px;
      display: flex;
      flex-flow: column;
      border: 3px solid;
      color: #AAA;
      }
      .repo_head{
        float: left;
        height: 50px;
        border-bottom:1px dashed;
        color: #CCC;
        text-align: center;
        }
      .repo .desc{
        padding: 20px;
        text-align: center;
        align-self: center;
        justify-self: center;
        box-sizing: border-box;
        color: #000;
        }
      .repo a{
        color: #000;
        text-decoration: none;
        font-size: 1.5em;
        height: 100%;
        display: block;
        flex: 1;
        box-sizing: border-box;
        padding: 10px 0px;
        }
      .repo a:hover{
        color:#FFF;
        background-color:#666;
        }
    #live_banner{
      background-color:#F00;
      padding: 10px 0px;
      color:#FFF;
      text-align: center;
      font-weight: bold;
    }
    #twitchPlayer{
      align-self: center;
      padding: 10px 0px;
      }

  ul li .router-link-exact-active{
    box-sizing: border-box;
    border-bottom:2px solid;
  }
  #bot li{
    margin: 0px;
  }
  ul {
    padding: 0px;
  }

  ul li{
    margin: 0px 5px;
    padding: 10px;
    display: inline-block;
    border-radius: 10px;
    }
    ul a{
      color: #444;
      font-weight: bold;
      text-decoration: none;
      display: block;
      float:left;
      height: 20px;
      text-orientation: sideways;
      }
    ul .logo{
      width: 20px;
      height: 20px;
      float:left;
      margin-right: 10px;
      border-right: #fff 1px solid;
      padding-right: 10px;
      background-repeat: no-repeat !important;
      }
      #gh a{
        /* box-sizing:border-box; */
        background-color:#000;
        color:#FFF;
        padding: 10px;
        border-radius: 10px;
      }
      #tw a{
        /* box-sizing:border-box; */
        color:#FFF;
        border-radius: 10px;
        padding: 10px;
        background-color:#6441a5;
      }
      #ln a{
        /* box-sizing:border-box; */
        color:#FFF;
        border-radius: 10px;
        padding: 10px;
        background-color:#2867B2;
      }
      #gh .logo{
        background-size: contain;
        background-image: url('~@/assets/GitHub-Mark-Light-32px.png');
      }
      #ln .logo{
        background: url('~@/assets/linkedin-3-xxl.png');
        background-size: contain;
        }
      #tw .logo{
        background: url('~@/assets/TwitchGlitchWhite.png');
        background-size: contain;
        }
</style>
