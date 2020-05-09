<template>
  <div class="work">
    <div id="repo_container">
      <div v-for="(repo, k) in activeRepos" :key="k" class="repo">
        <div class="repo_head">
          <a :href="`${base_url}${repo.name}/`" target="_blank"> {{repo.name}}</a>
        </div>
        <div class="desc">{{repo.description}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
  name: 'Home'
})
export default class Work extends Vue {
  private repos = [];
  private base_url = "https://plachenko.github.io/";
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
    fetch('https://api.github.com/users/plachenko/repos')
      .then((res) => {
        return res.json();
      })
      .then((data: any) => {
        this.repos = data;
      });
  }

}
</script>

<style>
.work{
  padding-top: 30px;
}

</style>
