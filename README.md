# Ogrenciden  <br /><br />
npx nx g @nx/next:app admin   for monorepo create

## db create <br />
- CREATE USER 'ogrenciden'@'localhost' IDENTIFIED BY 'ogrenciden';
- FLUSH PRIVILEGES;
- CREATE DATABASE ogrenciden;
- GRANT ALL PRIVILEGES ON ogrenciden.* TO 'ogrenciden'@'localhost';**

## run  db <br />
sudo service mysql start <br /> <br />

## run backend  <br />
npx nx run api:serve <br /><br />

## run desktop <br />
npx nx run ogrenciden-desktop:serve <br /><br />

## run admin <br />
npx nx run admin:serve <br /><br />

//deneme
//deneme
//deneme
