export default {
  // add(context, val) {
  //   context.commit('add', val);
  // },
  // substract(context, val) {
  //   context.commit('substract', val);
  // },
  addOdd({commit,state}, val) {
    if (state.sum % 2 != 0) {
      commit('add', val);
    }
  },
  addWait({commit}, val) {
    setTimeout(() => {
      commit('add', val);
    }, 1000);
  },
};
