import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadData: [],
    },
    mutations: {
      setPostState(state, post) {
        state.loadData = post
      },
      addProductState(state, product) {
        state.loadData.push(product)
      },
      editProductState(state, editproduct) {
        const productIndex = state.loadData.findIndex(
          product => product.id === editproduct.id
        )
        state.loadData[productIndex] = editproduct
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get(
            'https://testapp-78bf9-default-rtdb.asia-southeast1.firebasedatabase.app/products.json'
          )
          .then((res) => {
            const data = []
            for (const key in res.data) {
              data.push({ ...res.data[key], id: key })
            }
            vuexContext.commit('setPostState', data)
          })
          .catch((e) => context.console.error(e))
      },
      addProduct(vuexContext, product) {
        const createProduct = { ...product }
        return axios
          .post(
            'https://testapp-78bf9-default-rtdb.asia-southeast1.firebasedatabase.app/products.json',
            createProduct
          )
          .then((res) => {
            vuexContext.commit('addProductState', {
              ...createProduct,
              id: res.data.name,
            })
          })
      },
      editProduct(vuexContext,product) {
        return axios.
        put("https://testapp-78bf9-default-rtdb.asia-southeast1.firebasedatabase.app/products/"+product.id +".json",product)
          .then((res) => {
            vuexContext.commit("editProduct",product)
          })
      },
    },

    getters: {
      getAllproducts(state) {
        return state.loadData
      },
    },
  })
}

export default createStore
