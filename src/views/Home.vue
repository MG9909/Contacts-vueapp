<template>
  <v-app>
   <v-container>
    <v-row class="mx-auto mt-5">
      <v-col>
        <v-card-text>
          <h2>Add a new contact</h2>
          <v-form ref="form" class="px-3" @submit.prevent="submit">
            <v-text-field
              label="Name"
              v-model="name"
              prepend-icon="edit"
            ></v-text-field>

             <v-text-field
              v-for="item in phoneCount"
              :key="item"
              label="Phone"
              v-model="phones[item-1]"
              prepend-icon="phone"
              append-icon="delete"
              @click:append="deletePhone(item-1)"
            ></v-text-field>
            
            <v-btn @click="phoneCount++" class="normal mx-1 mt-3">
              + Add phone</v-btn
            >

            <v-text-field
              v-for="item in emailCount"
              :key="'A'+item"
              label="Email"
              v-model="emails[item-1]"
              prepend-icon="email"
              append-icon="delete"
              @click:append="deleteEmail(item-1)"
            ></v-text-field>
            <v-btn @click="emailCount++" class="normal mx-1 mt-3">
               + Add email</v-btn>

            <v-text-field
              v-for="item in addressCount"
              :key="'B'+item"
              label="Address"
              v-model="address[item-1]"
              prepend-icon="edit"
              append-icon="delete"
              @click:append="deleteAddress(item-1)"
            ></v-text-field>
            
            <v-btn @click="addressCount++" class="normal mx-1 mt-3">
               + Add address</v-btn>
            <v-col>
              <v-btn type="submit" class="primary mx-0 mt-5"> Submit</v-btn>
            </v-col>
          </v-form>
        </v-card-text>
      </v-col>
        
    </v-row>
   </v-container>
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      name: "",
      phones: [],
      phoneCount: 1,
      emails: [],
      emailCount: 1,
      address: [],
      addressCount: 1,
      search: "" 
    };
  },
  computed: {
    ...mapGetters(["users"]),
  },
  methods: {
    ...mapMutations(["setUser", "setUsers", "updateUser"]),
    submit() {
      let user = this.$route.params.item ? this.$route.params.item : {};
      user.name = this.name;
      user.emails = this.emails;
      user.phones = this.phones;
      user.address = this.address;
      this.setUser(user);
      if(this.$route.query.edit){
       this.updateUser(user)
      }else{
        this.setUsers(user);
      }
      this.$router.push({name: "users"})
      //this.$refs.form.reset();

    },
    deletePhone(item){

      this.phones.splice(item, 1);
      this.phoneCount--;
    },
    deleteEmail(item){

      this.emails.splice(item, 1);
      this.emailCount--;
    },
    deleteAddress(item){

      this.address.splice(item, 1);
      this.addressCount--;
    }
  },
  mounted(){
    if(this.$route.query.edit){
      let user =  this.$route.params.item;
      this.name = user.name;
      this.phones = user.phones;
      this.phoneCount = user.phones.length;
      this.emails = user.emails;
      this.emailCount = user.emails.length;
      this.address = user.address;
      this.addressCount = user.address.length;
    }
  }

};
</script>