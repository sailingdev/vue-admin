<template lang="html">
  <div id="user-detail">
  <section class="user-detail">
    <div class="row">
      <div class="col-lg-12 grid-margin ">
        <div class="card" style="margin-bottom: 0; padding-bottom: 0">
          <div class="card-body main-card-body">

            <!-- profile edit -->
            <div class="col-lg-8 offset-2 row" style="margin-bottom: 20px; text-align: center">
                <!-- profile picture -->
                <div class="col-lg-12 profile-picture">
                    <div class="avatar-wrapper" v-if="!file_changed">
                        <img id="avatar_image" class="profile-pic" :src="picture_url" />
                        <div class="upload-button" @click="fileDialogTrigger">
                            <a class="text-white font-weight-bold" style="font-size: 20px">编辑</a>
                        </div>
                        <input class="file-upload" ref="file-upload" type="file" accept="image/*" @change="change_file" />
                    </div>
                    <div class="cropper-wrapper" v-if="!file_cropped">
                      <vue-cropper ref="cropper" :src="picture_url" style="width: 200px; height: 200px; border-radius: 50%"></vue-cropper>
                      <button class="btn btn-dark btn-rounded" @click="crop" style="margin-top: 10px">OK</button>
                    </div>
                </div>

                <!-- profile edit inputs & dropdowns -->
                <div class="row text-center">
                    <b-form-group class="form-group col-12" label-for="nickname" style="padding-top: 20px">
                        <div class="row">
                            <span class="col-3 normal-label">用户昵称:</span>
                            <b-form-input class="col-7 text-input" type="text" id="nickname" placeholder="用户昵称" value="Jackie"></b-form-input>
                            <a href="#" class="col-2 edit-link" style="font-size: 14px">编辑</a>
                        </div>
                    </b-form-group>
                    <b-form-group class="form-group col-12" label-for="name" style="padding-top: 20px">
                        <div class="row">
                            <span class="col-3 normal-label">用户姓名:</span>
                            <b-form-input class="col-7 text-input" type="text" id="name" placeholder="用户姓名" value="成龙"></b-form-input>
                            <a href="#" class="col-2 edit-link" style="font-size: 14px">编辑</a>
                        </div>
                    </b-form-group>
                    <b-form-group class="form-group col-12" label-for="phone_number" style="padding-top: 20px">
                        <div class="row">
                            <span class="col-3 normal-label">手机号:</span>
                            <b-form-input class="col-7 text-input" type="text" id="phone_number" placeholder="手机号" value="135-2082-0254"></b-form-input>
                            <a href="#" class="col-2 edit-link" style="font-size: 14px">编辑</a>
                        </div>
                    </b-form-group>
                    <b-form-group class="form-group col-12" label-for="email" style="padding-top: 20px">
                        <div class="row">
                            <span class="col-3 normal-label">邮箱:</span>
                            <b-form-input class="col-7 text-input" type="text" id="email" placeholder="邮箱" value="9999999@qq.com"></b-form-input>
                            <a href="#" class="col-2 edit-link" style="font-size: 14px">编辑</a>
                        </div>
                    </b-form-group>
                    <b-form-group class="form-group col-12" label-for="department" style="padding-top: 20px">
                        <div class="row">
                            <span class="col-3 normal-label">部门:</span>
                            <b-form-input class="col-7 text-input" type="text" id="department" placeholder="部门" value="商品部"></b-form-input>
                            <a href="#" class="col-2 edit-link" style="font-size: 14px">编辑</a>
                        </div>
                    </b-form-group>
                    <b-form-group class="form-group col-12" label-for="position" style="padding-top: 20px">
                        <div class="row">
                            <span class="col-3 normal-label">岗位:</span>
                            <b-form-input class="col-7 text-input" type="text" id="position" placeholder="岗位" value="UI设计师"></b-form-input>
                            <a href="#" class="col-2 edit-link" style="font-size: 14px">编辑</a>
                        </div>
                    </b-form-group>
                    <b-form-group class="form-group col-12" label-for="password" style="padding-top: 20px">
                        <div class="row">
                            <span class="col-3 normal-label">密码:</span>
                            <b-form-input class="col-7 text-input" type="password" id="password" placeholder="密码" value="random"></b-form-input>
                            <a href="#" class="col-2 edit-link" style="font-size: 14px">编辑</a>
                        </div>
                    </b-form-group>
                    <button class="btn btn-dark btn-rounded col-lg-3 offset-5" style="margin-top: 40px"><h4 style="margin-bottom: 0">完成</h4></button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script lang="js">
import Datepicker from 'vuejs-datepicker'
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'
export default {
  name: 'profile',
  components: {
    Datepicker,
    VueCropper
  },
  data () {
    return {
      file_changed: false,
      file_cropped: true,
      picture_url: require('../assets/images/faces/jackie_chan.jpg')
    }
  },
  methods: {
    crop () {
      this.picture_url = this.$refs.cropper.getCroppedCanvas().toDataURL()
      this.file_changed = false
      this.file_cropped = true
    },
    fileDialogTrigger () {
      this.$refs['file-upload'].click()
    },
    change_file (e) {
      this.file_changed = true
      this.file_cropped = false
      if (!e.target.files.length) return
      var reader = new FileReader()
      reader.onload = (elem) => {
        // this.picture_url = this.$refs.cropper.getCroppedCanvas().toDataURL();
        this.picture_url = elem.target.result
        this.$refs.cropper.replace(elem.target.result)
      }
      reader.readAsDataURL(e.target.files[0])
      console.log(this.picture_url)
    }
  },
  mounted () {
    this.$store.commit('setUrl', 'profile')
  }
}
</script>

<style scoped lang="scss">
.tab-title-class {
  font-size: 40px;
  font-weight: bold;
}

.form-group {
  margin-bottom: 5px;
}

.profile-picture {
  vertical-align: top;
  text-align: center;
}

.profile-caption {
  display: block;
  padding-top: 5px;
}

.edit-link {
  text-align: center;
  padding-top: 8px;
  color: black;
  opacity: 0.3;
}

.dropdown-selector {
  padding: 0 0 0 0;
}

.text-input {
  font-size: 16px;
}

.search-box {
  align-items: center;
  position: relative;
}

.search-icon {
  opacity: 0.5;
  padding: 12px 10px 0 20px;
  height: 40px;
  position: absolute;
}

.search-input {
  font-size: 15px;
  width: 250px;
  height: 40px;
  background-color: #dee2e6;
  border-radius: 20px;
  padding-left: 50px;
  color: black;
}

.button-panel {
  padding-top: 20px;
}

.products {
  display: inline-flex;
  flex-direction: row;
}

.product {
  position: relative;
  overflow: hidden;
  width: 50px;
}

.product:not(:first-child) {
  margin-left: -30px;
}

.product img {
  display: block;
}

.normal-label {
  padding: 5px 0 0 20px;
  font-size: 16px;
}

.normal-text {
  font-size: 16px;
}

.page-item button {
  border: none;
}

.cropper-wrapper {
  position: relative;
  width: 200px;
  margin: 10px auto;
  overflow: hidden;
}

.avatar-wrapper {
  position: relative;
  height: 200px;
  width: 200px;
  margin: 10px auto;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 1px 1px 15px -5px black;
  transition: all 0.3s ease;
}
.avatar-wrapper:hover {
  transform: scale(1.05);
  cursor: pointer;
}
.avatar-wrapper:hover .profile-pic {
  opacity: 0.7;
}
.avatar-wrapper .profile-pic {
  height: 100%;
  width: 100%;
  transition: all 0.3s ease;
}
.avatar-wrapper .profile-pic:after {
  font-family: FontAwesome;
  content: "\f007";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  font-size: 190px;
  background: #ecf0f1;
  color: #34495e;
  text-align: center;
}
.avatar-wrapper .upload-button {
  position: absolute;
  top: 45%;
  left: 40%;
}
.avatar-wrapper .upload-button {
  position: absolute;
  text-align: center;
  opacity: 0;
  transition: all 0.3s ease;
  color: white;
}
.avatar-wrapper:hover .upload-button {
  opacity: 1;
}
</style>
