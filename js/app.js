App = Ember.Application.create({});

App.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('behaviors', BEHAVIORS);
  }
});

App.Router.map(function() {
  this.resource('behavior', { path: ':behavior_id' });
});

App.BehaviorRoute = Ember.Route.extend({
  model: function(params) {
    var behavior_name = (params.behavior_id || '').replace(/_/g, ' ');
    var behavior = BEHAVIOR_MAP[behavior_name] || NO_BEHAVIOR;
    return behavior;
  }
});

// {{{ JS Data
var NO_BEHAVIOR = { name: "None" };

var BEHAVIORS = [
  {
    name: "the circle joker",
    locations: "parties & workplace"
  },
  {
    name: "follow the leader",
  },
  {
    name: "galileo's mutterance"
  },
  {
    name: "ignorant queries"
  },
  {
    name: "non-explicit non-listening"
  },
  {
    name: "success shakes"
  },
  {
    name: "the accelerated gait"
  },
  {
    name: "the false dilemma"
  },
  {
    name: "time traveling"
  }
];

var BEHAVIOR_MAP = {};
BEHAVIORS.forEach(function(b) {
  b.id = b.name;
  BEHAVIOR_MAP[b.name] = b;
});
// }}}
