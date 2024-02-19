import { createStore } from 'vuex'

const store = createStore({
    state: {
        popState : false,
        openURL : []
    },

    getters : {
        getPopState: function(state) {
            return state.popState;
        },
        getURL: function(state) {
            return state.openURL
        }
    },

    mutations : {
        popStateChange : function(state, value){
            state.popState = value;
        },
        urlStateAdd: function(state,value){
            state.openURL.push(value);
        },
        urlStateChange : function(state,value) {
            let filtered = state.openURL.filter((element) => element !== value);
            state.openURL = filtered
        }
    }
})

export default store;