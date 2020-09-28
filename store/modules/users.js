export default {
    actions: {
        async fetchUsers(ctx) {
            const res = await fetch('https://mikshin.github.io/NEtelegram/assets/users.txt');
            const users = await res.json();
            
            ctx.commit('updateUsers', users)
        }
    },
    mutations: {
        updateUsers(state, users) {
            state.users = users
        }
    },
    state: {
        users: [] 
    },
    getters: {
        getUsers(state) {
            return state.users
        }
    }
}