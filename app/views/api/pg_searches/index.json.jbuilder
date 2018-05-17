json.articles do
  @articles.map do |article|
    json.extract! article, :content, :searchable_id
  end
end

json.cities do
  @cities.map do |city|
    json.extract! city, :content, :searchable_id
  end
end

json.countries do
  @countries.map do |country|
    json.extract! country, :content, :searchable_id
  end
end
