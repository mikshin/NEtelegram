<template>
	<!-- <div id="app">
		<postForm/>
		<h1>{{postsCount}}</h1>
		<div class="post" v-for="post in validPosts" :key="post.id">
            <h2>{{post.title}} {{post.id}}</h2>
            <p>{{post.body}}</p>
        </div>
	</div> -->
		<div class="main-container">
			<contactList/>
			<!-- <button class="resize-button"></button> -->
			<messageContainer/>
		</div> 

</template>

<script>
import contactList from '../components/contactList'
import messageContainer from '../components/messageContainer'
import sassStyles from '../styles/variables.scss'
import {mapGetters, mapActions} from 'vuex'
import postForm from '../components/postForm'

export default {
	name: "app",
	components: {
		contactList, messageContainer, postForm
	},
	computed: mapGetters(["validPosts","postsCount"]),
	methods: mapActions(['fetchPosts']),
	async mounted() {
        this.fetchPosts(14);
    }
}

</script>

<style lang="scss">
	body {
		width: var(--window-width);
		height: var(--window-height);
		margin: 0 auto;
		margin-top: 20vh;
		box-shadow: 0 0 5px 1px rgba(30,30,30, .2)
	}
	.main-container {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		height: var(--window-height);
	}
	// .resize-button {
	// 	background: none;
	// 	height: 100%;
	// 	width: var(--margin-small);
	// 	border: none;
	// 	cursor: e-resize;
	// }
</style>