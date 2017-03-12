import '../assets/js/bootstrap.min.js';
import '../assets/js/material.min.js';
import '../assets/js/chartist.min.js';
import '../assets/js/bootstrap-notify.js';
import '../assets/js/material-dashboard.js';

import angular from 'angular';
import 'angular-material/angular-material.css';
import 'font-awesome/css/font-awesome.css';
import uiRouter from "angular-ui-router";
import angularAnimate from 'angular-animate';
import angularMaterial from 'angular-material';

import root from './root/root.component';
import home from './home/home.component';
import homeState from './home/home.state';
import create from './create/create.component';
import createState from './create/create.state';
import createCapsule from './CreateCapsule/create-capsule.component';
import createSh from './CreateSh/create-sh.component';
import history from './history/history.component';
import capsule from './capsule/capsule.component';
import capsuleNameFilter from './home/home-capsulename.filter';

// import manage from './manage/manage.component';
import {
    heatmap
} from './directive/calendar-heatmap.directive';
import {
    GitFolderInfoService
} from './services/git-folder-info.service';
angular
    .module('app', [
        angularMaterial,
        uiRouter
    ])
    .config(['$mdThemingProvider', '$stateProvider', '$urlRouterProvider', function ($mdThemingProvider, $stateProvider, $urlRouterProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('red')
            .accentPalette('deep-orange')
            .backgroundPalette('grey', {
                'default': '300',
                'hue-1': '50'
            })
            .warnPalette('red');

        $stateProvider
            .state('home', homeState)
            .state("create", createState)

        $urlRouterProvider.otherwise('/home')
    }])
    .component("root", root)
    .component("home", home)
    .directive("heatmap", heatmap)
    .component("create", create)
    .component("capsule", capsule)
    .component("history", history)
    .component("createCapsule", createCapsule)
    .component("createSh", createSh)
    .filter("capsulenamefilter", capsuleNameFilter)
    // .component("manage", manage)
    // .component("error", error)
    .service("GitFolderInfoService", GitFolderInfoService)