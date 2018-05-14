class Api::CitiesController < ApplicationController

  def show
    @city = City.find(params[:id])
    render :show
  end

  def create
    @city = City.new(city_params)

    if @city.save
      render 'api/cities/show'
    else
      render json: @city.errors.full_messages, status: 422
    end

  end

  #custom route for the top X cities

  private

  def city_params
    params.require(:city).permit(:name)
  end

end
