<template>
  <div id="app">
    <div id="header">
      <h1>Denis Perchenko</h1>
    </div>
    <!-- <div style="height: 100px; margin: 10px; border: 2px solid; box-sizing: border-box; padding: 10px; text-align: center;">Latest Activity...</div> -->
    <div id="twitchPlayer" v-show="playerShow" />
    <div id="repo_container">
      <div v-for="(repo, k) in activeRepos" :key="k" class="repo">
        <div class="repo_head">
          <a :href="`${base_url}${repo.name}`" target="_blank"> {{repo.name}}</a>
        </div>
        <div class="desc">{{repo.description}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

declare const Twitch: any;

@Component({})
export default class App extends Vue {
  private repos = [];
  private base_url = "https://plachenko.github.io/";
  private hidden = [
    "plachenko.github.io",
    "flipslide_old"
  ];

  private playerShow = false;

  get activeRepos(){
    return this.reposWithPages.sort((a: any, b: any) => (new Date(b.updated_at) as any) - (new Date(a.updated_at) as any));
  }

  get reposWithPages(){
    return this.repos.filter((i: any) => i.has_pages && (!this.hidden.includes(i.name)));
  }

  private mounted(){

    const player = new Twitch.Player("twitchPlayer", {channel: 'plnrnd'});
    player.addEventListener('offline', ()=>{
      this.playerShow = false;
    });
    player.addEventListener('online', ()=>{
      this.playerShow = true;
    });

    fetch('https://api.github.com/users/plachenko/repos')
      .then((res) => {
        return res.json();
      })
      .then((data: any) => {
        this.repos = data;
      })
  }
}
</script>

<style>
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
</style>
