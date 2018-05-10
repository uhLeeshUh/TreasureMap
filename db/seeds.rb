# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([{username: 'Alicia', password: 'helloworld'}, {username: 'Jimmy', password: 'starwars'}, {username: "DemoUser", password: "password"}])
# City.create([{name: 'McLean', country_id: 1}])
# Country.create([{name: "United States of America"}])
Article.create(
  {name: "The smallest townhouse in the world!", description: "This house stands at only 4m wide", body: "Tucked away waterside on the streets of Amsterdam, this house stands proudly as the smallest of its kind. It is a huge tourist attraction.", lat: 34.134, lng: 135.345, author_id: 1, city_id: 2}
  )
