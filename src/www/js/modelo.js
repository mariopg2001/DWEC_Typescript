"use strict";
exports.__esModule = true;
exports.Modelo = void 0;
var idb_js_1 = require("./idb.js");
var Modelo = /** @class */ (function () {
    function Modelo(controlador) {
        this.lista = []; //Array de datos
        this.callbacks = []; //Array de callbacks para implementar el observador
        this.controlador = controlador;
        this.idb = new idb_js_1.Idb();
    }
    Modelo.prototype.avisar = function () {
        for (var _i = 0, _a = this.callbacks; _i < _a.length; _i++) {
            var callback = _a[_i];
            callback();
        }
    };
    Modelo.prototype.insertar = function (objeto, callback) {
        this.idb.insertar(objeto, callback);
    };
    Modelo.prototype.listar = function (callback) {
        this.idb.listar(callback);
    };
    Modelo.prototype.buscar = function (callback) {
        this.idb.buscar(callback);
    };
    return Modelo;
}());
exports.Modelo = Modelo;
