class Api::CountriesController < ApplicationController

  def index
    @countries = Country.all
    render :index
  end

  def top_countries
    @countries = Country.top_countries_by_article_count
    render :index
  end

  def show
    @country = Country.find(params[:id])
    render :show
  end

  def create
    @country = Country.new(country_params)
    @country.name = @country.name.capitalize

    already_created_country = Country.existing_country(@country.name)
    #above will return a country instance or nil

    if already_created_country
      @country = already_created_country
      render '/api/countries/new_country'
      return
    end

    if @country.save
      render '/api/countries/new_country'
    else
      render json: @country.errors.full_messages, status: 422
    end
  end


  private

  def country_params
    params.require(:country).permit(:name)
  end


end
