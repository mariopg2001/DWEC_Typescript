"use strict";
exports.__esModule = true;
exports.Controlador = void 0;
/**
    @file Contiene el controlador principal de la aplicación
    @author Miguel Jaque <mjaque@fundacionloyola.es>
    @license GPL-3.0-or-later
**/
var modelo_js_1 = require("./modelo.js");
var vistanav_js_1 = require("./vistanav.js");
var vistaadmin_js_1 = require("./vistaadmin.js");
var vistaanadir_js_1 = require("./vistaanadir.js");
var vistamod_js_1 = require("./vistamod.js");
/**
 * Controlador de la aplicación
 */
var Controlador = /** @class */ (function () {
    /**
        Constructor de la clase
        Llama al método iniciar al cargarse la página
    **/
    function Controlador() {
        window.onload = this.iniciar.bind(this);
        this.modelo = new modelo_js_1.Modelo(this);
    }
    /**
        Inicia la aplicación
        Crea el modelo y las vistas.
    **/
    Controlador.prototype.iniciar = function () {
        this.nav = document.getElementsByTagName('nav')[0];
        this.divadmin = document.getElementById('divadmin');
        this.divanadir = document.getElementById('divanadir');
        this.divmod = document.getElementById('divmod');
        // this.vista = new Vista(this, document.getElementsByClassName('cuadro1'))
        this.vistaNav = new vistanav_js_1.VistaNav(this, this.nav);
        this.vistaadmin = new vistaadmin_js_1.Vistaadmin(this.divadmin, this);
        this.vistaanadir = new vistaanadir_js_1.Vistaanadir(this.divanadir, this);
        this.vistamod = new vistamod_js_1.Vistamod(this.divmod);
        this.vistaadmin.mostrar(true);
    };
    Controlador.prototype.buscar = function () {
        this.modelo.listar(this.listarOK.bind(this));
    };
    Controlador.prototype.buscarOK = function (campeones) {
        this.vistaadmin.cargarBusqueda(campeones);
    };
    Controlador.prototype.listar = function () {
        this.modelo.listar(this.listarOK.bind(this));
    };
    Controlador.prototype.listarOK = function (campeones) {
        this.vistaadmin.cargarlista(campeones);
    };
    Controlador.prototype.insertar = function (objeto) {
        this.modelo.insertar(objeto, this.insertarOK.bind(this));
    };
    Controlador.prototype.insertarOK = function () {
        console.log('La inserción ha ido bien');
    };
    /**
     * Oculta todas las vistas.
     */
    Controlador.prototype.ocultarVistas = function () {
        this.vistaadmin.mostrar(false);
        this.vistaanadir.mostrar(false);
        this.vistamod.mostrar(false);
    };
    /**
        Atención a la pulsación del enlace al Inicio en el menú de navegación.
    **/
    Controlador.prototype.pulsarNavadmin = function () {
        this.ocultarVistas();
        this.vistaadmin.mostrar(true);
    };
    /**
        Atención a la pulsación del enlace al CRUD en el menú de navegación.
    **/
    Controlador.prototype.pulsarNavanadir = function () {
        this.ocultarVistas();
        this.vistaanadir.mostrar(true);
    };
    Controlador.prototype.pulsaranadir = function () {
        this.ocultarVistas();
        this.vistaanadir.mostrar(true);
    };
    /**
        Atención a la pulsación del enlace al Juego en el menú de navegación.
    **/
    Controlador.prototype.pulsarNavmod = function () {
        this.ocultarVistas();
        this.vistamod.mostrar(true);
    };
    Controlador.prototype.getModelo = function () {
        return this.modelo;
    };
    return Controlador;
}());
exports.Controlador = Controlador;
var app = new Controlador();
