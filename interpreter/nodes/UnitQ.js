"use strict";

function UnitQ(e) {
	this.e = e;
}

UnitQ.prototype.ev = function(env) {
	var eEv = this.e.ev(env);
	
	if(eEv instanceof Unit) return new Bool(true);
	else return new Bool(false);
}

UnitQ.prototype.accept = function(visitor, state) {
	return visitor.visitUnitQ(this, state);
}

UnitQ.prototype.toString = function() {
	return '(unit? ' + this.e + ')';
}