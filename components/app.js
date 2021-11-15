import {baseUrl} from './config.js';
import {router} from './router.js';
new window.Vue({
      el: '#app',
      data:function() {
return {
  counter:"Hello World",
}
      },
      components: router,
})