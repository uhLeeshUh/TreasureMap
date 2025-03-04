class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :logged_in?, :current_user

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logged_in?
    !!current_user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_log_in
    unless current_user
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end

end
