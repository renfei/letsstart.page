<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="7"
          lg="7"
          xl="9"
        >
          <v-sheet
            min-height="70vh"
            rounded="lg"
          >
            <Navigation/>
          </v-sheet>
        </v-col>

        <v-col
          cols="12"
          md="5"
          lg="5"
          xl="3"
        >
          <v-sheet
            rounded="lg"
            min-height="268"
          >
            <!--  -->
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
  import Navigation from '../components/Navigation'
  export default {
    components: {
      Navigation
    }
  }
</script>
