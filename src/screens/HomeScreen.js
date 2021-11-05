import React,{ useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { ThemeProvider, TextField, createTheme, Button, makeStyles} from '@material-ui/core'
import TableComponent from '../components/TableComponent'
import { getCoins } from '../actions/coinsActions'

const HomeScreen = () => {

    const dispatch = useDispatch()

    const coinsList = useSelector(state=>state.coinsList)
    const {coins} = coinsList
    const [search, setSearch] = useState('')

    useEffect(()=>{
        dispatch(getCoins())
    },[dispatch])

    const darkTheme = createTheme({
        palette:{
            primary:{
                main: "#fff",
            },
            type:"dark",
        }
    })

    const useStyles= makeStyles(() => ({
        search:{
            float:'left',
            marginBottom:20,
            marginTop:20,
            width:"40%"
        }
    }))
    const classes = useStyles()
    const handleSearch = () => {
        return coins.filter((coin)=> (
            coin.name.includes(search) ||
             coin.symnbol.toLocaleLowerCase().includes(search) ||
              coin.symnbol.includes(search)

             ))  
        }
    return (
        <ThemeProvider theme={darkTheme}>
            <br/>
            {coins.map(coin=>(
                <Button onClick={()=>{
                    const newCoin = {...coin}
                    coin.isShow = !newCoin.isShow
                    coins[coin._id-1] = coin
                    dispatch(getCoins())
                }} variant='outlined' style={{ marginRight:5, textTransform:'none'}} ><i style={{marginRight:5}} className={coin.icon}></i> {coin.symnbol} {coin.isShow ? ('(Turn off)') : ('(Turn on)')}
                </Button>
            ))}
            <br/>
            <TextField onChange={e=>setSearch(e.target.value)} className={classes.search} size='small' label="Search For Crypto Currency" variant="outlined"  color="primary"></TextField>
            <TableComponent handleSearch={handleSearch} />
        </ThemeProvider>
    )
}

export default HomeScreen   
