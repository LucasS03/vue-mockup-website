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
</style>