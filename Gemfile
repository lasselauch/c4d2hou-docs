source 'https://rubygems.org'

# GitHub Pages gem - includes Jekyll and GitHub Pages supported plugins
gem "github-pages", group: :jekyll_plugins

# Just-the-docs theme
gem "just-the-docs", "0.8.2"

# Additional Jekyll plugins that work with GitHub Pages
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end

# Windows and JRuby specific dependencies
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]