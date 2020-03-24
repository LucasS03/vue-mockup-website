<template>
  <transition name="sh-fade-transition">
    <div v-if="value" class="sh-modal">
      <div class="sh-modal-bg" @click="persistent ? null : close()"></div>
      <div class="sh-modal-content">
        <slot />
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
.sh-modal {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999999;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &,
  &-bg {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  &-bg {
    position: absolute;
  }

  &-content {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 1em;
    max-height: 100%;
    user-select: text;
    z-index: 1;
  }

  &-opened {
    overflow: hidden !important;
  }
}

.sh-dialog {
  background: #fff;
  border-radius: 0.25em;
  display: inline-flex;
  flex-direction: column;
  max-height: 100vh;

  &-header {
    padding: 0.5em 0.75em;
    display: flex;
    border-bottom: 1px solid #e0e0e0;
  }

  &-title {
    flex: 1;
    margin: 0.25em 0;
  }

  &-body {
    flex: 1;
    overflow: auto;
  }

  &-footer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0.5em;

    .btn {
      margin-left: 0.25em;
    }
  }
}

.sh-fade-transition {
  &-enter-active,
  &-leave-active {
    &,
    .sh-modal-content {
      transition: transform 0.21s, opacity 0.21s;
    }
  }
  &-enter,
  &-leave-to {
    opacity: 0;
    .sh-modal-content {
      transform: translateY(-4em);
    }
  }
}
</style>

<script>
export default {
  name: "ShModal",
  props: {
    value: Boolean,
    persistent: Boolean
  },
  watch: {
    value() {
      this.updateModal();
    }
  },
  created() {
    document.addEventListener('keyup', this.keyesc);
  },
  mounted() {
    this.updateModal();
  },
  destroyed() {
    document.removeEventListener('keyup', this.keyesc);
    document.body.classList.remove("sh-modal-opened");
  },
  methods: {
    keyesc(evt) {
      if(evt.keyCode === 27) this.close()
    },
    updateModal() {
      if (this.value) {
        document.body.classList.add("sh-modal-opened");
      } else {
        document.body.classList.remove("sh-modal-opened");
      }
    },
    close() {
      this.$emit("input", false);
    },
    open() {
      this.$emit("input", true);
    }
  }
};
</script>