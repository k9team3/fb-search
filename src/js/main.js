import Vue from 'vue'

const App = require('./app.vue')

new Vue({
  el: '#app',
  render: function (createElement) {
    return createElement(App)
  }
})