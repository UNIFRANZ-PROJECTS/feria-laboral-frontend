<template>
  <div class="buttons">
    <button @click="buttonClicked">
      <div class="spinner"
        v-if="isWorking"> </div>
      <img :src="icon"
        v-if="!isWorking"> {{getButtonText}}
    </button>
  </div>
</template>
<script>
import { loadFbSdk, getLoginStatus, fbLogout, fbLogin } from './helpers.js'
import icon from './icon.png'
export default {
  name: 'facebook-login',
  data() {
    return {
      isWorking: false,
      isConnected: false,
      icon
    }
  },
  computed: {
    getButtonText() {
      switch (this.isConnected) {
        case true:
          return this.logoutLabel;
        case false:
          return this.loginLabel;
        default:
          return 'this is default';
      }
    }
  },
  methods: {
    buttonClicked() {
      this.$emit('click')
      if (this.isConnected) {
        this.logout();
      } else {
        this.login();
      }
    },
    logout() {
      this.isWorking = true;
      fbLogout()
        .then(response => {
          this.isWorking = false;
          this.isConnected = false;
          this.$emit('logout', response)
          console.log(response)
        }
        );
    },
    login() {
      this.isWorking = true;
      fbLogin(this.loginOptions)
        .then(response => {
          console.log(response)
          if (response.status === 'connected') {
            this.isConnected = true;
          } else {
            this.isConnected = false;
          }
          this.isWorking = false;
          this.$emit('login', {
            response,
            FB: window.FB
          })
        });
    }
  },
  props: {
    appId: {
      type: String,
      required: true
    },
    version: {
      type: String,
      default: 'v2.10'
    },
    logoutLabel: {
      type: String,
      default: 'Salir de Facebook'
    },
    loginLabel: {
      type: String,
      default: 'Ingresar con Facebook'
    },
    loginOptions: {
      type: Object,
      default: function() {
        return {
          scope: 'email'
        }
      }
    }
  },
  mounted() {
    this.isWorking = true;
    loadFbSdk(this.appId, this.version)
      .then(() => getLoginStatus())
      .then(response => {
        if (response.status === 'connected') {
          this.isConnected = true;
        }
        this.isWorking = false;
        /** get-initial-status to be depcreated on next major version */
        this.$emit('get-initial-status', response);
        this.$emit('sdk-loaded', {
          isConnected: this.isConnected,
          FB: window.FB
        })
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  position: relative;
  padding: 0 15px 0px 46px;
  border: none;
  line-height: 34px;
  font-size: 16px;
  color: #FFF;
  border-radius: 2rem;
  min-width: 225px;
  background-color: #000000a1;
}

.spinner {
  box-sizing: border-box;
  width: 30px;
  height: 90%;
  border-radius: 50%;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  animation: spin 2s linear infinite;
  position: absolute;
  left: 5px;
}

img {
  position: absolute;
  top: 3px;
  left: 10px;
  width: 30px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
