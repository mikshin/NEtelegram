<template>
    <div class="message-wrapper">
        <div class="message-list">
            <!-- потом надо сделать нормальную струкуту и оставить тут только message -->
            <div class="message message--last">
                <div class="message-headline">
                    <span class="message-author">Микшин Дмитрий</span>
                    <button class="reply-button">Reply</button>
                </div>
                <p class="message-content">Не хотелось бы писать тут </p>
                <div class="message-footer">
                    <span class="message-time">4:20</span>
                    <button class="share-button"></button>
                </div>
            </div>
            <div class="message message--incoming message--last">
                <div class="message-headline">
                    <span class="message-author">Микшин Дмитрий</span>
                    <button class="reply-button">Reply</button>
                </div>
                <p class="message-content">Не хотелось бы писать тут лорем ипсум, но походу придется</p>
                <div class="message-footer">
                    <span class="message-time">4:20</span>
                    <button class="share-button"></button>
                </div>
            </div>
            <div class="message">
                <div class="message-headline">
                    <span class="message-author">Микшин Дмитрий</span>
                    <button class="reply-button">Reply</button>
                </div>
                <p class="message-content">Не хотелось бы писать тут лорем ипсум, но походу придется Не хотелось бы писать тут лорем ипсум, но походу придетс</p>
                <div class="message-footer">
                    <span class="message-time">4:20</span>
                    <button class="share-button"></button>
                </div>
            </div>
            <div class="message message--last">
                <div class="message-headline">
                    <span class="message-author">Микшин Дмитрий</span>
                    <button class="reply-button">Reply</button>
                </div>
                <p class="message-content">Не хотелось бы писать но походу придется Не хотелось бы писать тут лорем ипсум, но походу придется Не хотелось бы писать тут лорем ипсум, но походу придется</p>
                <div class="message-footer">
                    <span class="message-time">4:20</span>
                    <button class="share-button"></button>
                </div>
            </div>
            <div class="message message--incoming message--last">
                <div class="message-headline">
                    <span class="message-author">Микшин Дмитрий</span>
                    <button class="reply-button">Reply</button>
                </div>
                <p class="message-content">Не хотелось бы писать тут лорем ипсум, но походу придется Не хотелось бы писать тут лорем ипсум, но походу придется</p>
                <div class="message-footer">
                    <span class="message-time">4:20</span>
                    <button class="share-button"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" >
.message-headline,.message-input {
    display: flex;
    flex-shrink: 0;
}
.message-wrapper {
    overflow-y: auto;
    overflow-x: hidden;
    background-color: var(--light-blue);
    display: flex;
    flex: 1;
    height: 100%;
}
.message-list {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.message {
    max-width: 80%; 
    position: relative;
    padding: var(--margin-small);
    margin: var(--margin-small);
    margin-left: calc(var(--margin-small) + var(--margin-small));
    margin-right: auto;
    background-color: #fff;
    border-radius: 8px;

    &.message--incoming {
        margin-left: auto;
        margin-right: calc(var(--margin-small) + var(--margin-small));
    }

    &.message--last {
        position: relative;
        &:before {
            content: '';
            position: absolute;
            bottom: 0;
            width: 12px;
            height: 12px;
            transform: translateX(-100%);
            background-color: #fff;
        }
        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            width: 24px;
            height: 24px;
            transform: translateX(-100%);
            background-color: var(--light-blue);
            border-radius: 24px;
        }
        &:not(.message--incoming) {
            border-bottom-left-radius: 0;
            &:before,
            &:after {
                left: 0;
            }
        }
        &.message--incoming {
            border-bottom-right-radius: 0;
            &:before,
            &:after {
                right: 0;
                transform: translateX(100%);
            }
        }
    }
    &:hover {
        .reply-button {
            color: var(--gray);
        }
    }
}
.message-headline {
    display: flex;
}
.message-author {
    flex: 1;
}
.message-time {
    position: absolute;
    right: var(--margin-small);
    bottom: var(--margin-small);
}
.reply-button {
    border: none;
    background: none;
    color: transparent;
    cursor: pointer;
    transition: .2s color ease;
    flex-shrink: 0;
}
.share-button {
    display: none
}
</style>