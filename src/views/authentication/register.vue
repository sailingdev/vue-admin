<template lang="html">

  <section class="register">
    <div class="wrapper d-flex align-items-center auth login-full-bg">
      <div class="row col-lg-12">
        <div class="col-lg-12 mx-auto" style="position: relative; display: block">
          <div class="text-left p-5 row">
            <div class="col-lg-6" style="background-color: black">
              <img src="../../assets/images/auth/bg_image.png" />
            </div>
            <div class="col-lg-6 auth-form-white text-left p-5" style="background-color: white">
              <span style="font-size: 33px; font-weight: bold">登陆</span>
              <form class="pt-5">
                <form>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-lg-9">
                        <input type="text" class="form-control" id="phonenumber" aria-describedby="phonenumber" placeholder="请输入手机号" value="13520820254">
                        <i class="mdi mdi-account"></i>
                      </div>
                      <span style="font-size: 13px; color: black; padding-top: 15px; opacity: 0.5">59s后重新发送</span>
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
                    <button class="btn btn-rounded btn-dark" style="width: 100%" @click="setRegister"><b>立即登陆</b></button>
                    <button class="btn btn-rounded btn-secondary" style="margin-top: 20px; width: 100%" @click="setRegister"><b>立即登陆</b></button>
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
  name: 'register',
  methods: {
    setRegister () {
      this.$router.push('../../login')
    }
  }
}
</script>

<style scoped lang="scss">
img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
