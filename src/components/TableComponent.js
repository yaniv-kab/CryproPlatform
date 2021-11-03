import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Button, makeStyles} from '@material-ui/core'
import { getCoins } from '../actions/coinsActions'
import StarIcon from '@material-ui/icons/Star'

const TableComponent = ({handleSearch}) => {

    const dispatch = useDispatch()

    const coinsList = useSelector(state=>state.coinsList)
    const {coins} = coinsList
    const useStyles= makeStyles(() => ({
        table:{
            maxWidth:700
        },
        tableRow: {
            "&.Mui-selected, &.Mui-selected:hover": {
              background: "linear-gradient(to right, #14161a 60%, #281e00)"
            }
          },
        coinButton:{
            marginRight:5,
            textTransform:'none'
        }
    }))
    const classes = useStyles()

    return (
        <TableContainer className={classes.tableContainer}>
        <Table className={classes.table} size='small' >
            <TableHead>
                <TableRow>  
                 <TableCell  style={{color:'white'}}  >
                 </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {handleSearch().map(row => {
                    return(
                    <Table key={row._id} style={{marginLeft:20}} size='small'>
                        {row.isShow && (
                            <>
                        <TableHead>
                        <Typography style={{marginTop:10}} variant='subtitle1'><i style={{marginRight:8}} className={row.icon}></i> {row.symnbol}</Typography>
                        </TableHead>
                         <TableBody style={{borderBottom:"1px solid #212121"}}>
                         {row.currencyes.map((currency,i)=> {
                                 const profit = currency.precentChanged > 0
                                 return(
                                 <TableRow className={classes.tableRow} selected={currency.isFavorite} key={i}>
                                      <TableCell style={{borderBottom:"none",color:"#9e9e9e",marginTop:10}} key={currency.name}>
                                         {row.symnbol+currency.name}
                                     </TableCell>
                                      <TableCell style={{borderBottom:"none"}} align='right'>
                                         {currency.marketPrice}
                                     </TableCell>
                                    <TableCell style={{
                                        color: profit > 0 ? "#2FDD92" : '#FF2442',
                                        borderBottom:"none"  }} align='left'>
                                            {profit && "+"}{currency.precentChanged}%
                                  </TableCell>
                                  <TableCell style={{borderBottom:"none"}} align='right'>
                                      {currency.marketCap}
                                  </TableCell>
                                  <TableCell align='right' style={{borderBottom:"none"}}>
                                      <Button style={{color:currency.isFavorite ?"#FFCC29" :"grey"}} onClick={()=>{
                                           const newCoins = [...coins]
                                           const currencyes = [...coins[row._id-1].currencyes]
                                           console.log(currencyes);
                                           const index = currencyes.findIndex(currencyItem => currencyItem.currencyId === currency.currencyId)
                                           currencyes[index].isFavorite = !currencyes[index].isFavorite
                                           newCoins[row._id-1].currencyes = currencyes
                                           dispatch(getCoins())
                                      }}><StarIcon /></Button>
                                  </TableCell>
                                 </TableRow>
                             )})}
                     </TableBody>   
                     </>   
                        )}

                    </Table>
                    )}
                )}
            </TableBody>
        </Table>
    </TableContainer>
    )
}

export default TableComponent
