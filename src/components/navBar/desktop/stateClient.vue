<template>
    <div>
        
        <v-navigation-drawer  v-model="drawerlogin"  clipped app  color="#121C1E" dark>
           
            <v-list nav dense class="scrollbar">
 
 <v-list-item two-line :class="miniVariant && 'px-0'"  >
            <v-avatar size="100">
                        <v-img :src="this.user.picture" ></v-img>
                    </v-avatar>

            <v-list-item-content>
              <v-list-item-title class="title">{{this.user.name}}</v-list-item-title>
                   <v-list-item-title class="title">{{this.user.surname1}}</v-list-item-title>
                    <v-list-item-subtitle>{{this.user.rol}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
            
  <v-list-group 
                v-for="(indicex, i) in menuprueba" :key="i" 
                >
                    <template v-slot:activator no-action
                     >
                        <v-list-item-content>
                        <v-list-item-title ><v-icon>{{indicex[0][1]}}</v-icon> {{i}}</v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item
                        v-for="(indice, i) in indicex" :key="i"
                        link @click="menu(indice[0])"
                    >
                        <v-list-item-title v-text="indice[0]"></v-list-item-title>
                        <v-list-item-icon>
                            <v-icon v-text="indice[2]"></v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list-group>

             

           
            </v-list>

             <template v-slot:append>
        <!-- <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div> -->
        <v-label dark>versión 1.0.0</v-label>
      </template>
        </v-navigation-drawer>
        <v-app-bar class="#636161" :color="dynamic" height="50" app clipped-left dense>
            <v-app-bar-nav-icon @click.stop="drawerlogin = !drawerlogin" class="hidden-lg-and-up" dark v-if="dynamic=='black'"></v-app-bar-nav-icon>
            <v-app-bar-nav-icon @click.stop="drawerlogin = !drawerlogin" class="hidden-lg-and-up" light v-if="dynamic!='black'"></v-app-bar-nav-icon>
            <v-toolbar-title class="mr-12 align-center" >
                <span class="title" v-if="dynamic!='black'">PASAPORTE UNIFRANZ</span>
                <span class="titlewhite" v-if="dynamic=='black'">PASAPORTE UNIFRANZ</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu bottom left v-if="dynamic=='black'">
                <template v-slot:activator="{ on }">
                    <v-icon dark icon v-on="on">drag_indicator</v-icon>
                </template>
                <v-list>
                    <v-list-item v-for="(item, i) in items" :key="i" @click="botonMenu(i)" >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-menu bottom left v-if="dynamic!='black'">
                <template v-slot:activator="{ on }">
                    <v-icon ligth icon v-on="on">drag_indicator</v-icon>
                    <!-- <v-icon light icon v-on="on" v-if="dynamic!='black'" >drag_indicator</v-icon> -->
                </template>
                <v-list>
                    <v-list-item v-for="(item, i) in items" :key="i" @click="botonMenu(i)" >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
        <v-dialog v-model="dialogMessage" max-width="290">
            <v-card>
                <v-card-title class="headline">OOPS!</v-card-title>
                <v-card-text>{{message}}</v-card-text>
            </v-card>
        </v-dialog>

</div>



</template>
<script>
export default {
  name: 'App',
  data: () => ({
        channels:[],
        user:{
            name:'',
            surname1:'',
            surname2:'',
            email:'',
            phone:'',
            picture:'',
            rol:'',
        },
        items: [
            { title: 'Mi Perfil' },
            { title: 'Asociar a facebook' },
            { title: 'Cerrar Session' },
        ],
        drawerlogin: null,
        dynamic: 'black',
        dialogMessage: false,
        message:'',
        menuprueba:{
            'Eventos':
            [
                ['Mis Eventos', 'web_asset','trending_up']
            ],
            'Unifranz TV':
            [
                ['Programación', 'flight','add']
            ],
            'Talleres':
            [
                ['Souvenirs', 'local_mall',''],
                ['Ajustes', '',''],
            ],
            'Souvenirs':
            [
                ['Convenios', 'thumbs_up_down',''],
                ['Categorias de convenios', 'thumbs_up_down',''],
                ['Notificaciones de Convenios', '',''],
            ],
            'Convenios de Beneficios':
            [
                ['Información de Casos', '',''],
                ['Mapa de ayuda', '',''],
                ['Contactos de ayuda', '',''],
                ['Registros Atendidos', '',''],
                ['Quiz', '',''],
                ['Test de evaluación', '',''],
                ['Afluencia de personas', '',''],
                ['Cooperaciones', '',''],
            ],

        },
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
        this.getTypesEvents();
        this.getDataUser();
        this.getChannels();
    },
    methods:{
        getTypesEvents(){
            this.$http.get('types/events',{headers: { Authorization: 'Bearer '+localStorage.getItem('user_token')}})
            .then((result) => {
                console.log(result.data)
                for (let i = 0; i < result.data.length; i++) {
                    this.menuprueba.Eventos.push(['Evento '+result.data[i].tevn_name, 'web_asset','trending_up'])
                }
            })
        },
        getChannels(){
            this.$http.get('channels',{headers: { Authorization: 'Bearer '+localStorage.getItem('user_token')}})
            .then((result) => {
                console.log(result.data)
                for (let i = 0; i < result.data.length; i++) {
                    this.menuprueba['Unifranz TV'].push(['Canal '+result.data[i].chn_name, 'web_asset','trending_up'])
                    this.channels.push('Canal '+result.data[i].chn_name)
                }
            })
        },
        getDataUser(){
            this.$http.get(`/user/`+localStorage.getItem('user_id'))
            .then((result) => {
                this.user.name=result.data.usr_full_names;
                this.user.surname1=result.data.usr_surname;
                this.user.picture=result.data.usr_picture;
                this.user.surname2=result.data.usr_second_surname;
                this.user.rol=result.data.pass_role.rls_name
            })
        },
        botonMenu(data){
            console.log(data)
            if (data=='2') {
                this.cerrarSession()
            }
        },
        cerrarSession() {
            localStorage.clear();
            this.$router.push("/");
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
            console.log(title)
            for (let i = 0; i < this.channels.length; i++) {
                if(this.channels[i]==title){
                    localStorage.setItem("channel",title);
                    return this.$router.push("/channel/"+title);

                }
            }
            
            if (title==='Mis Eventos'){return this.$router.push('/events')}
            if (title==='Programación'){return this.$router.push('/programationtv')}
            /* DASHBOARD */
            if (title==='Dashboard General'){return this.$router.push('/dashboard')}
            if (title==='Dashboard Eventos'){return this.$router.push('/dashboardEvent')}
            if (title==='Dashboard Souvenirs'){return this.$router.push('/dashboarSouvenirs')}
            if (title==='Dashboard Convenios'){return this.$router.push('/DashboardAgreement')}
            if (title==='Dashboard COVID-19'){return this.$router.push('/dashboardCovid')}
            if (title==='Dashboard Aplicación Movil'){return this.$router.push('/dashboardApp')}
            /* GESTIÓN DE EVENTOS */
            if (title==='Eventos'){return this.$router.push('/event')}
            if (title==='Actividades'){return this.$router.push('/activities')}
            if (title==='Encuestas'){return this.$router.push('/survey')}
            if (title==='Tipos de respuestas'){return this.$router.push('/typeAnswers')}
            if (title==='Emojis'){return this.$router.push('/emojis')}
            if (title==='Calendario'){return this.$router.push('/calendar')}
            if (title==='Notificaciones de Eventos'){return this.$router.push('/notification')}
            /* GESTIÓN DE INVENTARIOS */
            /* GESTIÓN DE CONVENIOS */
            if (title==='Convenios'){return this.$router.push('/agreement')}
            if (title==='Categorias de convenios'){return this.$router.push('/categoryAgreement')}
            if (title==='Notificaciones de Convenios'){return this.$router.push('/notificationAgreement')}
            /* MONITOREO COVID-19 */
            /* GESTIÓN DE TALLERES */
            /* REPORTES */
            /* GESTIÓN DE USUARIOS */
            if (title==='Usuarios'){return this.$router.push('/users')}
            if (title==='Roles y Permisos'){return this.$router.push('/rolespermisions')}
            /* CONFIGURACIÓN DEL PASAPORTE UNIFRANZ */
        },
    }
};
</script>
<style>
.titlewhite{
  color: #f2f2f2
}
.scrollbar
{
	float: left;
	height: 98%;
	overflow-y: scroll;
}
</style>