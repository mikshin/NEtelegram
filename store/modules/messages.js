export default {
    actions: {
        async fetchMessages(ctx, userId = '1') {
            const res = await fetch('https://mikshin.github.io/NEtelegram/assets/messageStorage/messages@' + userId + '.txt');
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