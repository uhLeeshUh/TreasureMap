class Api::PgSearchDocumentsController < ApplicationController

  def create
    resultDocuments = PgSearch.multisearch(params[:query])
    @articles = resultDocuments.where(searchable_type: "Article");
    @cities = resultDocuments.where(searchable_type: "City");
    @countries = resultDocuments.where(searchable_type: "Country");

    render 'api/pg_searches/index'
  end

end
