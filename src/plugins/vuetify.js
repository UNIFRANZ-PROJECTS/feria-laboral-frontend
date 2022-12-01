import Vue from 'vue';
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);
import es from 'vuetify/es5/locale/es'


Vue.component('my-component', {
  methods: {
    changeLocale () {
      this.$vuetify.lang.current = 'es'
    },
  },
})



export default new Vuetify({
    icons: {
        iconfont:'mdi'
    },
    lang: {
      locales: { es },
      current: 'es',
    },
    theme: {
        themes: {
          light: {
            colorUnifranz:"#ff8f4d",
            primary: '#D3C3BC',
            secondary: '#BFADA5',
            accent: '#D8EBF1',
            info: '#5B5C79',
          },
        },
      }
});
