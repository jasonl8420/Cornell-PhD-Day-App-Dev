<script setup>
import Attractions from '@/components/Attractions.vue'
</script>
<template>
  <h1 class="view-title"> Faculty Favorites </h1>
  <div class="tips" v-for="(fixture) in  fixtures.local_tips">
    <b-card style="padding: 10px;">
      <b-row align-h="center">
        <b-row style="padding: 0px;">
            <!-- <b-img :src="`${baseDir}./images/${fixture.img[0]}`" ></b-img> -->

          <b-carousel  :interval="4000" controls indicators style="padding: 0px;">
            <b-carousel-slide :img-src="`${baseDir}images/${fixture.img[0]}`"
              class="img-fluid, padding-0" img-width="60%" img-height="auto"></b-carousel-slide>
            <b-carousel-slide :img-src="`${baseDir}images/${fixture.img[1]}`"
              class="img-fluid, padding-0" img-width="60%" img-height="auto"></b-carousel-slide>
            <b-carousel-slide :img-src="`${baseDir}images/${fixture.img[2]}`"
              class="img-fluid, padding-0" img-width="60%" img-height="auto"></b-carousel-slide>
            <b-carousel-slide :img-src="`${baseDir}images/${fixture.img[3]}`"
              class="img-fluid, padding-0" img-width="60%" img-height="auto"></b-carousel-slide>
          </b-carousel>


        </b-row>
        <b-col>
          <b-card-body style="padding: 30px 0px 0px 0px">
            <b-card-text>
              <h3>{{ fixture.name }}</h3>
              {{ fixture.info }} <br /><br />
              <b-badge class="tagss ml" v-for="tag in fixture.tags">{{ tag }}</b-badge>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<style>
.view-title {
  /* text-align: center; */
  margin-bottom: 40px;
  font-size: 36px;
  color: #cc323e;
  font-variation-settings: 'wdth' 120;
}

h1 {
  color: rgb(0, 0, 0);
  margin-right: 2%;
}

div {
  border-radius: 2%;
}

h3 {
  font-variation-settings: 'wdth' 120;
}

p {
  font-size: 17px;
  width: 100%;
  font-variation-settings: 'wdth' 120;
}

.card {
  padding-bottom: 3%;
  max-width: 100%;
  margin-top: 6%;
}

.card-body {
  margin: 0;
  padding: 0;
}

img {
  border-radius: 1%;
  box-shadow: none;
}

.tagss {
  font-size: 18px;
  font-weight: 500;
  margin-right: 8px;
  margin-bottom: 8px;
}

.carousel-inner {
    border-radius: 25px;
    background-color: rgba(0,0,0,0);
    overflow: hidden;
}
</style>


  <!-- style= {{ window.innerWidth > 500 ? "100" : "50"  }} -->
