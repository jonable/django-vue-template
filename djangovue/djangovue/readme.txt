Setup.

Django Setup
pip install the following libraries.
Django==2.2
django-js-error-hook==0.7
django-webpack-loader==0.6.0

Vue Setup
Install Yarn
- yarn global add @vue/cli
check vue installed 3.x or greater.
- vue --version
Setup vue app at root of project
- vue create appname
- cd appname
- yarn add webpack-bundle-tracker


Development

Using in Production.
Setup static however (django-storages, serve locally, ect)

You can setup a .env.production in the vue app to define static path.
yarn build --production (I think...)

then run
./manage.py collectstatic

TODO:
If you run yarn build, webpack-stats.json will have "chunk-vendors". 
At the moment, you have to uncomment chunk-vendors template tag in djangovue/templates/index.html to get this to work in produciton.
This can be streamed lined.