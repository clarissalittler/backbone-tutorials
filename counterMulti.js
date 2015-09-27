
$(document).ready( function () {

    var Counter = Backbone.Model.extend({
        defaults : {"value" : 0},
        inc : function () {
            var val = this.get("value");
            this.set("value", val+1);
        }
    });
    
    var CounterView = Backbone.View.extend({
        render: function () {
            var val = this.model.get("value");
            var btn = '<button>Increment</button>';
            this.$el.html('<p>'+val+'</p>' + btn);
        },
        initialize: function () {
            this.model.on("change", this.render, this);
        },
        events : {
            'click button' : 'increment'
        },
        increment : function () {
            this.model.inc();
        }
    });

var counterModel = new Counter();

var counterView1 = new CounterView({model : counterModel});
var counterView2 = new CounterView({model : counterModel});

counterView1.render();
counterView2.render();

$("#counterdiv").append(counterView1.$el);
$("#counterdiv").append(counterView2.$el);

});
