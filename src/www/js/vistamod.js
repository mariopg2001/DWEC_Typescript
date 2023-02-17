"use strict";
/**
    @file Contiene el modelo de la vista de inicio
    @author Miguel Jaque <mjaque@migueljaque.com>
    @license GPL-3.0-or-later
**/
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
exports.Vistamod = void 0;
var vista_js_1 = require("./vista.js");
/**
    Implementa una vista de inicio.
**/
var Vistamod = /** @class */ (function (_super) {
    __extends(Vistamod, _super);
    /**
        Constructor de la clase.
        @param div {HtmlDivElement} Div de HTML en el que se desplegará la vista.
    **/
    function Vistamod(div) {
        return _super.call(this, div) || this;
    }
    return Vistamod;
}(vista_js_1.Vista));
exports.Vistamod = Vistamod;
