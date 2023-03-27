# RealDriss

Create, list and exchange value with an edge.

## About us

A peer to peer marketplace driven on liquidity pooled and utilized by market participants providing a safer, faster and scalable multi-feature rich platform for buyers and sellers to create, list and exchange value with an edge.

## Installation steps

1.Run -> git clone <https://github.com/RealDriss/core.git>
2.Run -> a. composer install --prefer-source
3.Configure the .env file
4.Create an empty db - realdriss
5.Run -> php artisan migrate --seed
6.Run -> php artisan vendor:publish --tag=cms-public --force
7.Run -> php artisan cms:theme:assets:publish
