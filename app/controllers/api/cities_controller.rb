class Api::CitiesController < ApplicationController

  def show
    @city = City.find(params[:id])
    render :show
  end

  def create
    @city = City.new(city_params)
    @city.country_id = params[:country_id]

    if @city.save
      render 'api/cities/show'
    else
      render json: @city.errors.full_messages, status: 422
    end

  end

  def top_cities
    @cities = City.top_cities_by_article_count
    render 'api/cities/top_cities'
  end

  #custom route for the top X cities

  private

  def city_params
    params.require(:city).permit(:name)
  end

end
