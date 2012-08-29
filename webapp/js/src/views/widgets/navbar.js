/*globals define*/
'use strict';

define(
  ['jquery', 'lodash', 'backbone'],
  function($, _, Backbone) {

var NavBarView = Backbone.View.extend({

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: _.template(' \
<div class="navbar"> \
  <div class="navbar-inner"> \
    <div class="container"> \
      <a class="brand" href="#">Backbone tutorial</a> \
      <div class="nav-collapse"> \
        <ul class="nav"> \
          <li class="active"><a href="#">Home</a></li> \
          <li><a href="http://bb-jugar.rhcloud.com/api">Test cloud web service</a></li> \
        </ul> \
        <ul class="nav"> \
          <li><a href="localhost:9000/api">Test local web service</a></li> \
        </ul> \
        <ul class="nav pull-right"> \
          <li><a href="#">Link</a></li> \
        </ul> \
      </div><!-- /.nav-collapse --> \
    </div> \
  </div><!-- /navbar-inner --> \
</div> \
  ')

});

  return NavBarView;
});