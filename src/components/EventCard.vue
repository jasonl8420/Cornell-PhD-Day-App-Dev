<script setup>
defineProps({
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
<template>
    <b-button class="card" variant="outline-secondary" style="width: 100%; text-align:left; margin-bottom:12px; margin-top:0px;" :to="`/events/${currRoute}`">
        <!-- reference: https://bootstrap-vue.org/docs/components/card-->
        <div class="time">
            <h4>{{ currFixture.start_time }} &#150; {{ currFixture.end_time }} </h4>
            <b-img :src="`${baseDir}images/${currFixture.weather_img}`" width="40%" height="40%" class="p-1"></b-img>
        </div>
        <div>
            <h1> {{ currFixture.name }}</h1>
        </div>

        <div class="loc">
            <h3>{{ currFixture.location }}</h3>
        </div>
        <div class="badges_n_attendees">
            <!-- <div class="badges-flex">
                <b-badge class="m-1" v-for="tag in currFixture.tags">{{ tag }}</b-badge>
            </div> -->
            <b-row class="pills" id="event-tags">
                <span class="event-tag pill" v-for="tag in currFixture.tags">{{ tag }}</span>
            </b-row>

            <div class="attendees-flex">
                <div class="attendee">
                    <b-img :src="`${baseDir}images/student.svg`" width="40%" height="40%" class="p-1"></b-img>
                    {{ currFixture.stu_num }}
                </div>
                <div class="attendee">
                    <b-img :src="`${baseDir}images/faculty.svg`" width="40%" height="40%" class="p-1"></b-img>
                    {{ currFixture.facul_num }}
                </div>
            </div>
        </div>
    </b-button>
</template>

<style scoped>

.card:hover {
    color: white;
    background: rgb(184, 184, 184);
    cursor: pointer;
}
.card:active{
    color: white;
    background: rgb(184, 184, 184);
}

.badges_n_attendees {
    display: flex;
    justify-content: space-between;
}


.pills {
    display: flex;
    flex: 1 1 0;
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
    font-size: 14px;
    font-weight: 500;
}

.event-tag {
    background-color: #e1f1f2;
    color: #00a0b0;
}

.attendees-flex {
    display: flex;
    flex-wrap: wrap;
    align-items: right;
}

.attendee {
    display: flex;
    align-items: center;
    padding-right: 12px;
    color: black;
}


.tag {
    border-style: solid;
    border-color: black;
    text-align: left;
    width: fit-content;
    margin: auto;
}

h4 {
    font-size: 18px;
    color: black;
}

.time {
    display: flex;
    align-items: center;
    color: #6C757D
}

h3 {
    font-weight: 400;
    font-size: 24px;
    color: black;
}

/* h1 {
    font-size: 24px;
    margin-top: 10px;
} */

h1 {
    margin-top: 10px;
    font-weight: 800;
    font-variation-settings: 'wdth' 120;
    font-size: 24px;
}
</style>
