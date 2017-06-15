select * from products
join images
on products.product_id = $1 and images.product_id = $1
