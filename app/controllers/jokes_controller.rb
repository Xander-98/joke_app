class JokesController < ApplicationController

        def index
          @jokes = Joke.all
          render template: "jokes/index"
        end
        
end
