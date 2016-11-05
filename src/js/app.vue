<template lang="pug">
section
  #InputRows: .container
    input-row(
      v-for="(row, index) in rowsSorted" 
      v-bind:state="row"
      @updateRow="update(index, $event)"
      @remove="remove(index, $event)"
    )
  .container
    p.clearfix
      button.btn.btn-default.btn-lg.btn-add.pull-right(v-on:click="add('OR')") OR
      button.btn.btn-default.btn-lg.btn-add.pull-right(v-on:click="add('AND')") AND
    p.clearfix
      button.btn.btn-primary.btn-lg.pull-right(v-on:click="search" v-bind:disabled="!hasInput") Search Facebook
</template>

<script lang="coffee">
module.exports =
  components: 
    'input-row': require './components/input-row.vue'
  data: ->
    rows: [{ type: 'about', condition: 'AND', value: '', first: true }]
  computed:
    hasInput: ->
      @query != ''
    query: ->
      query = @prepareField(@firstRow)
      for row, i in @orRows
        query += @prepareField(row)
        if i  == @orRows.length - 1 && row.value != ''
          query += '/union'
      for row, i in @andRows
        query += @prepareField(row)
        if i == @andRows.length - 1 && row.value != ''
          query += '/intersect'
      query
    firstRow: ->
      @rows[0]
    orRows: ->
      @rows.filter (obj) ->
        obj.condition == 'OR'
    andRows: ->
      @rows.filter (obj) ->
        obj.condition == 'AND'
      .slice(1)
    rowsSorted: ->
      @rows.sort (a, b) ->
        textA = a.condition.toUpperCase()
        textB = b.condition.toUpperCase()
        if a.first 
          return -1
        (textA < textB) ? -1 : (textA > textB) ? 1 : 0
  methods:
    search: ->
      window.open "https://www.facebook.com/search#{@query}"
    prepareField: (row) ->
      query = ''    
      if row.value != ''
        if row.type == 'about'
          query += "/str/#{row.value}/stories-keyword"
        if row.type == 'about:ecom'
          value = encodeURIComponent("\"#{row.value}\"")
          query += "/str/#{value}/stories-keyword"
        if row.type == 'posted_by'
          query += "/#{row.value}/stories-by"
        if row.type == 'date'
          query += "/#{row.value.date}/#{row.value.preposition}/stories"
        if row.type == 'located_at'
          query += "/str/#{row.value}/places-named/stories-recent"
        if row.type == 'liked_by'
          query += "/#{row.value}/stories-liked"
      query
    add: (condition) ->
      @rows.push
        type: 'about'
        value: ''
        condition: condition
    remove: (index, event) ->
      @rows.splice(index,1)
    update: (index, event) ->
      @rows[index].type = event.type
      @rows[index].value = event.value
</script>

<style lang="stylus">
body
  padding-top 20px
.btn-add
  margin-left 5px
</style>