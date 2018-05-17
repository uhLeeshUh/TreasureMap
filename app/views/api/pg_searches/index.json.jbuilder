json.articles do
  json.array! (@articles) do |article|
    json.extract! article, :content, :searchable_id
  end
end

json.cities do
  json.array! (@cities) do |city|
    json.extract! city, :content, :searchable_id
  end
end

json.countries do
  json.array! (@countries) do |country|
    json.extract! country, :content, :searchable_id
  end
end
