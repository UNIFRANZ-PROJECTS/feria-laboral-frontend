<template>
  <v-app id="inspire" style="background: #f4f6f9">

      <v-sheet dark>
        <v-img
          src="https://i.pinimg.com/originals/68/ae/bf/68aebf4c71bd1d6090f87237272b01e5.gif"
          height="100vh"
          width="100vw"
        >
          <v-container class="fill-height">
            <v-row align="center" justify="center">
              <v-col class="text-center">
                <h3 class="display-2">
                  <span class="welcome">
                    Bienvenido
                  </span>
                </h3>
                <h3 class="display-3">
                  <h1 class=" my-8 welcome">
                  UNIFRANZ LABORAL
                  </h1>
                </h3>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </v-sheet>

      <v-container>
        <v-sheet color="transparent" id="SERVICIOS">
          <div class="pt-12 text-center">
            <h1 class="welcome">
              EMPRESAS
            </h1>
            <p class="my-3">
              <span class="welcome">
                Convenio de empresas
              </span>
            </p>
          </div>
                <v-sheet
                    class="mx-auto"
                    elevation="8"
                    max-width="1000"
                    max-height="960"
                  > 
                  <div max-width="200"
                  max-height="100">
                    <slide :data="slide" />
                </div>

                  </v-sheet>
                  <br>
                  <br>
          <v-row justify="center" align="center" class="mt-5">
            <v-col
              cols="12"
              md="4"
              v-for="(item, i) in services"
              :key="i"
              class="text-center"
            >
              <v-icon size="128" color="colorUnifranz">
                {{ item.icon }}
              </v-icon>
              <h4 class="title my-2">
                {{ item.title }}
              </h4>
              <p>
                {{ item.subtitle }}
              </p>
            </v-col>
          </v-row>
        </v-sheet>
      </v-container>

      <v-sheet id="PORTAFOLIO">
        <v-container>
          <div class="pt-12 text-center">
            <h3 class="display-1 font-weight-blod">
              TALENTOS DESTACADOS
            </h3>
            <p class=" my-3">
              <span class="welcome">
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </p>

            <v-row align="center" justify="center" class="mt-5">
              <v-col cols="12" md="4" v-for="(item, i) in 6" :key="i">
                <v-img
                  src="https://cdn.pixabay.com/photo/2020/05/06/12/01/compass-5137269_1280.jpg"
                >
                </v-img>

                <h4 class="title mt-2">
                  Threads
                </h4>
                <p>
                  <span class="welcome">
                    Illustration
                  </span>
                </p>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </v-sheet>

      <v-sheet color="transparent" id="ABOUT">
        <v-container>
          <div class="pt-12 text-center">
            <h3 class="display-1 font-weight-blod">
              ABOUT
            </h3>
            <p class=" my-3">
              <span class="welcome">
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </p>
          </div>

          <v-timeline>
            <v-timeline-item v-for="(n, i) in 4" :key="i" large>
              <template v-slot:icon>
                <v-avatar>
                  <img src="https://i.pravatar.cc/64" />
                </v-avatar>
              </template>
              <template v-slot:opposite>
                <span>2009-2011</span>
              </template>
              <v-card flat color="transparent">
                <v-card-title class="headline"
                  >Our Humble Beginnings</v-card-title
                >
                <v-card-text class="welcome">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  ut voluptatum eius sapiente, totam reiciendis temporibus qui
                  quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                  dolore laudantium consectetur!
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-container>
      </v-sheet>

      <v-sheet id="EQUIPO">
        <v-container>
          <div class="pt-12 text-center">
            <h3 class="display-1 font-weight-blod">
              OUR AMAZING TEAM
            </h3>
            <p class="my-3">
              <span class="welcome">
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </p>
          </div>
          
          <div background-color="primary">
        <material-card class="v-card-profile">
          <v-avatar
            slot="offset"
            class="mx-auto d-block"
            size="130"
          >
            <img
              src="https://bookingagentinfo.com/wp-content/uploads/2014/12/Travis-Scott-Contact-Information.jpg"
            >
          </v-avatar>
          <v-card-text class="text-xs-center">
            <h6 class="category text-gray font-weight-thin mb-3">CEO / CO-FOUNDER - Astroworld</h6>
            <h4 class="card-title font-weight-light">Travis Scott</h4>
            <p class="card-description font-weight-light">You wrote that yourself? wow congrats dude, really, that's very cool.
            i just told everyone in my family about it, everybody thinks that's very impressive and asked me to congratulate you.
            they want to speak to you in person, if possible, to give you their regards.
            they also said they will tell our distant relatives in christmas supper and in NYE they will ignite fireworks that spell your name.
            i also told about this enormous deed to closer relatives, they had the same reaction. they asked for your address so they can send congratulatory cards and messages.
            my friends didn't believe me when i told them i knew the author of this gigantic feat, really, they were dumbstruck, they said they will make your name echo through years and years to come.
            when my neighbour found out about what you did, he was completely dumbstruck too, he wanted to know who you are and he asked (if you have the time, of course) if you could stop by to receive gifts, congratulations and handshakes.
            with the spreading of the news, a powerful businessman of the area decided to hire you as the CEO of his company because of this tremendous feat and at the same time an important international shareholder wants to sponsor you to give speeches
            and teach everybody how to do as you did so the world becomes a better place. you have become famous not only here but also everywhere, everybody knows who you are. the news spread really fast and mayors of all cities are setting up
            porticos, ballons, colossal boom speakers, anything that can make your name stand out more and see which city can congratulate you the hardest for this magnificent feat.</p>
            <v-btn
              color="general"
              round
              class="font-weight-light"
               @click="dialogFreq = !dialogFreq"
            >Ver Video</v-btn>
          </v-card-text>
        </material-card>
     
        </div>
        </v-container>
      </v-sheet>

      <v-sheet dark id="CONTACTOS">
        <v-img
          src="https://static-map.tesla.com/v1/map?screen_type=desktop&map_type=world"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        >
          <v-container class="fill-height">
            <v-row justify="center" align="center" class="mt-5">
              <v-col cols="12">
                <div class="pt-12 text-center">
                  <h3 class="display-1 font-weight-blod">
                    CONTACTOS
                  </h3>
                  <p class="my-3">
                    <span class="welcome">
                      Lorem ipsum dolor sit amet consectetur.
                    </span>
                  </p>
                </div>
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field label="Your Name*" solo light></v-text-field>
                <v-text-field label="Your Email*" solo light></v-text-field>
                <v-text-field label="Your Phone*" solo light></v-text-field>
              </v-col>

              <v-col cols="12" md="6" class="fill-height">
                <v-textarea
                  light
                  outlined
                  solo
                  name="input-7-4"
                  label="Your Message*"
                ></v-textarea>
              </v-col>

              <v-col cols="12" class="text-center">
                <v-btn x-large color="colorUnifranz">
                  Send Message
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-img>
      </v-sheet>
      <v-dialog v-model="dialogFreq" persistent max-width="800px">
      <v-card light>
      <div>

    <v-row no-gutters>
      <v-col
        
       cols=8
      >
        <videoComponent>
        </videoComponent>
      </v-col>
      <v-col
       
        
        cols=4
      >
        <v-card
          class="pa-2"
          tile
          outlined
        >
        jose
        </v-card>
      </v-col>
    </v-row>
      </div>
    
  <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialogFreq = false"
            >Cerrar</v-btn
          >
        </v-card-actions>
        </v-card>
    </v-dialog>
    <v-footer>
      <v-container>
        <v-row align="center" justify="space-between">
          <v-col>
            <div>
              Copyright &copy; Your Website {{ new Date().getFullYear() }}
            </div>
          </v-col>

          <v-col class="text-center">
            <div>
              <v-btn icon color="primary">
                <v-icon>
                  mdi-twitter
                </v-icon>
              </v-btn>
              <v-btn icon color="primary">
                <v-icon>
                  mdi-facebook
                </v-icon>
              </v-btn>
              <v-btn icon color="primary">
                <v-icon>
                  mdi-instagram
                </v-icon>
              </v-btn>
            </div>
          </v-col>

          <v-col class="text-right">
            <a text class="colorUnifranz--text">
              Privacy Policy
            </a>
            <a text class="pl-2 colorUnifranz--text">
              Terms of Use
            </a>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import slide from '@wyhaya/vue-slide'
import videoComponent from './../components/videoComponent';
export default {
  components: {
    slide,
    videoComponent,
  },
  data: () => ({
    slide: [ require("./../assets/img/empresas/pizza_elis.jpg"), require("./../assets/img/empresas/monje_campero.jpg"), require("./../assets/img/empresas/totto.jpg")],
    model: null,
    dialog: false,
    dialogFreq: false,
    drawer: null,
    btnCard: [
      "PIL",
      "DELIZIA",
      "TIGO",
      "ENTEL",
      "ELIS",
      "PANDA",
      "VIVA",
      "AXS",
      "SAMSUNG",
      "MOTOROLA"
      ],
    btnItems: ["SERVICIOS", "PORTAFOLIO", "EQUIPO", "CONTACTOS","EMPEZAR"],
    services: [
      {
        icon: "mdi-store",
        title: "E-Commerce",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
      },
      {
        icon: "mdi-laptop",
        title: "Responsive Design",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
      },
      {
        icon: "mdi-lock",
        title: "Web Security",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
      },
    ],
  }),
};
</script>

<style lang="scss">
.display-2,
.welcome {
    font-family: 'unifranz';
    src:  url('./../assets/tipoletra.otf');
    font-weight: 700;
  }
@font-face {
  font-family: 'unifranz';
  src:  url('./../assets/tipoletra.otf');
}
.v-card-profile {
  background-color: black;
  display: inline-block;

  .v-card__text .v-card__text {
    padding-bottom: 0;
    color: white;
  }

  .v-card__text {
    padding: center;
    color: white;
  }
  .divCarousel{
    max-width:1000;
    max-height:960;
  }
  
}
</style>
