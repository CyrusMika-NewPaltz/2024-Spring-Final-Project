<template>
    <main v-if="isLoggedIn()">
      <h1 class="title">Friend's Activity</h1>
      <div class="buttons">
        <button @click="modalActive = true" class="button is-large is-primary">Add Activity</button>
      </div>
      <div v-if="modalActive" class="modal is-active">
        <div class="modal-background"></div>
        <div>
          <header>
            <p>Add Activity</p>
  
            <button class="delete" aria-label="close"></button>
          </header>
          <section>
            <div>
              <label class="label">Name of Activity</label>
              <div class="control">
                <input
                  v-model="newActivity.title"
                  class="input"
                  type="text"
                  placeholder="Text input"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Date</label>
              <div class="control">
                <input
                  v-model="newActivity.date"
                  class="input"
                  type="text"
                  placeholder="Text input"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Picture of Activity</label>
              <div class="control">
                <input
                  v-model="newActivity.pictureUrl"
                  class="input"
                  type="text"
                  placeholder="text input"
                />
              </div>
            </div>
          </section>
          <footer>
            <button @click="addActivity()" class="button is-success">Save changes</button>
            <button @click="modalActive = false" class="button">Cancel</button>
          </footer>
        </div>
      </div>
      <div v-for="(activity, index) in friendsActivites" :key="index">
        <div class="columns">
          <div class="columns">
            <figure v-if="session.user?.firstName == 'Moshe'" class="image">
              <img src="../assets/moshe.jpg" width = "200em" height = "250em"/>
            </figure>
            <figure v-else-if="session.user?.firstName == 'Kamala Harris'" class="image">
              <img src="../assets/kamala.jpg" width = "200em" height = "250em"/>
            </figure>
            <figure v-if="session.user?.firstName == 'John Smith'" class="image">
              <img src="../assets/john.jpg" width = "200em" height = "250em"/>
            </figure>
          </div>
          <div class="columns">
            <p>
              <span class="has-text-weight-bold">{{ session.user.firstName }}</span>
              <span class="has-text-weight-bold">{{ activity.date }}</span>
            </p>
            <p>{{ activity.title }}</p>
            <figure class="image is-rounded">
              <img :src="activity.pictureUrl" />
            </figure>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="columns">
          <figure class="image">
            <img src="" />
          </figure>
        </div>
        <div class="columns">
          <p>
            <span class="has-text-weight-bold">Moshe Plotkin | </span>
            <span class="has-text-weight-bold">March 10th | Sunday | 2024</span>
          </p>
          <p>Went for a Run</p>
          <figure class="image is-rounded">
            <img src="../assets/moshe.jpg" width = "200em" height = "250em"/>
          </figure>
        </div>
      </div>
      <div class="columns">
        <div class="columns">
          <figure class="image">
            <img src="" />
          </figure>
        </div>
        <div class="columns">
          <p>
            <span class="has-text-weight-bold">Kamala Harris | </span>
            <span class="has-text-weight-bold">March 5th | Tuesday | 2024</span>
          </p>
          <p>Bench Pressed 250lbs</p>
          <figure class="image is-rounded">
            <img src="../assets/kamala.jpg" width = "200em" height = "250em"/>
          </figure>
        </div>
      </div>
      <div class="columns">
        <div class="columns">
          <figure class="image">
            <img src="" />
          </figure>
        </div>
        <div class="columns">
          <p>
            <span class="has-text-weight-bold">John Smith | </span>
            <span class="has-text-weight-bold">February 20th | Tuesday | 2024</span>
          </p>
          <p>Swimming</p>
          <figure class="image is-rounded">
            <img src="../assets/john.jpg" width = "200em" height = "250em"/>
          </figure>
        </div>
      </div>
    </main>
    <main v-else>
      <h1 class="title">Please Login to a User</h1>
    </main>
  </template>
  
  <script setup lang="ts">
  import session, { isLoggedIn } from '../stores/session'
  import { ref, computed } from 'vue'
  const modalActive = ref(false)
  const newActivity = ref({
    title: '',
    date: '',
    pictureUrl: ''
  })
  const friendsActivites = ref([])
  const addActivity = () => 
  {
    friendsActivites.value.push
    ({
      title: newActivity.value.title,
      date: newActivity.value.date,
      pictureUrl: newActivity.value.pictureUrl
    })
    console.log(friendsActivites);
    newActivity.value.title = ''
    newActivity.value.date = ''
    newActivity.value.pictureUrl = ''
    modalActive.value = false
  }
  </script>
  