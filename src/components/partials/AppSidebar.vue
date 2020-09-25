<template lang="html">

  <section class="app-sidebar">
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/dashboard/">
            <img class="menu-icon" src="../../assets/images/menu_icons/door.png" alt="menu icon">
            <h4 style="font-weight: bold; padding-top: 10px;">首页</h4>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/user-list/">
            <img class="menu-icon" src="../../assets/images/menu_icons/group.png" alt="menu icon">
            <h4 style="font-weight: bold; padding-top: 10px;">用户管理</h4>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/product-list/">
            <img class="menu-icon" src="../../assets/images/menu_icons/hand-bag.png" alt="menu icon">
            <h4 style="font-weight: bold; padding-top: 10px;">商品管理</h4>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/order-list/">
            <img class="menu-icon" src="../../assets/images/menu_icons/menu.png" alt="menu icon">
            <h4 style="font-weight: bold; padding-top: 10px;">订单管理</h4>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/special-feature-list/">
            <img class="menu-icon" src="../../assets/images/menu_icons/pencil.png" alt="menu icon">
            <h4 style="font-weight: bold; padding-top: 10px;">特辑管理</h4>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/field-list/">
            <img class="menu-icon" src="../../assets/images/menu_icons/document.png" alt="menu icon">
            <h4 style="font-weight: bold; padding-top: 10px;">专栏管理</h4>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/management-list/">
            <img class="menu-icon" src="../../assets/images/menu_icons/dashboard.png" alt="menu icon">
            <h4 style="font-weight: bold; padding-top: 10px;">运营管理</h4>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/feedback-list/">
            <img class="menu-icon" src="../../assets/images/menu_icons/stamp.png" alt="menu icon">
            <h4 style="font-weight: bold; padding-top: 10px;">举报反馈</h4>
          </router-link>
        </li>
      </ul>
    </nav>
  </section>

</template>

<script lang="js">
export default {
  name: 'app-sidebar'
}
</script>

<style scoped lang="scss">
</style>
