import {table} from "../components/index";
import {modal} from "../components/index";
  /**
   * You can register global components here and use them as a plugin in your main Vue instance
   */
  
  const GlobalComponents = {
    install(Vue) {
      Vue.component("cp-table", table);
      Vue.component("cp-modal", modal);
    }
  };
  
  export default GlobalComponents;