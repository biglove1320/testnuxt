<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand>Shop2</b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item href="/users/Home">Home</b-nav-item>
            <b-nav-item href="/users/About">About</b-nav-item>
            <b-nav-item href="/admin/Homeadmin">Admin</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <h4>Welcome :</h4>
      <b-nav-item-dropdown class="dropmenu" text="" right>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
        <b-dropdown-item href="#">Logout</b-dropdown-item>
      </b-nav-item-dropdown>

      
    </b-navbar>


  </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
    .dropmenu{
        bottom: 15px;
    }

    h4{
        color: white;
    }
</style>
