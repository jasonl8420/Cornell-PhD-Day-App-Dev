<script setup>
import EventCard from '@/components/EventCard.vue'
</script>
<template>
  <div>
    <h1 class="view-title">Event Schedule </h1>
  </div>

  <b-tabs content-class="mt-3" fill active-nav-item-class="font-weight-bold">
    <b-tab title="All" >
      <div class="events">
        <h2>Monday, March 13 </h2>
        <div v-for="(fixture, route) in fixtures.events">
            <EventCard v-if="fixture.date==='3/13/23'" :currFixture="fixture" :currRoute="route"> </EventCard>
        </div>
      </div>

      <div class="events">
        <h2>Tuesday, March 14 </h2>
        <div v-for="(fixture, route) in fixtures.events">
            <EventCard v-if="fixture.date==='3/14/23'" :currFixture="fixture" :currRoute="route"> </EventCard>
        </div>
      </div>
    </b-tab>


    <b-tab title="Recommended">
      <div v-for="(fixture, route) in fixtures.events">
        <EventCard v-if="fixture.recommended" button @click="$router.push(`/events/${route}`)" :currFixture="fixture">
        </EventCard>
      </div>
    </b-tab>
  </b-tabs>
</template>

<style scoped>
h2 {
    font-size: 28px;
    margin-top: 24px;
    font-weight: 400;
    font-variation-settings: 'wdth' 120;
}
.events{
  margin-bottom:36px;
}
.view-title {
  /* text-align: center; */
  margin-bottom: 40px;
  font-size: 36px;
  color: #cc323e;
}

#content-holder {
  padding-top: -50px;
  border-top: 0px;
}
</style>
