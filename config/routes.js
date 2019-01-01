/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'get /articles/list':   {

    controller: 'ArticlesController',
    action: 'list'
   
},
'get /products/list':   {

    controller: 'ProductsController',
    action: 'list'
   
},
'get /articles/add':   {
  view: 'articles/add',
  controller: 'ArticlesController',
  action: 'add'
 
},
'post /articles/create':   {
 // view: 'articles/add',
  controller: 'ArticlesController',
  action: 'create'
 
},
'get /articles/edit/:id':   {
   view: 'articles/edit/:id',
   controller: 'ArticlesController',
   action: 'edit'
  
 },
 'post /articles/update/:id':   {
  //view: 'articles/edit',
  controller: 'ArticlesController',
  action: 'update'
 
},
'post /articles/delete/:id':   {
  //view: 'articles/edit',
  controller: 'ArticlesController',
  action: 'delete'
 
},


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
