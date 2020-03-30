<template>
  <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 custom-card">
    <div class="h-100 w-100 content">
      <div class="header">
        <h4>{{ title }}</h4>
      </div>
      <div class="body">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
$custom-blue:  #007bff;
$custom-black: #343a40;
$custom-white: #ffffff;
$custom-grey:  #f6f6f6;

.custom-card {
  padding: 20px 20px;
  
  .content {
    flex: 1;
    background-color: #ffffff;
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
        background-color: #343a40;
      }
    }
    .body {
      padding: 10px;
    }
  }
}
</style>