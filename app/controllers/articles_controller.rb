class ArticlesController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]

  def index
    if user_signed_in?
      @articles = Article.all.order(created_at: :desc)
    else
      @articles = Article.all.order(created_at: :desc).where(visible: true)
    end
    @categories = ['catalogue', 'artistes', 'evenements', 'appels a projet']
    @article_per_categories = @categories.map{ |cat| [cat, [@articles.where(article_type: cat)] ] }
    @last_appel = @articles.where(article_type: 'appel a projet').last
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)

    if @article.save
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
    @article = Article.find(params[:id])
  end

  def update
    @article = Article.find(params[:id])

    if @article.update(article_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    redirect_to root_path
  end

  private

  def article_params
    params.require(:article).permit(:title, :material, :year, :article_text,
      :ext_url, :article_type, :visible, :photo)
  end
end
