const pagination = {};
const PaginationComponent = require('@/components/pagination');

pagination.install = (Vue) => {
  Vue.component('pagination-component', PaginationComponent);
};
module.exports = pagination;
