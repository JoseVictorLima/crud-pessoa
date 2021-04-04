import Vue from "vue";
import methods from './methods';
import externalMethods from './externalMethods';

Vue.mixin(methods)
Vue.mixin(externalMethods)