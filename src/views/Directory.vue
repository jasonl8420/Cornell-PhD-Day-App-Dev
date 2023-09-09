<script setup>
import ProfileThumbnail from '@/components/profileThumbnail.vue'
import ProfileLists from '@/components/profileLists.vue'
</script>

<template>
    <div>
        <h1 class='view-title'>Directory</h1>
        <ProfileLists />
    </div>

    <!-- placeholder for the nav bar? -->
</template>

<style scoped>
#app {
    display: block;
}

.view-title {
    /* text-align: center; */
    margin-bottom: 40px;
    font-size: 36px;
    color: #cc323e;
}
</style>
