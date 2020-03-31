<template>
  <div class="about">
    <div class="row m-0">
      <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 about-us">
        <div class="content">
          <div class="header">
            <h4>{{ $t('subtitle.about.about_us') }}</h4>
          </div>
          <div class="body">
            {{ $t('text.about.about_us') }}
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 about-us">
        <div class="content justify-content-between">
          <div>
            <div class="header">
              <h4>{{ $t('subtitle.about.certificates') }}</h4>
            </div>
            <div class="body">
              <div class="certificate text-truncate" v-for="c in certificates" :key="c.id">
                <div class="img-title text-truncate">
                  <img :src="c.photo" :alt="c.alt">
                  <span class="text-truncate">{{ c.title }}</span>
                </div>
                <div class="date ml-2">
                  {{ c.date | date }}
                </div>
              </div>
            </div>
          </div>
          <div class="footer">
            <button class="btn btn-bd-success" @click="$emit('showCertificates')">{{ $t('button.show_more') }}</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row m-0">
      <card :title="$t('subtitle.about.mission')" :description="$t('text.about.mission')"></card>
      <card :title="$t('subtitle.about.values')" :description="$t('text.about.values')"></card>
      <card :title="$t('subtitle.about.vision')" :description="$t('text.about.vision')"></card>
    </div>
  </div>
</template>

<script>
import card from './card'
export default {
  components: {
    card
  },

  props: {
    certificates: {
      type: Array, 
      required: true
    }
  },

  filters: {
    date(data) {
      let date = new Date(data)
      return date.getFullYear()
    }
  }
}
</script>

<style lang="scss">
</style>