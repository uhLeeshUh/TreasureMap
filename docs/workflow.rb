Questions:
???????-why does my json jbuilder view not return an editors key for an article with no editors?
-how to deal with a z-index and image overlay on editors?
# -why does my switch statement not work for articles/new vs. articles/wildcard ?
-when to use javascript window object methods vs. doing something with css for stylistic choices?
# -why does my demoUser no longer work? Nothing is coming in as params do the session#create method?
-NESTED ROUTES: should I be sending up all images when I fetch an article? How about editors?
  -therefore, should my only image controller method be a nested create?
-heroku help



Go back and work on:
-when I click on the first image, it deletes the ones after it?
-fix the overlay of editor images
-Article show so it doesnt fetch the article again after its been navigated to by a create or edit page (recieve article action logs twice)
-Components folder

On-going todos:
-add images to the AWS database
-apply slick to image reel




Font brainstorm:
Arimo
Archivo Narrow
Cormorant Garamond

fontAwesome
revisit this for the search icon:
https://fontawesome.com/icons/search?style=solid

https://medium.com/adventures-in-code/seed-dump-ruby-gem-b74cc8bdfdc

use slick! https://github.com/kenwheeler/slick/


# Tuesday May 8

# 1. test that I can:
# -sign up (yes)
# -show users (yes)
# -login "Alicia" "helloworld" (yes)
# -logout (yes)

# create sessionAPIutil file
# session actions
# session reducer
# user reducer
# entities reducer
# session errors reducer
# errors reducer
# root reducer

# store

# react router and session components

# sessionForm components!

# session protected routes

# bootstrap current user

# update store with preloadedstate

# conditionally render the avatar input field

# ** I can leave tonight when there is a rendered sign up /login form and logout button on the site that works

DAY 2 WED:
# -How are my errors getting added to the Session slice of state and being rendered?

# -Figure out how to push to heroku

# -Create NavBar component
# give it all the parts that it needs
# conditionally render for signup and signin
# style it

# -Style form to look as close to real as possible (11)
# -Figure out photo upload on session form -- what type of field should this be? (watch AWS videos) (12)
# -Begin styling out navbar (end of day)
# -Create a working sign out dropdown (Abby suggested making this a local component state slice)


# Before I leave tonight:
# -create a demo user login
# -remove lines on signup/signin lis on navbar
# -change text for logo and map to be more semantic
# -figure out the AWS image stuff and add that to form
# -figure out how to deal with dropdown





Questions:
# -why does Heroku not work the same way localhost does?
# -why is the background image not showing up?
# -why does adding a image rollback for aws?

(left off https://github.com/appacademy/curriculum/tree/master/full-stack-project/resources/cdns/file_upload_demo)
DAY 3: THURS
# -figure out dropdown with styling
# -better render errors
# -figure out image upload

LUNCH

# -ask about dropdown/solve by 10:30
# -deal with Articles from DB level up
# -make show page (with styling)
# -seed DB



DAY 4: FRIDAY
-style out article show form
-Article create/edit page (with styling)
# -eventually change background image
**Go back and add in enters for article text!


-test that my ajax requests work
-test that my actions and reducers are returning what I want
-begin setting up a show page with a generic article_edits
-how do I put real images in my DB?


-Figure out UI slice of state for header (create the needed components) (til break)

Future todo with cities:
-create index method in articles controller to be able to serve up multiple articles to the articles reducer



-made add/edit article form
-add a conditional delete article button for the author to use


SATURDAY:
# -test my API util functions!!!! (create, edit, destroy)
-make sure forms work
-add footer with button
-make article create and edit forms (look at how Atlas Obscura deals with map)
-read up on Google maps
-add button to the footer to add an article and make it a protected route!
-make edit article link work on article show page, but make it protected
-create logo
-add my images to AWS and get them to show up for seeded and created articles

/deal with new country and city creation
//deal with adding an article edit and updating the slices of state
//deal with updating the image slice of state and image_ids array for article, need to send up the images in the json view for article

SUNDAY:
-Style add and edit forms
-Add delete button to edit form if current user is the author
-build out image resource and figure out image upload for articles


-Figure out image upload for my articles
-Play around with Google Maps API and figure out how to user "Place Autocomplete" in my form and
display the map on the article show page

What I learned on Sunday:
-git fetch and then git checkout for development branches
-add new columns to a table and then add them to your strong params!
-how to come back to a page and scroll to the top of the window
-what window object js methods there are for styling (look at this more tonight?)
-how to use hr tags to create lines in my form
-HOW TO MAKE MY SESSION DROPDOWN WORK HOLLERRRRRRR
-how to get font awesome icons down pat

MONDAY:
-add multiple images at once!
-complete city and country showpages with thumbs

-figure out why editors arent auto added to a page
-make a part of a form required (upload an image, and required input values)

#Left off wondering what url I should use in my images AJAX request


Todo:
-create separate image component
-create separate city and country dropdown menus as a component (make it the map component now which will be updated with GoogleMaps)
BOTH OF THESE COMPONENTS need a passdown inline function that will set state in the parent form

(by the end of lunch:)
-to deal with image this.state:
-map over fileReader again
-provide a mapDispatchToProps callback to be able to create an image of everything in this.state.images
**NOW, change whats passed up as images to not be a dummy array!!!

Did today:
-figured out multi image upload with previews(go back and change do all at once)
-wrote active record query!!


Notes on image upload:
-Getting Uncaught TypeError: Illegal invocation at article_api_util line 4
-tested the AJAX call from the console and it is working without passing in an image

TUESDAY:
# -configure jBuilder views to send me editing_user_ids and image_ids! (for article show and index(editing_user_ids, image_ids,
#   and cities index and show(article_ids))
#   -this will allow me to always have a normalized state off the bat - match to model in wiki (10:00)
# -make sure I can dummy get what I need for city index page
# -build out article thumbnail (11:45 )
# -style article thumbnail (12:30)
-style city show page (1 pm)
-build out country index page (by end of lunch)
-style both of these (3:00 pm)
-figure out image saving!!!! (4:30)
-create map dropdown (6 pm)
-seed db with images and indented articles
-spend night working on search

-finish map dropdown
-work on search

WEDNESDAY:
-finish search
-finish Google Maps integration

THURSDAY:
-style slick photo carousel
-finish Atlas index page

FRIDAY:
-Production README
