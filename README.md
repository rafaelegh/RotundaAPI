# RotundaAPI
Challenge for Rotunda

### Running the APP 

    cd Rotunda-API 

    npm install

    npm start

* When the app is running, there will be 3 endpoints for each excercise:

    * Error Alarm:        

        * http://localhost:3000/log-error/
        
        * use a Post method for this endpoint
                
        * Example request:
            ```
            {
              "newError": "first error"
            }
            ```
        * Response: 
            ```
            {
              "response": "error was logged, number of errors in a minute: 1"
            }
            ```

    * URL Parser:

        * http://localhost:3000/url-parser/
    
        * use a Post method for this endpoint
        
        * Example request:
            ```
            {
                "URLFormat": "/:version/api/:collection/:id",
                "URLInstance": "/6/api/listings/3?sort=desc&limit=10"
            }
            ```
        * Response: 
            ```
            {
                "version": "6",
                "collection": "listings",
                "id": "3",
                "sort": "desc",
                "limit": "10"
            }
            ```

        
    * Zoo:        

        * http:///localhost:3000/zoo/
        
        * use a Post method for this endpoint
                
        * Example request:
            ```
            {
                "name": "tiger",
                "sound": "grrr",
                "phrase": "son rikisimas"
            }
            ```
        * Response: 
            ```
            {
                "animalName": "tiger",
                "animalPhrase": "son grrr rikisimas grrr"
            }
            ```
