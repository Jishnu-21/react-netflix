import React from 'react'
import { Main } from '../components/Main'
import { Row } from '../components/Row'
import requests from '../Request'
import Footer from '../components/Footer'

export const Home = () => {
  return (
    <>
        <Main/>
        <Row  rowID='1' title='Upcoming' fetchURL={requests.requestUpcoming}/>
        <Row  rowID='2' title='Popular' fetchURL={requests.requestPopular}/>
        <Row  rowID='3' title='Top Rated' fetchURL={requests.requestTopRated}/>
        <Row  rowID='4' title='Trending' fetchURL={requests.requestTrending}/>
        <Row  rowID='5' title='Horror' fetchURL={requests.requestHoror}/>
        <Footer/>
    </>
  )}