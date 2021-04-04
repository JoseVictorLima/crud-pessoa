<template>
  <div class="home container">
      <div class="row col-12">
        <h4 class="col-10">Pessoas</h4><br>
        <button class="col-2 btn btn-primary" type="button" @click="redirect('pessoa/new')">Adicionar</button>
      </div>
      <br>
      <cp-table class="col-12" :table="table" @edit="edit"></cp-table>
  </div>
</template>

<script>

export default {
  data(){
    return{
      table:{
        headers:[
          {name:'nome',label:'Nome',align:'center'},
          {name:'cpf',label:'CPF',align:'center'},
          {name:'dataNascimento',label:'Data de Nascimento',align:'center'},
          {name:'sexo',label:'Sexo',align:'center'},
        ],
        rows:[
          // {nome:'José',sexo:'Masculino', cpf:"250-250",dataNascimento:'10/11/2015'}
        ],
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
    }
  },
}
</script>
<style scoped>
</style>