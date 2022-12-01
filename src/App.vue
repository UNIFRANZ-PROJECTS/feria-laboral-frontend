<template >
  <v-app id="main" style="background:#121C1E">
      <menuEscritorio v-if="!isMobile()"></menuEscritorio>
      <!-- <menuCelular v-else></menuCelular> -->
    <v-content id="body">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
<script>
import menuEscritorio from "./components/navBar/desktop/_navBar";
// import menuCelular from "./components/navBar/mobile/_navBar";
export default {
  name: 'App',
    components: 
  { 
    menuEscritorio,
    // menuCelular
  },
  methods:{
    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        return true;
      } else {
        return false;
      }
    },
  }
};
</script>
<style>
html {
  --scrollbarBG: #CFD8DC;
  --thumbBG: #90A4AE;
}
body::-webkit-scrollbar {
  width: 11px;
}
body {
  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}
body::-webkit-scrollbar-track {
  background: var(--scrollbarBG);
}
body::-webkit-scrollbar-thumb {
  background-color: var(--thumbBG) ;
  border-radius: 6px;
  border: 3px solid var(--scrollbarBG);
}

</style>
