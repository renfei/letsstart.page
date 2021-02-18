<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="12"
        lg="6"
        xl="4"
        v-for="(item,key) in webSiteList"
        :key="key"
      >
        <v-card
          outlined
        >
          <v-card-title>{{$t(item.category)}}</v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  :md="$t(webSiteItem.siteName).length<10?'4':($t(webSiteItem.siteName).length<14?'6':'12')"
                  v-for="(webSiteItem,webSiteKey) in item.webSite"
                  :key="webSiteKey"
                >
                  <v-btn block depressed :href="webSiteItem.siteLink" target="_blank">
                    {{$t(webSiteItem.siteName)}}
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      webSiteList: [
        {
          category: 'developer',
          webSite: [
            {
              siteName: 'google_developers',
              siteLink: 'https://developers.google.com',
            },
            {
              siteName: 'apple_developer',
              siteLink: 'https://developer.apple.com',
            },
            {
              siteName: 'android_developer',
              siteLink: 'https://developer.android.com',
            },
            {
              siteName: 'facebook_developers',
              siteLink: 'https://developers.facebook.com',
            },
            {
              siteName: 'twitter_developer',
              siteLink: 'https://developer.twitter.com',
            },
          ]
        },
        {
          category: 'code_repository',
          webSite: [
            {
              siteName: 'github',
              siteLink: 'https://github.com',
            },
            {
              siteName: 'gitlab',
              siteLink: 'https://gitlab.com',
            },
            {
              siteName: 'gitee_repository',
              siteLink: 'https://gitee.com',
            },
            {
              siteName: 'bitbucket',
              siteLink: 'https://bitbucket.org',
            },
            {
              siteName: 'sourceforge',
              siteLink: 'https://sourceforge.net',
            },
            {
              siteName: 'assembla',
              siteLink: 'https://www.assembla.com',
            },
            {
              siteName: 'aws_codecommit',
              siteLink: 'https://aws.amazon.com/codecommit',
            },{
              siteName: 'aliyun',
              siteLink: 'https://code.aliyun.com',
            },
            {
              siteName: 'azure_repos',
              siteLink: 'https://azure.microsoft.com/en-us/services/devops/repos',
            },
          ]
        },
        {
          category: 'community_news',
          webSite: [
            {
              siteName: 'stackoverflow',
              siteLink: 'https://stackoverflow.com',
            },
            {
              siteName: 'stackexchange',
              siteLink: 'https://stackexchange.com',
            },
            {
              siteName: 'cnblogs',
              siteLink: 'https://www.cnblogs.com',
            },
            {
              siteName: 'msdn',
              siteLink: 'https://msdn.microsoft.com',
            },
            {
              siteName: 'csdn',
              siteLink: 'https://www.csdn.net',
            },
          ]
        },
      ]
    }),
  }
</script>
