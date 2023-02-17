import { Modelo } from './modelo';
import { VistaNav } from './vistanav';
import { Vistaadmin } from './vistaadmin';
import { Vistaanadir } from './vistaanadir';
import { Vistamod } from './vistamod';

/**
 * Controlador de la aplicación
 */
class Controlador {
  private modelo: Modelo;
  private nav: HTMLElement;
  private divadmin: HTMLElement | null;
  private divanadir: HTMLElement | null;
  private divmod: HTMLElement | null;
  private vistaNav: VistaNav;
  private vistaadmin: Vistaadmin;
  private vistaanadir: Vistaanadir;
  private vistamod: Vistamod;

  /**
   * Constructor de la clase
   * Llama al método iniciar al cargarse la página
   **/
  constructor() {
    window.onload = this.iniciar.bind(this);
    this.modelo = new Modelo(this);
  }

  /**
   * Inicia la aplicación
   * Crea el modelo y las vistas.
   **/
  private iniciar() {
    this.modelo = new Modelo();
    this.nav = document.getElementsByTagName('nav')[0];
    this.divadmin = document.getElementById('divadmin')!;
    this.divanadir = document.getElementById('divanadir')!;
    this.divmod = document.getElementById('divmod')!;

    // this.vista = new Vista(this, document.getElementsByClassName('cuadro1'))

    this.vistaNav = new VistaNav(this, this.nav);
    this.vistaadmin = new Vistaadmin(this.divadmin, this);
    this.vistaanadir = new Vistaanadir(this.divanadir, this);
    this.vistamod = new Vistamod(this.divmod, this);

    this.vistaadmin.mostrar(true);
  }

  public buscar():void {
    this.modelo.listar(this.listarOK.bind(this));
  }

  public buscarOK(campeones: Campeon[]) {
    this.vistaadmin.cargarBusqueda(campeones);
  }

  public listar():void {
    this.modelo.listar(this.listarOK.bind(this));
  }

  public listarOK(campeones: any) {
    this.vistaadmin.cargarlista(campeones);
  }

  public insertar(objeto: any) {
    this.modelo.insertar(objeto, this.insertarOK.bind(this));
  }

  public insertarOK() {
    console.log('La inserción ha ido bien');
  }

  /**
   * Oculta todas las vistas.
   */
  private ocultarVistas() {
    this.vistaadmin.mostrar(false);
    this.vistaanadir.mostrar(false);
    this.vistamod.mostrar(false);
  }

  /**
   * Atención a la pulsación del enlace al Inicio en el menú de navegación.
   **/
  public pulsarNavadmin() {
    this.ocultarVistas();
    this.vistaadmin.mostrar(true);
  }

  /**
   * Atención a la pulsación del enlace al CRUD en el menú de navegación.
   **/
  public pulsarNavanadir() {
    this.ocultarVistas();
    this.vistaanadir.mostrar(true);
  }

  public pulsaranadir() {
    this.ocultarVistas();
    this.vistaanadir.mostrar(true);
  }

  /**
   * Atención a la pulsación del enlace al Juego en el menú de navegación.
   **/
  public pulsarNavmod() {
    this.ocultarVistas();
    this.vistamod.mostrar(true);
  }

  public getModelo() {
    return this.modelo;
  }
}
const app = new Controlador()