<script setup>
import IBiCheckLg from '~icons/bi/check-lg'
import IBiArrowLeft from '~icons/bi/arrow-left'
import ProfileLists from '@/components/profileLists.vue'
</script>

<template>
    <b-button variant="outline" :to="`/`" style="padding: 0px"><i-bi-arrow-left /> Back </b-button>
    <!-- <b-button variant="link" class="text-decoration-none p-0" :to="`/`">&lt; Back</b-button> -->
    <div class="flex">
        <h1>{{ fixtures.events[$route.params.event_key].name }}</h1>
        <!-- <b-button size="lg" pill style="position:absolute; right:5%; top: 70px; font-family:unset; padding:12px 15px; background-color: #11734f;" v-model:pressed="toggle" ><i-bi-check-lg /></b-button> -->
        <b-button size="lg" pill style="font-family:unset; padding:12px 15px; background-color: #11734f;"
            v-model:pressed="toggle"><i-bi-check-lg /></b-button>
    </div>
    <h2 id="time-heading">{{ fixtures.events[$route.params.event_key].start_time }} &#150; {{ fixtures.events[
        $route.params.event_key].end_time }}</h2>
    <div class="loc">
        <h2>{{ fixtures.events[$route.params.event_key].location }}</h2>
        <b-img :src="`${baseDir}images/${fixtures.events[$route.params.event_key].weather_img}`" width="40%" height="40%"
            class="p-1"></b-img>
    </div>
    <!-- <div class="badges">
        <b-badge class="m-1" v-for="tag in  fixtures.events[ $route.params.event_key].tags">{{ tag }}</b-badge>
    </div> -->
    <b-row class="pills" id="event-tags">
        <span class="event-tag pill" v-for="tag in  fixtures.events[$route.params.event_key].tags">{{ tag }}</span>
    </b-row>
    <hr />
    <div id="details">
        <h4>Details</h4>
        <p>{{ fixtures.events[$route.params.event_key].description }}</p>
    </div>
    <div id="attendees">
        <h4 id="tentative-attendees">Tentative Attendees</h4>
        <ProfileLists :events="true" :event_name="fixtures.events[$route.params.event_key].name" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            toggle: false,
        }
    }
}
// :pressed="{toggle: isToggle}"
</script>

<style>
h2#time-heading {
    color: gray;
    font-weight: 400;
}

.loc h2 {
    display: inline-block;
    font-weight: 400;
    /* margin-bottom: 0; */
}

.badges {
    display: block;
}

.loc {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.round {
    border-radius: 35px;
}

h1 {
    margin-top: 20px;
    font-weight: 800;
    font-variation-settings: 'wdth' 120;
}

#details,
#attendees {
    margin-top: 40px;

}

h4 {
    font-weight: 600;
    color: #cc323e;
    font-variation-settings: 'wdth' 110;
}

.pills {
    display: inline-flex;
    flex-direction: horizontal;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0px 0px;
}

.pill {
    margin-right: 5px;
    width: fit-content;
    padding: 5px 12px 5px 12px;
    margin-bottom: 5px;
    border-radius: 10px;
}

.event-tag {
    background-color: #e1f1f2;
    color: #00a0b0;
}

button {
    background-color: #11734f;
    padding: 16px;
}

#check {
    border-radius: 100;
    background-color: #11734f;
    padding: 24px;
}

#check svg {
    color: white;
}

#tentative-attendees {
    padding-bottom: 10px;
}

.flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
</style>
