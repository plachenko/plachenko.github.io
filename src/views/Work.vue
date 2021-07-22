<template>
  <div class="work">
    <div id="repo_container">
      <div v-for="(repo, k) in activeRepos" :key="k" class="repo">
        <div class="repo_head">
          <a :href="`${base_url}${repo.name}/`" target="_blank"> {{ convertSpace(repo.name) }}</a>
        </div>
        <div class="desc">{{repo.description}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Home'
})
export default class Work extends Vue {
  private repos = [];
  private base_url = 'http://plachenko.github.io/';
  private hidden = [
    "plachenko.github.io",
    "flipslide_old",
    "adenga"
  ];

  get activeRepos(){
    return this.reposWithPages.sort((a: any, b: any) => (new Date(b.updated_at) as any) - (new Date(a.updated_at) as any));
  }

  get reposWithPages(){
    return this.repos.filter((i: any) => i.has_pages && (!this.hidden.includes(i.name)));
  }

  mounted(){
    const lsWork = window.localStorage.getItem('work');
    if(lsWork){
      const dateDiff = this.parseDate();
      if(dateDiff){
        this.getWork();
      }else{
        this.repos = JSON.parse(lsWork);
      }
    } else {
      this.getWork();
    }
  }

  convertSpace(name: string){
    return name.replace(/[-_]/g, ' ');
  }

  getWork(){
    fetch('https://api.github.com/users/plachenko/repos')
      .then((res) => {
        return res.json();
      })
      .then((data: any) => {
        this.setWork(data);
        // this.repos = data;
      });
  }

  setWork(data: any){
    this.repos = data;
    this.save(data);
  }

  save(ghObjs: any){
    const date = new Date();
    window.localStorage.setItem('work', JSON.stringify(ghObjs));
    window.localStorage.setItem('lastWorkDate', JSON.stringify(date));
  }

  parseDate(){
    const lsItem = window.localStorage.getItem('lastWorkDate');
    const last = JSON.parse(lsItem as string);
    const lastDate = new Date(last).getTime();
    const now = Date.now();
    const dateDiff = Math.floor(((((now - lastDate) / 1000) / 60) / 60) / 24);

    return dateDiff;
  }

}
</script>

<style>
.work{
  padding-top: 30px;
}

</style>
