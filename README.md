# Ogrenciden

## db create <br />
- CREATE USER 'ogrenciden'@'localhost' IDENTIFIED BY 'ogrenciden';
- FLUSH PRIVILEGES;
- CREATE DATABASE ogrenciden;
- GRANT ALL PRIVILEGES ON ogrenciden.* TO 'ogrenciden'@'localhost';**

## db <br />
sudo service mysql start <br /> <br />

## backend  <br />
npx nx run api:serve <br /><br />

## frontend - desktop <br />
npx nx run ogrenciden-desktop:serve <br /><br />
