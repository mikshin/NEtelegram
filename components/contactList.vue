<template>
  <div class="contacts">
    <ul class="contact-list">
      <li class="contact"
      v-for="post in validPosts" 
      :key="post.id"
      @click="checkContact">
        <div class="contact-avatar">
          <picture>
            <source srcset="../assets/avatar.jpg">
            <img src="../assets/avatar.jpg" alt="Аватар">
          </picture>
        </div>
        <div class="contact-container">
          <div class="contact-information">
            <span class="contact-name">{{ post.title }}</span>
            <span class="message-time">10:40</span>
          </div>
          <div class="contact-last-message"> {{ post.body }}</div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import postForm from '../components/postForm'

export default {
  data: function() {
    return {
      isActive: false
    };
  },
  components: {
    postForm
  },
  computed: mapGetters(["validPosts","postsCount"]),
  methods: {
    checkContact(event) {
      let contacts = document.getElementsByClassName("contact")
      
      for(let i=0; i<contacts.length; i++ ) {
        contacts[i].classList.remove("active")
      }

      event.target.classList.add("active")
    },
  }
}
</script>

<style lang="scss" scoped>
  .contacts {
    height: 100%;
    overflow-y: auto;
  }
  .contact-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: var(--contact-width);
    height: 100%;
  }
  .contact {
    display: flex;
    padding: var(--margin-small);
    cursor: pointer;
    transition: .3s background-color ease;
    &:hover {
      background-color: #eaeaea;
    }
    &.active {
      background-color: var(--blue);
      .contact-name,
      .contact-last-message,
      .message-time {
        color: #fff;
      }

    }
    * {
      pointer-events: none;
    }
  }
  .contact-avatar {
    width: var(--avatar-size);
    height: var(--avatar-size);
    overflow: hidden;
    border-radius:  var(--avatar-size);
    flex-shrink: 0;
    picture {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .contact-container {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    max-width: calc(100% - var(--margin-small) - var(--avatar-size));
    padding-left: var(--margin-small)
  }
  .contact-information {
    width: 100%;
    overflow: hidden;
    display: flex;
  }
  .contact-name,
  .contact-last-message  {
    width: 100%;
    max-width: calc(100%);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: var(--font), sans-serif;
    font-size: var(--font-size);
    line-height: var(--line-height);
    color: var(--black);
  }
  .contact-name {
    font-weight: bold;
  }
  .message-time {
    font-family: var(--font), sans-serif;
    font-size: calc(var(--font-size) - 2px);
    line-height: calc(var(--line-height) - 2px);
    color: var(--gray);
  }
</style>