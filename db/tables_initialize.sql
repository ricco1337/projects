CREATE TABLE IF NOT EXISTS products(
      product_id serial primary key,
      title text,
      price real,
      description text

);
CREATE TABLE IF NOT EXISTS images(
      image_id serial primary key,
      product_id INTEGER,
      foreign key (product_id) references products(product_id)
      image_url text,
);
