json.city do
  json.extract! @city, :id, :name
end

json.country do
  json.extract! @city.country, :id, :name
end
