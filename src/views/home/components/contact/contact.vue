<template>
  <div class="contact">
    <div class="row">
      <div class="message col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <form id="form" action="" class="d-flex flex-column align-items-start w-100">
          <label for="mail" class="mb-0">{{ $t('label.mail') }}</label>
          <input type="text" id="mail" v-model="mail.mail" required="required" class="mb-2" :placeholder="$t('placeholder.mail')">

          <label for="subject" class="mb-0">{{ $t('label.subject') }}</label>
          <input type="text" id="subject" v-model="mail.subject" required="required" class="mb-2" :placeholder="$t('placeholder.subject')">

          <label for="message" class="mb-0">{{ $t('label.message') }}</label>
          <textarea id="message" v-model="mail.message" required="required" class="mb-2" :placeholder="$t('placeholder.message')">></textarea>

          <button @click="send()" type="submit" class="btn btn-success w-100">{{ $t('button.send') }}</button>
        </form>
      </div>
      <div class="social col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <h4>{{ $t('subtitle.contact.social') }}</h4>

        <div class="social-networks">
          <a v-for="(item, index) in Object.keys(social)" :key="index"
            data-toggle="tooltip" data-placement="bottom" :title="`${$t('text.our')} ${item}`"
            v-show="social[item]" 
            :href="social[item]" 
            target="_blank">
            <i :class="`mdi mdi-${item}`"></i>
          </a>
        </div>

        <div class="mail mt-3">
          <i class="mdi mdi-email"></i> 
          <span>{{ contact.mail }}</span>
        </div>
        <div class="address">
          <i class="mdi mdi-map-marker"></i>
          <span>{{ contact.address }}</span>
        </div>
        
      </div>
    </div>
  
    <p class="mt-5">
      2020 
      <a href="http://github.com/LucasS03" target="_blank">Lucas Sena</a>
    </p>

  </div>
</template>

<script>
export default {
  props: {
    social: {
      type: Object,
      required: true
    },
    contact: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      mail: {
        mail: '',
        subject: '',
        message: ''
      }
    }
  },

  methods: {
    send() {
      try {
        var inp = document.getElementById("form");

        if (inp.checkValidity()) {
          // implement your request
          
          this.$toast.success("Message sent");
          this.mail.mail = ''
          this.mail.subject = ''
          this.mail.message = ''
        }
      } catch (error) {
        console.error(error)
        this.$toast.error("There was an error sending your message");
      }
    }
  }
}
</script>

<style lang="scss">
</style>