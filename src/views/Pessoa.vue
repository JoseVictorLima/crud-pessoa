<template>
  <div class="container">
      <ValidationObserver v-slot="{ handleSubmit}">
      <form class="row" @submit.prevent="handleSubmit(salvar)">
        <div class="col-6">
          <validation-provider rules="required" v-slot="{ errors }">
            <label for="nome" class="label">Nome*</label>
            <input type="text" class="form-control" id="nome" placeholder="Exemplo: José Antonio da Silva" v-model="pessoa.nome" maxlength="100">
            <span class="error">{{ errors[0] }}</span>
          </validation-provider>
        </div>
        <div class="form-group col-6">
          <validation-provider  rules="cpf" v-slot="{ errors }">
            <label for="cpf" class="label">CPF*</label>
            <input type="text" class="form-control" id="cpf" placeholder="Exemplo: 000.000.000-00" v-model="pessoa.cpf" maxlength="14">
            <span class="error">{{ errors[0] }}</span>
          </validation-provider>
        </div>
        <div class="form-group col-6">
          <validation-provider  rules="required" v-slot="{ errors }">
            <label for="dataNascimento" class="label">Data de Nascimento:</label>
            <input type="date" class="form-control" id="dataNascimento" name="dataNascimento" v-model="pessoa.dataNascimento">
            <span class="error">{{ errors[0] }}</span>
          </validation-provider>
        </div>
        <div class="form-group col-6">
          <validation-provider  rules="required" v-slot="{ errors }">
            <label class="label">Sexo:</label>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="feminino" v-model="sexo">
                <label class="form-check-label" for="inlineRadio1">Feminino</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="masculino" v-model="sexo">
                <label class="form-check-label" for="inlineRadio2">Masculino</label>
              </div>
            <br>
            <span class="error">{{ errors[0] }}</span>
          </validation-provider>
        </div>
        <div class="col-12">
          <font size="2px">*Campos obrigatorios</font>
          <br>
          <br>
          <button type="submit" class="btn btn-primary">Salvar</button>
          <button type="button" class="btn btn-secondary" @click="redirect('back')">Cancelar</button>
        </div>
      </form>
      </ValidationObserver>
  </div>
</template>

<script>
export default {
  data(){
    return{
        pessoa:{},
        sexo:'',
    }
  },

  mounted(){
    this.init()
  },

  methods:{
    async init(){
        if(this.$route.params.id!=undefined){
            await this.findOne(this.$route.params.id)
        }
    },

    async salvar(){
        try{
            let resp
            this.pessoa.sexo = this.sexo
            if(this.$route.params.id!=undefined) {
              this.pessoa.modificacao = this.pessoa.modificacao + 1
              resp = await this.$services.pessoas.put(this.pessoa.id,this.pessoa)
            }
            else {
              this.pessoa.modificacao = 0
              resp = await this.$services.pessoas.post(this.pessoa)
            }
            if(resp.status==201||resp.status==200){
              this.makeToast('Cadastro salvo com sucesso','success')
              this.redirect('back')
            }
        }catch(error){error}
    },

    async findOne(id){
        const resp = await this.$services.pessoas.getById(id)
        if(resp.status==200){
            this.pessoa = resp.data
            this.sexo = this.pessoa.sexo
        }
    }

  },
}
</script>
<style scoped>
</style>