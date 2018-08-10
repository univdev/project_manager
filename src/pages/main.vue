<style lang="less" scoped>
  .container {
    padding: 16px 0;
  }
  .search-form {
    display: flex;
  }
  .search-input {
    margin-right: 16px;
  }
  .project-list-col {
    margin-top: 16px;
  }
  @keyframes ProjectComponent {
    from {
      margin-top: -20px;
      opacity: 0;
    }
    to {
      margin-top: 0px;
      opacity: 1;
    }
  }
  .project-component {
    animation-name: ProjectComponent;
    animation-duration: .7s;
    animation-fill-mode: forwards;
    box-shadow: 0 0 6px rgba(0, 0, 0, .12);
    margin-top: -20px;
    opacity: 0;
    cursor: pointer;
  }
</style>

<template lang="pug">
  .container
    form.search-form(@submit.prevent='submit')
      el-input.search-input(placeholder='프로젝트 이름' v-model='search.q')
        template(slot='prepend') 검색
      el-button(type='default', native-type='submit') 검색
    .grid-row
      .grid-col.col-lg-4.project-list-col(v-for='(data, key) in 4')
        project-component.project-component(
          :style='{ "animation-delay" : (0.2 * key) + "s" }'
          @click.native='redirect({ path: `/test` })')
</template>

<script>
import ProjectComponent from '@/components/project';

export default {
  async mounted() {
    this.projects = await this.loadProjects();
  },
  data() {
    return {
      projects: [],
      search: {
        q: null,
      },
    };
  },
  methods: {
    async submit() {
      const query = {
        q: this.search.q,
      };
      this.$router.push({ query });
      this.projects = await this.loadProjects();
    },
    async loadProjects() {
      return [];
    },
    redirect(route) {
      this.$router.push(route);
    },
  },
  components: {
    ProjectComponent,
  },
};
</script>
