FROM php:8-fpm-alpine
LABEL MAINTAINER="Pavel Hontarenko <pavhont@gmail.com>"

# Environments
ENV TZ=Europe/Kiev
ENV WORKDIR=/var/www/app.dev

# Updates and installs system dependencies
RUN apk add --update --no-cache \
  bash \
  tzdata \
  libxml2-dev \
  libpng-dev \
  libjpeg-turbo-dev \
  freetype-dev \
  postgresql-dev \
  libzip-dev \
  libxslt-dev \
  oniguruma-dev \
  $PHPIZE_DEPS && \
  rm -rf /var/cache/apk/*

# Configure php dependency
RUN docker-php-ext-configure soap --enable-soap
RUN docker-php-ext-configure gd --with-freetype --with-jpeg

# Install php dependencies
RUN docker-php-ext-install \
  -j$(nproc) gd \
  iconv \
  bcmath \
  xml \
  soap \
  mbstring \
  pdo \
  pdo_mysql \
  pdo_pgsql \
  mysqli \
  zip \
  opcache \
  intl \
  xsl \
  exif \
  soap

# Install pecl
RUN pecl install xdebug && docker-php-ext-enable xdebug

# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy php settings
COPY ./conf.d ${PHP_INI_DIR}/conf.d

# Workdir
WORKDIR ${WORKDIR}

# Copy files to container
#COPY ./ ./

# Expose port 9000 and start php-fpm server
EXPOSE 9000

# Run entrypoint
COPY ./entrypoint.sh /usr/bin/docker-entrypoint
CMD [ "docker-entrypoint" ]
