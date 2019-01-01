/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list:async function(req, res){
      Articles.find({}).exec(function(err,articles){
          if(err){
                res.send(500,{error:'database error'});
          }
		  res.send({ articles: articles })
          //res.view('articles/list', { articles: articles });
         // res.view('articles/list', articles);
          //res.view('/articles/list',{articles:articles});
      })
        
  },
  add: function(req, res){
    res.view('articles/add');
},
create:function(req, res){
    var title = req.body.title;
    var body = req.body.body;

    Articles.create({title:title, body:body}).exec(function(err){
        if(err){
            res.send(500, {error: 'Database Error'});
        }
res.send("created Successfully")
       // res.redirect('/articles/list');
    });
},
delete: function(req, res){
    Articles.destroy({id:req.params.id}).exec(function(err){
        if(err){
            res.send(500, {error: 'Database Error'});
        }

        res.redirect('/articles/list');
    });

    return false;
},
edit: function(req, res){
    Articles.findOne({id:req.params.id}).exec(function(err, article){
        if(err){
            res.send(500, {error: 'Database Error'});
        }

        res.view('articles/edit', {article:article});
    });
},
update: function(req, res){
    var title = req.body.title;
    var body = req.body.body;

    Articles.update({id: req.params.id},{title:title, body:body}).exec(function(err){
        if(err){
            res.send(500, {error: 'Database Error'});
        }

        res.redirect('/articles/list');
    });

    return false;
}

};

