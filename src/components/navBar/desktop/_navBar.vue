<template>
    <div>
        <div v-if="this.estado==='home'">
                <v-navigation-drawer
      v-if="!$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      color="#f5f5f5"
      class="welcome"
    >
      <v-list nav color="#f5f5f5" class="welcome">
        <v-list-item
          v-for="(item, i) in btnItems"
          :key="i"
          link
          @click="$vuetify.goTo(`#${item}`)"
          class="welcome"
        >
          <v-list-item-content>
            <v-list-item-title>
              <span class="welcome">
                {{ item }}
              </span>
              

              </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
          <!-- <v-navigation-drawer v-model="drawer" temporary app>
          <v-list nav dense>
            <v-list-item v-for="item in menuItems" :key="item.title" active-class="deep-purple--text text--accent-4">
              <v-list-item-content>
                <v-list-item-title @click="menu(item.title)">{{ item.title }}efwqewfw</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer> -->
            <!-- <v-app-bar
      fixed
      app
      elevate-on-scroll
      class="appbar"
      :clipped-left="$vuetify.breakpoint.lgAndUp"
    >
      <v-container>
        <v-row align="center" >
          <v-col class="d-flex align-center">
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
              v-if="!$vuetify.breakpoint.lgAndUp"
            />
            <v-toolbar-title
              style="cursor: pointer"
              class="welcome"
            >
              <v-icon large color="colorUnifranz">
                mdi-briefcase
              </v-icon>
              UNIFRANZ <span class="colorUnifranz--text">LABORAL</span>
            </v-toolbar-title>
          </v-col>
          <v-col class="text-right welcome" v-if="$vuetify.breakpoint.lgAndUp">
            <v-btn
              text
              v-for="(item, i) in btnItems"
              :key="i"
              @click="$vuetify.goTo(`#${item}`)" class="welcome"
            >
              {{ item }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar> -->

        <v-app-bar  :color="dynamic" height="70" app clipped-left dense>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
                <v-toolbar-title
                style="cursor: pointer"
                class="welcome"
                >
                <v-icon large color="colorUnifranz">
                    mdi-briefcase
                </v-icon>
                <span :class="dynamic=='black'? 'primary--text':'black--text'">UNIFRANZ</span>
                <span class="colorUnifranz--text">LABORAL</span>
                </v-toolbar-title>
            <v-spacer></v-spacer>
            <div absolute class="d-none d-md-flex">
                <v-btn
                :class="dynamic=='black'? 'primary--text mx-1 my-2 todo':'black--text mx-1 my-2 todo'"
                text
                v-for="(item, i) in btnItems"
                :key="i"
                @click="menu(item)">
                    {{item}}
                </v-btn>
            </div>
        </v-app-bar>
        <v-dialog v-model="dialog" max-width="400" >

              <!-- <facebook-login class="button"

                appId="286813975656766"
                @login="getUserData"
                @logout="onLogout"
                @get-initial-status="getUserData">
              </facebook-login> -->

  
            <v-card color="#F2f2f2">
                <v-spacer></v-spacer>
                <v-card-title  class="headline">UNIFRANZ | LABORAL</v-card-title>
                <v-spacer></v-spacer>
                <form ref="form" @submit.prevent="senduser" :v-model="valid" lazy-validation v-show="this.loginDialog==0" >
                    <v-card-text>
                        <v-text-field
                        v-model="login.user"
                        :rules="[() => !!login.user || 'La cuenta de usuario es necesario para iniciar sessión']"
                        label="Cuenta de usuario"
                        required
                        prepend-icon="mdi-account-outline"
                        ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <!-- <button class="button" @click="logInWithFacebook"> Login with Facebook</button> -->
                        <v-btn color="#F26522" dark rounded  type="submit" >
                        Iniciar sesión
                        </v-btn> 
                        <v-spacer></v-spacer>
                    </v-card-actions>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                  <facebook-login
                    appId="286813975656766"
                    @login="onLogin"
                    @logout="onLogout"
                    @sdk-loaded="sdkLoaded">
                  </facebook-login>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                    
                </form> 
                <form ref="form" @submit.prevent="sendUnifranz" :v-model="valid" lazy-validation v-show="this.loginDialog=='2'" >
                    <v-card-text>
                        <v-text-field
                        v-model="studentUnifranz.name"
                        label="Nombre"
                        readonly
                        prepend-icon="mdi-account-outline"
                        ></v-text-field>
                        <v-text-field
                        v-model="studentUnifranz.lastname"
                        label="Apellido"
                        readonly
                        prepend-icon="mdi-account-outline"
                        ></v-text-field>
                        <v-text-field
                        v-model="studentUnifranz.email"
                        label="Correo"
                        readonly
                        prepend-icon="mdi-account-outline"
                        ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="#F26522" dark  type="submit">
                        Iniciar sessión
                        </v-btn> 
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </form> 
                <form ref="form" @submit.prevent="sendusercomplet" :v-model="valid" lazy-validation v-show="this.loginDialog=='1'">
                    <v-card-text>
                        <v-text-field
                        v-model="login.password"
                        :rules="[() => !!login.password|| 'La contraseña es requerido para iniciar sessión']"
                        label="Contraseña"
                        required
                        prepend-icon="mdi-lock-outline"
                        :append-icon="show1 ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                        :type="show1 ? 'text' : 'password'"
                        data-vv-name="pass"
                        name="input-10-1"
                        @click:append="show1 = !show1"
                        ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="#F26522" dark  type="submit" >
                        Iniciar sessión
                        </v-btn> 
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </form> 
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialogMessage" max-width="290">
            <v-card>
                <v-card-title class="headline">OOPS!</v-card-title>
                <v-card-text>{{message}}</v-card-text>
            </v-card>
        </v-dialog>
        </div>
        <div v-if="this.estado==='admin'"><admin/></div>
        <div v-if="this.estado==='client'"><client/></div>
    </div>
</template>
<script>
import axios from 'axios';
import facebookLogin from '../fb/facebook-login';
import jwt_decode from 'jwt-decode';
// import admin from "./stateAdmin";
// import client from "./stateClient";
export default {
  name: 'App',
    components: 
  { 
    // admin,client,
    facebookLogin
  },
  data: () => ({
      titleUnifranz:'UNIFRANZ',
        btnItems: ["SERVICIOS", "PORTAFOLIO", "EQUIPO", "CONTACTOS","EMPEZAR"],
      isConnected: false,
      name: '',
      email: '',
      personalID: '',
      FB: undefined,
      estado:'home',
              items: [
            { title: 'Mi Perfil' },
            { title: 'Cerrar Session' },
        ],
        barra:false,
        drawerlogin: null,
        menucal:false,
        dialogRegister:false,
        cont:0,
        loginDialog:0,
        abbr:'',
        ocultar:0,
        dynamic: '',
        dialogMessage: false,
        message:'',
        show1:'',
        pass:'',
        valid: false,
        dialog: false,
        drawerlog:false,
        drawer: false,
        login:{
            user:"",
            password:"",
            usr_token:""
        },
        keyMenus:true,
        menuItems:[
            {title:'Nuestro programa'},
            {title:'descarga APP'},
            {title:'convenios'},
            {title:'contactanos'},
            {title:'ingresar'}
        ],
        menuprueba:{
            'Dashboard': 
            [
                ['Dashboard Eventos', 'web_asset','trending_up'],
                ['Dashboard Inventarios', '','trending_up'],
                ['Dashboard Convenios', '','trending_up'],
                ['Dashboard COVID-19', '','trending_up'],
            ],
            'Gestión de eventos':
            [
                ['Registro de Eventos', 'flight','add'],
                ['Registro de Encuestas', '','post_add'],
                ['Registro de Preguntas', '','?'],
                ['Calendario', '','event_available'],
            ],
            'Gestión de Inventarios':
            [
                ['Management', 'local_mall',''],
                ['Settings', '',''],
            ],
            'Gestión de Convenios':
            [
                ['Registros de Convenios', 'thumbs_up_down',''],
                ['Notificaciones', '',''],
            ],
            'Monitoreo de COVID-19':
            [
                ['Registro de Encuestas', 'bug_report','post_add'],
                ['Registro de Informes', '',''],
            ],
            'Gestión de Reportes':
            [
                ['Reportes de Eventos', 'description',''],
                ['Reportes de Inventarios', '',''],
                ['Reportes de Convenios', '',''],
                ['Reportes de COVID-19', '',''],
            ],
            'Gestión de Usuarios':
            [
                ['Registro de Usuarios', 'group','person_add'],
                ['Roles y Permisos', '','star_outline'],
            ],
        },
        menuItemsAdmin:[
            {icon: 'web_asset', title:'Dashboard'},
            {icon: 'flight', title:'Gestión de eventos'},
            {icon: 'local_mall',title:'Gestión de inventarios'},
            {icon: 'thumbs_up_down',title:'Gestión de Convenios'},
            {icon: 'bug_report',title:'Monitoreo de COVID-19'},
            {icon: 'description',title:'Gestión de Reportes'},
            {icon: 'group', title:'Gestión de Usuarios'},
        ],
        menuItemsClient:[
            {icon: 'trending_up', title:'Eventos'},
            {icon: 'subscriptions',title:'Calendario'},
            {icon: 'history',title:'Recuerdos'},
            {icon: 'watch_later',title:'Convenios'},
            {icon: 'watch_later',title:'Mi perfil'}
        ],
        listCareer:[],
        progress:false,
        contForm:0,
        studentUnifranz:{
        code:'',
        name:'',
        lastname:'',
        email:'',
        celular:'',
        sede:'',
        genero:'',
        date:'',
        password:''
        },
        student:{
            code:'',
            name:'',
            lastName:'',
            sede:'',
            genero:'',
            correo:'',
            ci:'',
            date:'',
            phone:''
        },
        careers:[],
        headquarters:[],
        listGenero: [
            { abbr: 'F',  title: 'FEMENINO' },
            { abbr: 'M',    title: 'MASCULINO' },
        ]
  }),
    created: function () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    watch: {
        menu (val) {
            val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
        },
    },
    mounted(){
        if (localStorage.getItem("user") == null) {
            this.estado = "home";
            this.$router.push('/')
        }
        if (localStorage.getItem("user") == "admin") {
            this.estado = "admin";
            this.$router.push('dashboard')
        }
        if (localStorage.getItem("user") == "client") {
            this.estado = "client";
        }
        this.dynamic='black';
        axios.get('https://passunifranz-backweb.herokuapp.com/careers')
        .then((result) => {
            this.listCareer=result.data
        })
        axios.get('https://passunifranz-backweb.herokuapp.com/headquarters')
        .then((result) => {
            this.headquarters=result.data
        })
    },

    methods:{
    getUserData() {
      console.log('hola')
      this.FB.api('/me', 'GET', { fields: 'id,email,short_name,name,picture{height,url,width},age_range,gender,birthday,location' },
        userInformation => {

          this.personalID = userInformation.id;
          this.email = userInformation.email;
          this.name = userInformation.name;
          // this.user_birthday = userInformation.user_birthday;
          // this.gender = userInformation.gender;
          console.log(this.email)
          console.log(this.personalID)
          console.log(this.name)
          console.log(userInformation)
          // console.log(this.gender)
          // console.log(this.user_birthday)
        },
        
      )
    },
    sdkLoaded(payload) {
      this.isConnected = payload.isConnected
      this.FB = payload.FB
      if (this.isConnected) this.getUserData()
    },
    onLogin() {
      this.isConnected = true
      console.log('conectado')
      this.getUserData()
    },
    onLogout() {
      this.isConnected = false;
    },





    async logInWithFacebook() {
      await this.loadFacebookSDK(document, "script", "facebook-jssdk");
      await this.initFacebook();
      window.FB.login(function(response) {


        if (response.authResponse) {
          console.log(response)
          // alert("You are logged in &amp; cookie set!");
          // Now you can redirect the user or do an AJAX request to
          // a PHP script that grabs the signed request from the cookie.
        } else {
          alert("User cancelled login or did not fully authorize.");
        }
      });
      return false;
    },
    async initFacebook() {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: "286813975656766", //You will need to change this
          cookie: true, // This is important, it's not enabled by default
          version: "v13.0"
        });
      };
    },
    async loadFacebookSDK(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    },











    botonMenu(data){
            console.log(data)
            if (data=='1') {
                this.cerrarSession()
            }
    },








        cerrarSession() {
            localStorage.clear();
            this.$router.push("/");
            this.barra = false;
            this.estado = "home";
        },
        sendUnifranz(){
            axios.post('https://passunifranz-backweb.herokuapp.com/register/customer',{
                "cus_code":this.login.user,
                "campus_id":this.studentUnifranz.sede,
                "cus_full_names":this.studentUnifranz.name,
                "cus_surnames":this.studentUnifranz.lastname,
                "cus_identity_card":this.login.user.substr(3),
                "cus_date_of_birth":"",
                "cus_gender":"",
                "cus_mail":this.studentUnifranz.email,
                "cus_phone":"",
                "cus_password":this.login.user,
                "cus_img":"https://passunifranz-backapp.herokuapp.com/user.png",
                "cus_miles":"0"
            })
            .then((result) => {
                console.log(result)
                this.$router.push('events')
                this.dialogMessage=false;
                this.dialog=false;
                this.estado='Client'
                this.dialogMessage=false;
                this.dialog=false;
                this.loginDialog=3;
            })
        },
        handleScroll: function (event) {
            if (event.target.scrollingElement.scrollTop=='0') {
                this.dynamic='black'
            } else {
                this.dynamic='#f2f2f2'
            }
        },
        isMobile() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
            }
        },
        menu(title){
            if (title=='EMPEZAR') {
                this.dialog=true
                this.keyMenus=false
            }
            if (title==='Registro de Usuarios'){return this.$router.push('users')}
            if (title==='Registro de Eventos'){return this.$router.push('event')}
            if (title==='Roles y Permisos'){return this.$router.push('rolespermisions')}
        },
        senduser(){
            this.dialogMessage=false
            this.abbr =this.login.user.substr(0,3)
            for (let i = 0; i < this.listCareer.length; i++) {
                if (this.abbr==this.listCareer[i].car_abbreviation) {
                this.cont++;
                this.dialogMessage=false
                axios.post('https://passunifranz-backweb.herokuapp.com/login/customer',{"cus_code":this.login.user})
                .then((result) => {
                    if (result.data.message=='Usuario no existe') { 
                    this.getCustomerData();
                    }
                    if (result.data.message=='Usuario existe') {
                    this.loginDialog=1;
                    }
                })
                return i=this.listCareer.length;
                }
            }
            if (this.cont==0) {
                this.getUser();
            }
        },
        getCustomerData(){
            axios.get('https://siar.unifranz.edu.bo/api/student?cod_alumno='+this.login.user)
            .then((result) => {
                if (result.data=='') {
                    this.loginDialog=0
                    this.dialogMessage=true;
                    this.message='Estudiante no existe';
                }else{
                    this.studentUnifranz.name=result.data.nombres
                    this.studentUnifranz.lastname=result.data.ap_paterno+' '+result.data.ap_materno
                    this.studentUnifranz.email=result.data.email
                    this.studentUnifranz.sede=result.data.id_sede_wh
                    this.loginDialog=2;
                }
            })
        },
        getUser(){
            axios.post('https://passunifranz-backweb.herokuapp.com/login/user',{"usr_mail":this.login.user})
            .then((result) => {
                if (result.data.message=='Usuario no existe') { 
                    this.dialogMessage=true;
                    this.message='Usuario no existe';
                }
                if (result.data.message=='Usuario existe') {
                    this.loginDialog=1;
                }
            })
        },
        sendusercomplet(){
        if (this.cont==0) {
            axios.post('https://passunifranz-backweb.herokuapp.com/login/users',{"usr_mail":this.login.user,"usr_password":this.login.password})
            .then((result) => {
                console.log(result.data)
                if (result.data.message=='Contraseña incorrecta') { 
                    this.dialogMessage=true;
                    this.message='contraseña incorrecta';
                }else{
                    localStorage.setItem("user_token", result.data.token);
                    localStorage.setItem("user", "admin");
                    var decoded = jwt_decode(result.data.token);
                    localStorage.setItem('user_id',decoded.id)
                    this.$router.push('Profile')
                    this.dialogMessage=false;
                    this.dialog=false;
                    this.estado='admin'
                    
                    this.barra=true
                }
            })
            }else{
                axios.post('https://passunifranz-backweb.herokuapp.com/login/customers',{"cus_code":this.login.user,"cus_password":this.login.password})
                .then((result) => {
                    if (result.data.message=='Contraseña incorrecta') { 
                        this.dialogMessage=true;
                        this.message='contraseña incorrecta';
                    }else{
                        localStorage.setItem("user_token", result.data.token);
                        localStorage.setItem("user", "client");
                        var decoded = jwt_decode(result.data.token);
                        localStorage.setItem("idCustomer",decoded.id);
                        this.barra=true
                        this.$router.push('Profile')
                        this.dialogMessage=false;
                        this.dialog=false;
                        this.estado='client'
                    }
                })
            }
        
        }
    }
};
</script>

<style>
.button{
  color:white;
  min-width: 150px;
  background-color: #000000a1;
  height: 2.5rem;
  border-radius: 2rem;
  font-weight: 400;
  font-size: 0.8rem;
}

  /* .todo{
 font-family: "Uni Neue Light";
  src: url("../../../assets/fonts/UniNeueLight.otf") format("otf");
} */
.titlewhite{
  color: #f2f2f2
}
.colo{
    background-image: linear-gradient(to bottom,#FF7000, #121C1E);
}
</style>