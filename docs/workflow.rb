Questions:
-why does my json jbuilder view not return an editors key for an article with no editors?
-how to deal with a z-index and image overlay on editors?
-why does my switch statement not work for articles/new vs. articles/wildcard ?
-when to use javascript window object methods vs. doing something with css for stylistic choices?
-why does my demoUser no longer work? Nothing is coming in as params do the session#create method?

Go back and re-factor:
-Article show so it doesnt fetch the article again after its been navigated to by a create or edit page (recieve article action logs twice)
-Components folder

On-going todos:
-add images to the AWS database
-fix the overlay of editor images
-fix session dropdown
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


MONDAY:
-complete city and country showpages with thumbs

TUESDAY:
-finish map dropdown
-work on search

WEDNESDAY:
-finish search
-finish Google Maps integration

THURSDAY:
-finish Atlas index page
-style slick photo carousel

FRIDAY:
-Production README
