<script setup lang="ts">
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import LoginBadge from './Login.vue';
    let isActive = ref(false);

</script>

<template>
    <nav class="navbar is-info navbar-custom-style" role="navigation" aria-label="main navigation">

        <div class="container">
        <div class="navbar-brand">
      
          <a :class="{ 'is-active': isActive }" @click="isActive = !isActive" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu"  :class="{ 'is-active': isActive }">
          <div class="navbar-end">
            <router-link to="/" class="navbar-item">
              Home
            </router-link>
      
            <router-link class="navbar-item" to="/admin">
              Admin
            </router-link>

            <router-link class="navbar-item" to="/current">
              Current User
            </router-link>
      
            <router-link class="navbar-item" to="/activity">
              Friend Activity
            </router-link>
      
      
            <div class="navbar-item">

              <login-badge>
                
              </login-badge>
            </div>
          </div>
        </div>
        </div>
      </nav>

</template>

<style>
    .router-link-active {
        
        border-bottom: #00AA00 5px solid;
    }

</style>