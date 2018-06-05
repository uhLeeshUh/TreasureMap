json.articles do
  @articles.each do |article|
    json.set! article.id do
      json.extract! article, :id, :name, :description, :city_id, :author_id
      json.image_ids article.images.ids
    end
  end
end

json.images do
  @articles.each do |article|
    article.images.each do |image|
      json.set! image.id do
        json.extract! image, :id
        json.image_url asset_path(image.image.url)
      end
    end
  end
end

json.authors do
  @articles.each do |article|
    json.set! article.author.id do
      json.extract! article.author, :id, :username
    end
  end
end

json.cities do
  @articles.each do |article|
    json.set! article.city.id do
      json.extract! article.city, :id, :name
    end
  end
end
