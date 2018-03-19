require('pg')

class Book

  attr_reader :id, :title, :author

  def initialize(inputs)
    @id = inputs['id'].to_i if inputs['id']
    @title = inputs['title']
    @author = inputs['author']
  end

  def Book.find_by_id(id)
    db = PG.connect({dbname: "books", host: "localhost"})
    sql = "SELECT * FROM books WHERE id = $1;"
    values = [id]
    db.prepare("find", sql)
    result = db.exec_prepared("find", values)
    db.close()
    return result.map {|book| Book.new(book)}
  end

end

p Book.find_by_id(5)
