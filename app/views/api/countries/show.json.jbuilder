json.country do
  json.extract! @country, :id, :name
  json.city_ids @country.cities.ids
end

json.cities do
  @country.cities.each do |city|
    json.set! city.id do
      json.extract! city, :id, :name, :country_id
      json.article_ids city.articles.ids
    end
  end
end

json.articles do
  @country.articles.each do |article|
    json.set! article.id do
      json.extract! article, :id, :name, :description
      json.image_ids article.images.ids
    end
  end
end

json.images do
  @country.articles.each do |article|
    article.images.each do |image|
      json.set! image.id do
        json.extract! image, :id
        json.image_url asset_path(image.image.url)
      end
    end
  end
end
