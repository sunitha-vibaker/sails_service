/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list:async function(req, res){
      Products.find({}).exec(function(err,products){
          if(err){
                res.send(500,{error:'database error'});
          }
		  res.send({ products: products })
          //res.view('articles/list', { articles: articles });
         // res.view('articles/list', articles);
          //res.view('/articles/list',{articles:articles});
      })
        
  },
  add: function(req, res){
    res.view('articles/add');
},
create:function(req, res){
    var pname = req.body.prod_name;
    var pdesc = req.body.prod_desc;
	 var pprice = req.body.prod_price;

    Products.create({pname:pname, pdesc:pdesc,pprice:pprice}).exec(function(err){
        if(err){
            res.send(500, {error: 'Database Error'});
        }
			res.send("created Successfully")
       // res.redirect('/articles/list');
    });
},
delete: function(req, res){
    Products.destroy({id:req.params.id}).exec(function(err){
        if(err){
            res.send(500, {error: 'Database Error'});
        }

        //res.redirect('/articles/list');
    });

    return false;
},
edit: function(req, res){
    Products.findOne({id:req.params.id}).exec(function(err, product){
        if(err){
            res.send(500, {error: 'Database Error'});
        }
		res.send({article:article});
        //res.view('articles/edit', {article:article});
    });
},
update: function(req, res){
   var pname = req.body.prod_name;
    var pdesc = req.body.prod_desc;
	 var pprice = req.body.prod_price;

    Products.update({id: req.params.id},{pname:pname, pdesc:pdesc,pprice:pprice}).exec(function(err){
        if(err){
            res.send(500, {error: 'Database Error'});
        }

        //res.redirect('/articles/list');
    });

    return false;
}

};

