class Book
  attr_accessor :frontmatters, :backmatters, :recipe_samples, :recipe_parts,
  :recipe_results

  def initialize(filename, sample)
    @book = File.open(filename, "w")
    @sample = File.open(sample, "w")
    @recipe_results = {}
    @recipe_results.default = 0
    clean_code_snippets
  end

  def clean_code_snippets
    Dir.glob("parts/code/*.md").each {|f| File.delete(f) }
  end

  def generate_recipe_code(recipe)
    recipe_name = File.basename(recipe,'.md')
    if Dir.exists?("code/#{recipe_name}")
      puts recipe + ' [CODE]'
      File.open("parts/code/#{recipe_name}-code.md", "w") do |recipe_code|
        recipe_code.write("### Code\n\n")
        recipe_code.write("Complete source:\n");
        recipe_code.write("<https://github.com/sbrink/angularjs-cookbook-code/tree/gh-pages/#{recipe_name}>\n\n");
        recipe_code.write("Online demo:\n");
        recipe_code.write("<http://sbrink.github.io/angularjs-cookbook-code/#{recipe_name}/>");
      end
      @book.write("parts/code/#{recipe_name}-code.md\n")
      if recipe_name.match(recipe_samples)
        @sample.write("parts/code/#{recipe_name}-code.md\n")
      end
    else
      puts recipe
    end
  end

  def generate
    # frontmatter
    @frontmatters.each do |frontmatter|
      @book.write("frontmatter/#{frontmatter}.md\n")
      @sample.write("frontmatter/#{frontmatter}.md\n")
      puts "frontmatter/#{frontmatter}.md\n"
    end
    # parts
    @recipe_parts.each do |part|
      part_recipes = Dir["recipes-*/#{part}-*"]
      puts "parts/#{part}.md"
      @book.write("parts/#{part}.md\n")
      part_recipes.each do |recipe|
        if recipe.match(recipe_samples)
          puts "#{recipe} (((Sample))\n"
          @sample.write("#{recipe}\n")
        end
        @book.write("#{recipe}\n")
        @recipe_results[recipe.split('/')[0]] += 1;
        generate_recipe_code(recipe)
      end
      @book.write("\n")
    end
    # backmatter
    @backmatters.each do |backmatter|
      @book.write("backmatter/#{backmatter}.md\n")
      puts "backmatter/#{backmatter}.md\n"
    end
    # overall result output
    puts "\n"
    @recipe_results.each do |name, value|
      puts ("#{name}:").ljust(20) + value.to_s
    end
    puts ("total:").ljust(20) + @recipe_results.values.inject(:+).to_s
  end
end

book = Book.new('Book.txt', 'Sample.txt')
book.frontmatters = %w[introduction about-the-author]
book.recipe_parts = %w[mainmatter directives controllers services filters promises testing big-picture]
book.recipe_samples = /big-picture-redirect-to-error-page|big-picture-unsubscribe-to-events|controllers-form-reset
.md|directives-ng-repeat-unique|directives-svg-clock|filters-search-highlight
|promises-cache-data|services-log-decorator|testing-subset-of-tests/
book.backmatters = %w[]
book.generate
