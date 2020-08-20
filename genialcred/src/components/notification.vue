<template>
  <v-snackbar v-model="show" :color="type">
    {{ message }}
    <v-btn text @click.native="show = !show">{{ $t("btn.close") }}</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: "Snackbar",
  props: {
    messageProp: {
      type: String
    },
    typeProp: {
      type: String
    }
  },
  created() {
    if (this.$store.getters.snack !== String.prototype.Empty) {
      this.message = this.$store.getters.snack;
      this.type = this.$store.getters.snackType;

      this.show = true;
    }
  },
  computed: {
    message: {
      get() {
        return this.$store.getters.snack;
      },
      set() {
        this.show = false;
        return this.$store.getters.snack;
      }
    },
    type: {
      get() {
        return this.$store.getters.snackType;
      },
      set() {
        this.show = false;
        return this.$store.getters.snackType;
      }
    }
  },
  watch: {
    message(value) {
      if (value) {
        this.show = true;
      }
    },
    type(value) {
      if (value) {
        this.show = true;
      }
    }
  },
  data: () => ({
    show: false
  })
};
</script>
