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
    description: "during joke escalation, repeat the previous joker's statement and laugh heartily.",
    examples: "",
    locations: "parties",
    also: "",
  },
  {
    name: "follow the leader",
    description: "during conversation, move from room to room and re-arrange " +
      "small objects, forcing your partner to follow, unsure of what to do.",
    examples: "",
    locations: "parties & workplace",
    also: "",
  },
  {
    name: "galileo's mutterance",
    description: "during an argument, concede a point to the opponent. then " +
      "mutter under the breath that your original point is still right.",
    examples: "",
    locations: "workplace",
    also: "",
    effects: "",
  },
  {
    name: "ignorant queries",
    description: "",
    examples: "",
    locations: "parties & workplace",
    also: "",
  },
  {
    name: "non-explicit non-listening",
    description: "",
    examples: "",
    locations: "parties & workplace",
    also: "",
  },
  {
    name: "success shakes",
    description: "",
    examples: "",
    locations: "parties & workplace",
    also: "",
  },
  {
    name: "the accelerated gait",
    description: "",
    examples: "",
    locations: "parties & workplace",
    also: "",
  },
  {
    name: "the false dilemma",
    description: "",
    examples: "",
    locations: "parties & workplace",
    also: "",
  },
  {
    name: "over-detailing",
    description: "",
    examples: "",
    locations: "workplace & home",
    also: "",
  },
  {
    name: "blackholing",
    description: "",
    examples: "",
    locations: "parties, workplace, home",
    also: "",
  },
  {
    name: "the intimate borrower",
    description: "",
    examples: "",
    locations: "workplace",
    also: "",
  },
  {
    name: "time traveling",
    description: "",
    examples: "",
    locations: "parties & workplace",
    also: "",
  }
];

var BEHAVIOR_MAP = {};
BEHAVIORS.forEach(function(b) {
  b.id = b.name;
  BEHAVIOR_MAP[b.name] = b;
});

// }}}
