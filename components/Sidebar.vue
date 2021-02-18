<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card
          outlined
        >
          <v-card-title class="text-center" style="display: inherit;" v-text="nowTime">23:10:36</v-card-title>
          <v-card-subtitle class="text-center" v-text="nowDate">2021-02-18</v-card-subtitle>
        </v-card>
        <v-card
          outlined
          class="mt-2"
        >
          <v-card-title>{{$t('news')}}</v-card-title>
          <v-card-subtitle>{{$t('industry_news')}}</v-card-subtitle>
          <v-card-text>
            {{$t('no_news_source')}}<br>i@renfei.net
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import moment from 'moment'

  export default {
    data: () => ({
      timer: '',
      nowTime: '00:00:00',
      nowDate: '0000-00-00',
    }),
    methods: {
      getNowTime() {
        if (this.$i18n.locale === 'zh') {
          let myDate = new Date()
          let wk = myDate.getDay()
          let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
          let week = weeks[wk]
          this.nowDate = week + ' ' + moment(new Date()).format('YYYY年MM月DD日');
          this.nowTime = moment(new Date()).format('HH:mm:ss');
        } else {
          this.nowDate = moment(new Date()).format('dddd, DD MMMM YYYY');
          this.nowTime = moment(new Date()).format('hh:mm:ss A');
        }
      },
    },
    mounted() {
      this.timer = setInterval(this.getNowTime, 1000);
    },
    beforeDestroy() {
      clearInterval(this.timer);
    },
    computed: {
      loadDateTime() {

      }
    }
  }
</script>
