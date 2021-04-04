<template>
  <div class="panel">
      <!-- <pre>{{table}}</pre> -->
      <table class="table-bordered" style="width:100%">
          <thead>
            <tr class="thead-light">
              <th scope="col" :class="`text-${header.align}`" v-for="(header,i) in table.headers" :key="i" :name="header.name">{{header.label}}</th>
              <th scope="col" class="text-center" style="padding-right: 25px">Ações</th>
            </tr>
          </thead>
          <tbody>
            <slot name="body">
            <tr v-for="(row,i) in table.rows" :key="i">
              <td v-for="(col,i) in table.headers" :key="i" :class="`text-${col.align}`" >{{row[col.name]}}</td>
              <td class="text-center">
                <div class="btn-group" role="group">
                  <button v-for="(action,i) in table.actions" :key="i" type="button" :class="`btn ${action.color}`" @click="$emit(action.action,row)">
                    {{action.label}}
                  </button>
                </div>
              </td>
            </tr>
            </slot>
          </tbody>
      </table>
  </div>
</template>
<script>
export default {
    props:{
        table:{
            type:Object,
        }

    },

    methods:{
    },
}
</script>