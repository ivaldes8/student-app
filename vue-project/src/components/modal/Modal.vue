<template>
<transition name="modal-fade">
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          <h3>{{title}}</h3>
        </slot>
        <button
          type="button"
          class="btn-close"
          @click="close"
        >
          x
        </button>
      </header>

      <section class="modal-body">
        <slot name="body">
          This is the default body!
        </slot>
       </section>

      <footer class="modal-footer" v-if="isForm">
        <slot name="footer">
          <div class="paginationContainer" >
            <button @click="close" style="margin-right:10px" class="button">Cancel</button>
            <button v-if="submitType === 'delete'" @click="submit" style="margin-left:10px" class="button button-danger">Delete</button>
            <button v-if="submitType === 'submit'" @click="submit" style="margin-left:10px" class="button button-primary">Save</button>
          </div>
        </slot>
      </footer>
    </div>
  </div>
  </transition>
</template>
<script>
  export default {
    name: 'Modal',
    props: {
      title: {
        type: String,
        default: 'Modal Header'
      },
      isForm: {
        type: Boolean,
        default: false
      },
      submitType: {
        type: String,
        default: 'submit'
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      submit() {
        this.$emit('edit');
      }
    },
  };
</script>
<style scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
  }

  .modal {
    background: #FFFFFF;
    overflow-x: auto;
    display: flex;
    width: 450px;
    border-radius: 5px;
    flex-direction: column;
    padding: 10px;
  }

  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #000000;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 15px;
    cursor: pointer;

    color: #1f1e1e;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }

    .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }

  .form-buttons{
    display: flex;
    align-content: center;
  }
</style>