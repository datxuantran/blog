- lay parameter tu url 
- useHistory 
- make blog use react 

reacJS blog
navbar: search-form home-link post-link about-link
list of post

React Router install
npm i react-router-dom --save
some hooks come with react router

index.js
import {BrowserRouter as Router, Route} from 'react-router-dom'; 

<Router>
	<Route path="/" component={App} /> 
</Router>

App.js
Header from ./Header
Nav from ./Nav
Footer from ./Footer

Home from ./Home
NewPost from ./NewPost
PostPage from ./PostPage
AboutPage from ./About
Missing from ./Missing

import {Route, Switch, useHistory} from 'react-router-dom'
// route from the app, not make request from server
import {useState, useEffect} from 'react' 
==============================================
route handle links and parameters
==============================================
Home 
- [] show post 
- show no post
Post: article className Post
- show title and date as Link 
- show body 
==============================================
Post Page
- props: posts, handleDelete
- useParam get id param from url
- article
	h2 title
	p date
	p body 
		found
		not found 
===============================================
New Post 
- props: post title, post body
form 
- post title: input type=text 
- post body: textarea
- handleSubmit 

- create new post 
+ date
+ id 
================================================
Nav Bar 
- props: searchForm 
searchForm 
list: Link Home Post About
useEffect handle searchForm 

