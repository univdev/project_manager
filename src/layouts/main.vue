<style lang="less" scoped>
  #projectManager {
    width: 100%;
    height: 100%;
  }
  .header {
    background: white;
    height: 58px;
    align-items: center;
    display: flex;
    padding: 0 24px;
  }
  .header-title {
    flex: 1;
    font-weight: bold;
    letter-spacing: -.04em;
    font-size: 1.2em;
  }
  .content {
    height: calc(100% - 58px);
  }
  .fade-enter-active {
    transition: all .5s;
  }
  .fade-leave-active {
    transition: all .5s;
  }
  .fade-enter,
  .fade-leave-to {
    transform: translateX(40px);
    opacity: 0;
  }
</style>

<template lang="pug">
  #projectManager
    .header
      .header-title
        router-link(:to='{ name: `main` }') PROJECT MANAGER
      .header-options
        el-button(
          type='success'
          native-type='button'
          @click='modalToggle({ name: `login`, status: true })') 로그인
    .content
      transition(
        name='fade'
        mode='out-in')
        router-view
</template>

<script>
export default {
  data() {
    return {
      modal: {
        login: false,
      },
    };
  },
  methods: {
    modalToggle(data) {
      const name = data.name || null;
      const status = data.status || false;
      if (name !== null) {
        this.modal[name] = status;
      } else {
        Object.keys(this.modal).forEach((key) => {
          this.modal[key] = false;
        });
      }
    },
  },
  mounted() {

  },
};
</script>
