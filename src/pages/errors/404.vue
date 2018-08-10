<style lang="less" scoped>
  #error404 {
    text-align: center;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .error-code {
    font-size: 80px;
    font-weight: normal;
    letter-spacing: -.06em;
  }
  .error-message {
    margin-top: -14px;
  }
</style>

<template lang="pug">
  #error404
    .error-container
      h1.error-code 404 Error!
      .error-message 페이지를 찾지 못했습니다.
</template>

<script>
export default {

};
</script>
