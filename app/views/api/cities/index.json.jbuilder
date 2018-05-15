@cities.each do |city|
  json.set! city.id do
    json.extract! city, :id, :name, :country_id
  end
end
