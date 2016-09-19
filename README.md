# Standalone mode
* install dependencies
```
npm install
```
* build and start server in watch mode
```
npm start
```

And go to http://localhost:3000/


# Portlet mode
* build
```
mvn clean install
```
* build with webpack optimizations
```
mvn clean install -Pproduction
```
* deployment
 * either deploy the target/react-portlet.zip as EXO ADDON :
```
${EXO_APP_DIR}/addon install --catalog=file://catalog.json react-portlet:1.0.0 --force --batch-mode
```

 * or copy the target/react-portlet.war into EXO webapps dir

 * Note on docker :
Deployment in a docker container won't work, due to minifier problem :(. i have to look into it
But it seems to work with a standard Exoplatform bundle (even in normal mode and webpack optimizations).
