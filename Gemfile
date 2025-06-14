source 'https://rubygems.org'

# Use GitHub Pages for production, Jekyll for local development
if ENV['GITHUB_ACTIONS'] || ENV['JEKYLL_ENV'] == 'production'
  # GitHub Pages dependencies
  gem "github-pages", group: :jekyll_plugins
else
  # Local development dependencies
  gem "jekyll", "~> 4.3.3"
  gem "webrick", "~> 1.8" # Required for Ruby 3.0+
end

# Theme - works both locally and on GitHub Pages
gem "just-the-docs", "0.8.2"

# Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end

# Platform-specific dependencies
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]