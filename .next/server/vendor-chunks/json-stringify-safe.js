/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/json-stringify-safe";
exports.ids = ["vendor-chunks/json-stringify-safe"];
exports.modules = {

/***/ "(rsc)/./node_modules/json-stringify-safe/stringify.js":
/*!*******************************************************!*\
  !*** ./node_modules/json-stringify-safe/stringify.js ***!
  \*******************************************************/
/***/ ((module, exports) => {

eval("exports = module.exports = stringify\nexports.getSerialize = serializer\n\nfunction stringify(obj, replacer, spaces, cycleReplacer) {\n  return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces)\n}\n\nfunction serializer(replacer, cycleReplacer) {\n  var stack = [], keys = []\n\n  if (cycleReplacer == null) cycleReplacer = function(key, value) {\n    if (stack[0] === value) return \"[Circular ~]\"\n    return \"[Circular ~.\" + keys.slice(0, stack.indexOf(value)).join(\".\") + \"]\"\n  }\n\n  return function(key, value) {\n    if (stack.length > 0) {\n      var thisPos = stack.indexOf(this)\n      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this)\n      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key)\n      if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value)\n    }\n    else stack.push(value)\n\n    return replacer == null ? value : replacer.call(this, key, value)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvanNvbi1zdHJpbmdpZnktc2FmZS9zdHJpbmdpZnkuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxvQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRU1TLy4vbm9kZV9tb2R1bGVzL2pzb24tc3RyaW5naWZ5LXNhZmUvc3RyaW5naWZ5LmpzPzc0NzMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gc3RyaW5naWZ5XG5leHBvcnRzLmdldFNlcmlhbGl6ZSA9IHNlcmlhbGl6ZXJcblxuZnVuY3Rpb24gc3RyaW5naWZ5KG9iaiwgcmVwbGFjZXIsIHNwYWNlcywgY3ljbGVSZXBsYWNlcikge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqLCBzZXJpYWxpemVyKHJlcGxhY2VyLCBjeWNsZVJlcGxhY2VyKSwgc3BhY2VzKVxufVxuXG5mdW5jdGlvbiBzZXJpYWxpemVyKHJlcGxhY2VyLCBjeWNsZVJlcGxhY2VyKSB7XG4gIHZhciBzdGFjayA9IFtdLCBrZXlzID0gW11cblxuICBpZiAoY3ljbGVSZXBsYWNlciA9PSBudWxsKSBjeWNsZVJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgIGlmIChzdGFja1swXSA9PT0gdmFsdWUpIHJldHVybiBcIltDaXJjdWxhciB+XVwiXG4gICAgcmV0dXJuIFwiW0NpcmN1bGFyIH4uXCIgKyBrZXlzLnNsaWNlKDAsIHN0YWNrLmluZGV4T2YodmFsdWUpKS5qb2luKFwiLlwiKSArIFwiXVwiXG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgIGlmIChzdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgdGhpc1BvcyA9IHN0YWNrLmluZGV4T2YodGhpcylcbiAgICAgIH50aGlzUG9zID8gc3RhY2suc3BsaWNlKHRoaXNQb3MgKyAxKSA6IHN0YWNrLnB1c2godGhpcylcbiAgICAgIH50aGlzUG9zID8ga2V5cy5zcGxpY2UodGhpc1BvcywgSW5maW5pdHksIGtleSkgOiBrZXlzLnB1c2goa2V5KVxuICAgICAgaWYgKH5zdGFjay5pbmRleE9mKHZhbHVlKSkgdmFsdWUgPSBjeWNsZVJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSlcbiAgICB9XG4gICAgZWxzZSBzdGFjay5wdXNoKHZhbHVlKVxuXG4gICAgcmV0dXJuIHJlcGxhY2VyID09IG51bGwgPyB2YWx1ZSA6IHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/json-stringify-safe/stringify.js\n");

/***/ })

};
;