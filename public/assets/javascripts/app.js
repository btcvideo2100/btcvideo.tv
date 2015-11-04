import React from 'react'
import ReactDOM from 'react-dom'
import ItemCardList from './components/item-card-list.js'

var datalist = [
  {
    title: 'test',
    desc: 'Today we\'re very happy to be releasing an exciting new style of porn bundle that we call a step bundle. We think it\'s quite an interesting concept and allows us to peddle porno in a new and unique way. Here\'s how the first ever Elegant Angel step bundle works at Hump the Bundle:',
    src: 'https://thingd-media-ec6.thefancy.com/default/1010668639373755397_65b2f7ff1b5a.jpg',
    price: 100
  },
  {
    title: 'test',
    desc: 'Today we\'re very happy to be releasing an exciting new style of porn bundle that we call a step bundle. We think it\'s quite an interesting concept and allows us to peddle porno in a new and unique way. Here\'s how the first ever Elegant Angel step bundle works at Hump the Bundle:',
    src: 'https://thingd-media-ec6.thefancy.com/default/1010668639373755397_65b2f7ff1b5a.jpg',
    price: 100
  },
  {
    title: 'test',
    desc: 'Today we\'re very happy to be releasing an exciting new style of porn bundle that we call a step bundle. We think it\'s quite an interesting concept and allows us to peddle porno in a new and unique way. Here\'s how the first ever Elegant Angel step bundle works at Hump the Bundle:',
    src: 'https://thingd-media-ec6.thefancy.com/default/1010668639373755397_65b2f7ff1b5a.jpg',
    price: 100
  },
  {
    title: 'test',
    desc: 'Today we\'re very happy to be releasing an exciting new style of porn bundle that we call a step bundle. We think it\'s quite an interesting concept and allows us to peddle porno in a new and unique way. Here\'s how the first ever Elegant Angel step bundle works at Hump the Bundle:',
    src: 'https://thingd-media-ec6.thefancy.com/default/1010668639373755397_65b2f7ff1b5a.jpg',
    price: 100
  }
]

ReactDOM.render(<ItemCardList datalist={datalist} />, document.querySelector('#list'))
