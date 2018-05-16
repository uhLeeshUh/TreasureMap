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


  private

  def country_params
    params.require(:country).permit(:name)
  end


end
