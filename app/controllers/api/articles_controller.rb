class Api::ArticlesController < ApplicationController

  #TODO: make index to serve up all articles under one city. Make json view
  #serve them up nested under their ids!

  def create
    @article = Article.new(article_params)

    if @article.save
      render 'api/articles/show'
    else
      render json: @article.errors.full_messages, status: 422
    end
  end

  def show
    @article = Article.find(params[:id])
  end

  def edit
    @article = Article.find(params[:id])

    if @article.update(article_params)
      render 'api/articles/show'
    else
      render json: @article.errors.full_messages, status: 422
    end
  end

  def destroy
    @article = Article.find(params[:id])

     if @article.destroy
       render json: {}
     else
       render json: ["Article does not exist"], status: 404
     end
  end

  private

  def article_params
    params.require(:article).permit(:name, :description, :body, :lat, :lng, :author_id, :city_id)
  end

end
