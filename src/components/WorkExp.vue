<template>
  <section class="section work-experience">
    <div class="work-exp-obj-1"><img src="/src/assets/background-dots.svg" alt=""></div>
    <div class="work-exp-obj-2"></div>
    <div class="work-experience-list">
      <div class="collapse-group" :class="{'collapseShow': activeExps[0]}">
        <a href="#" @click.prevent="expandCollapse(0)"><span class="ico-plus"></span><span class="title">Taiwan</span></a>
        <div class="collapse-content">
          <ol>
            <li>2020 / 國際電子產品設計品牌「Moshi」- 網頁UI設計師</li>
            <li>2013 / 台灣媒體集團「年代」與日本合資角色授權公司「DLE-ERA」- 視覺美術設計師</li>
            <li>​​2012 / 華研音樂集團「ORENDA」服裝品牌 - 視覺設計師</li>
            <li>​​2008 / 復興商工廣告設計科 - 圖文傳播組 畢業</li>
          </ol>
        </div>
      </div>
      <div class="collapse-group" :class="{'collapseShow': activeExps[1]}">
        <a href="#" @click.prevent="expandCollapse(1)"><span class="ico-plus"></span><span class="title">Japan</span></a>
        <div class="collapse-content">
          <ol>
            <li>2019 / ケセラセラ株式会社 - 網頁設計師</li>
            <li>2019 / 名古屋經營會計專科學校 - 日本商業系 畢業</li>
            <li>2016 / トリプルEジャパン株式会社 - 平面 / 網頁設計師</li>
            <li>2015 / YAMASA言語文化學院 - AIJP 綜合日語課程 畢業</li>
          </ol>
        </div>
      </div>
      <div class="collapse-group">
        <a href="#" target="_blank"><span class="ico-plus"></span><span class="title">License</span></a>
      </div>
      <div class="collapse-group">
        <a href="#" target="_blank"><span class="ico-plus"></span><span class="title">News</span></a>
      </div>
    </div>
  </section>
</template>

<style lang="sass">
  .collapse-group .collapse-content
    overflow: hidden
    height: 0
    transition: all .5s ease

  .collapse-group.collapseShow .collapse-content
    height: 200px

</style>
<script>
export default {
  data(){
    return {
      activeExps: [false,false],
    }
  },
  methods: {
    expandCollapse(x){
      this.activeExps[x] = !this.activeExps[x];
    }
  },
}
</script>>