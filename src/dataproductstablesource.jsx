import { checkboxClasses } from "@mui/material";
import {products} from './DataAPI.js'


export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    renderCell: (params) => {
      console.log(params)
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.photo} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "cost",
    headerName: "Price",
    width: 100,
  },

  // {
  //   field: "protein",
  //   headerName: "Protein",
  //   width: 100,
  // },
  {
    field: "categoryID",
    headerName: "Category",
    width: 100,
  },
  
  {
    field: "quantity",
    headerName: "Available",
    width: 150,
  },
];

//temporary data
// export const userRows = [
//   {
//     id: 1,
//     name: "Snow",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     price: "100",
//     protein: "pro",
//     additives: "35",
//     bakingmaterial: "35",
//     fooddecoration: "35",
//     status: 'True'
//   },
//   {
//     id: 2,
//     username: "Jamie Lannister",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     price: "100",
//     protein: "pro",
//     additives: "35",
//     bakingmaterial: "35",
//     fooddecoration: "35",
//   },
//   {
//     id: 3,
//     username: "Lannister",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     price: "100",
//     protein: "pro",
//     additives: "35",
//     bakingmaterial: "35",
//     fooddecoration: "35",
//   },
//   {
//     id: 4,
//     username: "Stark",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     price: "100",
//     protein: "pro",
//     additives: "35",
//     bakingmaterial: "35",
//     fooddecoration: "35",
//   },
//   {
//     id: 5,
//     username: "Targaryen",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     price: "100",
//     protein: "pro",
//     additives: "35",
//     bakingmaterial: "35",
//     fooddecoration: "35",
//   },
//   {
//     id: 6,
//     username: "Melisandre",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     price: "100",
//     protein: "pro",
//     additives: "35",
//     bakingmaterial: "35",
//     fooddecoration: "35",
//   },
//   {
//     id: 7,
//     username: "Clifford",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     price: "100",
//     protein: "pro",
//     additives: "35",
//     bakingmaterial: "35",
//     fooddecoration: "35",
//   },
//   {
//     id: 8,
//     username: "Frances",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     price: "100",
//     protein: "pro",
//     additives: "35",
//     bakingmaterial: "35",
//     fooddecoration: "35",
//   },
//   {
//     id: 9,
//     username: "Roxie",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     price: "100",
//     protein: "pro",
//     additives: "35",
//     bakingmaterial: "35",
//     fooddecoration: "35",
//   },
//   {
//     id: 10,
//     username: "Roxie",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     price: "100",
//     protein: "pro",
//     additives: "35",
//     bakingmaterial: "35",
//     fooddecoration: "35",
//   },
// ];

