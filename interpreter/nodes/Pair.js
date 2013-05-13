"use strict";

function Pair(e1, e2) {
	this.e1 = e1;
	this.e2 = e2;
}

Pair.prototype.ev = function(env, modSet) {
	var e1Ev = this.e1.ev(env, modSet);
	var e2Ev = this.e2.ev(env, modSet);
	return new Pair(e1Ev, e2Ev);
}

Pair.prototype.accept = function(visitor, state) {
	return visitor.visitPair(this, state);
}

Pair.prototype.toString = function() {
	return '(pair ' + this.e1 + ' ' + this.e2 + ')';
}