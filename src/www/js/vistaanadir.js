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
exports.Vistaanadir = void 0;
var Campeon_js_1 = require("./Campeon.js");
var vista_js_1 = require("./vista.js");
var Vistaanadir = /** @class */ (function (_super) {
    __extends(Vistaanadir, _super);
    function Vistaanadir(div, controlador) {
        var _this = _super.call(this, div) || this;
        _this.controlador = controlador;
        _this.btn1 = document.getElementById('prueba');
        _this.imagen = document.getElementById('inputcampeon');
        _this.imagencamp = null;
        _this.imagen.addEventListener('change', function (e) {
            var archivo = _this.imagen.files[0];
            var lector = new FileReader();
            lector.addEventListener('load', function () {
                _this.imagencamp = lector.result;
            });
            lector.readAsDataURL(archivo);
        });
        _this.btn1.onclick = _this.pulsar1.bind(_this);
        return _this;
    }
    Vistaanadir.prototype.pulsar1 = function () {
        this.nombrecampeon = document.getElementById('nombrecampeon');
        this.descripcioncampeon = document.getElementById('descripcioncampeon');
        this.posicion1 = document.getElementById('posicion1');
        this.posicion2 = document.getElementById('posicion2');
        this.posicion3 = document.getElementById('posicion3');
        this.posicion4 = document.getElementById('posicion4');
        this.posicion5 = document.getElementById('posicion5');
        this.fechacampeon = document.getElementById('fechacreacion');
        this.opcion1 = document.getElementById('opcion1');
        this.opcion2 = document.getElementById('opcion2');
        this.opcion3 = document.getElementById('opcion3');
        this.opcion4 = document.getElementById('opcion4');
        var nombre = this.nombrecampeon.value;
        var descripcion = this.descripcioncampeon.value;
        var fecha = this.fechacampeon.value;
        var opciones = [];
        opciones.push(this.opcion1.checked);
        opciones.push(this.opcion2.checked);
        opciones.push(this.opcion3.checked);
        opciones.push(this.opcion4.checked);
        if (opciones[0] == true) {
            opciones[0] = 'Mago';
        }
        if (opciones[1] == true) {
            opciones[1] = 'Asesino';
        }
        if (opciones[2] == true) {
            opciones[2] = 'Tanque';
        }
        if (opciones[3] == true) {
            opciones[3] = 'Guerrero';
        }
        var posiciones = [];
        posiciones.push(this.posicion1.checked);
        posiciones.push(this.posicion2.checked);
        posiciones.push(this.posicion3.checked);
        posiciones.push(this.posicion4.checked);
        posiciones.push(this.posicion5.checked);
        if (posiciones[0] == true) {
            posiciones[0] = 'ADC';
        }
        if (posiciones[1] == true) {
            posiciones[1] = 'sup';
        }
        if (posiciones[2] == true) {
            posiciones[2] = 'jung';
        }
        if (posiciones[3] == true) {
            posiciones[3] = 'top';
        }
        if (posiciones[4] == true) {
            posiciones[4] = 'mid';
        }
        //Construyo el objeto
        var objeto = new Campeon_js_1.Campeon(nombre, descripcion, posiciones, fecha, this.imagencamp, opciones);
        this.controlador.insertar(objeto);
    };
    return Vistaanadir;
}(vista_js_1.Vista));
exports.Vistaanadir = Vistaanadir;
