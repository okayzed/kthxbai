App = Ember.Application.create({});

App.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('content', ['a', 'b', 'c']);
  }
});

App.Router.map(function() {
  this.resource('behavior', { path: '/behaviors/:behavior_id' });
});

App.BehaviorRoute = Ember.Route.extend({
  model: function(params) {
    var behavior_name = (params.behavior_id || '').replace(/_/g, ' ');
    var behavior = BEHAVIORS[behavior_name] || NO_BEHAVIOR;
    behavior.behaviorName = behavior_name || "None";
    return behavior;
  }
});

// {{{ JS Data
var NO_BEHAVIOR = { behaviorName: "None" };
var BEHAVIORS = {
  "the circle joker"           : {
  },
  "follow the leader"          : {
  },
  "galileo's mutterance"       : {
  },
  "ignorant queries"           : {
  },
  "non-explicit non-listening" : {
  },
  "success shakes"             : {
  },
  "the accelerated gait"       : {
  },
  "the false dilemma"          : {
  },
  "time traveling"             : {
  },
};
// }}}
