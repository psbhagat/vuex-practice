import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            counter: 0
        };
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 1;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        }

    },
    actions: {
        increment(context) {
            setTimeout(function () {
                context.commit('increment'); //this will call the mutation increment
            }, 2000)
        },
        increase(context, payload) {
            setTimeout(function () {
                context.commit('increase', payload); //this will call the mutation increment
            }, 2000)
        }
    },
    getters: {
        finalCounter(state, getters) {
            console.log(getters);
            return state.counter;
        }
    }
});

export default store;