json.article do
  json.extract! article, :id, :name, :description, :body, :lat, :lng, :author_id, :city_id
end

json.author do
  json.partial! 'api/users/user', user: article.author
end
# json.city json.partial! 'api/cities/city', city: article.city

json.editors do
  article.editors.each do |editor|
    json.set! editor.id do
      json.partial! 'api/users/user', user: editor
    end
  end
end

#json.images needs to send up all the associated images


#TODO: add in the city information to be served up under its city id,
# add the images association to send up all article's images
