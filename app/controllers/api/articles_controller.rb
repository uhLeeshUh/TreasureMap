class Api::ArticlesController < ApplicationController

  #TODO: make index to serve up all articles under one city. Make json view
  #serve them up nested under their ids!
  #The view for #index should only serve up the article name, description and image


  def create
    @article = Article.new(article_params)
    @article.author_id = current_user.id

    if @article.save
      render 'api/articles/show'
    else
      render json: @article.errors.full_messages, status: 422
    end
  end

  def show
    @article = Article.find(params[:id])
  end

  def update
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

  def random_articles
    @articles = Article.select_random_articles

    render 'api/articles/index'
  end

  private

  def article_params
    params.require(:article).permit(:name, :description, :body, :lat, :lng,
      :city_id, :long_description, images_attributes: [:image], edits_attributes: [:editor_id])
  end

end
