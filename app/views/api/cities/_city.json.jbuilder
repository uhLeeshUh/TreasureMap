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
      # json.image article.images.first, :id, :image
    end
  end
end
