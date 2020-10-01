export default {
    actions: {
        async fetchMessages(ctx) {
            const res = await fetch('https://mikshin.github.io/NEtelegram/assets/messageStorage/messages@1.txt');
            const messages = await res.json();
            
            ctx.commit('updateMessages', messages)
        }
    },
    mutations: {
        updateMessages(state, messages) {
            state.messages = messages
        }
    },
    state: {
        messages: [] 
    },
    getters: {
        getMessages(state) {
            return state.messages
        }
    }
}