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

  if (errorType === 200) {
    const currentDates = data.slice(indexOfFirstDate, indexOfLastDate)
    return (
      <Table>
        <thead >
          <tr>
            <th>conversation_count</th>
            <th>missed_chat_count</th>
            <th>visitors_with_conversation_count</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {currentDates.map((dat, i) => {
            return (
              <tr key={i}>
                <td>{dat.conversation_count}</td>
                <td>{dat.missed_chat_count}</td>
                <td>{dat.visitors_with_conversation_count}</td>
                <td>{dat.date}</td>
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
  } else {
    return (
      <Jumbotron className="text-center">
        There might be something wrong with the dates you have chosen. Please choose differently.
      </Jumbotron>
    )
  }
}


export { DataTable, Pagination }