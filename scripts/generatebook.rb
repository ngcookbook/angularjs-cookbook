class Book
  attr_accessor :frontmatters, :recipe_parts, :recipe_stages, :recipe_results

  def initialize(filename)
    @book = File.open(filename, "w")
    @recipe_results = {}
    @recipe_results.default = 0
  end

  def generate_code_snippets
    Dir.glob("recipes-parts/code/*.md").each {|f| File.delete(f) }
  end

  def generate_recipe(recipe)
    puts recipe
    @book.write("#{recipe}\n")

    recipe_name = File.basename(recipe,'.md')
    if Dir.exists?("code/#{recipe_name}")
      File.open("recipes-parts/code/#{recipe_name}-code.md", "w") do |recipe_code|
        recipe_code.write("### Code\n\n")
        recipe_code.write("Complete source:\n");
        recipe_code.write("<https://github.com/sbrink/angularjs-cookbook-code/tree/gh-pages/#{recipe_name}>\n\n");
        recipe_code.write("Online demo:\n");
        recipe_code.write("<http://sbrink.github.io/angularjs-cookbook-code/#{recipe_name}/>");
      end
      @book.write("recipes-parts/code/#{recipe_name}-code.md\n")
    end
  end

  def generate_part(part)
    puts "recipes-parts/#{part}.md"
    @book.write("recipes-parts/#{part}.md\n")
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
      @book.write("#{frontmatter}.md\n")
    end
    @recipe_parts.each do |part|
      generate_part(part)
    end
    @recipe_results.each do |name, value|
      puts ("#{name}:").ljust(16) + value.to_s
    end
    puts ("total:").ljust(16) + @recipe_results.values.inject(:+).to_s
  end
end



book = Book.new("Book.txt")
book.frontmatters = %w[introduction]
book.recipe_parts = %w[mainmatter directives controllers services filters promises testing big-picture]
book.recipe_stages = %w[done unfinished]
book.generate
