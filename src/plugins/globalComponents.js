import {table} from "../components/index";
  /**
   * You can register global components here and use them as a plugin in your main Vue instance
   */
  
  const GlobalComponents = {
    install(Vue) {
      Vue.component("cp-table", table);
    }
  };
  
  export default GlobalComponents;