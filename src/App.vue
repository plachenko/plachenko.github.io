<template>
  <div id="app">
    <div id="header">
      <h1>Denis Perchenko</h1>
      <ul>
        <li><router-link to="/">Web Work</router-link></li>
        <li><router-link to="/about">3D</router-link></li>
        <li><a href="https://www.linkedin.com/in/denis-perchenko-b4ba2a7/" target="_blank">LinkedIn</a></li>
        <li><a href="https://www.github.com/plachenko" target="_blank">Github</a></li>
        <li><a href="https://www.linkedin.com/in/denis-perchenko-b4ba2a7/" target="_blank">LinkedIn</a></li>
      </ul>
    </div>
    <!-- <div style="height: 100px; margin: 10px; border: 2px solid; box-sizing: border-box; padding: 10px; text-align: center;">Latest Activity...</div> -->
    <div id="live_banner" v-show="playerShow">
      <span>Live</span>
    </div>
    <div id="twitchPlayer" v-show="playerShow" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const Twitch: any;

@Component({})
export default class App extends Vue {
  private playerShow = false;

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
    text-align: center;
    border-bottom: 2px dashed;
  }
  #repo_container{
    display: flex;
    flex: 1;
    flex-flow: row;
    flex-wrap: wrap;
    }
    .repo{
      height: 250px;
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

  ul li{
    margin: 0px 5px;
    display: inline;
  }
</style>
