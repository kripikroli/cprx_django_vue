<template>

    <div class="components">
        <!-- <div>
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="idebar=cprx">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div> -->

        <div id="sidebar=cprx">
            <SidebarMyAccountProfile/>

            <SidebarMyAccountResume/>

            <SidebarMyAccountSystem/> 

        </div>
        
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