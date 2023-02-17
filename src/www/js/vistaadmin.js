"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Vistaadmin = void 0;
var vista_js_1 = require("./vista.js");
var Vistaadmin = /** @class */ (function (_super) {
    __extends(Vistaadmin, _super);
    function Vistaadmin(div, controlador) {
        var _this = _super.call(this, div) || this;
        _this.controlador = controlador;
        _this.btnlistar = document.getElementsByTagName('li')[3];
        _this.divindex = document.getElementsByClassName('contenedor')[0];
        _this.btnbuscar = document.getElementById('buscar');
        _this.btnlistar.onclick = _this.listar.bind(_this);
        _this.btnbuscar.onclick = _this.buscar.bind(_this);
        _this.listar();
        return _this;
    }
    Vistaadmin.prototype.buscar = function () {
        this.controlador.buscar();
    };
    Vistaadmin.prototype.cargarBusqueda = function (campeones) {
        var _this = this;
        this.opcion1 = document.getElementById('mago');
        this.opcion2 = document.getElementById('asesino');
        this.opcion3 = document.getElementById('tanque');
        this.opcion4 = document.getElementById('Gerrero');
        console.log('Cargado');
        var opcion11 = this.opcion1.value;
        console.log(opcion11);
        this.divindex.textContent = '';
        // console.log(this.divindex)
        campeones.forEach(function (element) {
            //crear tarjetas
            //contenedor de la tarjeta
            _this.divtarjeta = document.createElement("div");
            _this.divtarjeta.classList.add("contenedorimagen");
            _this.divindex.appendChild(_this.divtarjeta);
            //imagen
            _this.imagen = document.createElement('img');
            _this.imagen.classList.add("champ");
            _this.imagen.src = element.imagen;
            _this.divtarjeta.appendChild(_this.imagen);
            //contenedor de los iconos
            _this.divicono = document.createElement('div');
            _this.divicono.classList.add('contenedoricono');
            _this.divtarjeta.appendChild(_this.divicono);
            //icono modificar
            _this.spanedit = document.createElement('span');
            _this.spanedit.classList.add('icono');
            _this.spanedit.setAttribute("id", "mod");
            _this.divicono.appendChild(_this.spanedit);
            _this.iconoedit = document.createElement('i');
            _this.iconoedit.classList.add('fa-solid');
            _this.iconoedit.classList.add('fa-pen');
            _this.spanedit.appendChild(_this.iconoedit);
            //icono eliminar
            _this.spanborrar = document.createElement('span');
            _this.spanborrar.classList.add('icono');
            _this.divicono.appendChild(_this.spanborrar);
            _this.iconoborrar = document.createElement('i');
            _this.iconoborrar.classList.add('fa-sharp');
            _this.iconoborrar.classList.add('fa-solid');
            _this.iconoborrar.classList.add('fa-trash');
            _this.spanborrar.appendChild(_this.iconoborrar);
            //icono lupa
            _this.spanlupa = document.createElement('span');
            _this.spanlupa.classList.add('icono');
            _this.divicono.appendChild(_this.spanlupa);
            _this.iconolupa = document.createElement('i');
            _this.iconolupa.classList.add('fa-sharp');
            _this.iconolupa.classList.add('fa-solid');
            _this.iconolupa.classList.add('fa-magnifying-glass');
            _this.spanlupa.appendChild(_this.iconolupa);
        });
    };
    Vistaadmin.prototype.listar = function () {
        this.controlador.listar();
    };
    Vistaadmin.prototype.cargarlista = function (campeones) {
        var _this = this;
        this.divindex.textContent = '';
        // console.log(this.divindex)
        campeones.forEach(function (element) {
            //crear tarjetas
            //contenedor de la tarjeta
            _this.divtarjeta = document.createElement("div");
            _this.divtarjeta.classList.add("contenedorimagen");
            _this.divindex.appendChild(_this.divtarjeta);
            //imagen
            _this.imagen = document.createElement('img');
            _this.imagen.classList.add("champ");
            _this.imagen.src = element.imagen;
            _this.divtarjeta.appendChild(_this.imagen);
            //contenedor de los iconos
            _this.divicono = document.createElement('div');
            _this.divicono.classList.add('contenedoricono');
            _this.divtarjeta.appendChild(_this.divicono);
            //icono modificar
            _this.spanedit = document.createElement('span');
            _this.spanedit.classList.add('icono');
            _this.spanedit.setAttribute("id", "mod");
            _this.divicono.appendChild(_this.spanedit);
            _this.iconoedit = document.createElement('i');
            _this.iconoedit.classList.add('fa-solid');
            _this.iconoedit.classList.add('fa-pen');
            _this.spanedit.appendChild(_this.iconoedit);
            //icono eliminar
            _this.spanborrar = document.createElement('span');
            _this.spanborrar.classList.add('icono');
            _this.divicono.appendChild(_this.spanborrar);
            _this.iconoborrar = document.createElement('i');
            _this.iconoborrar.classList.add('fa-sharp');
            _this.iconoborrar.classList.add('fa-solid');
            _this.iconoborrar.classList.add('fa-trash');
            _this.spanborrar.appendChild(_this.iconoborrar);
            //icono lupa
            _this.spanlupa = document.createElement('span');
            _this.spanlupa.classList.add('icono');
            _this.divicono.appendChild(_this.spanlupa);
            _this.iconolupa = document.createElement('i');
            _this.iconolupa.classList.add('fa-sharp');
            _this.iconolupa.classList.add('fa-solid');
            _this.iconolupa.classList.add('fa-magnifying-glass');
            _this.spanlupa.appendChild(_this.iconolupa);
        });
    };
    return Vistaadmin;
}(vista_js_1.Vista));
exports.Vistaadmin = Vistaadmin;
