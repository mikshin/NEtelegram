<template>
    <form @submit.prevent="submit">
        <input type="text" class="text" placeholder="title" v-model="title">
        <input type="text" class="text" placeholder="body" v-model="body">
        <button class="submit">Create</button>
    </form>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    data() {
        return {
            title: '',
            body: ''
        }
    },
    methods: {
        ...mapMutations(['createPost']),
        submit() {
            this.createPost({
                title: this.title,
                body: this.body,
                id: Date.now()
            })
            this.title = this.body = ''
        }
    }
}
</script>