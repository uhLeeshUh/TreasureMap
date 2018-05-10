json.extract! article, :id, :name, :description, :body, :lat, :lng, :author_id, :city_id

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
