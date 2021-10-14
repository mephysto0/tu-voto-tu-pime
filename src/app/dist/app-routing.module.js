"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var categorias_component_1 = require("./screens/categorias/categorias.component");
var votaciones_component_1 = require("./screens/votaciones/votaciones.component");
var login_component_1 = require("./screens/login/login.component");
var registro_component_1 = require("./screens/registro/registro.component");
var principal_component_1 = require("./screens/principal/principal.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes = [
    {
        path: '', component: principal_component_1.PrincipalComponent
    },
    {
        path: 'registro', component: registro_component_1.RegistroComponent
    },
    {
        path: 'login', component: login_component_1.LoginComponent
    },
    {
        path: 'votaciones', component: votaciones_component_1.VotacionesComponent
    },
    {
        path: 'categorias', component: categorias_component_1.CategoriasComponent
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
