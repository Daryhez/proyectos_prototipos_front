import React, { Component } from "react";
import "./css/base.css";
import "./css/bootstrap.min.css";
import "./css/bootstrap-theme.min.css";
import "./css/phone.css";
import "./css/printer.css";
import "./css/reset.css";
import "./css/small.css";
import "./css/tablet.css";
import "./css/unal.css";
import "./unal.js";

class UnalCanvas extends Component {
  constructor(props) {
    super(props);
    this.handleSession = this.handleSession.bind(this);
    this.state = {
      logged: false,
      searchTerm: "",
    };
  }
  handleSession = (logged) => {
    this.setState({ logged: logged });
  };
  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="revisit-after" content="1 hour" />
        <meta name="distribution" content="all" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.5, user-scalable=yes"
        />
        <meta name="expires" content={1} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="all" />
        <link type="text/css" href="./css/bootstrap.min.css" media="all" />
        <link
          type="text/css"
          href="./css/bootstrap-theme.min.css"
          media="all"
        />
        <link type="text/css" href="./css/reset.css" media="all" />
        <link type="text/css" href="./css/unal.css" media="all" />
        <link type="text/css" href="./css/base.css" media="all" />
        <link type="text/css" href="./css/tablet.css" media="all" />
        <link type="text/css" href="./css/phone.css" media="all" />
        <link type="text/css" href="./css/small.css" media="all" />
        <link type="text/css" href="./css/printer.css" media="print" />
        <title>ActasApp: Universidad Nacional de Colombia</title>
        <div id="footfix">
          <div id="services">
            <div className="indicator hidden-xs" />
            <ul className="dropdown-menu">
              <li>
                <a href="http://correo.unal.edu.co">
                  <img
                    src={require("./images/icnServEmail.png")}
                    width={32}
                    height={32}
                    alt="Correo Electrónico"
                  />
                  Correo Electrónico
                </a>
              </li>
              <li>
                <a href="https://dninfoa.unal.edu.co">
                  <img
                    src={require("./images/icnServSia.png")}
                    width={32}
                    height={32}
                    alt="Dirección Nacional de Información Académica"
                  />
                  DNINFOA - SIA
                </a>
              </li>
              <li>
                <a href="http://bibliotecas.unal.edu.co">
                  <img
                    src={require("./images/icnServLibrary.png")}
                    width={32}
                    height={32}
                    alt="Biblioteca"
                  />
                  Bibliotecas
                </a>
              </li>
              <li>
                <a href="http://personal.unal.edu.co">
                  <img
                    src={require("./images/icnServCall.png")}
                    width={32}
                    height={32}
                    alt="Convocatorias"
                  />
                  Convocatorias
                </a>
              </li>
              <li>
                <a href="http://identidad.unal.edu.co">
                  <img
                    src={require("./images/icnServIdentidad.png")}
                    width={32}
                    height={32}
                    alt="Identidad U.N."
                  />
                  Identidad U.N.
                </a>
              </li>
            </ul>
          </div>
          <header id="unalTop">
            <div className="logo">
              <a href="http://unal.edu.co">
                <svg width="93%" height="93%">
                  <image
                    xlinkHref={require("./images/escudoUnal.svg")}
                    width="100%"
                    height="100%"
                    className="hidden-print"
                  />
                </svg>
                <img
                  src={require("./images/escudoUnal_black.png")}
                  className="visible-print"
                  alt="Escudo de la Universidad Nacional de Colombia."
                />
              </a>
            </div>
            <div className="seal">
              <img
                className="hidden-print"
                alt="Escudo de la República de Colombia"
                src={require("./images/sealColombia.png")}
                width={66}
                height={66}
              />
              <img
                className="visible-print"
                alt="Escudo de la República de Colombia"
                src={require("./images/sealColombia_black.png")}
                width={66}
                height={66}
              />
            </div>
            <div className="firstMenu">
              <button
                id="button-navbar"
                className="navbar-toggle collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#bs-navbar"
                aria-controls="bs-navbar"
                aria-expanded="false"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <ul className="socialLinks hidden-xs">
                {/* eslint-disable */}
                <li>
                  <a
                    href="https://www.facebook.com/UNColombia"
                    className="facebook"
                    title="Página oficial en Facebook"
                  />
                </li>
                <li>
                  <a
                    href="https://twitter.com/UNColombia"
                    className="twitter"
                    title="Cuenta oficial en Twitter"
                  />
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCnE6Zj2llVxcvL5I38B0Ceg"
                    className="youtube"
                    title="Canal oficial de Youtube"
                  />
                </li>
                <li>
                  <a
                    href="http://agenciadenoticias.unal.edu.co/nc/sus/type/rss2.html"
                    className="rss"
                    title="Suscripción a canales de información RSS"
                  />
                </li>
                {/* eslint-enable */}
              </ul>
              <div className="navbar-default">
                <nav id="profiles">
                  <ul className="nav navbar-nav dropdown-menu">
                    <li className="item_Aspirantes #&gt;">
                      <a href="http://aspirantes.unal.edu.co/">Aspirantes</a>
                    </li>
                    <li className="item_Estudiantes #&gt;">
                      <a href="http://estudiantes.unal.edu.co/">Estudiantes</a>
                    </li>
                    <li className="item_Egresados #&gt;">
                      <a href="http://egresados.unal.edu.co/">Egresados</a>
                    </li>
                    <li className="item_Docentes #&gt;">
                      <a href="http://docentes.unal.edu.co/">Docentes</a>
                    </li>
                    <li className="item_Administrativos #&gt;">
                      <a href="http://administrativos.unal.edu.co/">
                        Administrativos
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div id="bs-navbar" className="navbar-collapse collapse navigation">
              <div className="site-url">
                <a href="https://www.ingenieria.bogota.unal.edu.co/primiferia_bienestar/">
                  ingenieria.bogota.unal.edu.co/primiferia_bienestar/
                </a>
              </div>
              <div className="buscador">
                <div id="___gcse_0">
                  <div
                    className="gsc-control-searchbox-only gsc-control-searchbox-only-es"
                    dir="ltr"
                  >
                    <form
                      className="gsc-search-box gsc-search-box-tools"
                      acceptCharset="utf-8"
                    >
                      <table
                        cellSpacing="0"
                        cellPadding="0"
                        className="gsc-search-box"
                      >
                        <tbody>
                          <tr>
                            <td className="gsc-input">
                              <div className="gsc-input-box" id="gsc-iw-id1">
                                <table
                                  cellSpacing="0"
                                  cellPadding="0"
                                  id="gs_id50"
                                  className="gstl_50 gsc-input"
                                  style={{ width: "100%", padding: "0px" }}
                                >
                                  <tbody>
                                    <tr>
                                      <td id="gs_tti50" className="gsib_a">
                                        <input
                                          autoComplete="off"
                                          type="text"
                                          size="10"
                                          className="gsc-input"
                                          name="search"
                                          title="buscar"
                                          id="gsc-i-id1"
                                          placeholder="Buscar proyectos"
                                          style={{
                                            width: "100%",
                                            padding: "0px",
                                            border: "none",
                                            margin: "0px",
                                            height: "auto",
                                            background:
                                              "url('https://www.google.com/cse/static/images/1x/googlelogo_lightgrey_46x16dp.png') left center no-repeat rgb(255, 255, 255)",
                                            textIndent: "48px",
                                            outline: "none",
                                          }}
                                          dir="ltr"
                                          spellCheck="false"
                                          onChange={(e) =>
                                            this.setState({
                                              searchTerm: e.target.value,
                                            })
                                          }
                                        />
                                      </td>
                                      <td className="gsib_b">
                                        <div
                                          className="gsst_b"
                                          id="gs_st50"
                                          dir="ltr"
                                        >
                                          {/* eslint-disable-next-line*/}
                                          <a
                                            className="gsst_a"
                                            style={{ display: "none" }}
                                            title="Borrar contenido del cuadro de búsqueda"
                                            role="button"
                                          >
                                            <span
                                              className="gscb_a"
                                              id="gs_cb50"
                                              aria-hidden="true"
                                            >
                                              ×
                                            </span>
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </td>
                            <td className="gsc-search-button">
                              <button className="gsc-search-button gsc-search-button-v2">
                                <svg width="13" height="13" viewBox="0 0 13 13">
                                  <title>buscar</title>
                                  <path d="m4.8495 7.8226c0.82666 0 1.5262-0.29146 2.0985-0.87438 0.57232-0.58292 0.86378-1.2877 0.87438-2.1144 0.010599-0.82666-0.28086-1.5262-0.87438-2.0985-0.59352-0.57232-1.293-0.86378-2.0985-0.87438-0.8055-0.010599-1.5103 0.28086-2.1144 0.87438-0.60414 0.59352-0.8956 1.293-0.87438 2.0985 0.021197 0.8055 0.31266 1.5103 0.87438 2.1144 0.56172 0.60414 1.2665 0.8956 2.1144 0.87438zm4.4695 0.2115 3.681 3.6819-1.259 1.284-3.6817-3.7 0.0019784-0.69479-0.090043-0.098846c-0.87973 0.76087-1.92 1.1413-3.1207 1.1413-1.3553 0-2.5025-0.46363-3.4417-1.3909s-1.4088-2.0686-1.4088-3.4239c0-1.3553 0.4696-2.4966 1.4088-3.4239 0.9392-0.92727 2.0864-1.3969 3.4417-1.4088 1.3553-0.011889 2.4906 0.45771 3.406 1.4088 0.9154 0.95107 1.379 2.0924 1.3909 3.4239 0 1.2126-0.38043 2.2588-1.1413 3.1385l0.098834 0.090049z"></path>
                                </svg>
                              </button>
                            </td>
                            <td className="gsc-clear-button">
                              <div
                                className="gsc-clear-button"
                                title="borrar resultados"
                              >
                                &nbsp;
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mainMenu">
                <div className="btn-group">
                  <a
                    href="https://www.ingenieria.bogota.unal.edu.co/primiferia_bienestar/"
                    className="btn btn-default dropdown-toggle"
                  >
                    Inicio
                  </a>
                  <span className="caret-right" />
                </div>
                <div className="btn-group">
                  <a
                    href="https://ingenieria.bogota.unal.edu.co/es/facultad-es.html"
                    className="btn btn-default dropdown-toggle"
                  >
                    Facultad
                  </a>
                  <span className="caret-right"></span>
                </div>
                <div className="btn-group">
                  <a
                    href="https://ingenieria.bogota.unal.edu.co/es/programas.html"
                    className="btn btn-default dropdown-toggle"
                  >
                    Programas
                  </a>
                  <span className="caret-right"></span>
                </div>
                <div className="btn-group">
                  <a
                    href="https://ingenieria.bogota.unal.edu.co/es/dependencias/vicedecanatura-academica/autoevaluacion-y-acreditacion.html"
                    className="btn btn-default dropdown-toggle"
                  >
                    ¿Quienes somos?
                  </a>
                  <span className="caret-right" />
                </div>
              </div>
            </div>
          </header>

          <main
            className="detalle"
            style={{ marginLeft: "50px", marginRight: "50px" }}
          >
            {React.cloneElement(this.props.children, {
              searchTerm: this.state.searchTerm,
            })}
          </main>
        </div>

        <footer
          className="clear"
          style={{
            marginTop: "-20px",
            lineHeight: "normal",
            overflow: "hidden",
          }}
        >
          <nav className="col-md-3 col-lg-3 col-sm-3 col-xs-4 col-xxs-6 gobiernoLinea">
            <a href="http://www.legal.unal.edu.co" target="_top">
              Régimen Legal
            </a>
            <a href="http://personal.unal.edu.co" target="_top">
              Talento humano
            </a>
            <a href="http://contratacion.unal.edu.co" target="_top">
              Contratación
            </a>
            <a href="http://personal.unal.edu.co" target="_top">
              Ofertas de empleo
            </a>
            <a href="http://rendiciondecuentas.unal.edu.co/" target="_top">
              Rendición de cuentas
            </a>
            <a
              href="http://docentes.unal.edu.co/concurso-profesoral/"
              target="_top"
            >
              Concurso docente
            </a>
            <a href="http://www.pagovirtual.unal.edu.co/" target="_top">
              Pago Virtual
            </a>
            <a href="http://controlinterno.unal.edu.co/" target="_top">
              Control interno
            </a>
            <a href="http://siga.unal.edu.co" target="_top">
              Calidad
            </a>
            <a
              href="http://unal.edu.co/buzon-de-notificaciones/"
              target="_self"
            >
              Buzón de notificaciones
            </a>
          </nav>
          <nav className="col-md-3 col-lg-3 col-sm-3 col-xs-4 col-xxs-6 gobiernoLinea">
            <a href="http://correo.unal.edu.co" target="_top">
              Correo institucional
            </a>
            <a href="index.html#">Mapa del sitio</a>
            <a href="http://redessociales.unal.edu.co" target="_top">
              Redes Sociales
            </a>
            <a href="index.html#">FAQ</a>
            <a href="http://unal.edu.co/quejas-y-reclamos/" target="_self">
              Quejas y reclamos
            </a>
            <a href="http://unal.edu.co/atencion-en-linea/" target="_self">
              Atención en línea
            </a>
            <a href="http://unal.edu.co/encuesta/" target="_self">
              Encuesta
            </a>
            <a href="index.html#">Contáctenos</a>
            <a href="http://www.onp.unal.edu.co" target="_top">
              Estadísticas
            </a>
            <a href="index.html#">Glosario</a>
          </nav>
          <div className="col-md-4 col-lg-4 col-sm-4 col-xs-4 col-xxs-12 footer-info">
            <p className="col-sm-12 col-md-6 contacto">
              <b>Contacto página web:</b>
              <br />
              Carrera 45 # 26-85
              <br />
              Edificio Insignia Julio Garavito Armero
              <br /> Bogotá D.C., Colombia
              <br />
              (+57 1) 316 5000 Ext. 13578
            </p>
            <p className="col-sm-12 col-md-6 derechos">
              © Copyright 2020
              <br /> Algunos derechos reservados.
              <br />
              <a
                title="Comuníquese con el administrador de este sitio web"
                href="mailto:decfaci_bog@unal.edu.co"
              >
                decfaci_bog@unal.edu.co
              </a>
              <br />
              <a href="index.html#">Acerca de este sitio web</a>
              <br /> Última actualización: 24/03/2020
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-sm-2 col-xs-12 logos">
            <div className="col-xs-6 col-sm-12 col-md-6 no-padding">
              <a
                className="col-xs-6 col-sm-12"
                href="http://www.orgulloun.unal.edu.co"
              >
                <img
                  className="hidden-print"
                  alt="Orgullo UN"
                  src={require("./images/log_orgullo.png")}
                  width={78}
                  height={21}
                />
                <img
                  className="visible-print"
                  alt="Orgullo UN"
                  src={require("./images/log_orgullo_black.png")}
                  width={94}
                  height={37}
                />
              </a>
              <a
                className="col-xs-6 col-sm-12 imgAgencia"
                href="http://www.agenciadenoticias.unal.edu.co/inicio.html"
              >
                <img
                  className="hidden-print"
                  alt="Agencia de noticias"
                  src={require("./images/log_agenc.png")}
                  width={94}
                  height={25}
                />
                <img
                  className="visible-print"
                  alt="Agencia de noticias"
                  src={require("./images/log_agenc_black.png")}
                  width={94}
                  height={37}
                />
              </a>
            </div>
            <div className="col-xs-6 col-sm-12 col-md-6 no-padding">
              <a
                className="col-xs-6 col-sm-12"
                href="https://www.sivirtual.gov.co/memoficha-entidad/-/entidad/T0356"
              >
                <img
                  alt="Trámites en línea"
                  src={require("./images/log_gobiern.png")}
                  width={67}
                  height={51}
                />
              </a>
              <a
                className="col-xs-6 col-sm-12"
                href="http://www.contaduria.gov.co/"
              >
                <img
                  alt="Contaduría general de la republica"
                  src={require("./images/log_contra.png")}
                  width={67}
                  height={51}
                />
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default UnalCanvas;
