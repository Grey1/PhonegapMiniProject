/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var onSuccess = function(fileURI) {

            var win = function (r) {
        clearCache();
        retries = 0;
        alert('Done!');
    }
 
    var fail = function (error) {
            console.log(JSON.stringify(error));
            alert("An error has occurred: Code = " + error.code);
            code.log("upload error source " + error.source);
            console.log("upload error target " + error.target);
        
    }
 
    var options = new FileUploadOptions();
    options.fileKey = "photo";
    options.fileName = "photo";
    options.mimeType = "image/jpeg";
    options.params = {}; // if we need to send parameters to the server request
    var ft = new FileTransfer();
    ft.upload(fileURI, encodeURI("http://192.168.43.74:8000/upload"), win, fail, options);
    }
var onFail =  function(message) {
        alert('Failed because: ' + message);
}


var pictureSource;   // picture source
var destinationType; // sets the format of returned value
var clearCache = function () {
    navigator.camera.cleanup();
}
 
var retries = 0;


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    CaptureImage: function(){
        
        navigator.camera.getPicture(onSuccess, onFail, { quality: 50, 
            destinationType: Camera.DestinationType.FILE_URI }); 
    }

};



