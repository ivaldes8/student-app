<template>
<Modal
    title="Delete Student"
    isForm
    @edit="deleteStudent"
    submitType="delete"
  >
    <template v-slot:body>
        <div class="paginationContainer">
            <warningIcon color="#eb3477"/>
        </div>
          
    </template>
  </Modal>
</template>

<script>
import Modal from "../../components/modal/Modal.vue";
import studentsService from "../../services/studentsService";
import warningIcon from "../../components/icons/warning.vue"
export default {
  name: "DeleteStudent",
  components: {
    Modal,
    warningIcon
  },
  props: {
      toDelete: {
          type: Object,
          defaul: null
      }
  },
  methods: {
      async deleteStudent(){
          try{
                let response = await studentsService.deleteStudent(this.toDelete._id)
                console.log(response,'Response Delete')
                this.$emit("close");
            } catch(error) {
                console.log(error,'Error')
            }
      }
  }
};
</script>

<style></style>
