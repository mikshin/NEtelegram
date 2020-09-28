<template>
    <div class="message-input">
        <label class="input-attach">
            <input type="file">
        </label>
        <textarea class="input-textarea" @input="resize">13</textarea>
        <button class="emoji-button">E</button>
        <button class="send-button">S</button>
    </div>
</template>

<script>
export default {
    methods: {
        resize(event) {
            event.target.style.height = 'auto'
            event.target.style.height = event.target.scrollHeight + "px"
        }
    }
}
</script>

<style lang="scss" scoped>
    .message-input {
        display: flex;
        align-items: flex-end;
        justify-content: stretch;
    }
    .input-attach,
    .emoji-button,
    .send-button {
        width: 48px;
        height: 48px;
        border: none;
        background: none;
    }
    .input-textarea {
        display: flex;
        flex: 1;
        min-height: 28px;
        max-height: 200px;
        resize: none;
        border: none;
        outline: none;
        padding: 0 var(--margin-small);
        font: var(--font);
        color: var(--black);
        box-sizing: border-box;
        font-size: 16px;
        line-height: 20px;
    }
    .input-attach {
        input[type=file] {
            visibility: hidden;
        }
        &:before {
            content: 'AF'
        }
    }

</style>