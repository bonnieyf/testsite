<script>
  export default {
  props: ['title','msg'],
  setup(props) {
    const title = props.title;
    const msg = props.msg;
  }
}
</script>

<template>
  <section class="section top-banner">
      <div class="top-banner-obj-1"><img src="/src/assets/background-plus.svg" alt=""></div>
      <div class="top-banner-obj-2"><img src="/src/assets/background-plus.svg" alt=""></div>
      <div class="section-main top-banner-main">
        <h2>{{ title }}</h2>
        <p>{{ msg }}</p>
      </div>
    </section>
</template>


