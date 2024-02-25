FROM mysql:latest

ENV MYSQL_DATABASE=syce1a
ENV MYSQL_USER=jainil
ENV MYSQL_PASSWORD=jainil115
ENV MYSQL_ROOT_PASSWORD=password

RUN mkdir -p /var/lib/mysql
RUN chown -R mysql:mysql /var/lib/mysql

VOLUME /var/lib/mysql

EXPOSE 3306