<template>
  <div>
    <header class="sticky navbar">
      <h1>Students app</h1>
    </header>
   
    <div class="module">
      <div class="header">
        <h3 class="title">Manage Students</h3>
        <button class="action button button-primary" @click="toggleEditStudent()">
          <plusIcon />Create a student
        </button>
      </div>
      <hr />
      <div class="content">
        <Table :students="students" @deleteStudent="toggleDeleteStudent($event)" @editStudent="toggleEditStudent($event)"/>
      </div>
    </div>
    <DrawerButton @click="openDrawer"/>
    <Drawer :direction="'right'" :exist="true" :closeDrawer="drawer" ref="LeftDrawer">
        <StylesForm/>
    </Drawer>
    <EditStudentModal v-if="showEditStudentModal" @close="closeEditModal" :isEdit="isEdit" :form="form"/>
    <DeleteStudentModal v-if="showDeleteStudentModal" @close="closeDeleteModal" :toDelete="toDelete"/>
  </div>
</template>

<script>
import Table from "./components/table/Table.vue";
import plusIcon from "./components/icons/plus.vue";
import DrawerButton from "./components/drawer/DrawerButton.vue"
import Drawer from "./components/drawer/Drawer.vue"
import StylesForm from "./modules/styles/stylesForm.vue"
import studentsService from "./services/studentsService"
import EditStudentModal from "./modules/students/EditStudent.vue"
import DeleteStudentModal from "./modules/students/DeleteStudent.vue";

export default {
  name: "Main",
  computed: {
    primary() {
      return this.$store.getters["colors/getPrimary"];
    },
    warning() {
      return this.$store.getters["colors/getWarning"];
    },
    danger() {
      return this.$store.getters["colors/getDanger"];
    },
    success() {
      return this.$store.getters["colors/getSuccess"];
    },
    header() {
      return this.$store.getters["colors/getHeader"];
    },
    text() {
      return this.$store.getters["colors/getText"];
    },
  },
  components: {
    Table,
    plusIcon,
    DrawerButton,
    Drawer,
    StylesForm,
    EditStudentModal,
    DeleteStudentModal
  },
  async mounted(){
    this.toogleLoading()
    await this.getStudents()
    this.toogleLoading()
    console.log(this.students, 'Students')
  },
  data(){
    return {
      drawer:false,
      loading: false,
      students: null,
      error: null,
      showEditStudentModal: false,
      isEdit: false,
      form: {},
      toDelete: null,
      showDeleteStudentModal: false
    }
  },
  methods:{
    async getStudents(){ 
      try{
        let response = await studentsService.getStudents()
        this.students = response
      } catch(error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toSring()
        this.error = message
      }
    },
    toggleEditStudent(row){
      if(row){
        this.showEditStudentModal = true,
        this.isEdit = true
        this.form = row
      } else {
        this.isEdit = false
        this.showEditStudentModal = true,
        this.form = {}
      }
    },
    closeEditModal(){
      this.showEditStudentModal = false,
      this.isEdit = false
      this.form = {}
      this.getStudents()
    },
     toggleDeleteStudent(row){
      this.toDelete = row
      this.showDeleteStudentModal = true
    },
    closeDeleteModal(){
      this.showDeleteStudentModal = false
      this.toDelete = null
      this.getStudents()
    },
    toogleDrawer(){
      console.log('toogled')
      this.drawer = !this.drawer
    },
    openDrawer () {
      if (this.$refs.LeftDrawer.active) {
        this.$refs.LeftDrawer.close()
      } else {
        this.$refs.LeftDrawer.open()
      }
    },
    toogleLoading(){
      this.loading = !this.loading
    }
  }
};
</script>

<style>
body {
  background-color: rgb(241, 241, 241);
}

p, h3 {
  color:  v-bind("text.color");
}

.navbar {
  margin-top: -20px;
  margin-left: -8px;
  margin-right: -8px;
  padding: 5px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  color:  v-bind("header.color");
  background-color: v-bind("header.background");
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

.module {
  border-radius: 10px;
  margin: 20px;
  margin-top: 30px;
  background-color: white;
}

.header {
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  align-items: flex-start;
}

.header .title {
  align-self: flex-start;
}

.header .action {
  margin-top: 15px;
  margin-left: auto;
}

.content {
  padding: 10px;
  margin-left: 20px;
  margin-right: 20px;
}

.button {
  border-radius: 100px;

  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-primary {
  background-color: v-bind("primary.background");
  box-shadow: rgba(46, 44, 187, 0.2) 0 -25px 18px -14px inset,
    rgba(75, 44, 187, 0.15) 0 1px 2px, rgba(65, 44, 187, 0.15) 0 2px 4px,
    rgba(46, 44, 187, 0.15) 0 4px 8px, rgba(65, 44, 187, 0.15) 0 8px 16px,
    rgba(46, 44, 187, 0.15) 0 16px 32px;
  color: v-bind("primary.color");
}

.button-success {
  background-color: v-bind("success.background");
  box-shadow: rgba(46, 44, 187, 0.2) 0 -25px 18px -14px inset,
    rgba(75, 44, 187, 0.15) 0 1px 2px, rgba(65, 44, 187, 0.15) 0 2px 4px,
    rgba(46, 44, 187, 0.15) 0 4px 8px, rgba(65, 44, 187, 0.15) 0 8px 16px,
    rgba(46, 44, 187, 0.15) 0 16px 32px;
  color: v-bind("success.color");
}


.button-warning {
  /* background-color: #c6c2fb; */
  background-color: v-bind("warning.background");
  box-shadow: rgba(46, 44, 187, 0.2) 0 -25px 18px -14px inset,
    rgba(75, 44, 187, 0.15) 0 1px 2px, rgba(65, 44, 187, 0.15) 0 2px 4px,
    rgba(46, 44, 187, 0.15) 0 4px 8px, rgba(65, 44, 187, 0.15) 0 8px 16px,
    rgba(46, 44, 187, 0.15) 0 16px 32px;
  color: v-bind("warning.color");
}

.button-danger {
  /* background-color: #c6c2fb; */
  background-color: v-bind("danger.background");
  box-shadow: rgba(46, 44, 187, 0.2) 0 -25px 18px -14px inset,
    rgba(75, 44, 187, 0.15) 0 1px 2px, rgba(65, 44, 187, 0.15) 0 2px 4px,
    rgba(46, 44, 187, 0.15) 0 4px 8px, rgba(65, 44, 187, 0.15) 0 8px 16px,
    rgba(46, 44, 187, 0.15) 0 16px 32px;
  color: v-bind("danger.color");
}

.button:hover {
  box-shadow: rgba(70, 44, 187, 0.35) 0 -25px 18px -14px inset,
    rgba(44, 82, 187, 0.25) 0 1px 2px, rgba(44, 46, 187, 0.25) 0 2px 4px,
    rgba(53, 44, 187, 0.25) 0 4px 8px, rgba(44, 46, 187, 0.25) 0 8px 16px,
    rgba(44, 53, 187, 0.25) 0 16px 32px;
}

table {
  border: 1px solid #ddd;
  border-collapse: separate;
  border-left: 0;
  border-radius: 5px;
  border-spacing: 0px;
  width: 100%;
}

thead {
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
  border-collapse: separate;
}

th,
td {
  padding: 5px 4px 6px 4px;
  text-align: left;
  vertical-align: top;
  border-left: 1px solid #ddd;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

th {
  background-color: v-bind("header.background");
  color: v-bind("header.color");
}
td {
  border-top: 1px solid #ddd;
}

.paginationContainer {
  align-items: center;
  justify-content: center;
  display: flex;
}
.pagination {
  justify-self: center;
}
ul.pagination {
  display: inline-block;
  padding: 0;
  margin: 0;
}

ul.pagination li {
  display: inline;
}

ul.pagination li a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 5px;
}

ul.pagination li a.active {
  background-color: v-bind("primary.background");
  border-radius: 5px;
  color: v-bind("primary.color");
}

ul.pagination li a:hover:not(.active) {
  background-color: #ddd;
}

input[type="text"],input[type="number"],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.svg-container {
  width: 1em;
  max-width: 100%;
  display: inline-flex;
  margin-right: 5px;
}

::-webkit-scrollbar {
	width: 10px;
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
	background: #c9ced6; 
	border-radius: 10px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
	background: #106cac; 
  }
</style>
