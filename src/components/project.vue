<style lang="less" scoped>
  .project-component {
    background: white;
    border-radius: 4px;
    width: 100%;
  }
  .project-detail-container {
    padding: 16px;
  }
  .project-row {
    display: flex;
    flex-wrap: wrap;
  }
  .project-small-text {
    font-size: 12px;
  }
  .project-large-text {
    font-weight: bold;
    letter-spacing: -.04em;
  }
  .project-progress-row {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: .9em;
    margin-top: 8px;
  }
  .progress {
    width: 100%;
  }
  .project-date-info {
    font-size: .9em;
    padding: 12px 16px;
    background: rgb(224, 224, 224);
    margin-top: 8px;
  }
  .project-left-days {
    font-weight: bold;
  }
</style>

<template lang="pug">
  .project-component
    .project-detail-container
      .project-row
        .project-small-text.w10 {{type}}
        .project-large-text.w10 {{name}}
      .project-row
        .project-progress-row
          div.__standard {{percentage | percentage}}
          div {{completedQuestCount}}/{{questCount}}
        .w10
          el-progress.progress(
            :percentage='percentage'
            :text-inside='true'
            :color='progressColor')
    .project-row.project-date-info
      .project-left-days.__standard {{leftDays}}
      .project-end-date {{endDate | date}}
</template>

<script>
import moment from 'moment';

moment.locale('ko');

export default {
  props: {
    type: {
      type: String,
      default: '프로젝트 타입',
    },
    name: {
      type: String,
      default: '프로젝트 제목',
    },
    endDate: {
      type: String,
      default: '1970-01-01',
    },
    missions: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      progressColor: null,
    };
  },
  created() {
    this.progressColor = '#'.concat(this.randomColor());
  },
  computed: {
    questCount() {
      return this.missions.length;
    },
    completedQuestCount() {
      return this.missions.filter(mission => mission.done).length;
    },
    percentage() {
      if (this.questCount <= 0) {
        return 0;
      }
      return (this.completedQuestCount / this.questCount) * 100;
    },
    leftDays() {
      return moment(this.endDate, 'YYYYMMDD').fromNow();
    },
  },
  filters: {
    percentage(value) {
      return String(Math.floor(value)).concat('%');
    },
    date(date) {
      return moment(date).format('YYYY.MM.DD');
    },
  },
};
</script>
