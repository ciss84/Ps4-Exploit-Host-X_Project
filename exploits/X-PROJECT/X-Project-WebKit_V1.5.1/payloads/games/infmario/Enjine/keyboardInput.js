/**
	Class that helps to manage keyboard input.
	Code by Rob Kleffner, 2011
*/

Enjine.Keys = {
   
    A: 116, //L1 = FIREBALL
    S: 117, //R1 = JUMP

    Left: 37,
    Up: 38,
    Right: 39,
    Down: 40,
};

Enjine.KeyboardInput = {
    Pressed: new Array(),
    
    Initialize: function() {
        var self = this;
        document.onkeydown = function(event) { self.KeyDownEvent(event); }
        document.onkeyup = function(event) { self.KeyUpEvent(event); }
    },
    
    IsKeyDown: function(key) {
        if (this.Pressed[key] != null)
            return this.Pressed[key];
        return false;
    },
    
    KeyDownEvent: function(event) {
        this.Pressed[event.keyCode] = true;
	this.PreventScrolling(event);
    },
    
    KeyUpEvent: function(event) {
        this.Pressed[event.keyCode] = false;
	this.PreventScrolling(event);
    },

    PreventScrolling: function(event) {
        // 37: left, 38: up, 39: right, 40: down
        if(event.keyCode >= 37 && event.keyCode <= 40){
            event.preventDefault();
        }
    }
};
