<template>
  <div id="logContent" style="width: 100%;">

    <div v-if="logIdx" class="postContent" style="flex: 1; display: flex; justify-content: center;">
      <div v-if="log" class="logPost">
        <h2 style="text-align: center;">{{ log.title }}</h2>
        <div class="postDate" v-if="log.date">
          <span>{{ log.date[2] }} / {{ log.date[1] }} / {{ log.date[0] }}</span>
        </div>
        <div v-if="canRender">
          <div v-html="log.body" />
        </div>
      </div>
    </div>

    <div v-else style="width: 100%;">
      <div class="logEntry" v-for="(log, key) in logs" :key="key" @click="setLogURL(key + 1)" >
        <span class="title">
          {{ log.title }}
        </span>
        <span class="date">
          {{ log.date[2] }} / {{ log.date[1] }} / {{ log.date[0] }}
        </span>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import MarkdownIt from 'markdown-it';

@Component({})
export default class LogList extends Vue {
  private logs: any = [];
  private gists: any = [];
  private logIdx = 0;
  private log: any = {};
  private canRender = false;

  @Watch('$route')
  onRouteChange(to: any, from: any){
    const idx = to.query.post;

    if(idx){
      this.goToLog(idx);
    }else{
      this.logIdx = 0;
    }
  }

  // When the page is mounted...
  mounted(){

    const lsLogs = window.localStorage.getItem('logs');
    const urlParams = new URLSearchParams(window.location.search);
    const idx = urlParams.get('post');

    if(lsLogs){
      // A) Check if there are logs set in local storage.
      const lsItem = window.localStorage.getItem('lastDate');
      const last = JSON.parse(lsItem as string);
      const lastDate = new Date(last).getTime();
      const now = Date.now();
      const dateDiff = Math.floor(((((now - lastDate) / 1000) / 60) / 60) / 24);

      // Check if the last time the client fetched the API was over a day ago.
      if(dateDiff){
        // If so fetch a fresh list of gists.
        this.getGists();
      }else{
        // Else use the browser cache.
        this.logs = JSON.parse(lsLogs);
      }
    }else{
      // B) Otherwise fetch the Gists
      this.getGists();
    }

    this.logIdx = parseInt(idx as string);

    setTimeout(()=>{
      if(this.logs[this.logIdx-1]){
        this.goToLog(idx);
      }
    }, 1000);
  }

  getGists(){
    fetch('https://api.github.com/users/plachenko/gists').then(response => response.json()).then( data => this.setLogs(data))
  }

  getPost(url: string){
    fetch(url).then(response => response.json()).then( data => {
      const content = data.files[Object.keys(data.files)[0]].content;
      this.logs[this.logIdx-1].body = MarkdownIt({html: true}).render(content);
      this.saveLogs(this.logs);
      this.canRender = true;
    })
  }

  goToLog(idx: any){
    if(idx){
      this.log = this.logs[idx-1];

      if(!this.log.body.length){
        this.getPost(this.log.url);
      }else{
        this.canRender = true;
      }
    }
  }

  setLogURL(idx = 0){
    this.$router.push(`/log?post=${idx}`);
    this.goToLog(idx);
    this.logIdx = idx;
  }

  // Save logs and current date to local storage.
  saveLogs(logs: any){
    const date = new Date();
    window.localStorage.setItem('logs', JSON.stringify(logs));
    window.localStorage.setItem('lastDate', JSON.stringify(date));
  }

  // Set the local logs from a gist fetch.
  setLogs(gists: any[] = []){

    const logs: any = []

    // filter gists to look for logs specifically.
    const logFilter = gists.filter((log: any) => {
      return log.description.includes('LOG:');
    });

    this.gists = logFilter;


    logFilter.forEach((el: any, idx: number) => {
      const log = {
        title: '',
        date: '',
        url: '',
        body: ''
      };
      const date = el.created_at.slice(0,10).split('-');
      log.title = el.description.substr(5);
      log.date = date;
      log.url = el.url

      logs[(logFilter.length - 1) - idx] = log;
    });

    this.saveLogs(logs);
    this.logs = logs;

  }
}

</script>
<style scoped>
.logEntry{
  padding: 20px 30px;
  float:left;
  width: 100%;
  border-bottom: #DDD 1px solid;
  position: relative;
  user-select: none;
  box-sizing: border-box;
  }
    .logEntry:hover{
      background-color: #DDD;
      cursor: pointer;
      }
      .logEntry:hover .title{
        color: #A00;
        text-decoration: underline;
        }

  .title{
    /* float: left; */
    place-self: center;
  }
  .date{
    float: right;
    color: #AAA;
    }

    .logPost{
      max-width: 70ch;
      padding: 1.2rem;
      }

      .postDate{
        color: #AAA;
        text-align: center;
      }

#logContent{
  display: flex;
}
.postContent{
  flex: 1;
  place-content: center;
}

.postContent, p{
  font-size: .85rem;
  line-height: 1.3rem;
}
</style>
