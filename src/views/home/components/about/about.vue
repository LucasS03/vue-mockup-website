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
$custom-green:  #28a745;
$custom-black: #343a40;
$custom-white: #ffffff;
$custom-grey:  #f6f6f6;

.about {
  .about-us {
    display: flex;
    padding: 20px 20px;
    
    .content {
      display: flex;
      flex-direction: column;
      flex: 1 !important;
      background-color: $custom-white;
      box-shadow: 0 0 10px rgba($color: $custom-black, $alpha: 0.4);
      border-radius: 3px;

      .header {
        padding-top: 10px;

        &::after { 
          content: "";
          display: block;
          width: 70px;
          height: 1px;
          margin: 5px auto;
          background-color: #0cc967;
        }
      }
      .body {
        display: grid;
        padding: 10px;

        .certificate {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 5px;

          div {
            display: flex;
            flex-direction: row;
            
            &.img-title {
              display: flex;
              flex-direction: row;
              align-items: center;

              img {
                height: 30px !important;
                width: 30px !important;
                border-radius: 15px !important;
              }
            }
            &.date {
              color: rgba($custom-black, $alpha: 0.8)
            }
          }
        }
      }
      .footer {
        padding: 10px;

        button.btn-bd-success {
          width: 100% !important;
          border: 1px solid $custom-green;
          border-radius: 3px;
          color: rgba($custom-black, $alpha: 0.8);
          transition: background-color .5s;
          
          &:hover {
            background-color: rgba($custom-green, $alpha: 0.8);
            color: $custom-white;
            border-color: rgba($custom-green, $alpha: 1);
          }

          &:focus, &:active {
            box-shadow: 0 0 5px rgba($custom-green, $alpha: 0.5);
          }
        }
      }
    }
  }
}
</style>