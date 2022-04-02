<template>
  <div class="module">
    <hr />
    <h3>Header:</h3>
    <hr />
    <div class="header">
      <h3 class="title">Color</h3>
      <input @change="handleChangeStyles" v-model="styles.header.color" class="action" type="color" />
    </div>
    <div class="header">
      <h3 class="title">Background</h3>
      <input @change="handleChangeStyles" v-model="styles.header.background" class="action" type="color" />
    </div>
    <hr />
    <h3>Text:</h3>
    <hr />
    <div class="header">
      <h3 class="title">Color</h3>
      <input @change="handleChangeStyles" v-model="styles.text.color" class="action" type="color" />
    </div>
    <hr />
    <h3>Primary:</h3>
    <hr />
    <div class="header">
      <h3 class="title">Color</h3>
      <input @change="handleChangeStyles" class="action" v-model="styles.primary.color" type="color" />
    </div>
    <div class="header">
      <h3 class="title">Background</h3>
      <input @change="handleChangeStyles" class="action" v-model="styles.primary.background" type="color" />
    </div>
    <hr />

    <h3>Warning:</h3>
    <hr />
    <div class="header">
      <h3 class="title">Color</h3>
      <input @change="handleChangeStyles" class="action" v-model="styles.warning.color" type="color" />
    </div>
    <div class="header">
      <h3 class="title">Background</h3>
      <input @change="handleChangeStyles" class="action" v-model="styles.warning.background" type="color" />
    </div>
    <hr />

    <h3>Danger:</h3>
    <hr />
    <div class="header">
      <h3 class="title">Color</h3>
      <input @change="handleChangeStyles" class="action" v-model="styles.danger.color" type="color" />
    </div>
    <div class="header">
      <h3 class="title">Background</h3>
      <input @change="handleChangeStyles" class="action" v-model="styles.danger.background" type="color" />
    </div>
    <hr />

    <h3>Success:</h3>
    <hr />
    <div class="header">
      <h3 class="title">Color</h3>
      <input @change="handleChangeStyles" class="action" v-model="styles.success.color" type="color" />
    </div>
    <div class="header">
      <h3 class="title">Background</h3>
      <input @change="handleChangeStyles" class="action" v-model="styles.success.background" type="color" />
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "StylesForm",
  computed: {
    styles() {
      return {
        primary: {
          color: this.$store.getters["colors/getPrimary"].color,
          background: this.$store.getters["colors/getPrimary"].background,
        },
        success: {
          color: this.$store.getters["colors/getSuccess"].color,
          background: this.$store.getters["colors/getSuccess"].background,
        },
        danger: {
          color: this.$store.getters["colors/getDanger"].color,
          background: this.$store.getters["colors/getDanger"].background,
        },
        warning: {
          color: this.$store.getters["colors/getWarning"].color,
          background: this.$store.getters["colors/getWarning"].background,
        },
        header: {
          color: this.$store.getters["colors/getHeader"].color,
          background: this.$store.getters["colors/getHeader"].background,
        },
        text: {
          color: this.$store.getters["colors/getText"].color,
        },
      };
    },
  },
  data() {
    return {};
  },
  methods:{
      handleChangeStyles(){
          console.log(this.styles,'STYLES')
          this.$store.commit("colors/editColors", { colors: this.styles })
      }
  }
};
</script>

<style></style>
