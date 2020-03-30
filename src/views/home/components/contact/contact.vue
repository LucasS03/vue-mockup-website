<template>
  <div class="contact">
    <div class="row">
      <div class="message col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <label for="mail" class="mb-0">Your mail</label>
        <input type="text" id="mail" class="mb-2" placeholder="Example: your@mail.com">

        <label for="subject" class="mb-0">Subject</label>
        <input type="text" id="subject" class="mb-2" placeholder="Example: I want to hire your service">

        <label for="message" class="mb-0">Message</label>
        <textarea id="message" class="mb-2" placeholder="Hi, I want to hire your service"></textarea>

        <button class="btn btn-success w-100">Send</button>
      </div>
      <div class="social col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <h4>Our social networks</h4>

        <div class="social-networks">
          <a v-for="(item, index) in Object.keys(social)" :key="index"
            data-toggle="tooltip" data-placement="bottom" :title="`Our ${item}`"
            v-show="social[item]" 
            :href="social[item]" 
            target="_blank">
            <i :class="`mdi mdi-${item}`"></i>
          </a>
        </div>

        <div class="mail mt-3">
          <i class="mdi mdi-email"></i> 
          <span>{{ social.mail }}</span>
        </div>
        <div class="address">
          <i class="mdi mdi-map-marker"></i>
          <span>{{ social.address }}</span>
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
    }
  }
}
</script>

<style lang="scss">
$custom-green:  #28a745;
$custom-black: #343a40;
$custom-white: #ffffff;
$custom-grey:  #f6f6f6;

.contact {
  padding: 10px;

  .row {
    .message {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      label,
      button {
        font-size: 18px;
      }

      input, 
      textarea {
        width: 100%;
        padding: 10px;
        resize: none;
        border: 1px solid #CCC;
        border-radius: 3px;
        font-size: 16px;

        &:focus,
        &:active {
          outline-color: rgba($color: $custom-green, $alpha: 0.5);
        }
      }
    }
    .social {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      i {
        font-size: 28px;
        color: $custom-black;
        margin-right: 5px;
        transition: all 0.3s;

        &:hover {
          color: $custom-green;
        }
      }
      
      .mail, .address {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        cursor: default;
        font-size: 18px;
        text-align: start;

        i.mdi-content-copy {
          font-size: 18px;
        }
      }
    }
    @media(max-width: 767px) {
      .social {
        margin-top: 30px;
      }
    }
  }

  p {
    a {
      color: $custom-green;
    }
  }
}
</style>