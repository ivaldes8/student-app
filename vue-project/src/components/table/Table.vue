<template>
  <div class="container" id="app">
    <div class="filter input-group mb-3">
      <input
        class="form-control"
        type="text"
        placeholder="Name Filter"
        v-model="filter_name"
      />
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Grade</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody v-if="students">
        <tr
          v-for="(r, index) in filteredRows.slice(
            pageStart,
            pageStart + countOfPage
          )"
          :key="index"
        >
          <td>{{ r.firstName }}</td>
          <td>{{ r.lastName }}</td>
          <td>{{ r.email }}</td>
          <td>{{ r.age }}</td>
          <td>{{ r.grade }}</td>
          <td>
            <button @click="Edit(r)" class="button button-warning"><editIcon />Edit</button>
            <button @click="Delete(r)" style="margin-left: 10px" class="button button-danger">
              <deleteIcon />Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <hr />
    <div class="paginationContainer">
      <ul class="pagination">
        <li
          v-bind:class="{ disabled: currPage === 1 }"
          @click.prevent="setPage(currPage - 1)"
        >
          <a href="">«</a>
        </li>
        <li v-for="n in totalPage" :key="n" @click.prevent="setPage(n)">
          <a :class="{ active: currPage === n }" href="">{{ n }}</a>
        </li>
        <li @click.prevent="setPage(currPage + 1)">
          <a href="">»</a>
        </li>
      </ul>
    </div>
        <Modal isForm v-show="isModalVisible" @close="closeModal" />
  </div>
</template>
<script>
import editIcon from "../icons/edit.vue";
import deleteIcon from "../icons/delete.vue";
import Modal from "../modal/Modal.vue";
export default {
  name: "Table",
   props: {
    students: {
      type: Array,
      defaul: []
    }
  },
  computed: {
    filteredRows: function () {
      var filter_name = this.filter_name.toLowerCase();
      return this.filter_name.trim() !== ""
        ? this.students.filter(function (d) {
            return d.firstName.toLowerCase().indexOf(filter_name) > -1;
          })
        : this.students;
    },
    pageStart: function () {
      return (this.currPage - 1) * this.countOfPage;
    },
    totalPage: function () {
      if(this.students){
        return Math.ceil(this.filteredRows.length / this.countOfPage);
      } else { return 0}
      
    },
  },
 
  data() {
    return {
      isModalVisible: false,
      rows: [
        {
          index: 0,
          age: 56,
          _id: "574c06e5793fa069d8a9bb7d",
          name: "Flowers Harmon",
          gender: "male",
        },
        {
          index: 1,
          age: 60,
          _id: "574c06e543a97c141d304414",
          name: "Angie Matthews",
          gender: "female",
        },
        {
          index: 2,
          age: 28,
          _id: "574c06e59c74aba71cb8b26b",
          name: "Gina Randolph",
          gender: "female",
        },
        {
          index: 3,
          age: 49,
          _id: "574c06e5f96897ebf1a59ec9",
          name: "Shaffer Acosta",
          gender: "male",
        },
        {
          index: 4,
          age: 50,
          _id: "574c06e59886e5d4ce52349c",
          name: "Mcdaniel Boyer",
          gender: "male",
        },
        {
          index: 5,
          age: 49,
          _id: "574c06e5e6f396e04e641ccd",
          name: "Adriana Porter",
          gender: "female",
        },
        {
          index: 6,
          age: 40,
          _id: "574c06e57dd92e235f15db59",
          name: "Isabel Brown",
          gender: "female",
        },
        {
          index: 7,
          age: 50,
          _id: "574c06e5d158a5225a5fc04d",
          name: "Waller Casey",
          gender: "male",
        },
        {
          index: 8,
          age: 20,
          _id: "574c06e590b333dd3eda6de8",
          name: "Mccray Jensen",
          gender: "male",
        },
        {
          index: 9,
          age: 59,
          _id: "574c06e5cbb03403bde023b4",
          name: "Koch Moore",
          gender: "male",
        },
        {
          index: 10,
          age: 44,
          _id: "574c06e549acd0aaa555722c",
          name: "Mcleod Aguilar",
          gender: "male",
        },
        {
          index: 11,
          age: 33,
          _id: "574c06e591db5269378f7a10",
          name: "Muriel Mcfadden",
          gender: "female",
        },
        {
          index: 12,
          age: 21,
          _id: "574c06e5baff242293f8cc0a",
          name: "Barber Alston",
          gender: "male",
        },
        {
          index: 13,
          age: 28,
          _id: "574c06e5fa0f6fd2d703af95",
          name: "Winifred Woodward",
          gender: "female",
        },
        {
          index: 14,
          age: 39,
          _id: "574c06e541b7318cdaed50ff",
          name: "Haynes Whitehead",
          gender: "male",
        },
        {
          index: 15,
          age: 25,
          _id: "574c06e537f3ca985daf789b",
          name: "Ada Mcmahon",
          gender: "female",
        },
        {
          index: 16,
          age: 32,
          _id: "574c06e517a5822a560061a6",
          name: "Navarro Clarke",
          gender: "male",
        },
        {
          index: 17,
          age: 32,
          _id: "574c06e566c63528ccd87acd",
          name: "Charlene Gardner",
          gender: "female",
        },
        {
          index: 18,
          age: 58,
          _id: "574c06e52c9a6713de1c3a89",
          name: "Whitaker Avila",
          gender: "male",
        },
        {
          index: 19,
          age: 40,
          _id: "574c06e5b848d79adf20e267",
          name: "Katherine Holland",
          gender: "female",
        },
        {
          index: 20,
          age: 18,
          _id: "574c06e58070fc382a8c395d",
          name: "Vargas Lang",
          gender: "male",
        },
        {
          index: 21,
          age: 38,
          _id: "574c06e5b2c31de64e88afde",
          name: "Odessa Ashley",
          gender: "female",
        },
        {
          index: 22,
          age: 49,
          _id: "574c06e5fa3e96158dd225ab",
          name: "Barnes Ford",
          gender: "male",
        },
        {
          index: 23,
          age: 38,
          _id: "574c06e5d07f475d369f9a6d",
          name: "Mcfarland Dunn",
          gender: "male",
        },
        {
          index: 24,
          age: 41,
          _id: "574c06e512e7efa0741077b7",
          name: "Richard Mullins",
          gender: "male",
        },
        {
          index: 25,
          age: 24,
          _id: "574c06e57882d443f328fe12",
          name: "Hutchinson Haynes",
          gender: "male",
        },
        {
          index: 26,
          age: 19,
          _id: "574c06e5eea6c20ada753e74",
          name: "Estela Medina",
          gender: "female",
        },
        {
          index: 27,
          age: 58,
          _id: "574c06e5fd81fcaf1054a7b2",
          name: "Arnold Butler",
          gender: "male",
        },
        {
          index: 28,
          age: 24,
          _id: "574c06e5618dcfe6c4cb589c",
          name: "Blackwell Macdonald",
          gender: "male",
        },
        {
          index: 29,
          age: 58,
          _id: "574c06e5929aa6c810b78c1c",
          name: "Herrera Preston",
          gender: "male",
        },
      ],
      countOfPage: 5,
      currPage: 1,
      filter_name: "",
    };
  },
  components: {
    editIcon,
    deleteIcon,
    Modal,
  },
  methods: {
    Edit(r){
      this.$emit('editStudent', r)
    },
    Delete(r){
      this.$emit('deleteStudent', r)
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    setPage(idx) {
      if (idx <= 0 || idx > this.totalPage) {
        return;
      }
      this.currPage = idx;
    },
  },
};
</script>
<style></style>
