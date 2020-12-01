import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const paginationBasic =props=> (
    <Pagination size="sm">{items}</Pagination>
);

export default paginationBasic