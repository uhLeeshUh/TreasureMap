json.city do
  json.extract! city, :id, :name, :country_id
end

json.country do
  json.extract! city.country, :id, :name
end

json.articles do
  city.articles.each do |article|
    json.set! article.id do
      json.extract! article, :id, :name, :description
    end
  end
end

# json.images do
#   city.articles.each do |article|
#     article.images.each do |image|
#       json.set! image.id do
#         json.extract! image, :id, :image
#       end
#     end
#   end
# end






# json.array!(@people) do |person|
#   json.name person.name
#   json.age calculate_age(person.birthday)
# end
#
# [ { "name": David", "age": 32 }, { "name": Jamie", "age": 31 } ]
