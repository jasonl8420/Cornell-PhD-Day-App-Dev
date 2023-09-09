<script setup>
import ProfileThumbnail from '@/components/profileThumbnail.vue'
defineProps({
    events: {
        type: Boolean,
        required: false,
    },
    event_name: {
        type: String,
        required: false
    }
})
</script>

<template>
    <b-tabs content-class="mt-3" fill active-nav-item-class="font-weight-bold text-danger" v-if="events">
        <b-tab title="Faculty" active>
            <b-list-group>
                <div v-for="(fixture, route) in  fixtures.faculty">
                    <div v-for="event in fixture.events">
                        <ProfileThumbnail v-if="event === event_name" :currFixture="fixture" :currRoute="route" />
                    </div>
                </div>
            </b-list-group>
        </b-tab>
        <b-tab title="Students">
            <b-list-group>
                <div v-for="(fixture, route) in  fixtures.students">
                    <div v-for="event in fixture.events">
                        <ProfileThumbnail v-if="event === event_name" :currFixture="fixture" :currRoute="route" />
                    </div>
                </div>
            </b-list-group>
        </b-tab>
    </b-tabs>
    <b-tabs content-class="mt-3" fill active-nav-item-class="font-weight-bold text-danger" v-else>
        <b-tab title="Faculty" active>
            <b-list-group>
                <ProfileThumbnail v-for="(fixture, route) in  fixtures.faculty" :currFixture="fixture" :currRoute="route" />
            </b-list-group>
        </b-tab>
        <b-tab title="Students">
            <b-list-group>
                <ProfileThumbnail v-for="(fixture, route) in  fixtures.students" :currFixture="fixture"
                    :currRoute="route" />
            </b-list-group>
        </b-tab>
    </b-tabs>
</template>

<style scoped>
.nav-link {
    color: gray;
}
</style>
