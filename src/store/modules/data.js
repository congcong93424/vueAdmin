const data = {
  state: {
    footpic: 'assets/foot.png',
  },
  mutations: {
    GET_FOOT_PIC: (state, footpic) => {
      state.footpic = footpic
    }
  },
  actions: {
    getFootPic({ commit }, footpic) {
      commit('GET_FOOT_PIC', footpic)
    }
  }
}

export default data
