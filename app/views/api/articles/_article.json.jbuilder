###what the article needs to hold in redux state
json.article do
  json.extract! article, :id, :name, :description, :body, :lat, :lng, :author_id, :city_id, :long_description
  json.image_ids article.images.ids
  json.editing_user_ids article.editors.ids
end

###what the article needs to reference

json.author do
  json.extract! article.author, :id, :username, :image
end

json.editors do
  article.editors.each do |editor|
    json.set! editor.id do
      json.extract! editor, :id, :username, :image
    end
  end
end

json.city do
  json.extract! article.city, :id, :name
end

json.images do
  article.images.each do |image|
    json.set! image.id do
      json.extract! image, :id, :image
    end
  end
end
