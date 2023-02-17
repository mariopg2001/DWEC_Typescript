"use strict";
exports.__esModule = true;
exports.Idb = void 0;
var Idb = /** @class */ (function () {
    function Idb() {
        var _this = this;
        var peticion = indexedDB.open('LoL', 2);
        peticion.onerror = function (evento) { throw 'Error al conectar indexedDB'; };
        peticion.onupgradeneeded = function (evento) {
            _this.conexion = evento.target.result;
            _this.crear();
        };
        peticion.onsuccess = function (evento) { _this.conexion = evento.target.result; };
    }
    Idb.prototype.buscar = function (callback) {
        throw new Error('Method not implemented.');
    };
    Idb.prototype.crear = function () {
        var tabla = this.conexion.createObjectStore('Campeones', { autoIncrement: true });
    };
    Idb.prototype.insertar = function (objeto, callback) {
        var transaccion = this.conexion.transaction(['Campeones'], 'readwrite');
        transaccion.onerror = function (evento) { throw 'Error al insertar'; };
        var tabla = transaccion.objectStore('Campeones');
        var peticion = tabla.add(objeto);
        peticion.onsuccess = callback;
    };
    Idb.prototype.listar = function (callback) {
        var _this = this;
        var solicitud = window.indexedDB.open('LoL');
        solicitud.onsuccess = function (evento) {
            _this.bd = evento.target.result;
            console.log('Base de datos cargada');
            var objectStore = _this.bd.transaction('Campeones', 'readonly').objectStore('Campeones');
            var solicitud = objectStore.getAll();
            solicitud.onsuccess = function () { callback(solicitud.result); };
        };
    };
    return Idb;
}());
exports.Idb = Idb;
