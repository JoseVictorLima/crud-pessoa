import Vue from "vue"
// import "vue-select/dist/vue-select.css"
import { ValidationProvider,extend } from 'vee-validate';
import { ValidationObserver } from 'vee-validate';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

extend('required', {
    validate (value) {
      return {
        required: true,
        valid: ['', null, undefined].indexOf(value) === -1
      };
    },
    computesRequired: true,
    message: 'Este campo é obrigatorio.'
  });

export default {
    components:{

    },
}