<script setup>
import IBiArrowLeft from '~icons/bi/arrow-left'
import IBiLinkedIn from '~icons/bi/linkedin' //not working
import IBiLink from '~icons/bi/link'
import IBiInstagram from '~icons/bi/instagram'
import IBiEnvelope from '~icons/bi/envelope'
import IBiTelephoneFill from '~icons/bi/telephone-fill' //not working
</script>

<template>
    <!-- route: {{  fixtures[ $route.params.person].link }} -->
    <!-- <b-button variant="outline" @click="$router.back()" style="padding: 0px"><i-bi-arrow-left /> Back </b-button> -->
    <b-container class="top">
        <!-- If STUDENT -->
        <b-row cols="1" v-if="$route.params.person in fixtures.students">
            <b-row align-v="center" id="profile-header">
                <b-col cols="4" id="avatar">
                    <b-avatar class="mr-3" :src="`${baseDir}images/${fixtures.students[$route.params.person].img}`"
                        size="90px"></b-avatar>
                </b-col>
                <b-col id="name-block">
                    <h1 id="name">{{ fixtures.students[$route.params.person].name
                    }}</h1>
                    <h2 id="subtitle">{{ fixtures.students[$route.params.person].subtitle
                    }}</h2>
                </b-col>
            </b-row>
            <b-row class="content-row">
                <h4>Contact Info</h4>
                <b-row class="pills" id="contact-buttons">
                    <!-- Phone Number -->
                    <span class="pill" id="phone">
                        <span class="icon">
                            <i-bi-telephone-fill />
                        </span>
                        {{ fixtures.students[$route.params.person].phone_number }}
                    </span>
                    <!-- LinkedIn -->
                    <span class="pill" id="linkedin">
                        <span class="icon">
                            <i-bi-linked-in />
                        </span>
                        {{ fixtures.students[$route.params.person].linkedin }}
                    </span>
                    <!-- Instagram -->
                    <span class="pill" id="instagram">
                        <span class="icon">
                            <i-bi-instagram />
                        </span>
                        {{ fixtures.students[$route.params.person].instagram }}
                    </span>
                    <!-- Email -->
                    <span class="pill" id="email">
                        <span class="icon">
                            <i-bi-envelope />
                        </span>
                        {{ fixtures.students[$route.params.person].email }}
                    </span>
                    <!-- Website -->
                    <span class="pill" id="website">
                        <span class="icon">
                            <i-bi-link />
                        </span>
                        <a :href="fixtures.students[$route.params.person].website">{{ fixtures.students[
                            $route.params.person].website }}</a>
                    </span>
                </b-row>
            </b-row>
            <b-row class="content-row">
                <h4>Your Research Interests</h4>
                <b-row class="pills" id="research_interests">
                    <span class="research-interest pill"
                        v-for="interest in  fixtures.students[$route.params.person].research_interests">{{ interest
                        }}</span>
                </b-row>
            </b-row>
            <b-row class="content-row">
                <h4>About</h4>
                <p>{{ fixtures.students[$route.params.person].about }}</p>
            </b-row>
            <b-row class="content-row">
                <h4>Other Events Attending</h4>
                <b-row class="pills" id="events">
                    <span class="research-interest pill"
                        v-for="event in  fixtures.students[$route.params.person].events">{{ event }}</span>
                </b-row>
            </b-row>
        </b-row>
        <!-- if FACULTY -->
        <b-row v-else>
            <b-row align-v="center" id="profile-header">
                <b-col cols="4" id="avatar">
                    <b-avatar class="mr-3" :src="`${baseDir}images/${fixtures.faculty[$route.params.person].img}`"
                        size="90px"></b-avatar>
                </b-col>
                <b-col id="name-block">
                    <h1 id="name">{{ fixtures.faculty[$route.params.person].name }}</h1>
                    <h3 id="subtitle">{{ fixtures.faculty[$route.params.person].subtitle }}</h3>
                </b-col>
            </b-row>
            <b-row class="content-row">
                <h4>Contact Info</h4>
                <b-row class="pills" id="contact-buttons">
                    <!-- Website -->
                    <span class="pill" id="website">
                        <span class="icon">
                            <i-bi-link />
                        </span>
                        <a :href="fixtures.faculty[$route.params.person].website">{{ fixtures.faculty[
                            $route.params.person].website }}</a>
                    </span>
                    <!-- Email -->
                    <span class="pill" id="email">
                        <span class="icon">
                            <i-bi-envelope />
                        </span>
                        {{ fixtures.faculty[$route.params.person].email }}
                    </span>
                </b-row>
            </b-row>
            <b-row class="content-row">
                <h4>Research Areas</h4>
                <b-row class="pills" id="research_interests">
                    <span class="research-interest pill"
                        v-for="area in  fixtures.faculty[$route.params.person].research_areas">{{ area }}</span>
                </b-row>
            </b-row>
            <b-row class="content-row">
                <h4>About</h4>
                <p>{{ fixtures.faculty[$route.params.person].about }}</p>
            </b-row>
            <b-row class="content-row">
                <h4>Other Events Attending</h4>
                <b-row class="pills" id="events">
                    <span class="research-interest pill" v-for="event in  fixtures.faculty[$route.params.person].events">{{
                        event }}</span>
                </b-row>
            </b-row>
        </b-row>
        <!-- <b-button v-for="(route) in  fixtures" :to="`/people/${route}`">
            Edit Profile
        </b-button> -->

        <!-- <b-button v-if=" fixtures.students[ $route.params.person].ismain == true"
            :to="`/people/` +  fixtures[ $route.params.person].link + `/edit`">
            Edit Profile
        </b-button> -->


        <!-- <b-button :to="`/edit`">Edit</b-button> -->
        <!-- <b-button @click="$router.go(-1)">
            Home
        </b-button> -->
    </b-container>
</template>

<style scoped>
#top {
    margin-top: 20px;
}

h1 {
    margin-top: 20px;
    font-weight: 800;
    font-variation-settings: 'wdth' 120;
}

#subtitle {
    color: gray;
    font-weight: 400;
    margin-bottom: 0px;
}

#avatar {
    padding-right: 0px;
}

.icon {
    margin-right: 7px;
}

#name-block {
    padding-left: 0px;
}

#profile-header {
    margin-bottom: 30px;
    margin-top: 20px;
}

#name {
    margin-bottom: 0px;
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

#linkedin {
    background-color: #cde8fa;
    color: #3b7296;
}

#phone {
    background-color: #dbdbdb;
    color: #696969;
}

#instagram {
    background-color: #facdeb;
    color: #ad3184;
}

#email {
    background-color: #f5b8c0;
    color: #a3182b;
}

#website {
    background-color: #e2f2df;
    color: #5e7d59;
}

.content-row {
    margin-bottom: 20px;
    padding: 0px;
}

.research-interest {
    background-color: #e3e1e1;
}

a {
    color: #5e7d59;
}
</style>
