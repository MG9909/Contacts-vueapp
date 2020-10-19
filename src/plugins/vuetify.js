import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      options: {
        customProperties: true,
      },
        themes: {
          light: {
            primary: '#4079F1',
            error: '#b71c1c',
          },
        },
      },
});
