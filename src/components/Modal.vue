<template>
    <div v-if="modal.show">
        <div id="myModal" class="modal">
        <div class="modal-content row">
            <span class="close" @click="cancel()">&times;</span>
            <p>{{modal.text}}</p>
            <div  class="btn-group actions" role="group">
                <div v-for="(action,i) in this.modal.actions" :key="i">
                    <button type="button" @click="$emit(action.action)" :class="`btn ${action.color} btn-sm`">{{action.name}}</button>
                    <br>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },

    props:{
        modal:{
            type:Object,
        }
    },

    watch:{

    },

    mounted(){

    },

    methods:{
        cancel(){
            this.modal.show = false
            this.$emit('no')
        }
    }
}
</script>
<style scoped>
.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 50%; /* Could be more or less, depending on screen size */
}
.close {
  place-self: flex-end;
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.actions{
    place-self: center;
}
</style>