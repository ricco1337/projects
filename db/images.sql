create table images (
    image_id serial primary key,
    product_id INTEGER,
    foreign key (product_id) references products(product_id)
    image_url text,

)
