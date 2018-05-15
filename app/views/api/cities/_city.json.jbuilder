json.city do
  json.extract! city, :id, :name, :country_id
  json.article_ids city.articles.ids
end

json.country do
  json.extract! city.country, :id, :name
end

json.articles do
  city.articles.each do |article|
    json.set! article.id do
      json.extract! article, :id, :name, :description
      json.image_ids article.images.ids
    end
  end
end

json.images do
  city.articles.each do |article|
    article.images.each do |image|
      json.set! image.id do
        json.extract! image, :id, :image
      end
    end
  end
end
