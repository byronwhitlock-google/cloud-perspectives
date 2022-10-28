/*
# Copyright 2020 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#            http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
*/

require('app-module-path').addPath(__dirname);
const Dumper = require('dumper').dumper;

const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

const BodyParser = require('body-parser');

app.use(BodyParser.json());

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/get', async (req, res) => {
    try {
      
        var data = 'not implemented';
        res.send({'data': data});
    } catch (e) {
     //   Dumper(e)
        console.error(`${e.message} ${e.stack}`)
        res.send({'error': e.message, 'trace':e.stack });
    }   
});

app.post('/set', async (req, res) => {
    try {        
        var data = 'not implemented';
        res.send({'data': data});

        res.send({'data': {}}); // no errors? then we return the configuration we just saved.
    } catch (e) {
      //  Dumper(e);
      console.error(`${e.message} ${e.stack}`)
        res.send({'error': e.message, 'trace':e.stack });
    }
});
/**
 * @param {number} ms
 */
function sleep(ms) {
    return //new Promise(resolve => setTimeout(resolve, ms));
}

// production endpoint served from here
app.use(express.static(path.join(__dirname, '../browser/build')));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../browser/build', 'index.html'));
});