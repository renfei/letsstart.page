<template>
  <v-app>
    <v-app-bar
      app
    >
      <v-avatar
        color='grey darken-1'
        size="32"
      >
        <img
          src="../static/letsstart.page.png"
          alt="John"
        >
      </v-avatar>
      <v-toolbar-title class="ml-1">Let's Start.Page</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        centered
        dense
        flat
        hide-details
        rounded
        solo-inverted
        v-model="searchText"
        :label="this.$t('search')"
      >
        <template v-slot:append>
          <v-fade-transition leave-absolute>
            <v-menu
              offset-y
              bottom
              left
              open-on-hover
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-text>
                  <v-container>
                    <v-btn depressed class="mr-1 mb-1" @click="search('google')">{{$t('google')}}</v-btn>
                    <v-btn depressed class="mr-1 mb-1" @click="search('baidu')">{{$t('baidu')}}</v-btn>
                    <v-btn depressed class="mr-1 mb-1" @click="search('bing')">{{$t('bing')}}</v-btn>
                    <v-btn depressed class="mr-1 mb-1" @click="search('stack_overflow')">{{$t('stack_overflow')}}</v-btn>
                    <v-btn depressed class="mr-1 mb-1" @click="search('github')">{{$t('github')}}</v-btn>
                    <v-btn depressed class="mr-1 mb-1" @click="search('gitee')">{{$t('gitee')}}</v-btn>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-menu>
          </v-fade-transition>
        </template>
      </v-text-field>
      <v-spacer></v-spacer>
      <v-btn
        icon
        href="https://github.com/renfei/letsstart.page"
        target="_blank"
        rel="nofollow"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-menu
        offset-y
        open-on-hover
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-translate</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="locale in availableLocales"
            :key="locale.code"
          >
            <v-list-item-title>
              <nuxt-link
                :to="switchLocalePath(locale.code)"
                style="color: #000000;text-decoration: none;display: block;">
                {{ locale.name }}
              </nuxt-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <nuxt/>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      searchText: ''
    }),
    methods: {
      search(type) {
        switch (type) {
          case 'baidu':
            window.open("https://www.baidu.com/s?wd=" + this.searchText);
            break;
          case 'bing':
            window.open("https://www.bing.com/search?q=" + this.searchText);
            break;
          case 'stack_overflow':
            window.open("https://stackoverflow.com/search?q=" + this.searchText);
            break;
          case 'github':
            window.open("https://github.com/search?q=" + this.searchText);
            break;
          case 'gitee':
            window.open("https://search.gitee.com/?q=ddd" + this.searchText);
            break;
          case 'google':
          default:
            window.open("https://www.google.com/search?q=" + this.searchText);
            break;
        }
        this.searchText = '';
      },
    },
    computed: {
      availableLocales() {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
      },
    },
    mounted() {

    },
  }
</script>
