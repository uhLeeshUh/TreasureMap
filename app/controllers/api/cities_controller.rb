class Api::CitiesController < ApplicationController

  def show
    @city = City.find(params[:id])
    render :show
  end

  def create
    @city = City.new(city_params)
    @city.country_id = params[:country_id]

    already_created_city = City.existing_city(@city.name, @city.country_id)
    #above will return a city instance or nil
    if already_created_city
      @city = already_created_city
      render '/api/cities/new_city'
      return
    end

    if @city.save
      render 'api/cities/new_city'
    else
      render json: @city.errors.full_messages, status: 422
    end
  end

  def index
    @cities = City.all
    render 'api/cities/index'
  end

  def top_cities
    @cities = City.top_cities_by_article_count
    render :index
  end

  #custom route for the top X cities

  private

  def city_params
    params.require(:city).permit(:name)
  end

end
