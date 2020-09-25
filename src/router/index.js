import Vue from 'vue'
import Router from 'vue-router'

// Dashboard Components
import dashboard from '../views/dashboard'

// To-Do Components
import todo from '../views/to-do'

// user authentication
import login from '../views/authentication/login'
import register from '../views/authentication/register'

// user management
import profile from '../views/profile'
import userlist from '../views/user-management/user-list'
import userdetail from '../views/user-management/user-detail'

// product management
import productmain from '../views/product-management/product-main'
import productlist from '../views/product-management/product-list'
import productdetail from '../views/product-management/product-detail'
import productupload from '../views/product-management/product-upload'

// order management
import orderlist from '../views/order-management/order-list'
import orderdetail from '../views/order-management/order-detail'

// field management
import fieldlist from '../views/field-management/field-list'
import fielddetail from '../views/field-management/field-detail'
import fieldupload from '../views/field-management/field-upload'

// special feature management
import specialfeaturelist from '../views/special-feature-management/special-feature-list'
import specialfeaturedetail from '../views/special-feature-management/special-feature-detail'
import specialfeatureupload from '../views/special-feature-management/special-feature-upload'

// management
import managementlist from '../views/management/management-list'
import managementdetail from '../views/management/management-detail'
import uploadspecialfeature from '../views/management/upload-special-feature'
import uploadfield from '../views/management/upload-field'
import uploadproduct from '../views/management/upload-product'
import uploadactivity from '../views/management/upload-activity'
import uploadletter from '../views/management/upload-letter'

// feedback management
import feedbacklist from '../views/feedback-management/feedback-list'
import feedbackdetail from '../views/feedback-management/feedback-detail'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/to-do',
    name: 'to-do',
    component: todo
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/user-list',
    name: 'user-list',
    component: userlist
  },
  {
    path: '/user-detail',
    name: 'user-detail',
    component: userdetail
  },
  {
    path: '/order-list',
    name: 'order-list',
    component: orderlist
  },
  {
    path: '/order-detail',
    name: 'order-detail',
    component: orderdetail
  },
  {
    path: '/product-main',
    name: 'product-main',
    component: productmain
  },
  {
    path: '/product-list',
    name: 'product-list',
    component: productlist
  },
  {
    path: '/product-detail',
    name: 'product-detail',
    component: productdetail
  },
  {
    path: '/product-upload',
    name: 'product-upload',
    component: productupload
  },
  {
    path: '/field-list',
    name: 'field-list',
    component: fieldlist
  },
  {
    path: '/field-detail',
    name: 'field-detail',
    component: fielddetail
  },
  {
    path: '/field-upload',
    name: 'field-upload',
    component: fieldupload
  },
  {
    path: '/special-feature-list',
    name: 'special-feature-list',
    component: specialfeaturelist
  },
  {
    path: '/special-feature-detail',
    name: 'special-feature-detail',
    component: specialfeaturedetail
  },
  {
    path: '/special-feature-upload',
    name: 'special-feature-upload',
    component: specialfeatureupload
  },
  {
    path: '/management-list',
    name: 'management-list',
    component: managementlist
  },
  {
    path: '/management-detail',
    name: 'management-detail',
    component: managementdetail
  },
  {
    path: '/upload-special-feature',
    name: 'upload-special-feature',
    component: uploadspecialfeature
  },
  {
    path: '/upload-field',
    name: 'upload-field',
    component: uploadfield
  },
  {
    path: '/upload-product',
    name: 'upload-product',
    component: uploadproduct
  },
  {
    path: '/upload-activity',
    name: 'upload-activity',
    component: uploadactivity
  },
  {
    path: '/upload-letter',
    name: 'upload-letter',
    component: uploadletter
  },
  {
    path: '/feedback-list',
    name: 'feedback-list',
    component: feedbacklist
  },
  {
    path: '/feedback-detail',
    name: 'feedback-detail',
    component: feedbackdetail
  }]
})
