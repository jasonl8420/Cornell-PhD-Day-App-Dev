<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: false
  },
  currFixture: {
    type: Object,
    required: true
  },
  currRoute: {
    type: String,
    required: true
  }
})
</script>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<template>

  <b-list-group-item id="profile-row"
    class="" style="border: none; width: 100%; padding-left: 8px;">
    <b-button style="background-color: transparent; border: none; width: 100%; text-align: left; padding: 0px;" :to="`/people/${currRoute}`">
      <div class="flex">
          <b-avatar class="mr-3" :src="`${baseDir}images/${currFixture.img}`" size='3rem'></b-avatar>
          <p class="mr-auto name">{{ currFixture.name }} <span class='subtitle'>&#x2022; {{ currFixture.subtitle
    }}</span></p>
    </div>
    </b-button>
  </b-list-group-item>
</template>

<style scoped>
.b-avatar {
  margin-right: 15px;


}

#profile-row {
  padding-bottom: 15px;
}

.subtitle {
  color: gray;
}

.name {
  font-weight: 700;
  font-variation-settings: 'wdth' 110;
  color: black;
  margin: 0;
}

.flex {
  display:flex;
  align-items: center;
}
</style>
