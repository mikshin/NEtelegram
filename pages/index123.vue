<template>
	<div id="app">
		<div class="post" v-for="post in posts" :key="post.id">
            <h2>{{post.titile}}</h2>
            <p>{{post.body}}</p>
        </div>
	</div>
</template>

<script>

export default {
    name: "app",
    data() {
        return {
            posts: []
        }
    },
	async mounted() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
        const posts = await res.json();
        this.posts = posts
    }
}

</script>

<style lang="scss">
	
</style>