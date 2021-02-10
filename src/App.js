import './App.css'
import Search from './components/search'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { DataTable, Pagination } from './components/table'
import TotalNumbers from './components/totalnumbers'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


const App = () => {
  const [startDate, setStartDate] = useState("2017-05-01")
  const [endDate, setEndDate] = useState("2017-06-15")
  const [accessToken, setAccessToken] = useState("")
  const [data, setData] = useState([])
  const [errorType, setErrorType] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [datesPerPage] = useState(5)

  const indexOfLastDate = currentPage * datesPerPage
  const indexOfFirstDate = indexOfLastDate - datesPerPage

  const handleStartChange = (event) => {
    setStartDate(event.target.value)
    window.localStorage.setItem('startDate', startDate)
  }

  const handleEndChange = (event) => {
    setEndDate(event.target.value)
    window.localStorage.setItem('endDate', endDate)
  }

  const handleTokenChange = (event) => {
    setAccessToken(event.target.value)
    window.localStorage.setItem('accessToken', accessToken)
  }


  const getDates = (event) => {
    window.localStorage.setItem('accessToken', accessToken)
    const config = {
      headers: {
        Authorization: accessToken,
        Accept: 'application/json'
      }
    }
    event.preventDefault()
    axios
      .get('https://api.giosg.com/api/reporting/v1/rooms/84e0fefa-5675-11e7-a349-00163efdd8db/chat-stats/daily/?start_date=' + startDate + '&end_date=' + endDate, config)
      .then(response => {
        setData(response.data);
        setErrorType(200)
        console.log(response.data);
      }).catch(function (error) {
        setErrorType(error.response.status)
        setData([])
      })
  }
  
  useEffect(() => {
    const storedStart = window.localStorage.getItem('startDate')
    const storedEnd = window.localStorage.getItem('endDate')
    const storedToken = window.localStorage.getItem('accessToken')
    if (storedStart) {
      setStartDate(storedStart)
    }
    if (storedEnd) {
      setEndDate(storedEnd)
    }
    if (storedToken) {
      setAccessToken(storedToken)
    }
  }, [])

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container fluid>
      <Navbar bg='dark' variant="dark" className="justify-content-center">
        <Navbar.Brand >
          Awesome react app
        </Navbar.Brand>
      </Navbar>
      <Search
        getDates={getDates}
        startDate={startDate}
        endDate={endDate}
        handleEndChange={handleEndChange}
        handleStartChange={handleStartChange}
        accessToken={accessToken}
        handleTokenChange={handleTokenChange}
      />
      <TotalNumbers
        data={data}
      />
      <DataTable
        indexOfFirstDate={indexOfFirstDate}
        indexOfLastDate={indexOfLastDate}
        data={data.by_date}
        errorType={errorType}
      />
      {data.by_date !== undefined &&
        <Pagination
          datesPerPage={datesPerPage}
          totalDates={data.by_date.length}
          paginate={paginate}
        />
      }
    </Container>
  )
}

export default App;
