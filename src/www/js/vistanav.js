"use strict";
exports.__esModule = true;
exports.VistaNav = void 0;
var VistaNav = /** @class */ (function () {
    /**
        Constructor de la clase.
        @param controlador {Controlador} Controlador de la vista.
        @param nav {HtmlNavElement} Nav de HTML en el que se desplegará la vista.
    **/
    function VistaNav(controlador, nav) {
        this.controlador = controlador;
        this.nav = nav;
        this.liadmin = this.nav.getElementsByTagName('li')[0];
        this.lianadir = this.nav.getElementsByTagName('li')[1];
        // this.anadir= document.getElementById('anadir')
        this.mod = document.getElementById('mod');
        this.limod = this.nav.getElementsByTagName('li')[2];
        this.mod.onclick = this.pulsarmod.bind(this);
        // this.anadir.onclick=this.pulsaranadir.bind(this)
        this.liadmin.onclick = this.pulsaradmin.bind(this);
        this.lianadir.onclick = this.pulsaranadir.bind(this);
        this.limod.onclick = this.pulsarmod.bind(this);
    }
    /**
        Atención a la pulsación sobre el enlace de Inicio
    **/
    VistaNav.prototype.pulsaradmin = function () {
        this.controlador.pulsarNavadmin();
    };
    /**
        Atención a la pulsación sobre el enlace de CRUD
    **/
    VistaNav.prototype.pulsaranadir = function () {
        this.controlador.pulsarNavanadir();
    };
    /**
        Atención a la pulsación sobre el enlace de Juego
    **/
    VistaNav.prototype.pulsarmod = function () {
        this.controlador.pulsarNavmod();
    };
    return VistaNav;
}());
exports.VistaNav = VistaNav;
