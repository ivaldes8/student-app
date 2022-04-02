<template>
  <Modal
    :title="isEdit ? 'Edit student' : 'Create student'"
    isForm
    @edit="submitForm"
  >
    <template v-slot:body>
      <form
        id="app"
        @submit="submitForm"
      >
        <p v-if="errors.length">
            <b>Plis, fix those errors:</b>
            <ul>
            <li :key="error" v-for="error in errors">{{ error }}</li>
            </ul>
        </p>
        <p>
          <label>First Name:</label>
          <input v-model="form.firstName" type="text" />
        </p>

        <p>
          <label>Last Name:</label>
          <input v-model="form.lastName" type="text" />
        </p>

         <p>
          <label>Email:</label>
          <input v-model="form.email" type="text" />
        </p>

        <p>
          <label>Age:</label>
          <input v-model="form.age" type="number" />
        </p>

        <p>
          <label>Grade:</label>
          <select v-model="form.grade">
            <option :key="grade" v-for="grade in grades" >{{grade}}</option>
          </select>
        </p>
      </form>
    </template>
  </Modal>
</template>

<script>
import Modal from "../../components/modal/Modal.vue";
import studentsService from "../../services/studentsService";
export default {
  name: "Edit student",
  components: {
    Modal,
  },
  props: {
    form: {
        type: Object,
        default: {}
    },
    isEdit: {
        type: Boolean,
        default: false
    }
  },
  data(){
      return {
          grades: ['1st', '2nd', '3rd', '4to', '5to', '6to'],
          errors: []
      }
  },
  methods: {
    async submitForm() {
        this.errors = []
      if (!this.form.firstName) {
        this.errors.push('The first name is required.');
      }
      if (!this.form.lastName) {
        this.errors.push('The last name is required.');
      }
      if (!this.form.email) {
        this.errors.push('The email is required.');
      }
      if (!this.form.age) {
        this.errors.push('The email is required.');
      }
      if (!this.form.grade) {
        this.errors.push('The grade is required.');
      }
      if(this.isEdit && this.errors.length === 0){
          const data = {
              firstName : this.form.firstName,
              lastName: this.form.lastName,
              email: this.form.email,
              age: this.form.age,
              grade: this.form.grade
          }
          try{
                let response = await studentsService.updateStudent(this.form._id,data)
                console.log(response,'Response Update')
                this.$emit("close");
            } catch(error) {
                errors.push(error)
            }
      } 
       if(!this.isEdit && this.errors.length === 0) {
          const data = {
              firstName : this.form.firstName,
              lastName: this.form.lastName,
              email: this.form.email,
              age: this.form.age,
              grade: this.form.grade
          }
          try{
                let response = await studentsService.createStudent(data)
                console.log(response,'Response Create')
                this.$emit("close");
            } catch(error) {
                errors.push(error)
            }
      }      
    },
  },
};
</script>

<style></style>
