<template>

    <main v-if="session.user?.adminUser && isLoggedIn()">
      <div class="column has-text-centered">
        <h1>Admin Page</h1>
    </div>
      
      <div class="buttons is-centered">
        
          <button class="button is-medium is-primary">Add</button>
          <button class="button is-medium is-link">Edit</button>
        </div>
        <div class="table-container">
        <table class>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Is Admin</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Moshe </td>
              <td> Plotkin </td>
              <td> True</td>
              <td>
                <div class="control">
                    <input type="radio" name="answer">
                  </div>
              </td>
            </tr>
          </tbody>  
          <tbody>
            <tr>
              <td> Kamala  </td>
              <td> Harris </td>
              <td> False </td>
              <td>
                <div class="control">
                    <input type="radio" name="answer">
                  </div>
              </td>
            </tr>
          </tbody>  
          <tbody>
            <tr>
              <td> John </td>
              <td> Smith </td>
              <td> False </td>
              <td>
                <div class="control">
                    <input type="radio" name="answer">
                  </div>
              </td>
            </tr>
          </tbody>  
        </table>
       </div> 
    </main>
    <main v-else>
      <h1 class="title">You are not an admininistrator</h1>
  
      </main>
  </template>
  
  <script setup lang="ts">
  import session, { isLoggedIn } from '../stores/session';
  
  </script>
  
  <style scoped>
  
  </style>