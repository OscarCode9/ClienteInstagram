'use strict'
const uuid = require('uuid-base62')
const fix = {
  getImage () {
    let id = uuid.uuid()
    return {
      description: 'an #awesome picture with #tags #ovents',
      tags: ['awesome', 'tags', 'ovents'],
      url: `http://s3.ovents.text/${uuid.v4()}.jpg`,
      likes: 0,
      liked: false,
      publicId: uuid.encode(id),
      id: id,
      createdAt: new Date().toString()
    }
  },
  getImages (n) {
    let images = []
    while (n-- > 0) {
      images.push(this.getImage())
    }
    return images
  },
  getUser () {
    return {
      id: uuid.uuid(),
      name: 'Triste99',
      username: 'Triste9',
      createdAt: new Date().toString()
    }
  }
}

module.exports = fix
