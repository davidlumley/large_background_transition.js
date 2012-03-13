guard 'coffeescript', :output => 'public/javascripts' do
  watch(/^assets\/coffeescripts\/(.*)\.coffee/)
end

guard 'less', :output => 'public/css' do
  watch(/^assets\/less\/(.*)\.less/)
end

guard 'livereload', :apply_js_live => false do
  watch(/^public\/javascripts\/.+\.js$/)
  watch(/^public\/css\/.+\.css$/)
  watch(/^public\/.+\.html$/)
end
