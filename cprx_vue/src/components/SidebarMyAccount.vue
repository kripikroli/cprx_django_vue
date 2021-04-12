<template>
    <div class="components">
        <SidebarMyAccountProfile/>

        <SidebarMyAccountResume/>

        <SidebarMyAccountSystem/> 
    </div>
</template>

<script>
import SidebarMyAccountProfile from "../components/SidebarMyAccountProfile"
import SidebarMyAccountResume from "../components/SidebarMyAccountResume"
import SidebarMyAccountSystem from "../components/SidebarMyAccountSystem"

export default {
    name: "SidebarMyAccount",
    components: {
        SidebarMyAccountProfile,
        SidebarMyAccountResume,
        SidebarMyAccountSystem
    },
}
</script>

<style scoped>

</style>