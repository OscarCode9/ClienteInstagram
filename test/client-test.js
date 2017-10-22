'use strict'

const test = require('ava')
const platzigram = require('../')

test('client', t => {
  const client = platzigram.createClient()
  t.is(typeof client.getPictures, 'function')
  t.is(typeof client.savePicture, 'function')
  t.is(typeof client.likePicture, 'function')
  t.is(typeof client.listPictures, 'function')
  t.is(typeof client.listPicturesByTag, 'function')
  t.is(typeof client.saveUser, 'function')
  t.is(typeof client.getUser, 'function')
  t.is(typeof client.auth, 'function')
})
