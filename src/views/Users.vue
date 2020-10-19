<template>
  <v-container>
    <v-btn color="info" :to="{ name: 'home' }">Add user</v-btn>
    <div>
      <v-data-table
        :headers="headers"
        :items="users"
        item-key="name"
        class="elevation-1"
        :search="search"
        :custom-filter="filterOnlyCapsText"
      >
        <template v-slot:top>
          <v-text-field
            v-model="search"
            label="Search"
            class="mx-4"
          ></v-text-field>
        </template>

        <template v-slot:item.phones="{ item }">
          <div v-for="phone in item.phones" :key="phone">{{ phone }}</div>
        </template>

        <template v-slot:item.emails="{ item }">
          <div v-for="email in item.emails" :key="email">{{ email }}</div>
        </template>

         <template v-slot:item.address="{ item }">
          <div v-for="addr in item.address" :key="addr">{{ addr }}</div>
        </template>

        <template v-slot:item.edit="{ item }">
          <router-link :to="{ name: `home`, params: { item: item }, query: {edit: true} }">
            <v-btn color="primary" dark fab small>
              <v-icon>mdi-lead-pencil</v-icon>
            </v-btn>
          </router-link>
        </template>

        <template v-slot:item.delete="{ item }">
          <v-btn @click="deleteUser(item.id)" color="pink" dark fab small>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>

      </v-data-table>
    </div>
    <!-- <table width="100%">
      <tr v-for="user in users" :key="user.name">
        <td v-html="user.name" />
        <td>
          <div v-for="item in user.phones" :key="item">{{ item }}</div>
        </td>
        <td>
          <div v-for="item in user.emails" :key="item">{{ item }}</div>
        </td>
        <td>
          <div v-for="item in user.address" :key="item">{{ item }}</div>
        </td>
      </tr>
    </table> -->
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Users",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: true,
          value: "name",
        },
        {
          text: "Phones",
          align: "start",
          sortable: false,
          value: "phones",
        },
        {
          text: "Emails",
          align: "start",
          sortable: false,
          value: "emails",
        },
        {
          text: "Address",
          align: "start",
          sortable: false,
          value: "address",
        },
        { text: "Edit", value: "edit" },
        { text: "Delete", value: "delete" }
      ],
    };
  },
  computed: {
    ...mapGetters(["users"]),
  },
  methods: {
    ...mapMutations(["deleteUser"]),
    filterOnlyCapsText(value, search) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value.toString().toLocaleUpperCase().indexOf(search.toLocaleUpperCase()) !== -1
      );
    },
  },
};
</script>