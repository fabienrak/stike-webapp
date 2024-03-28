'use client'
// NEXT
import Link from 'next/link';

// MATERIAL - UI
import Links from '@mui/material/Link';
import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import CardMedia from '@mui/material/CardMedia';
import Chip, { ChipProps } from '@mui/material/Chip';
import TableContainer from '@mui/material/TableContainer';
import Button from '@mui/material/Button';

// PROJECT IMPORTS
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';


// ASSETS
import { Edit, Trash } from 'iconsax-react';
import { useEffect, useState } from 'react';

const Phone1 = '/assets/images/widget/PHONE1.jpg';
const Phone2 = '/assets/images/widget/PHONE2.jpg';
const Phone3 = '/assets/images/widget/PHONE3.jpg';
const Phone4 = '/assets/images/widget/PHONE4.jpg';

// TABLE DATA
function createData(
  customer: string,
  cid: string,
  photo: string,
  product: string,
  quantity: string,
  date: string,
  status: string,
  statuscolor: ChipProps['color']
) {
  return { customer, cid, photo, product, quantity, date, status, statuscolor };
}

const rows = [
  createData('John Deo', '#81412314', Phone1, 'Moto G5', '10', '17-2-2017', 'Pending', 'warning'),
  createData('Jenny William', '#68457898', Phone2, 'iPhone 8', '16', '20-2-2017', 'Paid', 'primary'),
  createData('Lori Moore', '#45457898', Phone3, 'Redmi 4', '20', '17-2-2017', 'Success', 'success'),
  createData('Austin Pena', '#62446232', Phone4, 'Jio', '15', '25-4-2017', 'Failed', 'error')
];

// =========================|| DATA WIDGET - LATEST ORDER ||========================= //

export default function ArticleData() {

  // const [article, setArticle] = useState([])

  /* const fetchData = async () => {
    const res: any = await fetch('/api/auth/protected');
    const json = await res?.json();
    console.log("=-=-=-=-=-=-=-=-=- RES GUARD 1 : " + JSON.stringify(json));
    if (json?.protected) {
      router.push('/dashboard/default');
    }
  }; */

  const getAllArticleList = async () => {
    const res:  any = await fetch('/article', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+localStorage.getItem("token_value")
      }
    });
    const data = await res?.json();

    console.log("ICI RES STATUS: " + res.status);
    console.log("ICI RES DATA: " + JSON.stringify(data));
    // const res: any = await fetch('/article');
    // const data = await res?.json();
    // console.log("------ ICI MADA ------ " + data)
  }

  useEffect(()  =>  {
    getAllArticleList()
  }, [])
  return (
    
    <MainCard
      title="Dernier articles"
      content={false}
      secondary={
        <Links component={Link} href="#" color="primary">
          Voir tout
        </Links>
        
      }
    >
    <Button variant="outlined" color="warning" onClick={getAllArticleList} sx={{ mt: 0.25 }}>
      Recharger Article
    </Button>  
     
      <TableContainer>
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ pl: 3 }}>Client</TableCell>
              <TableCell>Id article</TableCell>
              <TableCell>Photo</TableCell>
              <TableCell>Article</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center" sx={{ pr: 3 }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow hover key={index}>
                <TableCell sx={{ pl: 3 }}>{row.customer}</TableCell>
                <TableCell>{row.cid}</TableCell>
                <TableCell>
                  <CardMedia component="img" image={row.photo} title="image" sx={{ width: 20, height: 'auto' }} />
                </TableCell>
                <TableCell>{row.product}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">
                  <Chip color={row.statuscolor} label={row.status} size="small" />
                </TableCell>
                <TableCell align="center" sx={{ pr: 3 }}>
                  <Stack direction="row" justifyContent="center" alignItems="center">
                    <IconButton color="primary" size="large">
                      <Edit />
                    </IconButton>
                    <IconButton color="inherit" size="large">
                      <Trash />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainCard>
  );
}
