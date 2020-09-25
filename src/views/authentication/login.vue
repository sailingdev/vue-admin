登陆登陆<template lang="html">

  <section class="login">
    <div class="wrapper d-flex align-items-center auth login-full-bg">
      <div class="row w-100">
        <div class="col-lg-6 mx-auto">
          <div class="auth-form-light text-left p-5">
            <h1 class="text-center font-weight-bold">LOGIN</h1>
            <h2 class="text-center font-weight-bold">登陆</h2>
            <form class="pt-5">
              <form>
                <div class="form-group">
                  <input type="text" class="form-control" id="username" aria-describedby="username" placeholder="请输入用户名/手机号">
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" id="password" placeholder="请输入验证码">
                </div>
                <div class="mt-5">
                  <a class="btn btn-dark btn-block btn-rounded btn-lg font-weight-bold" @click="setLogin">立即登陆</a>
                </div>
              </form>
            </form>
            <h5 class="text-center" style="margin-top: 110px; opacity: 0.5">欢迎登陆独立屋商品管理系统</h5>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
export default {
  name: 'login',
  methods: {
    setLogin () {
      this.$store.commit('setLogin')
      this.$router.push('../../dashboard')
    }
  }
}
</script>

<style scoped lang="scss">
</style>
