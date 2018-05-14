json.article do
  json.extract! article, :id, :name, :description, :body, :lat, :lng, :author_id, :city_id, :long_description
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

json.images do
  article.images.each do |image|
    json.set! image.id do
      json.partial! 'api/images/image', image: image
    end
  end
end


#TODO: add in the city information to be served up under its city id,
# add the images association to send up all article's images
