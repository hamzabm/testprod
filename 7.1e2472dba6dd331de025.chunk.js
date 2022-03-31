webpackJsonp([7],{1293:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a.d(t,"GeofencingModule",(function(){return h}));var r=a(0),o=a(10),n=a(578),i=a(6),s=a(1484),l=a(232),c=a(14),d=a(1417),p=a(1416),g=a(1418),u=a(1419),h=(function(){function e(){}return e=__decorate([Object(r.NgModule)({imports:[o.CommonModule,n.a,c.FormsModule,c.ReactiveFormsModule,s.a,i.d,l.c.forRoot({apiUrl:"https://maps.google.com/maps/api/js?key=AIzaSyAC-qUAY110ztVJPe3BnDp15WzCMop3zjQ&libraries=places,drawing"})],declarations:[p.a,d.a,g.a,u.a]})],e)})()},1416:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(0),o=a(5),n=a(6),i=a(88),s=(function(){function e(e,t,a){this.router=e,this.store=t,this._state=a}return e=__decorate([Object(r.Component)({selector:"geofencing-component",template:"\n              <router-outlet></router-outlet>\n\n\n            "}),__metadata("design:paramtypes",[n.c,o.Store,i.a])],e)})()},1417:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(0),o=a(5),n=a(6),i=a(231),s=(function(){function e(e,t){var a=this;this.store=e,this.router=t,this.limit=10,this.page=1,this.store.select("geofencing").subscribe((function(e){e&&e.allGeofenceList&&(a.geofenceList=e.allGeofenceList.regions)}))}return e.prototype.ngOnInit=function(){this.getAllGeofence(this.page)},e.prototype.getAllGeofence=function(e){this.store.dispatch({type:i.b.GET_ALL_GEOFENCE,payload:{limit:this.limit,currentPage:this.page}})},e.prototype.pageChanged=function(e){this.page=e,this.getAllGeofence(this.page)},e.prototype.editGeofence=function(e){localStorage.setItem("geofenceToEdit",JSON.stringify(e)),this.router.navigate(["/pages/geofencing/editGeofence"])},e.prototype.deleteGeofence=function(e){this.store.dispatch({type:i.b.DELETE_GEOFENCE,payload:{geofenceID:e._id}})},e=__decorate([Object(r.Component)({selector:"geofence-list",template:a(1485)}),__metadata("design:paramtypes",[o.Store,n.c])],e)})()},1418:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(0),o=a(5),n=a(6),i=a(231),s=a(19),l=a(14),c=a(232),d=(function(){function e(e,t,a,r){this.store=e,this.router=t,this.fb=a,this.toastrService=r,this.submitted=!1,this.coordinates_array=[],this.latLngArray=[],this.chooseMarker=!1,this.startCoordinate=[],this.store.select("geofencing").subscribe((function(e){})),this.form=a.group({regionName:["",l.Validators.required],description:["",l.Validators.required]}),this.regionName=this.form.controls.regionName,this.description=this.form.controls.description}return e.prototype.ngOnInit=function(){var e=this;this.drawingManager.initialized$.subscribe((function(t){google.maps.event.addListener(t,"overlaycomplete",(function(a){if(e.drawableMode=t,t.setOptions({drawingControl:!1}),a.type!==google.maps.drawing.OverlayType.MARKER){if(google.maps.event.addListener(a.overlay,"click",(function(t){e.selectedOverlay=a.overlay,e.selectedOverlay.setEditable(!0)})),e.selectedOverlay=a.overlay,a.overlay.getPath().forEach((function(t){e.coordinates_array.push({lng:parseFloat(t.lng()),lat:parseFloat(t.lat())})})),a.overlay.getPath()){var r=[];e.startCoordinate=[];for(var o=0;o<e.coordinates_array.length;o++){var n=[];n.push(e.coordinates_array[o].lng),n.push(e.coordinates_array[o].lat),0==o&&(e.startCoordinate.push(e.coordinates_array[o].lng),e.startCoordinate.push(e.coordinates_array[o].lat)),r.push(n)}r.push(e.startCoordinate),e.latLngArray=r,e.chooseMarker=!1,t.setDrawingMode(" ")}}else{a.visible=!1,e.chooseMarker=!1;var i=new google.maps.Polygon({paths:e.coordinates_array});e.points=new google.maps.LatLng(a.overlay.position.lat(),a.overlay.position.lng()),1==google.maps.geometry.poly.containsLocation(e.points,i)||(a.visible=!1)}}))}))},e.prototype.onSubmit=function(e){if(this.submitted=!0,this.form.valid){if(this.latLngArray.length<1)return void this.toastrService.error("Please draw a region on map.");this.store.dispatch({type:i.b.ADD_GEOFENCE,payload:{coordinates:JSON.stringify(this.latLngArray),areaName:e.regionName,areaDescription:e.description}})}},e.prototype.clearArea=function(){this.drawableMode.setOptions({drawingControl:!0}),this.selectedOverlay&&(this.selectedOverlay.setMap(null),delete this.selectedOverlay,this.coordinates_array=[])},e.prototype.goBack=function(){this.router.navigate(["/pages/geofencing/geofenceList"])},__decorate([Object(r.ViewChild)(c.b),__metadata("design:type",c.b)],e.prototype,"drawingManager",void 0),e=__decorate([Object(r.Component)({selector:"add-geofence",template:a(1486)}),__metadata("design:paramtypes",[o.Store,n.c,l.FormBuilder,s.b])],e)})()},1419:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(0),o=a(5),n=a(6),i=a(231),s=a(14),l=a(19),c=a(232),d=(function(){function e(e,t,a,r){var o=this;this.store=e,this.router=t,this.toastrService=a,this.fb=r,this.editArea=[],this.paths1=[],this.coordinates_array_map=[],this.flag=!0,this.coordinates_array=[],this.lat_lng_array=[],this.store.select("geofencing").subscribe((function(e){})),this.form=r.group({regionName:["",s.Validators.required],description:["",s.Validators.required]}),this.regionName=this.form.controls.regionName,this.description=this.form.controls.description,this.editArea=JSON.parse(localStorage.getItem("geofenceToEdit"));var n=0,i=0;this.editArea.serviceArea.coordinates.forEach((function(e){var t=[];e.forEach((function(e){n+=e[1],i+=e[0],t.push(e[0]),t.push(e[1]),o.coordinates_array_map.push({lng:e[0],lat:e[1]}),o.lat_lng_array.push(t),t=[]})),o.paths1.push(o.coordinates_array_map)})),this.center={lng:i/this.editArea.serviceArea.coordinates[0].length+18,lat:n/this.editArea.serviceArea.coordinates[0].length}}return e.prototype.ngOnInit=function(){var e=this;this.regionName.setValue(this.editArea.areaName),this.description.setValue(this.editArea.areaDescription),this.drawingManager.initialized$.subscribe((function(t){e.drawableMode=t,google.maps.event.addListener(t,"overlaycomplete",(function(a){var r=[];t.setOptions({drawingControl:!1}),t.setDrawingMode(null),e.selectedOverlay=a.overlay,a.type!==google.maps.drawing.OverlayType.MARKER&&(e.lat_lng_array=[],google.maps.event.addListener(a.overlay,"click",(function(t){e.selectedOverlay=a.overlay,e.selectedOverlay.setEditable(!0)})),a.overlay.getPath().forEach((function(t){1==e.flag&&(r.push(parseFloat(t.lng())),r.push(parseFloat(t.lat())),e.flag=!1),e.coordinates_array=[],e.coordinates_array.push(parseFloat(t.lng())),e.coordinates_array.push(parseFloat(t.lat())),e.lat_lng_array.push(e.coordinates_array)})),e.lat_lng_array.push(r),r=[],e.flag=!0,google.maps.event.addListener(a.overlay.getPath(),"insert_at",(function(t){e.lat_lng_array=[],a.overlay.getPath().forEach((function(t){1==e.flag&&(r.push(parseFloat(t.lng())),r.push(parseFloat(t.lat())),e.flag=!1),e.coordinates_array=[],e.coordinates_array.push(parseFloat(t.lng())),e.coordinates_array.push(parseFloat(t.lat())),e.lat_lng_array.push(e.coordinates_array)})),e.lat_lng_array.push(r),r=[],e.flag=!0})),google.maps.event.addListener(a.overlay.getPath(),"remove_at",(function(t){e.lat_lng_array=[],a.overlay.getPath().forEach((function(t){e.coordinates_array=[],1==e.flag&&(r.push(parseFloat(t.lng())),r.push(parseFloat(t.lat())),e.flag=!1),e.coordinates_array.push(parseFloat(t.lng())),e.coordinates_array.push(parseFloat(t.lat())),e.lat_lng_array.push(e.coordinates_array)})),e.lat_lng_array.push(r),r=[],e.flag=!0})),google.maps.event.addListener(a.overlay.getPath(),"set_at",(function(t){e.lat_lng_array=[],a.overlay.getPath().forEach((function(t){e.coordinates_array=[],1==e.flag&&(r.push(parseFloat(t.lng())),r.push(parseFloat(t.lat())),e.flag=!1),e.coordinates_array.push(parseFloat(t.lng())),e.coordinates_array.push(parseFloat(t.lat())),e.lat_lng_array.push(e.coordinates_array)})),e.lat_lng_array.push(r),r=[],e.flag=!0})))}))}))},e.prototype.output=function(e){var t=this;this.selectedOverlay=e;var a=[];google.maps.event.addListener(e.getPath(),"insert_at",(function(r){t.lat_lng_array=[],e.getPath().forEach((function(e){1==t.flag&&(a.push(parseFloat(e.lng())),a.push(parseFloat(e.lat())),t.flag=!1),t.coordinates_array=[],t.coordinates_array.push(parseFloat(e.lng())),t.coordinates_array.push(parseFloat(e.lat())),t.lat_lng_array.push(t.coordinates_array)})),a=[],t.flag=!0,console.log("insert at",t.lat_lng_array)})),google.maps.event.addListener(e.getPath(),"remove_at",(function(r){t.lat_lng_array=[],e.getPath().forEach((function(e){t.coordinates_array=[],1==t.flag&&(a.push(parseFloat(e.lng())),a.push(parseFloat(e.lat())),t.flag=!1),t.coordinates_array.push(parseFloat(e.lng())),t.coordinates_array.push(parseFloat(e.lat())),t.lat_lng_array.push(t.coordinates_array)})),a=[],t.flag=!0,console.log("remove at",t.lat_lng_array)})),google.maps.event.addListener(e.getPath(),"set_at",(function(r){t.lat_lng_array=[],e.getPath().forEach((function(e){t.coordinates_array=[],1==t.flag&&(a.push(parseFloat(e.lng())),a.push(parseFloat(e.lat())),t.flag=!1),t.coordinates_array.push(parseFloat(e.lng())),t.coordinates_array.push(parseFloat(e.lat())),t.lat_lng_array.push(t.coordinates_array)})),a=[],t.flag=!0,console.log("set at",t.lat_lng_array)}))},e.prototype.clearArea=function(){this.selectedOverlay&&(this.selectedOverlay.setMap(null),delete this.selectedOverlay,this.coordinates_array=[],this.lat_lng_array=[],this.drawableMode.setOptions({drawingControl:!0}))},e.prototype.onSubmit=function(e){if(this.form.valid){if(this.lat_lng_array.length<1)return void this.toastrService.error("Please draw a region on map.");this.store.dispatch({type:i.b.EDIT_GEOFENCE,payload:{coordinates:JSON.stringify(this.lat_lng_array),areaName:e.regionName,areaDescription:e.description,regionID:[this.editArea._id]}})}},e.prototype.goBack=function(){this.router.navigate(["/pages/geofencing/geofenceList"])},__decorate([Object(r.ViewChild)(c.b),__metadata("design:type",c.b)],e.prototype,"drawingManager",void 0),e=__decorate([Object(r.Component)({selector:"edit-geofence",template:a(1487)}),__metadata("design:paramtypes",[o.Store,n.c,l.b,s.FormBuilder])],e)})()},1484:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(6),o=a(1416),n=a(1417),i=a(1418),s=a(1419),l=[{path:"",component:o.a,children:[{path:"",redirectTo:"geofenceList",pathMatch:"full"},{path:"geofenceList",component:n.a},{path:"addGeofence",component:i.a},{path:"editGeofence",component:s.a}]}],c=r.d.forChild(l)},1485:function(e,t){e.exports='<div class="container-fluid">\n    <div class="row">\n        <div class="col-10 d-flex align-items-center">\n            <label class="dashboard-label">Geofence</label>\n        </div>\n        <div class="col-2 d-flex align-items-center">\n            <button type="button" class="wide-submit-btn" routerLink="/pages/geofencing/addGeofence">Add Geofence</button>\n        </div>\n    </div>\n    <br>\n\n    <table class="table table-hover table-responsive">\n        <thead>\n            <tr class="row-bottom-border">\n                <th>S.No.</th>\n                <th>Region Name</th>\n                <th>Region Description</th>\n                <th>Action</th>\n\n            </tr>\n        </thead>\n        <tbody >\n            <tr class="row-bottom-border" *ngFor="let data of geofenceList | paginate: { itemsPerPage: limit, currentPage: page, totalItems: count }; let i = index">\n                <td style="width:25%">{{i + 1}}</td>\n                <td style="width:25%">{{data.areaName}}</td>\n                <td style="width:25%">{{data.areaDescription}}</td>\n                <td style="width:25%">\n                    <div class="dropdown">\n                        <img src="../assets/img/dots.svg" style="cursor:pointer">\n                        <div class="dropdown-content">\n                            <a (click)="editGeofence(data)">Edit\n                                <i class="fa fa-pencil-square-o black-fa-fa" aria-hidden="true"></i>\n                            </a>\n                            <a (click)="deleteGeofence(data)">Delete\n                                <i class="fa fa-trash black-fa-fa" aria-hidden="true"></i>\n                            </a>\n                        </div>\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n       \n    </table>\n    <div class="col col-xs-10 rar-algn">\n        <pagination-controls (pageChange)="pageChanged($event)" maxSize="5" directionLinks="true" autoHide="true" previousLabel="Previous"\n            nextLabel="Next" screenReaderPaginationLabel="Pagination" screenReaderPageLabel="page" screenReaderCurrentLabel="You\'re on page"></pagination-controls>\n    </div>\n</div>'},1486:function(e,t){e.exports='<div class="container-fluid">\n    <div class="row">\n        <div class="col-10 d-flex align-items-center">\n            <label class="dashboard-label">Geofence</label>\n        </div>\n        <div class="col-2 d-flex align-items-center">\n            <button (click)="goBack()" type="button" class="wide-submit-btn" style="height: 37px;border-radius: 9px;">Back</button>\n        </div>\n    </div>\n    <form [formGroup]="form" (ngSubmit)="onSubmit(form.value)" class="form-horizontal form-position" style="width:100%">\n        <div class="row" style="margin-top:2%">\n            <div class="col-4">\n                <label class="text-box-label">Region Name</label>\n                <input type="text" class="input-box" placeholder="Enter Region" [formControl]="regionName">\n                <div class="error-message" *ngIf="form.controls[\'regionName\'].errors?.required && (!form.controls[\'regionName\'].pristine || submitted)">Region name is required</div>\n            </div>\n            <div class="col-4">\n                <label class="text-box-label">Region Description</label>\n                <input type="text" class="input-box" placeholder="Enter Description" [formControl]="description">\n                <div class="error-message" *ngIf="form.controls[\'description\'].errors?.required && (!form.controls[\'description\'].pristine || submitted)">Description is required</div>\n            </div>\n            <div class="col-2" *ngIf="coordinates_array.length">\n                <button type="button" class="wide-submit-btn" (click)="clearArea()"  style="margin-top:18%">Clear Area</button>\n            </div>\n            <div class="col-2">\n                <button type="submit" class="wide-submit-btn" style="margin-top: 18%;">Add</button>\n            </div>\n        </div>\n    </form>\n    <div class="row" style="margin-top:3%">\n        <div class="col-12">\n            <ngui-map zoom="6" center="28.3236393,79.6362605" id="map" style="height:630px">\n                <drawing-manager [drawingControl]="true" [drawingControlOptions]="{ drawingModes: [  \'polygon\'] }" [polygonOptions]="{\n                              fillColor: \'#0000\',\n                              fillOpacity: .7,\n                              strokeWeight: 5,\n                              zIndex: 5\n                            }"></drawing-manager>\n            </ngui-map>\n\n        </div>\n    </div>\n</div>'},1487:function(e,t){e.exports='<div class="container-fluid">\n    <div class="row">\n        <div class="col-10 d-flex align-items-center">\n            <label class="dashboard-label">Geofence</label>\n        </div>\n        <div class="col-2 d-flex align-items-center">\n            <button (click)="goBack()" type="button" class="wide-submit-btn" style="height: 37px;border-radius: 9px;">Back</button>\n        </div>\n    </div>\n    <form [formGroup]="form" (ngSubmit)="onSubmit(form.value)" class="form-horizontal form-position" style="width:100%">\n        <div class="row" style="margin-top:2%">\n            <div class="col-4">\n                <label class="text-box-label">Region Name</label>\n                <input type="text" class="input-box" placeholder="Enter Region" [formControl]="regionName">\n                <div class="error-message" *ngIf="form.controls[\'regionName\'].errors?.required && (!form.controls[\'regionName\'].pristine || submitted)">Region name is required</div>\n            </div>\n            <div class="col-4">\n                <label class="text-box-label">Region Description</label>\n                <input type="text" class="input-box" placeholder="Enter Description" [formControl]="description">\n                <div class="error-message" *ngIf="form.controls[\'description\'].errors?.required && (!form.controls[\'description\'].pristine || submitted)">Description is required</div>\n            </div>\n            <div class="col-2" *ngIf="lat_lng_array.length">\n                <button type="button" class="wide-submit-btn" (click)="clearArea()" style="margin-top:18%">Clear Area</button>\n            </div>\n            <div class="col-2">\n                <button type="submit" class="wide-submit-btn" style="margin-top:18%">Update</button>\n            </div>\n        </div>\n    </form>\n    <div class="row" style="margin-top:3%">\n        <div class="col-12">\n            <ngui-map zoom="4" [center]="center" style="height:630px">\n                <drawing-manager [drawingControl]="false" [drawingControlOptions]="{position: 2, drawingModes: [\'polygon\'] }" [polygonOptions]="{\n                                          fillColor: \'#db1825\',\n                                          fillOpacity: .7,\n                                          editable : true,\n                                          strokeWeight: 4,\n                                          strokeColor: \'#db1825\',\n                                          strokeOpacity: .8,\n                                          zIndex: 9\n                                        }"></drawing-manager>\n\n                <polygon [editable]=\'true\' [paths]="paths1" [strokeColor]="\'#db1825\'" [strokeOpacity]="0.8" [strokeWeight]="2" [fillColor]="\'#db1825\'"\n                    [fillOpacity]="0.35" (initialized$)="output($event)">\n                </polygon>\n            </ngui-map>\n\n        </div>\n    </div>\n</div>'}});