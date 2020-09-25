<template lang="html">
  <div id="app">
    <div class="container-scroller" v-if="$store.getters.isLogged">
      <app-header />
      <div class="page-body-wrapper">
        <app-sidebar />
        <div class="main-panel container-fluid">
          <div class="content-wrapper">
            <router-view></router-view>
          </div>
          <app-footer />
        </div>
      </div>
    </div>
    <div class="container-scroller" style="background-color: #F6F8FA" v-else>
      <div class="page-body-wrapper">
        <div class="main-panel container-fluid">
          <div class="content-wrapper">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import AppHeader from '../src/components/partials/AppHeader'
import AppSidebar from '../src/components/partials/AppSidebar'
import AppFooter from '../src/components/partials/AppFooter'
export default{
  name: 'app',
  components: {
    AppHeader,
    AppSidebar,
    AppFooter
  }
}
</script>

<style>
@import "../node_modules/mdi/css/materialdesignicons.min.css";
@import "../node_modules/flag-icon-css/css/flag-icon.min.css";
@import "../node_modules/font-awesome/css/font-awesome.min.css";
</style>

<style lang="scss">
@import "./assets/scss/style";
</style>
