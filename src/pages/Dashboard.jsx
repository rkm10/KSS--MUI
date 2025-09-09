import { useEffect, useState } from "react";
import { Container, Paper, Stack, Typography, useMediaQuery, TextField, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axiosClient from "../api/axiosClient";

export default function Dashboard() {
    const [products, setProducts] = useState([]);

    const mobiles = useMediaQuery('(max-width:600px)');

    console.log(mobiles);

    useEffect(() => {
        axiosClient.get("/products?limit=10")
            .then(res => setProducts(res.data.products))
            .catch(err => console.error(err));
    }, []);

    const columns = [
        { field: "id", headerName: "ID", width: mobiles ? 70 : 150 },
        { field: "title", headerName: "Title", width: 250 },
        { field: "brand", headerName: "Brand", width: mobiles ? 120 : 150 },
        { field: "category", headerName: "Category", width: mobiles ? 120 : 150 },
        { field: "price", headerName: "Price ($)", width: mobiles ? 120 : 150 },
        { field: "stock", headerName: "Stock", width: mobiles ? 120 : 150 },
        { field: "rating", headerName: "Rating", width: mobiles ? 120 : 130 },
    ];

    const paginationModel = { page: 0, pageSize: mobiles ? 10 : 5 };

    return (
        <>
            <Container
                maxWidth={false}
                sx={{
                    flexDirection: 'column',
                    minHeight: "100vh",
                    backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center"
                }}>
                <Container>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center" mb={2}
                        flexWrap="wrap" gap={2}
                        sx={{backgroundColor: 'rgba(255, 255, 255, 0.85)', p: 2, borderRadius: 2}}
                    >
                        <Typography variant="h4" gutterBottom
                            sx={{ fontSize: mobiles ? '1.25rem' : '2.125rem' }}>
                            Products
                        </Typography>
                        <TextField
                            type="number"
                            label="Add more products"
                            placeholder="Increase products by adding more"
                            sx={{ 
                                width: mobiles ? 100 : 200, 
                                fontSize: mobiles ? '0.75rem' : '1rem',
                                padding: mobiles ? '0.2rem' : '0.5rem',
                            }}
                        />
                    </Stack>
                    <Paper sx={{ height: 500, width: '100%' }}>
                        <DataGrid
                            rows={products}
                            columns={columns}
                            initialState={{ pagination: { paginationModel } }}
                            pageSizeOptions={[5, 10, 15]}
                            checkboxSelection={false}
                            isRowSelectable={() => false}
                            disableSelectionOnClick
                            sx={{ fontSize: mobiles ? '0.75rem' : '1rem' }}
                        />
                    </Paper>
                </Container>
            </Container>
        </>
    );
}
