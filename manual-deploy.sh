#!/bin/sh
#
#  Copyright 20210 Google LLC
#
#   Licensed under the Apache License, Version 2.0 (the "License");
#   you may not use this file except in compliance with the License.
#   You may obtain a copy of the License at
#
#       http://www.apache.org/licenses/LICENSE-2.0
#
#   Unless required by applicable law or agreed to in writing, software
#   distributed under the License is distributed on an "AS IS" BASIS,
#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#   See the License for the specific language governing permissions and
#   limitations under the License.

#
export PROJECT_ID=cloud-perspectives
gcloud auth login
gcloud config set project $PROJECT_ID

#docker build . -t cloud-perspectives
#docker tag cloud-perspectives gcr.io/$PROJECT_ID/cloud-perspectives
#docker push gcr.io/$PROJECT_ID/cloud-perspectives
gcloud builds submit -t gcr.io/$PROJECT_ID/cloud-perspectives .
gcloud run deploy cloud-perspectives --image gcr.io/$PROJECT_ID/cloud-perspectives --allow-unauthenticated --platform managed --region us-central1

#container_image_path   = "gcr.io/$PROJECT_ID/cloud-perspectives"