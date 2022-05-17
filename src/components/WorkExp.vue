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
            <li>2019 / Queserser 株式会社 - 網頁設計師</li>
            <li>2019 / 名古屋經營會計專科學校 - 日本商業系 畢業</li>
            <li>2016 / TRiPLE-E 株式会社 - 平面 / 網頁設計師</li>
            <li>2015 / YAMASA言語文化學院 - AIJP 綜合日語課程 畢業</li>
          </ol>
        </div>
      </div>
      <div class="collapse-group" :class="{'collapseShow': activeExps[2]}">
        <a href="#" @click.prevent="expandCollapse(2)"><span class="ico-plus"></span><span class="title">License</span></a>
        <div class="collapse-content">
          <ol>
            <li>2018 / 日本語能力試驗N1</li>
            <li>2018 / 日本商業簿記檢定3級</li>
            <li>2018 / 日本文書設計技能檢定1級</li>
            <li>2017 / 日本情報處理技能檢定2級</li>
          </ol>
        </div>
      </div>
      <div class="collapse-group" :class="{'collapseShow': activeExps[3]}">
        <a href="#" @click.prevent="expandCollapse(3)"><span class="ico-plus"></span><span class="title">News</span></a>
        <div class="collapse-content mx-h-400">
          <ol><li>22016 /「 YAMASA言語文化學院川柳俳句比賽」金獎</li><li>2016 /「日本愛知縣岡崎CANDLE NIGHT」插畫作品展出</li><li>2015 /「2015亞洲插畫祭」插畫類作品於華山展出</li><li>​2015 /「香港國際授權展2015」原創角色作品香港灣仔展出</li><li>​​2014 /「VIVI 雜誌 / 時尚國際中文版」來自世界的酷女孩專訪</li><li>2013 /「微型素人攝影展」展出攝影作品​</li><li>2012 /「99+高雄美麗島時尚來自自我」百大設計師聯​​展​​</li><li>2008 /​「自由時報」週六特別企劃專欄底片相機新視界登刊</li><li>2007 /​「交通大學第四屆宏碁數位創作比賽」佳作</li><li>2007 /​「全國學生創藝作品線上競賽」優勝</li><li>2007 /​「酷卡城市攝影展」信義誠品展出</li><li>2005 /​「馬來西亞世界青少年發明展」甲等獎​​​​</li><li>2003 /「台北市政府教育局畫廊」展覽​​</li></ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      activeExps: [false,false,false,false],
    }
  },
  methods: {
    expandCollapse(x){
      this.activeExps[x] = !this.activeExps[x];
      this.activeExps.forEach((item,y) => {
        if(x !== y){
          this.activeExps[y] = false;
        }
    })
    }
  },
}
</script>>