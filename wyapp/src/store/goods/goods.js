import http from '../../api/http'
import {DATA_API} from '../../api/url'

export default({
  namespaced:true,
  state: {
      alldata:[],
      loadingdata:false
  },
  mutations: {
    setdatas(state,payload){
        state.alldata=payload;
    }
  },
  actions: {
      async requestdata(context){
          const {data:{data}} = await http.get(DATA_API);
          const result = data.categoryList.map(({id,name})=>({
            id,
            name
          }));
          context.commit('setdatas',{alldata:result});
      }
  },
  modules: {
  }
})
