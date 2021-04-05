<template>
  <div class="home container">
      <div class="row col-12">
        <h4 class="col-10">Pessoas</h4><br>
        <button class="col-2 btn btn-primary" type="button" @click="redirect('pessoa/new')">Adicionar</button>
      </div>
      <br>
      <pre>{{id}}</pre>
      <cp-table class="col-12" :table="table" @edit="edit" @delete="confirmDelete"></cp-table>
      <cp-modal :modal="modal" @sim="deletar()" @nao="modal.show=false; id=undefined"></cp-modal>
  </div>
</template>

<script>

export default {
  data(){
    return{
      id:undefined,
      modal:{
        show:false,
        text:'Deseja deletar esse cadastro?',
        actions:[
          {name:'Sim',color:'btn-success',action:'sim'},
          {name:'Não',color:'btn-danger',action:'nao'},
        ]
      },
      table:{
        headers:[
          {name:'nome',label:'Nome',align:'center'},
          {name:'cpf',label:'CPF',align:'center'},
          {name:'dataNascimento',label:'Data de Nascimento',align:'center',type:'data'},
          {name:'sexo',label:'Sexo',align:'center'},
          {name:'modificacao',label:'Alterações',align:'center'},
        ],
        rows:[],
        actions:[
          {label:'Editar',color:'btn-success',action:'edit'},
          {label:'Deletar',color:'btn-danger',action:'delete'},
        ],
      },
    }
  },

  mounted(){
    this.init()
  },

  methods:{
    async init(){
      await this.getPessoas()
    },

    async getPessoas(){
      const resp = await this.$services.pessoas.getAll()
      if(resp){
        this.table.rows= resp.data
      }
    },

    edit(row){
      this.redirect(`pessoa/${row.id}/edit`)
    },

    confirmDelete(row){
      this.id =row.id
      this.modal.show =true
    },

    async deletar(){
      if(this.id!=undefined){
        try{
          const resp = await this.$services.pessoas.delete(this.id)
          if(resp.status==200){
            this.modal.show=false
            this.makeToast('Cadastro deletado com sucesso','success',{timeout: 2000})
            var that = this;
            setTimeout(function(){ that.redirect('') }, 2500)
          }
        }catch(error){console.log(error)}
      }
    },
  },
}
</script>
<style scoped>
</style>