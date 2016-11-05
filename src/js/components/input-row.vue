<template lang="pug">
.input-row
  .row
    .col-md-1: template(v-if="!state.first"): h3 {{ state.condition }}
    .col-md-3
      select.input-lg(v-model="filter").form-control
        option(v-for="opt in filterOpts" v-bind:value="opt.value") {{ opt.text }}
    template(v-if="filter == 'about'")
      .col-md-8
        div.filter-input
          input.input-lg.form-control(type="text" v-model="about")
    template(v-if="filter == 'about:ecom'")
      .col-md-8
        div.filter-input
          select.input-lg(v-model="aboutEcom").form-control
            option(v-for="opt in aboutEcomOpts" v-bind:value="opt.value") {{ opt.text }} 
    template(v-if="filter == 'posted_by'")
      .col-md-8
        div.filter-input
          select.input-lg(v-model="byFilter").form-control
            option(v-for="opt in byFilterOpts" v-bind:value="opt.value") {{ opt.text }} 
    template(v-if="filter == 'date'")
      .col-md-4
        div.filter-input
          select.input-lg(v-model="prepositionFilter").form-control
            option(v-for="opt in prepositionFilterOpts" v-bind:value="opt.value") {{ opt.text }}
      .col-md-4
        div.filter-input
          select.input-lg(v-model="dateFilter").form-control
            option(v-for="opt in dateFilterOpts" v-bind:value="opt.value") {{ opt.text }}
    template(v-if="filter == 'located_at'")
      .col-md-8
        div.filter-input
          input.input-lg.form-control(type="text" v-model="locatedAt")
    template(v-if="filter == 'liked_by'")
      .col-md-8
        div.filter-input
          select.input-lg(v-model="byFilter").form-control
            option(v-for="opt in byFilterOpts" v-bind:value="opt.value") {{ opt.text }} 
  button.btn.btn-danger.btn-xs.btn-remove.pull-right(v-if="!state.first" v-on:click="remove") ×
</template>

<script lang="coffee">
module.exports =
  props:
    state:
      type: Object
      required: true
  data: ->
    about: ''
    locatedAt: ''
    value: ''
    filter: 'about'
    filterOpts: [
      { text: 'About', value: 'about' }
      { text: 'About (E-Commerce)', value: 'about:ecom' }
      { text: 'Posted By', value: 'posted_by' }
      { text: 'Date', value: 'date' }
      { text: 'Located At', value: 'located_at' }
      { text: 'Liked By', value: 'liked_by' }
    ]
    byFilter: 'me'
    byFilterOpts: [
      { text: 'Me', value: 'me' }
      { text: 'My Friends', value: 'me/friends' }
      { text: 'Friends Of Friends', value: 'me/friends/friends' }
    ]
    prepositionFilter: 'date'
    prepositionFilterOpts: [
      { text: 'During', value: 'date' }
      { text: 'Before', value: 'before' }
      { text: 'After', value: 'after' }
    ]
    dateFilter: 'today'
    dateFilterOpts: [
      { text: 'Today', value: 'today' }
      { text: 'Yesterday', value: 'yesterday' }
      { text: 'Recent', value: 'recent' }
      { text: 'This Week', value: 'this-week' }
      { text: 'Last Week', value: 'last-week' }
      { text: 'This Month', value: 'this-month' }
      { text: 'Last Month', value: 'last-month' }
      { text: 'This Year', value: 'this-year' }
      { text: 'Last Year', value: 'last-year' }
    ]
    aboutEcom: '10% Off'
    aboutEcomOpts: [
      { text: "10% Off", value: "10% Off" }
      { text: "20% Off", value: "20% Off" }
      { text: "30% Off", value: "30% Off" }
      { text: "40% Off", value: "40% Off" }
      { text: "50% Off", value: "50% Off" }
      { text: "60% Off", value: "60% Off" }
      { text: "70% Off", value: "70% Off" }
      { text: "80% Off", value: "80% Off" }
      { text: "At These Prices Inventory Won’t Last Long", value: "At These Prices Inventory Won’t Last Long" }
      { text: "Best Sales", value: "Best Sales" }
      { text: "Big Buys", value: "Big Buys" }
      { text: "Biggest Sale of the Season", value: "Biggest Sale of the Season" }
      { text: "Biggest Sale of the Year", value: "Biggest Sale of the Year" }
      { text: "Blow Out Sale", value: "Blow Out Sale" }
      { text: "Buy One, Get One Free", value: "Buy One, Get One Free" }
      { text: "Closeout Sale", value: "Closeout Sale" }
      { text: "Don’t Delay", value: "Don’t Delay" }
      { text: "Don’t Miss Out On", value: "Don’t Miss Out On" }
      { text: "Doorbuster Deals", value: "Doorbuster Deals" }
      { text: "Everything Must Go!", value: "Everything Must Go!" }
      { text: "Exclusive Sale", value: "Exclusive Sale" }
      { text: "Factory Specials", value: "Factory Specials" }
      { text: "Great Deals for a Great Cause", value: "Great Deals for a Great Cause" }
      { text: "Half Off Sale", value: "Half Off Sale" }
      { text: "Help Us Help Others", value: "Help Us Help Others" }
      { text: "Huge Sale", value: "Huge Sale" }
      { text: "In Store Only!", value: "In Store Only!" }
      { text: "Inventory Liquidation", value: "Inventory Liquidation" }
      { text: "Just Pay Shipping", value: "Just Pay Shipping" }
      { text: "Just Pay Handling", value: "Just Pay Handling" }
      { text: "Just Cover Shipping", value: "Just Cover Shipping" }
      { text: "Just Cover Handling", value: "Just Cover Handling" }
      { text: "Limited Quantities Available", value: "Limited Quantities Available" }
      { text: "Massive Savings", value: "Massive Savings" }
      { text: "Mega Sales", value: "Mega Sales" }
      { text: "Not Sold In Stores", value: "Not Sold In Stores" }
      { text: "One Day Sale…Hurry!", value: "One Day Sale…Hurry!" }
      { text: "Online Sale Online", value: "Online Sale Online" }
      { text: "Only Available Today", value: "Only Available Today" }
      { text: "Only Once a Year", value: "Only Once a Year" }
      { text: "Our Lowest Prices Ever", value: "Our Lowest Prices Ever" }
      { text: "Overstock Sale", value: "Overstock Sale" }
      { text: "Prices Never Lower", value: "Prices Never Lower" }
      { text: "Savings Event", value: "Savings Event" }
      { text: "Savings Won’t Last Long", value: "Savings Won’t Last Long" }
      { text: "Secret Sale", value: "Secret Sale" }
      { text: "Shop Thousands of Designer Labels", value: "Shop Thousands of Designer Labels" }
      { text: "Sizzling Sales", value: "Sizzling Sales" }
      { text: "Spectacular Doorbusters", value: "Spectacular Doorbusters" }
      { text: "Stock Up Sale", value: "Stock Up Sale" }
      { text: "Store Wide Sale", value: "Store Wide Sale" }
      { text: "That’s Value", value: "That’s Value" }
      { text: "The Sale of Sales", value: "The Sale of Sales" }
      { text: "These Deals Won’t Last", value: "These Deals Won’t Last" }
      { text: "Time is Running Out", value: "Time is Running Out" }
      { text: "Treat Yourself", value: "Treat Yourself" }
      { text: "Unbeatable Prices", value: "Unbeatable Prices" }
      { text: "Unbelievable Discounts", value: "Unbelievable Discounts" }
      { text: "Warehouse Sale", value: "Warehouse Sale" }
      { text: "When It’s Gone, It’s Gone for Good!", value: "When It’s Gone, It’s Gone for Good!" }
      { text: "While Supplies Last", value: "While Supplies Last" }
      { text: "You’d Be Crazy to Miss This!", value: "You’d Be Crazy to Miss This!" }
      { text: "You Deserve It!", value: "You Deserve It!" }
    ]
  computed:
    dateValue: ->
      { preposition: @prepositionFilter, date: @dateFilter }
  watch:
    filter: (value) ->
      if(value == 'about')
        @value = @about
      if(value == 'about:ecom')
        @value = @aboutEcom
      if(value == 'posted_by')
        @value = @byFilter
      if(value == 'date')
        @value = @dateValue
      if(value == 'located_at')
        @value = @locatedAt
      if(value == 'liked_by')
        @value = @byFilter
      row =
        type: value
        value: @value
      @.$emit('updateRow', row)
    about: (value) ->
      @updateValue(value)
    aboutEcom: (value) ->
      @updateValue(value)
    byFilter: (value) ->
      @updateValue(value)
    prepositionFilter: (value) ->
      @updateValue(@dateValue)
    dateFilter: (value) ->
      @updateValue(@dateValue)
    locatedAt: (value) ->
      @updateValue(value)
    likedBy: (value) ->
      @updateValue(value)
  methods:
    remove: (index) ->
      @.$emit('remove', @state)
    updateValue: (value) ->
      row = 
        type: @state.type
        value: value
      @.$emit('updateRow', row)
</script>

<style lang="stylus">
.input-row
  position relative
  margin-bottom 10px
.input-row h3
  margin 10px 0
.btn-remove
  margin 10px 0
@media (min-width: 1015px)
  .btn-remove
    position absolute
    top 5%
    right -30px
</style>