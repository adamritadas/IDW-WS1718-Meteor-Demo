//Route for Footer - By default appears in all the pages.
Router.configure({
    layoutTemplate: 'footer',
    notFoundTemplate: 'notFound'
});


//Home page
//Router.route('/', function () {
 //this.render('Home');
//});

//*******************LOGIN PAGE ROUTE*********************
Router.route('/login', function() {
  this.render('login');
});



//***************************************ARTICLE PAGE ROUTES*************************************************
//Article Home
Router.route('/ArticleHome/ArticleHome',function(){
this.render('ArticleHome')
});

//View all Article
Router.route('/Articles/Articles_Sel',function(){
this.render('Articles_Sel')
});

//View my Article
Router.route('/myArticle/myArticle',{
  template:'myArticle',
   onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("login");
        }
    }
});
//Post Article
Router.route('/postArticle/pArticle',{
  template:'pArticle',
   onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("login");
        }
    }
});
//read Article (optional)
Router.route('/readArticles/rArticle', function() {
    this.render('rArticle');
});


//search Article
Router.route('/searchArticle/searchArticle', function() {
    this.render('searchArticle');
});

Router.route('/readArticle/:_id', {
   template: 'readArticle',
   data: function(){
       var currentArticle = this.params._id;
       return Articles.findOne({ _id: currentArticle });
   },
    onBeforeAction: function(){
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("login");
        }
    }

});

//***************************************ARTICLE PAGE ROUTES*************************************************




