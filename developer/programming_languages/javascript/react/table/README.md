# react table

## Ant Design Table
* [Table](https://ant.design/components/table/)

```
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

<Table dataSource={dataSource} columns={columns} />;
```

## material ui table
* [Tables](https://material-ui.com/components/tables/)

## React Bootstrap Table2
* [react-bootstrap-table2](https://react-bootstrap-table.github.io/react-bootstrap-table2/)

## (deprecated) React Bootstrap Table
* [react-bootstrap-table](http://allenfang.github.io/react-bootstrap-table/)
* [React에서 Table 작업하기, 1부 2017.11.06](https://code.tutsplus.com/ko/tutorials/working-with-tables-in-react-part-one--cms-29682)