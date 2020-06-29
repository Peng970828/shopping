import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart:[]
  },
  mutations: {
    //加入购物车
    addCartData(state,obj){
      console.log(obj)
      if (state.cart.length <= 0){
        state.cart.push(obj);
        return
      }
      for (let i = 0 ; i < state.cart.length ; i++){

        if (state.cart[i].iid === obj.iid){
          state.cart[i].count++;
          return;
        }
      }
      state.cart.push(obj)
    },

    //改变选中状态
    changeCheck(state,id){
      for (let i = 0 ; i < state.cart.length ; i++){
        if (state.cart[i].iid === id){
          state.cart[i].checked = !state.cart[i].checked
          return
        }
      }
    },

    //全选
    allCheckedActive(state,val){
      /*if (val){
        for (let i = 0; i<state.cart.length ; i++){
          state.cart[i].checked = true
        }
      }else {
        for (let i = 0; i<state.cart.length ; i++){
          state.cart[i].checked = false
        }
      }*/
      for (let i = 0; i<state.cart.length ; i++){
        state.cart[i].checked = !val
      }

    }
  },
  getters:{
    AllActive(state){
      for (let i = 0 ; i < state.cart.length ; i ++){
        if (state.cart[i].checked === false){
          return false
        }
      }
      return true
    },
  },
  actions: {
  },
  modules: {
  }
})
