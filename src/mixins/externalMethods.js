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
    message: 'Este campo é obrigatório.'
  });

extend('cpf',{
  validate (value) {
    let valido = true
    var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/;
    if(cpfValido.test(value) == false) valido = false
    return{
      required: true,
      valid: valido
    };
    
  },
  computesRequired: true,
  message: 'CPF com formato inválido.'
});

export default {
    components:{

    },
}