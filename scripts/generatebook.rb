class Book
  attr_accessor :frontmatters, :backmatters, :recipe_parts, :recipe_stages, :recipe_results

  def initialize(filename)
    @book = File.open(filename, "w")
    @recipe_results = {}
    @recipe_results.default = 0
  end

  def generate_code_snippets
    Dir.glob("parts/code/*.md").each {|f| File.delete(f) }
  end

  def generate_recipe(recipe)
    puts recipe
    @book.write("#{recipe}\n")

    recipe_name = File.basename(recipe,'.md')
    if Dir.exists?("code/#{recipe_name}")
      File.open("parts/code/#{recipe_name}-code.md", "w") do |recipe_code|
        recipe_code.write("### Code\n\n")
        recipe_code.write("Complete source:\n");
        recipe_code.write("<https://github.com/sbrink/angularjs-cookbook-code/tree/gh-pages/#{recipe_name}>\n\n");
        recipe_code.write("Online demo:\n");
        recipe_code.write("<http://sbrink.github.io/angularjs-cookbook-code/#{recipe_name}/>");
      end
      @book.write("parts/code/#{recipe_name}-code.md\n")
    end
  end

  def generate_part(part)
    puts "parts/#{part}.md"
    @book.write("parts/#{part}.md\n")
    @recipe_stages.each do |stage|
      Dir["recipes-#{stage}/#{part}-*"].each do |recipe|
        generate_recipe(recipe)
        @recipe_results[stage] += 1;
      end
    end
    @book.write("\n")
  end

  def generate
    @frontmatters.each do |frontmatter|
      @book.write("frontmatter/#{frontmatter}.md\n")
      puts "frontmatter/#{frontmatter}.md\n"
    end
    @recipe_parts.each do |part|
      generate_part(part)
    end
    @backmatters.each do |backmatter|
      @book.write("backmatter/#{backmatter}.md\n")
      puts "backmatter/#{backmatter}.md\n"
    end
    @recipe_results.each do |name, value|
      puts ("#{name}:").ljust(16) + value.to_s
    end
    puts ("total:").ljust(16) + @recipe_results.values.inject(:+).to_s
  end
end

book = Book.new("Book.txt")
book.frontmatters = %w[introduction what-makes-a-good-recipe-book who-is-it-for about-the-author]
book.recipe_parts = %w[mainmatter directives controllers services filters promises testing big-picture]
book.recipe_stages = %w[done unfinished]
book.backmatters = %w[]
book.generate
