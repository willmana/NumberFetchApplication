import { Table, Jumbotron } from 'react-bootstrap'
import React from 'react';

const Pagination = ({ datesPerPage, totalDates, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDates / datesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination justify-content-center'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const DataTable = ({ data, errorType, indexOfFirstDate, indexOfLastDate }) => {
  const dateFormat = (date) => {
    var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    var splitDate = date.split('-')
    var month = mS[splitDate[1] - 1]
    return splitDate[2] + ' ' + month + ' (' + splitDate[0]+ ')'
  }
  if (errorType === 200) {
    const currentDates = data.slice(indexOfFirstDate, indexOfLastDate)
    return (
      <Table>
        <thead className ='text-center'>
          <tr>
            <th>conversation_count</th>
            <th>missed_chat_count</th>
            <th>visitors_with_conversation_count</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody className ='text-center'>
          {currentDates.map((dat, i) => {
            return (
              <tr key={i}>
                <td>{dat.conversation_count}</td>
                <td>{dat.missed_chat_count}</td>
                <td>{dat.visitors_with_conversation_count}</td>
                <td>{dateFormat(dat.date)}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  } else if (errorType === 401) {
    return (
      <Jumbotron className="text-center">
        It seems like your access key is invalid.
      </Jumbotron>
    )
  } else if (errorType === 400) {
    return (
      <Jumbotron className="text-center">
        There might be something wrong with the dates you have chosen. Please choose differently.
      </Jumbotron>
    )
  } else {
    return (
    <Jumbotron className="text-center">
      Enter date range you wish to inspect and your access key.
      </Jumbotron>
    )
  }
}


export { DataTable, Pagination }