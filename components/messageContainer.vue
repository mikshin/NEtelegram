<template>
    <div class="message-container">
        <messageHeadline/>
        <message/>
        <messageInput/>
    </div>
</template>

<script>
import message from './message.vue';
import messageHeadline from './messageHeadline.vue';
import messageInput from './messageInput.vue';

export default {
    components: {
		message, messageHeadline, messageInput
	} 
}
</script>

<style lang="scss">
.message-container {
    width: var(--message-width);
    max-height: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>