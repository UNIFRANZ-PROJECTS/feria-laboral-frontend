<template>
<div>
  <v-card
    class="mx-auto welcome"
    dark
  >
        <v-img
          src="https://i.pinimg.com/originals/19/25/03/1925031eed334ed76162f6d142c59684.gif"
          height="50vh"
          width="100vw"
        >
            <v-card-title>
                <span>{{name}}</span>
            </v-card-title>
        </v-img>

    <v-card-actions>
      <v-list-item class="grow">

        <v-list-item-content>
          <v-list-item-title>MOISES OCHOA</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
            <div class="my-2">
                <v-btn text small @click="pageProfile()">Perfil</v-btn>
            </div>

            <div class="my-2">
                <v-btn text small @click="pagePostulations()">Postularme</v-btn>
            </div>
            <div class="my-2">
                <v-btn text small>Experiencia</v-btn>
            </div>
            <div class="my-2">
                <v-btn icon>
                    <v-icon class="my-2">mdi-heart</v-icon>
                </v-btn>
                <span class="subheading mr-2">256</span>
                <span class="my-2">·</span>
            </div>
            <div class="my-2">
                <v-btn icon>
                    <v-icon class="my-2">mdi-share-variant</v-icon>
                </v-btn>
                <span class="subheading">45</span>
                <span class="my-2">·</span>
            </div>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
        <v-row
      no-gutters
    >
      <v-col
        md="3"
      >
        <v-card
            class="mx-auto welcome" dark
        >
            <v-card-title>Información</v-card-title>
            <v-card-text>
            <div>I'm web developer working in fullstack application. I choose this firm b'coz I love it. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.y</div><br>
            <p>
                Vivo en:
            </p>
            <p>El Alto, Ludovico Bertonio 1084</p><br>
            <p>
                Me uni el:
            </p>
            <p>14 de Agosto del 2020</p><br>
            <p>
                Correo:
            </p>
            <p>moisic.mo@gmail.com</p>
            </v-card-text>
        </v-card>
        <v-card
            class="mx-auto welcome" dark
        >
              <v-card-actions>
                <v-card-title>Mis Postulaciones</v-card-title>
                <v-spacer></v-spacer>
                <v-btn  class="ma-2" rounded @click="myPostulations()">
                  <v-icon>mdi-heart</v-icon> ver más
                </v-btn>
             </v-card-actions>
      <v-row dense>
        <v-col
          v-for="card in cardsPostulations"
          :key="card.title"
          cols=12
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.5)"
              height="200px"
            >
              
              <v-card-actions>
                <v-card-title v-text="card.title"></v-card-title>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon @click="selectVideo(card.title)">
                <v-icon>mdi-eye-outline</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
        </v-card>
                <v-card
            class="mx-auto welcome" dark
        >
            <v-card-title>Galeria</v-card-title>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
        </v-card>
          <v-card
    class="mx-auto"
    max-width="500"
  >
    </v-card>
        </v-col>
            <v-col md="6">
                <v-card class="mx-auto welcome" dark>
                    <v-container>
                        <v-row dense>
                            <v-col
                            cols="12"
                            >
                            <v-card
                            >
                                        <v-card-title class="headline" > ¿En qué proyecto estas trabajando?</v-card-title>
                                            <v-container fluid>
                                            <v-textarea
                                              :rules="rules"
                                              clearable
                                              clear-icon="mdi-cached"
                                              auto-grow
                                              rows="3"
                                              row-height="3"
                                              label="Comienza una publicación"
                                              required
                                              v-model="publication"
                                            ></v-textarea>
                                            </v-container>
                                            <div class="my-2" >
                                                <v-btn v-show="publication!=''" text small @click="Publicar()">Publicar</v-btn>
                                                <v-btn icon>
                                                    <v-icon class="my-2">mdi-camera-plus-outline</v-icon>
                                                </v-btn>
                                                <v-btn icon>
                                                    <v-icon class="my-2">mdi-text-box-plus-outline</v-icon>
                                                </v-btn>
                                                <v-btn icon>
                                                    <v-icon class="my-2">mdi-file-document-edit-outline</v-icon>
                                                </v-btn>
                                            </div>
                            </v-card>
                            </v-col>
                            <v-col
                            v-for="(item, i) in items"
                            :key="i"
                            cols="12"
                            >
                            <v-card
                            >
                                        <v-card-title
                                        class="headline"
                                        v-text="item.title"
                                        ></v-card-title>
                                        <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                                    <v-img :src="item.src" height="300px" v-show="item.src" > </v-img>
                                    <div class="my-2">
                                        <v-btn icon>
                                            <v-icon class="my-2">mdi-heart</v-icon>
                                        </v-btn>
                                        <span class="subheading mr-2">256</span>
                                        <span class="my-2">·</span>
                                        <v-btn icon>
                                            <v-icon class="my-2">mdi-share-variant</v-icon>
                                        </v-btn>
                                        <span class="subheading">45</span>
                                        <span class="my-2">·</span>
                                         <v-btn icon>
                                            <v-icon class="my-2">mdi-message-processing-outline</v-icon>
                                        </v-btn>
                                        <span class="subheading">45</span>
                                        <span class="my-2">·</span>
                                    </div>
                            </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
                  <v-col
        md="3"
      >
        <v-card
            class="mx-auto welcome" dark
        >
              <v-card-actions>
                <v-card-title>Educación</v-card-title>
                <v-spacer></v-spacer>
                <v-btn  class="ma-2" rounded @click="myPostulations()">
                  <v-icon>mdi-heart</v-icon> ver más
                </v-btn>
              </v-card-actions>
      <v-row dense>

        <v-col
          v-for="(item, i) in itemsEducation"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>

              <v-avatar
                class="ma-3"
                size="80"
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
        </v-card>
        <v-card
            class="mx-auto welcome" dark
        >
              <v-card-actions>
                <v-card-title>Licencias y Certificaciones</v-card-title>

              </v-card-actions>
      <v-row dense>

        <v-col
          v-for="(item, i) in itemsEducation"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap">
                            <v-avatar
                class="ma-3"
                size="80"
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
              <div>
                <v-card-title
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>


            </div>
          </v-card>
        </v-col>
      </v-row>
        </v-card>
        </v-col>
        </v-row>
        <v-dialog v-model="dialogProfile" persistent max-width="550">
          <v-card dark  class="welcomeText">
            <v-card-title>Mi Perfil</v-card-title>
            <v-container grid-list-xs>
              <form>
                <v-row align="center">
                  <v-col cols="8" sm="8" md="8" class="d-flex">
                    <v-text-field
                      v-model="profile.name"
                      label="Nombre"
                      readonly
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4" sm="4" md="4">
                    <v-text-field
                      v-model="profile.identityCard"
                      label="Mi número de carnet es:"
                      readonly
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row align="center">
                  <v-col cols="12" sm="12" md="12" class="d-flex">
                    <v-textarea
                      :rules="rules"
                      clearable
                      clear-icon="mdi-cached"
                      auto-grow
                      rows="3"
                      row-height="3"
                      label="Me describo como:"
                      required
                      v-model="profile.description"
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-row align="center">
                  <v-col cols="6" sm="6" md="6" class="d-flex">
                    <v-text-field
                      v-model="profile.carrer"
                      label="Carrera"
                      readonly
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="6" md="6">
                    <v-text-field
                      v-model="profile.semester"
                      label="mi ultimo grado superado es:"
                      readonly
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row align="center">
                  <v-col cols="6" sm="6" md="6" class="d-flex">
                    <v-text-field
                      v-model="profile.sede"
                      label="soy de la UNIFRANZ sede:"
                      readonly
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="6" md="6">
                    <v-text-field
                      v-model="profile.birthDate"
                      label="naci el:"
                      readonly
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row align="center">
                  <v-col cols="6" sm="6" md="6" class="d-flex">
                    <v-text-field
                      v-model="profile.email"
                      label="mi correo es:"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" sm="6" md="6">
                    <v-text-field
                      v-model="profile.contactNumber"
                      label="mi número de contacto es:"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="dialogProfile = false|submit">Cancelar</v-btn>
                  <v-btn color="green darken-1" text @click="dialogProfile = false">Guardar</v-btn>
                </v-card-actions>
              </form>
            </v-container>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogPostulation" persistent max-width="790">
      <v-card dark>
        <v-card-title class="headline">Realizar una nueva postulación</v-card-title>
        <v-card-text>Unifranz Laboral te sugiere subir tu postulación en formato mp4,
        PRESENTACIÓN- Presentate con tu nombre y algo de vos que no figure en tu CV (ej. hobby)
        ESTUDIOS- Qué carrera estas estudiando, en qué año estás y por qué la elegiste
        PRIMER EMPLEO- Indicar, estoy calificado para mi primer empleo formal, cuenta tu experiencia
        POR QUÉ DEBEN CONTRATARTE- Indica porque deben contratarte (aptitudes, personalidad, ventajas)</v-card-text>
                    <form ref="form" @submit.prevent="saveNewInformation,dialogPostulation = false" :v-model="valid" lazy-validation>
              <v-card-text>
                <v-container fluid>
                  <!-- <v-row align="center">
                    <v-col cols="6" sm="6" md="6" class="d-flex">
                      <v-select
                        label="Especialidad"
                        required
                        item-value="id"
                        item-text="spe_name"
                        v-model="Information.id_specialisms"
                      ></v-select>
                    </v-col>
                    <v-col cols="6" sm="6" md="6">
                      <v-select
                        label="Tipo de Información"
                        required
                        item-value="id"
                        item-text="inf_type_name"
                        v-model="Information.id_typ_info"
                      ></v-select>
                    </v-col>
                  </v-row> -->
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field label="Nombre de la postulación" required v-model="Information.inf_name"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6" md="12">
                      <v-text-field label="Describe tu video" required v-model="Information.description"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <v-file-input 
                        outlined prepend-icon="mdi-upload" 
                        multiple label="Agregar Video" 
                        v-model="Information.file" 
                        accept=".mp4"
                      ></v-file-input>
                    </v-col>
                  </v-row>

                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#0AC5D0" text @click="dialogPostulation = false">CANCELAR</v-btn>
                <v-btn color="#0AC5D0" text type="submit">GUARDAR</v-btn>
              </v-card-actions>
            </form>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialogMyPostulations"
      max-width="600"
    >
      <v-card dark>
        <v-card-title class="headline">Mis postulaciones</v-card-title>
          <v-container>

            <v-row dense>
        <v-col
          v-for="card in cardsPostulationsComplete"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-start"
              gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.5)"
              height="200px"
            >
              
              <v-card-actions>
              <v-spacer></v-spacer>
              <v-menu
                transition="slide-x-transition"
                bottom
                right>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on">
                    <v-icon>mdi-blur</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, index) in itemsPosicion"
                    :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>




              <v-btn icon @click="selectVideo(card.title)">
                <v-icon>mdi-eye-outline</v-icon>
              </v-btn>
            </v-card-actions>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
          </v-container>


        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        <v-dialog
      v-model="dialogVideo"
      width="800"
    >
      <v-card dark>
        <v-card-title>
          {{videoSelect.name}}
        </v-card-title>
<v-container>
      <v-row>
        <v-col cols="8" sm="8" md="8">
          <v-text-field label="Nombre de la postulación" required v-model="Information.inf_name"></v-text-field>
        </v-col>
        <v-col cols="4" sm="4" md="4">
          <v-text-field label="Nombre de la postulación" required v-model="Information.inf_name"></v-text-field>
        </v-col>
      </v-row>
</v-container>


        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn icon class="ma-2">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon class="ma-2">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon class="ma-2">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn icon class="ma-2">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="dialogVideo = false"
          >
            cerrar
          </v-btn>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
</template>

<script>
  export default {
    data: () => ({
      publication:'',
      itemsPosicion: [
        { title: 'primero' },
        { title: 'segundo' },
        { title: 'tercero' },
      ],
      videoSelect:{
        name:'',
        description:'',
        url:'',
        especialidad:'',
      },
          Information: {
      id_specialisms: "",
      id_typ_info: "",
      id_user: "",
      inf_name: "",
      inf_link: "",
      inf_state: "",
      description: ""
    },
    dialogVideo:false,
        dialogMyPostulations:false,
        dialogPostulation:false,
        dialogProfile:false,
        name:'</moses>',
        profile:{
          name:'Moises Mauro Ochoa Paredes Candia',
          contactNumber:'73735766',
          email:'moisic.mo@gmail.com',
          alias:'</moses>',
          birthDate:'28/08/1994',
          identityCard:'8312915',
          sede:'La Paz',
          carrer:'Ingenieria de Sistemas',
          semester:'10mo semestre',
          direction:'El Alto Ludovico Bertonio 1084',
          description:'Soy un desarrollador'
        },
        itemsEducation:[
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          title: 'Universidad Privada Franz Tamayo',
          artist: 'Foster the People',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          title: 'Universidad Diego Portales',
          artist: 'Ellie Goulding',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          title: 'Universidad Mayor',
          artist: 'Foster the People',
        },
        ],
        itemsEducationComplete:[
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          title: 'Universidad Privada Franz Tamayo',
          artist: 'Foster the People',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          title: 'Universidad Diego Portales',
          artist: 'Ellie Goulding',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          title: 'Universidad Mayor',
          artist: 'Foster the People',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          title: 'Unidad Educativa Bautista Canadiense',
          artist: 'Ellie Goulding',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          title: 'Unidad Educativa Virgen de Fátima',
          artist: 'Foster the People',
        },
        ],
        items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
          title: 'David Asturizaga',
          artist: 'Foster the People',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          title: 'Gerson Torrez',
          artist: 'Ellie Goulding',
        },
        {
          title: 'Kevin Condori',
          artist: 'Ellie Goulding',
        },
        {
          title: 'Carlos Cahuaya',
          artist: 'Ellie Goulding',
        },
        {
          title: 'Herland Cortez',
          artist: 'Ellie Goulding',
        },
      ],
            cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
            cardsPostulations: [
        { title: 'Developer web', src: 'https://miro.medium.com/max/800/0*kuStHokof8EBB4hY.gif', flex: 12 },
        { title: 'Developer mobile', src: 'https://blog.unboxinnovations.com/wp-content/uploads/2020/04/5hoN.gif', flex: 12 },
        { title: 'IOT', src: 'https://miro.medium.com/max/1620/1*NlCFLqPGsHsj1xMVYE_1cA.gif', flex: 12 },
      ],
      cardsPostulationsComplete: [
        { title: 'Developer web', src: 'https://miro.medium.com/max/800/0*kuStHokof8EBB4hY.gif', flex: 6 },
        { title: 'Developer mobile', src: 'https://blog.unboxinnovations.com/wp-content/uploads/2020/04/5hoN.gif', flex: 6 },
        { title: 'IOT', src: 'https://miro.medium.com/max/1620/1*NlCFLqPGsHsj1xMVYE_1cA.gif', flex: 6 },
        { title: 'Developer web', src: 'https://miro.medium.com/max/800/0*kuStHokof8EBB4hY.gif', flex: 6 },
        { title: 'Developer mobile', src: 'https://blog.unboxinnovations.com/wp-content/uploads/2020/04/5hoN.gif', flex: 6 },
        { title: 'IOT', src: 'https://miro.medium.com/max/1620/1*NlCFLqPGsHsj1xMVYE_1cA.gif', flex: 6 },
      ],
    }),
    mounted(){
        console.log(this.dialog);
    },
    methods:{
        Publicar(){
            var listPublications=[]
            for (let i = 0; i < this.items.length; i++) {
                listPublications.push(this.items[i]);
            }
            this.items=[];
            this.items.push({
                title: 'Moises Ochoa',
                artist: this.publication,
            })
            for (let i = 0; i < listPublications.length; i++) {
                this.items.push(listPublications[i]);
            }
        this.publication='';
        },
        pagePostulations(){
            this.dialogPostulation=true;
        },
        pageProfile(){
          this.dialogProfile=true;
        },
        myPostulations(){
          this.dialogMyPostulations=true;
        },
        selectVideo(data){
          this.videoSelect.name=data
          this.dialogVideo=true
        }
    }
  }
</script>
<style lang="scss">
.welcomeText{
      font-family: 'unifranz';
    font-weight: 300;
}
.welcome {
    font-family: 'unifranz';
    font-weight: 700;
  }
@font-face {
  font-family: 'unifranz';
  src:  url('./../../../assets/tipoletra.otf');
}
</style>