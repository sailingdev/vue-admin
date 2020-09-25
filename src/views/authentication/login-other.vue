<template lang="html">

  <section class="login">
    <div class="wrapper d-flex align-items-center auth login-full-bg">
      <div class="row col-lg-12">
        <div class="col-lg-12 mx-auto" style="position: relative; display: block">
          <div class="text-left p-5 row" style="position: relative;">
            <div class="col-lg-6" style="background-color: black">
              <img src="../../assets/images/auth/logo_image.png" />
            </div>
            <div class="col-lg-6 auth-form-white text-left p-5" style="background-color: white">
              <span style="font-size: 33px; font-weight: bold">登陆</span>
              <form class="pt-5">
                <form>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-lg-9">
                        <input type="text" class="form-control" id="phonenumber" aria-describedby="phonenumber" placeholder="请输入手机号">
                        <i class="mdi mdi-account"></i>
                      </div>
                      <a class="col-lg-3" style="font-size: 13px; color: black; padding-top: 15px; font-weight: bold">发送验证码</a>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-lg-9">
                        <input type="text" class="form-control" id="verificationnumber" placeholder="请输入验证码">
                        <i class="mdi mdi-eye"></i>
                      </div>
                    </div>
                  </div>
                  <div class="mt-5">
                    <button class="btn btn-rounded btn-dark" style="width: 100%" @click="setLogin"><b>立即登陆</b></button>
                  </div>

                  <h4 class="text-center" style="margin-top: 100px; margin-bottom: 0; padding-bottom: 0">欢迎登陆独立屋商品管理系统</h4>
                </form>
              </form>
            </div>
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
img {
  width: 80%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
