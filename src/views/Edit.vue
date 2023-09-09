<template>
    full name: {{ this.fixtures[this.$route.params.person].name }}

    <!-- Name: {{ this.fixtures[this.$route.params.person].name
    }} -->

    {{ entry = '' }}

    <b-form-input v-model="name" placeholder="Name" />


    <b-form-input v-model="phone" placeholder="Phone" />


    <b-form-input v-model="linkedin" placeholder="LinkedIn" />

    <b-form-input v-model="instagram" placeholder="Instagram" />


    <b-form-input v-model="research" placeholder="Research Interests" />


    <b-form-input v-model="faculty" placeholder="Faculty Interests" />


    <b-button
        v-on:click="entername(name), enterinstagram(instagram), enterphone(phone), enterlinkedin(linkedin), enterresearch(research), enterfaculty(faculty), $router.go(-1)">
        Save
    </b-button>
</template>

<script>

export default {
    data() {
        return {
            name: '',
            email: '',
            linkedin: '',
            research: '',
            faculty: '',
            insta: ''




        }
    },
    methods: {
        entername(entry) {
            this.fullname = entry;
            this.fixtures[this.$route.params.person].name = this.fullname;

        },



        enterphone(entry) {
            this.phone = entry;
            this.fixtures[this.$route.params.person].phone = this.phone;
        }
        ,

        enterinstagram(entry) {
            this.instagram = entry;
            this.fixtures[this.$route.params.person].instagram = this.instagram;
        }
        ,
        enterlinkedin(entry) {
            this.linkedin = entry;
            this.fixtures[this.$route.params.person].linkedin = this.linkedin;
        },

        enterresearch(entry) {
            this.research = entry;
            this.fixtures[this.$route.params.person].research = this.research;
        },
        enterfaculty(entry) {
            this.faculty = entry;
            this.fixtures[this.$route.params.person].faculty = this.faculty;
        }

    }
}

</script>


<!-- <b-form-input v-model="name" placeholder="Name" :value=this.fixtures[this.$route.params.person].name />
<b-form-input v-model="phone" placeholder="Phone" :value=this.fixtures[this.$route.params.person].phone />
<b-form-input v-model="linkedin" placeholder="LinkedIn" :value=this.fixtures[this.$route.params.person].linkedin />
<b-form-input v-model="instagram" placeholder="Instagram" :value=this.fixtures[this.$route.params.person].instagram />
<b-form-input v-model="research" placeholder="Research Interests"
    :value=this.fixtures[this.$route.params.person].research />
<b-form-input v-model="faculty" placeholder="Faculty Interests"
    :value=this.fixtures[this.$route.params.person].faculty /> -->
