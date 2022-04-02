

// local state
const state = {
  colors:{
    primary: {
     color: '#F9f9f9',
     background: '#5c6bc0'
    },
    success:{
      color: '#F9f9f9',
      background: '#198754'
     },
     danger:{
      color: '#F9f9f9',
      background: '#dc3545'
     },
     warning: {
       color: '#F9f9f9',
       background: '#ffc107'
     },
     header:{
      color: '#F9f9f9',
      background: '#5c6bc0'
     },
     text:{
      color: '#000000'
     },
  }
};

const getters = {
  getPrimary(state){
    return state.colors.primary
  },
  getSuccess(state){
    return state.colors.success
  },
  getDanger(state){
    return state.colors.danger
  },
  getWarning(state){
    return state.colors.warning
  },
  getHeader(state){
    return state.colors.header
  },
  getText(state){
    return state.colors.text
  }
 
};

const mutations = {
  editColors(state, {colors}) {  
    state.colors = colors
  },
};

const actions = {
 // action se usa para los mutators asyncronos

//   deleteUser({ commit }, userId) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         commit('DELETE_USER', userId);
//         resolve();
//       }, 250);
//     });
//   },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};