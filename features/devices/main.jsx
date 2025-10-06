'use client'
import React from 'react'
import { Box, Grid, Typography, Button, Stack, Paper } from '@mui/material'
import { useRouter } from 'next/navigation'

const devices = [
    {
        name: 'Ledger Stax',
        image: '/one.png', // replace with your actual image path
        filter: true,
        size: { xs: 6, md: 4, lg: 4 }
    },
    {
        name: 'Ledger Flex',
        image: 'https://lhgfrrd0-juygf-hffd11.s3.eu-north-1.amazonaws.com/assets/image/flex_3x.webp',
        filter: false,
        size: { xs: 6, md: 4, lg: 2.66 }
    },
    {
        name: 'Ledger Nano S & Plus',
        image: '/three.png',
        filter: true,
        size: { xs: 6, md: 4, lg: 2.66 }

    },
    {
        name: 'Ledger Nano X',
        image: '/four.png',
        filter: true,
        size: { xs: 6, md: 4, lg: 2.66 }
    },
]

export default function DeviceMain() {
    const router = useRouter()
    return (
        <Box
            sx={{
                backgroundColor: "rgb(18, 17, 19)",
                color: '#fff',
                minHeight: '100vh',
                position: "relative"
            }}
        >
            <Box sx={{ width: "100%", position: "absolute", left: 0, top: 30, }}>
                <Stack sx={{ width: "100%", padding: "0px 30px", }} >
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Button sx={{ flex: "row", gap: 1, color: "white", fontWeight: 600, alignItems: "center" }}
                            onClick={() => router.back()}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-arrow-left"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                />
                            </svg>
                            Previous
                        </Button>
                        <Box
                            component="img"
                            src="https://lhgfrrd0-juygf-hffd11.s3.eu-north-1.amazonaws.com/assets/image/mfkNbEskGSwj.svg"
                            alt="Ledger Logo"
                            sx={{
                                width: 90,
                                height: "auto",
                                margin: "auto",
                                mb: 5,
                                filter:
                                    "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)",
                            }}
                        />
                        <Typography sx={{ width: "100px" }}></Typography>
                    </Stack>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            lineHeight: 1.2,
                            mb: 2,
                            textTransform: "uppercase",
                            color: "white",
                            fontSize: "24px",
                            textAlign: "center"
                        }}
                    >
                        SELECT YOUR DEVICE

                    </Typography>
                </Stack>
            </Box>

            <Grid
                container
            >
                {devices.map((device, index) => (
                    <Grid size={device.size} key={index}>
                        <Box
                            sx={{
                                backgroundColor: "rgb(18, 17, 19)",
                                textAlign: 'center',
                                width: "100%",
                                height: "100Vh",
                                border: "none",
                                outline: "none",
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    bgcolor: '#222',
                                    transition: 'all 0.3s ease',
                                },
                                '&:hover img': { // 👈 when Paper is hovered, target image
                                    transform: 'translateY(-30px)',
                                },

                                pt: 24
                            }}
                        >
                            <Stack alignItems="center" spacing={2} >
                                <Box
                                    component="img"
                                    src={device.image}
                                    alt={device.name}
                                    sx={{
                                        height: 220,
                                        mb: 1,
                                        objectFit: 'contain',
                                        filter: device?.filter && "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)",
                                        transition: 'transform 0.3s ease',
                                    }}
                                />
                                <Typography variant="h6" sx={{ fontWeight: 600, color: "white", fontFamily: "'Inter', sans-serif", fontSize: "24px" }}>
                                    {device.name}
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#fff',
                                        color: '#000',
                                        borderRadius: '20px',
                                        textTransform: 'none',
                                        px: 4,
                                        '&:hover': {
                                            backgroundColor: '#e0e0e0',
                                        },
                                    }}
                                    onClick={() => router.push("/phrase")}
                                >
                                    Select
                                </Button>
                            </Stack>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
