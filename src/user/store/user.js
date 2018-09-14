export default {
    getters: {
        isLoggedIn(state, getters, rootState) {
            return rootState.isLoggedIn
        }
    },
    actions: {
        login({ state, actions, rootState }) {
            alert('isLoggedIn đã được kích hoạt' + rootState.isLoggedIn)
            rootState.isLoggedIn = true
        },
        logout({ state, actions, rootState }) {
            alert('isLoggedIn đã được kích hoạt' + rootState.isLoggedIn)
            rootState.isLoggedIn = false
        }
    }
}
