###what the article needs to hold in redux state
json.article do
  json.extract! article, :id, :name, :description, :body, :lat, :lng, :author_id, :city_id, :long_description
  json.image_ids article.images.ids
  json.editing_user_ids article.editors.ids
end

###what the article needs to reference

json.author do
  json.extract! article.author, :id, :username
  json.image_url asset_path(article.author.image.url)
end

json.editors do
  article.editors.each do |editor|
    json.set! editor.id do
      json.extract! editor, :id, :username
      json.image_url asset_path(article.author.image.url)
    end
  end
end

json.city do
  json.extract! article.city, :id, :name, :country_id
end

json.country do
  json.extract! article.country, :id, :name
end

json.images do
  article.images.each do |image|
    json.set! image.id do
      json.extract! image, :id
      json.image_url asset_path(image.image.url)
    end
  end
end
