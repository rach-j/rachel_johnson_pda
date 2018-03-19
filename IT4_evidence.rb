require('pg')

class Book

  attr_reader :id, :title, :author

  def initialize(inputs)
    @id = inputs['id'].to_i if inputs['id']
    @title = inputs['title']
    @author = inputs['author']
  end

  def Book.sort()
    db = PG.connect({dbname: "books", host: "localhost"})
    sql = "SELECT * FROM books ORDER BY title ASC;"
    db.prepare("sort", sql)
    result = db.exec_prepared("sort", [])
    db.close()
    return result.map {|book| Book.new(book)}
  end

end

Book.sort().each{|book| p book}
# Added .each{...} functionality above so output of sort function is easier to
# read in the terminal
