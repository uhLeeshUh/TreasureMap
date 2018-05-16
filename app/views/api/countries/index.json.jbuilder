@countries.each do |country|
  json.set! country.id do
    json.extract! country, :id, :name
    json.city_ids country.cities.ids
  end
end
