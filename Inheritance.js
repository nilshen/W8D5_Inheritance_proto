Function.prototype.inherits = function(parentClass){
    function Surrogate() {};
    Surrogate.prototype = parentClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};


function MovingObject () {}
    MovingObject.prototype.move = function () {
    console.log("this is moving object class")
}

function Ship () {}
    Ship.prototype.float = function () {
        console.log("this is ship class")
    }
Ship.inherits(MovingObject);







