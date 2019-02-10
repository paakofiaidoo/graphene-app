import React, { Component } from 'react';
import 'bulma/css/bulma.css'

class Pagination extends Component {
  render() {
    return (
      <nav class="pagination" role="navigation" aria-label="pagination">
  <a class="pagination-previous">Previous</a>
  <a class="pagination-next">Next page</a>
  <ul class="pagination-list">
    <li>
      <a class="pagination-link" aria-label="Goto page 1">1</a>
    </li>
    <li>
      <span class="pagination-ellipsis">&hellip;</span>
    </li>
    <li>
      <a class="pagination-link" aria-label="Goto page 45">2</a>
    </li>
    <li>
      <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">3</a>
    </li>
    <li>
      <a class="pagination-link" aria-label="Goto page 47">4</a>
    </li>
    <li>
      <span class="pagination-ellipsis">&hellip;</span>
    </li>
    <li>
      <a class="pagination-link" aria-label="Goto page 86">10</a>
    </li>
  </ul>
</nav>


    );
  }
}

export default Pagination;
