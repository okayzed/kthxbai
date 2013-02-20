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


// {{{ Helper functions
var debounce = function debounce(func, threshold, execAsap) {
    var timeout;

    return function debounced () {
        var obj = this, args = arguments;
        function delayed () {
            if (!execAsap)
                func.apply(obj, args);
            timeout = null;
        };

        if (timeout)
            clearTimeout(timeout);
        else if (execAsap)
            func.apply(obj, args);

        timeout = setTimeout(delayed, threshold || 100);
    };
}

var throttle = function throttle(fn, delay) {
  var timer = null;
  return function () {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}
// }}}

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
    description: "purposefully maintain that a position that is known to be wrong is right.",
    examples: "The sun *definitely* revolves around the moon.",
    locations: "parties & workplace",
    also: "",
  },
  {
    name: "non-explicit non-listening",
    description: "during a long narrative, purposefully place your responses in the wrong spots " +
      "of the conversation.",
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
    name: "blackholing",
    description: "when listening to a story, keep a blank face on and delay responses to queues by a few moments.",
    examples: "",
    locations: "workplace & parties",
    also: "",
  },
  {
    name: "over-detailing",
    description: "tell a story that sounds like it will lead somewhere interesting, but devote " +
      "a large amount of time to the mundane details in the story. ",
    examples: "",
    locations: "parties, workplace, home",
    also: "",
  },
  {
    name: "the intimate borrower",
    description: "ask to borrow or share something that's more intimate than is " +
      "appropriate for the relationship (e.g. toothbrush, chapstick, condoms, " +
      "tampons)",
    examples: "",
    locations: "workplace",
    also: "",
  },
  {
    name: "time traveling",
    description: "stay a sentence or two behind your conversation partner " +
      "and re-hash or repeat things they have said.",
    examples: "",
    locations: "parties & workplace",
    also: "",
  },
  {
    name: "conversation sink",
    description: "pick a particular topic of interest & return to it when any " +
      "opportune moment arises.",
    examples: "",
    locations: "meals, workplace",
    also: "",
  },
  {
    name: "pricked interest",
    description: "tell another person that you've been meaning to talk to them about something, " +
      "but forget what it was other than really important.",
    examples: "",
    locations: "work & social",
    also: "",
  },
  {
    name: "sarcasm... what's that?",
    description: "be a sarcastic dick much of the time, but pretend you don't know what sarcasm is.",
    examples: "",
    locations: "work",
    also: "",
  },
  {
    name: "tele-bait and switch",
    description: "express interest and excited in a telemarketer's pitch. " +
      "\"lose\" reception suddenly and listen (but don't respond!) to the " +
      "marketer's reactions.",
    examples: "",
    locations: "work",
    also: "",
  },
  {
    name: "troll goading",
    description: "as a way of pre-empting trolls, encourage and goad them into an argument. " +
      "then lose interest. watch as the troll's reading of the situation flounders.",
    examples: "",
    locations: "work & social",
    also: "",
  }

];

var BEHAVIOR_MAP = {};
BEHAVIORS.forEach(function(b) {
  b.id = b.name;
  BEHAVIOR_MAP[b.name] = b;
});
// }}}
