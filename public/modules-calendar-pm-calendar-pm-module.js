(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-calendar-pm-calendar-pm-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/calendar-pm/pages/calendar-list/calendar-list.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/calendar-pm/pages/calendar-list/calendar-list.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"card pl-2 pr-2 pb-3\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t<h4 class=\"main-title pt-2 mt-2\"><span>{{'calendar.title' | translate}}</span></h4>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t<div *ngIf=\"showTimer\" style=\"margin-top: 10px;\">\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"isTimerStarted else elseBlock10\">\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-create mb-0 mb-lg-0 float-right\" tooltip=\"{{'timer_logs.title1' | translate}}\" (click)=\"stopTimer(true)\"><i class=\"fa fa-stop-circle\" aria-hidden=\"true\"></i></button>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<ng-template #elseBlock10>\r\n\t\t\t\t\t\t\t\t<button class=\"btn btn-create mb-0 mb-lg-0 float-right\" tooltip=\"{{'timer_logs.title' | translate}}\" (click)=\"selectTask()\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i></button>\r\n\t\t\t\t\t\t\t\t<!-- startTimer() -->\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body pt-3\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t<div class=\"row text-center\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 d-flex mb-lg-0 mb-2 ml-lg-0 ml-4\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"btn calender-day\" mwlCalendarPreviousView [view]=\"view\" [(viewDate)]=\"viewDate\" (viewDateChange)=\"closeOpenMonthViewDay()\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"calendar-icon fa fa-chevron-left\"></i>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"ml-2 mr-2\"><h3>{{ viewDate | calendarDate:(view + 'ViewTitle'): loginUser.language }}</h3></div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"btn calender-day\" mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\" (viewDateChange)=\"closeOpenMonthViewDay()\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"calendar-icon fa fa-chevron-right\"></i>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 mb-lg-0 mb-2 text-lg-right\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"btn-view-date\">\r\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"btn calender-today mb-1\" mwlCalendarToday [(viewDate)]=\"viewDate\">{{'calendar.today' | translate}}</div> -->\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn calender-today mb-1\" (click)=\"setView(CalendarView.Month)\" [class.active]=\"view === CalendarView.Month\">{{'calendar.month' | translate}}</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn calender-today mb-1\" (click)=\"setView(CalendarView.Week)\" [class.active]=\"view === CalendarView.Week\">{{'calendar.week' | translate}}</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"btn calender-today mb-1\" (click)=\"setView(CalendarView.Day)\" [class.active]=\"view === CalendarView.Day\">{{'calendar.day' | translate}}</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<br />\r\n\t\t\t\t\t\t\t<div [ngSwitch]=\"view\">\r\n\t\t\t\t\t\t\t\t<mwl-calendar-month-view *ngSwitchCase=\"CalendarView.Month\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\" [activeDayIsOpen]=\"activeDayIsOpen\" (dayClicked)=\"dayClicked($event.day)\" [locale]=\"loginUser.language\"></mwl-calendar-month-view>\r\n\t\t\t\t\t\t\t\t<mwl-calendar-week-view *ngSwitchCase=\"CalendarView.Week\" [viewDate]=\"viewDate\" [events]=\"events\"[refresh]=\"refresh\" [locale]=\"loginUser.language\"></mwl-calendar-week-view>\r\n\t\t\t\t\t\t\t\t<mwl-calendar-day-view *ngSwitchCase=\"CalendarView.Day\" [viewDate]=\"viewDate\" [events]=\"events\"[refresh]=\"refresh\" [locale]=\"loginUser.language\"></mwl-calendar-day-view>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</section>\r\n");

/***/ }),

/***/ "./src/app/core/services/meeting.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/meeting.service.ts ***!
  \**************************************************/
/*! exports provided: MeetingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingService", function() { return MeetingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var MeetingService = /** @class */ (function () {
    function MeetingService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    MeetingService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/meetings");
    };
    MeetingService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/meetings/" + id);
    };
    MeetingService.prototype.create = function (meeting) {
        return this.http.post(this.apiUrl + "/api/meetings", meeting);
    };
    MeetingService.prototype.update = function (meeting) {
        return this.http.put(this.apiUrl + "/api/meetings/" + meeting.id, meeting);
    };
    MeetingService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/meetings/" + id);
    };
    MeetingService.prototype.changeStatus = function (params) {
        return this.http.post(this.apiUrl + "/api/meetings/" + params.ids + "/change-status", { "status": params.status });
    };
    MeetingService.prototype.getCalendarMeetings = function () {
        return this.http.get(this.apiUrl + "/api/meetings/calendar");
    };
    MeetingService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MeetingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MeetingService);
    return MeetingService;
}());



/***/ }),

/***/ "./src/app/core/services/project.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/project.service.ts ***!
  \**************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    ProjectService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + "/api/projects");
    };
    ProjectService.prototype.getMyProjects = function () {
        return this.http.get(this.apiUrl + "/api/projects/my");
    };
    ProjectService.prototype.getById = function (id) {
        return this.http.get(this.apiUrl + "/api/projects/" + id);
    };
    ProjectService.prototype.getProjectById = function (id) {
        return this.http.get(this.apiUrl + "/api/projects/getbyid/" + id);
    };
    ProjectService.prototype.create = function (project) {
        return this.http.post(this.apiUrl + "/api/projects", project);
    };
    ProjectService.prototype.update = function (project) {
        return this.http.put(this.apiUrl + "/api/projects/" + project.id, project);
    };
    ProjectService.prototype.delete = function (id, params) {
        return this.http.post(this.apiUrl + "/api/projects/delete/" + id, params);
    };
    ProjectService.prototype.updateNotes = function (project) {
        return this.http.put(this.apiUrl + "/api/projects/notes/" + project.id, project);
    };
    ProjectService.prototype.changeStatus = function (project) {
        return this.http.post(this.apiUrl + "/api/projects/" + project.ids + "/change-status", { "status": project.status });
    };
    ProjectService.prototype.getReleasePlanner = function () {
        return this.http.get(this.apiUrl + "/api/projects/release-planner");
    };
    ProjectService.prototype.getProject = function () {
        return this.http.get(this.apiUrl + "/api/projects/projectmembers", {});
    };
    ProjectService.prototype.getProjectPermission = function (id) {
        return this.http.get(this.apiUrl + "/api/projects/" + id + "/permission", {});
    };
    ProjectService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/core/services/timesheet.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/timesheet.service.ts ***!
  \****************************************************/
/*! exports provided: TimesheetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetService", function() { return TimesheetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var TimesheetService = /** @class */ (function () {
    function TimesheetService(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    TimesheetService.prototype.getTimesheetsByModule = function (params) {
        return this.http.post(this.apiUrl + "/api/get-timesheets", params);
    };
    TimesheetService.prototype.create = function (params) {
        return this.http.post(this.apiUrl + "/api/timesheets", params);
    };
    TimesheetService.prototype.update = function (timesheet) {
        return this.http.put(this.apiUrl + "/api/timesheets/" + timesheet.id, timesheet);
    };
    TimesheetService.prototype.delete = function (id) {
        return this.http.delete(this.apiUrl + "/api/timesheets/" + id);
    };
    TimesheetService.prototype.getTimeLogs = function () {
        return this.http.get(this.apiUrl + "/api/timer-logs");
    };
    TimesheetService.prototype.createTimeLog = function (params) {
        return this.http.post(this.apiUrl + "/api/timer-logs", params);
    };
    TimesheetService.prototype.deleteTimeLog = function (id) {
        return this.http.delete(this.apiUrl + "/api/timer-logs/" + id);
    };
    TimesheetService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TimesheetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TimesheetService);
    return TimesheetService;
}());



/***/ }),

/***/ "./src/app/modules/calendar-pm/calendar-pm-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/calendar-pm/calendar-pm-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CalendarPmRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPmRoutingModule", function() { return CalendarPmRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_calendar_list_calendar_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/calendar-list/calendar-list.component */ "./src/app/modules/calendar-pm/pages/calendar-list/calendar-list.component.ts");




var routes = [
    {
        path: '',
        component: _pages_calendar_list_calendar_list_component__WEBPACK_IMPORTED_MODULE_3__["CalendarListComponent"]
    }
];
var CalendarPmRoutingModule = /** @class */ (function () {
    function CalendarPmRoutingModule() {
    }
    CalendarPmRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CalendarPmRoutingModule);
    return CalendarPmRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/calendar-pm/calendar-pm.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/calendar-pm/calendar-pm.module.ts ***!
  \***********************************************************/
/*! exports provided: CalendarPmModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPmModule", function() { return CalendarPmModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-draggable-droppable */ "./node_modules/angular-draggable-droppable/fesm5/angular-draggable-droppable.js");
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-resizable-element */ "./node_modules/angular-resizable-element/fesm5/angular-resizable-element.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _calendar_pm_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./calendar-pm-routing.module */ "./src/app/modules/calendar-pm/calendar-pm-routing.module.ts");
/* harmony import */ var _pages_calendar_list_calendar_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/calendar-list/calendar-list.component */ "./src/app/modules/calendar-pm/pages/calendar-list/calendar-list.component.ts");













var CalendarPmModule = /** @class */ (function () {
    function CalendarPmModule() {
    }
    CalendarPmModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pages_calendar_list_calendar_list_component__WEBPACK_IMPORTED_MODULE_12__["CalendarListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _calendar_pm_routing_module__WEBPACK_IMPORTED_MODULE_11__["CalendarPmRoutingModule"],
                angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_7__["DragAndDropModule"],
                angular_resizable_element__WEBPACK_IMPORTED_MODULE_8__["ResizableModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"].forRoot(),
                angular_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_9__["adapterFactory"]
                }),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                        useFactory: (HttpLoaderFactory),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
            ]
        })
    ], CalendarPmModule);
    return CalendarPmModule;
}());

// Required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, '../assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/modules/calendar-pm/pages/calendar-list/calendar-list.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/calendar-pm/pages/calendar-list/calendar-list.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FsZW5kYXItcG0vcGFnZXMvY2FsZW5kYXItbGlzdC9jYWxlbmRhci1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/calendar-pm/pages/calendar-list/calendar-list.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/calendar-pm/pages/calendar-list/calendar-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: CalendarListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarListComponent", function() { return CalendarListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../core/services/meeting.service */ "./src/app/core/services/meeting.service.ts");
/* harmony import */ var _core_services_holiday_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../../core/services/holiday.service */ "./src/app/core/services/holiday.service.ts");
/* harmony import */ var _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../../core/services/project.service */ "./src/app/core/services/project.service.ts");
/* harmony import */ var _core_services_defect_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../core/services/defect.service */ "./src/app/core/services/defect.service.ts");
/* harmony import */ var _core_services_incident_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../../core/services/incident.service */ "./src/app/core/services/incident.service.ts");
/* harmony import */ var _core_services_task_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../../../core/services/task.service */ "./src/app/core/services/task.service.ts");
/* harmony import */ var _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../../../core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../../../core/services/timesheet.service */ "./src/app/core/services/timesheet.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../../../../core/helpers/pm-helper */ "./src/app/core/helpers/pm-helper.ts");
/* harmony import */ var _core_helpers_custom_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../../../../core/helpers/custom-event-title-formatter.provider */ "./src/app/core/helpers/custom-event-title-formatter.provider.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_18__);



















var CalendarListComponent = /** @class */ (function () {
    function CalendarListComponent(translate, projectService, taskService, holidayService, MeetingService, authenticationService, defectService, timesheetService, toastr, incidentService) {
        var _this = this;
        this.translate = translate;
        this.projectService = projectService;
        this.taskService = taskService;
        this.holidayService = holidayService;
        this.MeetingService = MeetingService;
        this.authenticationService = authenticationService;
        this.defectService = defectService;
        this.timesheetService = timesheetService;
        this.toastr = toastr;
        this.incidentService = incidentService;
        this.isCalendarLoaded = false;
        this.showTimer = false;
        this.isTimerStarted = false;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"];
        this.viewDate = new Date();
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.events = this.AllCalendarEvents;
        this.activeDayIsOpen = true;
        this.authenticationService.loginUser.subscribe(function (x) { return _this.loginUser = x; });
    }
    CalendarListComponent.prototype.ngOnInit = function () {
        this.getTasks();
        // this.getTimeLogs();
        // this.timerInterval1 = setInterval(() => {
        // 	if(this.loginUser) {
        // 		this.getTimeLogs(false);
        // 	}
        // }, 5000);
    };
    CalendarListComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    };
    CalendarListComponent.prototype.addEvent = function (tasks) {
        this.events = tasks;
        this.isCalendarLoaded = true;
        this.refreshView();
    };
    CalendarListComponent.prototype.refreshView = function () {
        this.refresh.next();
    };
    CalendarListComponent.prototype.setView = function (view) {
        this.view = view;
    };
    CalendarListComponent.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    CalendarListComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getCalendarTasks().subscribe(function (data) {
            _this.tasks = data;
            _this.setCalendarData();
            // this.getDefects();
        });
    };
    CalendarListComponent.prototype.getDefects = function () {
        var _this = this;
        this.defectService.getDefectForCalendar()
            .subscribe(function (data) {
            _this.defects = data;
            _this.getIncidents();
        });
    };
    CalendarListComponent.prototype.getIncidents = function () {
        var _this = this;
        this.incidentService.getIncidentForCalendar()
            .subscribe(function (data) {
            _this.incidents = data;
            _this.getMeetings();
        });
    };
    CalendarListComponent.prototype.getMeetings = function () {
        var _this = this;
        this.MeetingService.getCalendarMeetings().subscribe(function (data) {
            _this.meetings = data;
            _this.getHolidays();
        });
    };
    CalendarListComponent.prototype.getHolidays = function () {
        var _this = this;
        this.holidayService.yearAllHolidays(new Date().getFullYear()).subscribe(function (data) {
            _this.holidays = data;
            _this.setCalendarData();
        });
    };
    CalendarListComponent.prototype.setCalendarData = function () {
        var eventsAll = [];
        this.tasks.forEach(function (element) {
            eventsAll.push({
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["subDays"])((new Date(element.start_time)), 0),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(new Date(element.end_time), 0),
                title: element.user_name + '<br>' + element.title + '<br>- ' + element.start_time + ' - ' + element.end_time,
                color: _core_helpers_pm_helper__WEBPACK_IMPORTED_MODULE_16__["colors"].blue,
                allDay: false
            });
        });
        // this.defects.forEach(element => {
        // 	eventsAll.push({
        // 		start: subDays(startOfDay(new Date(element.start_date)), 0),
        // 		end: addDays(new Date(element.end_date), 0),
        // 		title: element.generated_id + " - " + element.defect_name,
        // 		color: colors.orange,
        // 		allDay: true
        // 	});
        // });
        // this.incidents.forEach(element => {
        // 	eventsAll.push({
        // 		start: subDays(startOfDay(new Date(element.start_date)), 0),
        // 		end: addDays(new Date(element.end_date), 0),
        // 		title: element.generated_id + " - " + element.incident_name,
        // 		color: colors.purple,
        // 		allDay: true
        // 	});
        // });
        // this.meetings.forEach(element => {
        // 	eventsAll.push({
        // 		start: subDays(startOfDay(new Date(element.start_date)), 0),
        // 		end: addDays(new Date(element.end_date), 0),
        // 		title: element.generated_id + " - " + element.title,
        // 		color: colors.yellow,
        // 		allDay: true
        // 	});
        // });
        // this.holidays.forEach(element => {
        // 	eventsAll.push({
        // 		start: startOfDay(new Date(element.date)),
        // 		title: this.translate.instant('holidays.title') + " - " + element.event_name,
        // 		color: {
        // 			primary: element.color,
        // 			secondary: element.color
        // 		}
        // 	});
        // });
        this.addEvent(eventsAll);
        this.AllCalendarEvents = eventsAll;
    };
    CalendarListComponent.prototype.loadTimer = function () {
        this.totalHours = "00";
        this.totalMinutes = "00";
        this.totalSeconds = "00";
        if ((this.timeLogs && this.timeLogs.is_task_timer) && (this.timeLogs.reference_id == this.task.id)) {
            this.showTimer = true;
            this.isTimerStarted = this.timeLogs.is_task_timer;
            this.startDateTime = this.timeLogs.start_time;
            this.startTimer(false);
        }
        if (this.timeLogs && (this.timeLogs.is_defect_timer || this.timeLogs.is_incident_timer)) {
            this.showTimer = false;
        }
        if (!this.timeLogs) {
            this.showTimer = true;
        }
    };
    CalendarListComponent.prototype.selectTask = function () {
        var taskListHTML = "\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t<select id=\"taskSelect\" class=\"form-control\">\n\t\t\t\t<option value=\"\" disabled selected>Select task</option>\n\t\t\t\t" + this.tasks.map(function (task) { return "<option value=\"" + task.id + "\">" + task.name + "</option>"; }).join('') + "\n\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t";
        // Hiển thị popup
        sweetalert2__WEBPACK_IMPORTED_MODULE_15___default.a.fire({
            title: 'Select Task',
            html: "\n\t\t\t\t<form id=\"taskForm\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t" + taskListHTML + "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t",
            showCancelButton: true,
            confirmButtonText: 'Start',
            cancelButtonText: 'Cancel',
            focusConfirm: false,
            preConfirm: function () {
                var taskSelect = document.getElementById('taskSelect');
                // Lấy giá trị được chọn từ dropdown
                var selectedTask = taskSelect.value;
                // Kiểm tra nếu không có task nào được chọn
                if (!selectedTask) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_15___default.a.showValidationMessage('Please select task.');
                }
                // Trả về giá trị được chọn
                return selectedTask;
            }
        }).then(function (result) {
            if (result.value) {
                var selectedTasks = result.value;
                console.log('Các task đã chọn:', selectedTasks);
                // Xử lý các task đã chọn ở đây
            }
        });
    };
    CalendarListComponent.prototype.startTimer = function (isSaved) {
        var _this = this;
        if (isSaved === void 0) { isSaved = true; }
        if (isSaved) {
            if (this.timeLogs && (this.timeLogs.is_task_timer || this.timeLogs.is_defect_timer || this.timeLogs.is_incident_timer)) {
                this.toastr.error(this.translate.instant('timer_logs.error_messages.message1'), this.translate.instant('tasks.title'));
                return false;
            }
        }
        this.timerInterval = setInterval(function () {
            _this.startTimerWatch();
        }, 5000);
        if (isSaved) {
            this.isTimerStarted = true;
            this.saveTimeLogs();
        }
    };
    CalendarListComponent.prototype.startTimerWatch = function () {
        var time = this.startDateTime ? this.startDateTime : this.getDateTime();
        var endDate = new Date(), startDate = new Date(time), dateDiff = endDate.getTime() - startDate.getTime();
        var hours = Math.floor((dateDiff / 36e5) % 24), minutes = Math.floor((dateDiff / 6e4) % 60), seconds = Math.floor((dateDiff / 1e3) % 60);
        this.totalHours = hours < 10 ? "0" + hours : hours,
            this.totalMinutes = minutes < 10 ? "0" + minutes : minutes,
            this.totalSeconds = seconds < 10 ? "0" + seconds : seconds;
    };
    CalendarListComponent.prototype.getDateTime = function () {
        var date = new Date(), fullDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(), months = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1, hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(), minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(), seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        return date.getFullYear() + "-" + months + "-" + fullDate + " " + hours + ":" + minutes + ":" + seconds;
    };
    CalendarListComponent.prototype.saveTimeLogs = function () {
        var _this = this;
        this.timesheetService.createTimeLog({
            "project_id": this.task.project_id,
            "reference_id": this.task.id,
            "is_task_timer": true,
            "is_defect_timer": false,
            "is_incident_timer": false,
            "start_time": moment__WEBPACK_IMPORTED_MODULE_18__(new Date()).format("YYYY-MM-DD HH:mm:ss")
        }).subscribe(function (data) {
            _this.startDateTime = new Date();
        });
    };
    CalendarListComponent.prototype.stopTimer = function (isSaved) {
        var endDate = new Date(), startDate = new Date(this.startDateTime), dateDiff = endDate.getTime() - startDate.getTime();
        var diffHrs = Math.floor((dateDiff % 86400000) / 3600000); // hours
        var diffMins = Math.round(((dateDiff % 86400000) % 3600000) / 60000);
        // --
        // Check
        if (diffMins < 1) {
            this.toastr.error(this.translate.instant('timer_logs.error_messages.message2'), this.translate.instant('timesheet.title'));
            isSaved = false;
            // this.setClearInterval();
            // return false;
        }
        if (this.getStartFutureDate(this.startDateTime, this.getDateTime()) > 720) {
            this.toastr.error(this.translate.instant('timer_logs.error_messages.message3'), this.translate.instant('timesheet.title'));
            isSaved = false;
            // this.setClearInterval();
            // return false;
        }
        this.deleteTimesheet(isSaved);
    };
    CalendarListComponent.prototype.getStartFutureDate = function (startDate, endDate) {
        (startDate = new Date(startDate)), (endDate = new Date(endDate));
        var diff = (startDate.getTime() - endDate.getTime()) / 1e3;
        return (diff /= 60), Math.abs(Math.round(diff));
    };
    CalendarListComponent.prototype.setClearInterval = function () {
        clearInterval(this.timerInterval);
        this.getTimeLogs();
        this.isTimerStarted = false;
        this.startDateTime = null;
    };
    CalendarListComponent.prototype.saveTimesheet = function () {
        var _this = this;
        this.timesheetService.create({
            "project_id": this.task.project_id,
            "module_id": 2,
            "module_related_id": this.task.id,
            "start_time": moment__WEBPACK_IMPORTED_MODULE_18__(new Date(this.startDateTime)).format("YYYY-MM-DD HH:mm:ss"),
            "end_time": moment__WEBPACK_IMPORTED_MODULE_18__(new Date()).format("YYYY-MM-DD HH:mm:ss"),
        }).subscribe(function (data) {
            _this.toastr.success(_this.translate.instant('timesheet.messages.create'), _this.translate.instant('timesheet.title'));
            _this.setClearInterval();
        });
    };
    CalendarListComponent.prototype.deleteTimesheet = function (isSaved) {
        var _this = this;
        this.timesheetService.deleteTimeLog(this.loginUser.id)
            .subscribe(function (data) {
            if (isSaved) {
                _this.saveTimesheet();
            }
            else {
                _this.setClearInterval();
            }
        });
    };
    CalendarListComponent.prototype.getTimeLogs = function (isLoad) {
        var _this = this;
        if (isLoad === void 0) { isLoad = true; }
        this.timesheetService.getTimeLogs()
            .subscribe(function (data) {
            _this.timeLogs = data;
            if (isLoad) {
                _this.loadTimer();
            }
        });
    };
    CalendarListComponent.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"] },
        { type: _core_services_task_service__WEBPACK_IMPORTED_MODULE_11__["TaskService"] },
        { type: _core_services_holiday_service__WEBPACK_IMPORTED_MODULE_7__["HolidayService"] },
        { type: _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_6__["MeetingService"] },
        { type: _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"] },
        { type: _core_services_defect_service__WEBPACK_IMPORTED_MODULE_9__["DefectService"] },
        { type: _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_13__["TimesheetService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrService"] },
        { type: _core_services_incident_service__WEBPACK_IMPORTED_MODULE_10__["IncidentService"] }
    ]; };
    CalendarListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendar-list',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./calendar-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/calendar-pm/pages/calendar-list/calendar-list.component.html")).default,
            providers: [{
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarDateFormatter"],
                    useClass: _core_helpers_custom_event_title_formatter_provider__WEBPACK_IMPORTED_MODULE_17__["CustomDateFormatter"]
                }],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./calendar-list.component.scss */ "./src/app/modules/calendar-pm/pages/calendar-list/calendar-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _core_services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"],
            _core_services_task_service__WEBPACK_IMPORTED_MODULE_11__["TaskService"],
            _core_services_holiday_service__WEBPACK_IMPORTED_MODULE_7__["HolidayService"],
            _core_services_meeting_service__WEBPACK_IMPORTED_MODULE_6__["MeetingService"],
            _core_services_authentication_service__WEBPACK_IMPORTED_MODULE_12__["AuthenticationService"],
            _core_services_defect_service__WEBPACK_IMPORTED_MODULE_9__["DefectService"],
            _core_services_timesheet_service__WEBPACK_IMPORTED_MODULE_13__["TimesheetService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrService"],
            _core_services_incident_service__WEBPACK_IMPORTED_MODULE_10__["IncidentService"]])
    ], CalendarListComponent);
    return CalendarListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-calendar-pm-calendar-pm-module.js.map