<template>
  <div class="login">
    <v-card class="elevation-20 pa-10 login-card">
      <v-card-text>
        <div class="layout column align-center">
          <v-img
            :src="require('@/assets/img/sosgenialFavicon.png')"
            width="120"
            height="120"
            :contain="true"
          />
          <h1 class="flex my-4 primary--text">
            <strong>{{ $t("login.title") }}</strong>
          </h1>
        </div>
        <v-form
          ref="form"
          @submit.prevent="login"
          lazy-validation
          v-model="validForm"
        >
          <v-text-field
            append-icon="person"
            name="email"
            :label="$t('login.email')"
            type="email"
            tabindex="1"
            v-model="email"
            :rules="rules.email"
            autocomplete="new-password"
          ></v-text-field>
          <v-text-field
            :append-icon="show ? 'visibility' : 'visibility_off'"
            name="password"
            tabindex="2"
            :rules="rules.password"
            :type="show ? 'text' : 'password'"
            :label="$t('login.password')"
            v-model="password"
            @click:append="show = !show"
          ></v-text-field>
          <v-btn block color="primary" type="submit()">
            <span>{{ $t("login.btn") }}</span>
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
    <snack :tyoe="type" :message="error"></snack>
    <loader></loader>
  </div>
</template>

<script>
import loader from "@/components/loader";
import snack from "@/components/notification";

export default {
  name: "Login",
  components: {
    loader,
    snack
  },
  data: vm => ({
    show: false,
    validForm: false,
    email: String.prototype.Empty,
    password: String.prototype.Empty,
    type: String.prototype.Empty,
    error: vm.$t("login.error"),
    rules: {
      email: [
        v => !!v || vm.$t("validation.required"),
        v => (v && v.length <= 50) || vm.$t("validation.max50"),
        v =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          vm.$t("login.invalidEmail")
      ],
      password: [
        v => !!v || vm.$t("validation.required"),
        v => (v && v.length <= 50) || vm.$t("validation.max50"),
        v => (v && v.length >= 6) || vm.$t("validation.min6")
      ]
    }
  }),
  methods: {
    login() {
      if (!this.$refs.form.validate()) {
        return;
      }

      this.$store.dispatch("setLoader", true);
      this.type = "error";
      var snackbarOption = {
        notification: this.error,
        type: this.type
      };
      this.$store.dispatch("setSnackbar", snackbarOption);
    }
  }
};
</script>
