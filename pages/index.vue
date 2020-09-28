<template>
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

export default {
	name: "app",
	components: {
		contactList, messageContainer
	},
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