FROM node
MAINTAINER Adam Murray <adammurray336@gmail.com>

# install deps
ADD package.json /tmp/package.json
RUN cd /tmp && npm install

# Copy deps
RUN mkdir -p /opt/pdcdonut && cp -a /tmp/node_modules /opt/pdcdonut

# Setup workdir
WORKDIR /opt/pdcdonut
COPY . /opt/pdcdonut

# run
EXPOSE 3000
CMD ["node", "index.js"]
