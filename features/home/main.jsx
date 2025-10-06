"use client"
import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";

export default function HomeMainPage() {
    const router = useRouter()
    return (
        <Grid container sx={{ height: "100vh", backgroundColor: "#000", overflow: "hidden" }}>

            <Grid
                size={{ xs: 12, md: 3.12 }}
                sx={{
                    backgroundColor: "rgb(18, 17, 19)",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between", // keeps top and bottom apart
                    height: "100vh", // make full height
                    px: { xs: 4, md: 5 },
                    py: { xs: 6, md: 3 },
                }}
            >
                <Stack mt={2}>
                    <Box
                        component="img"
                        src="https://lhgfrrd0-juygf-hffd11.s3.eu-north-1.amazonaws.com/assets/image/mfkNbEskGSwj.svg"
                        alt="Ledger Logo"
                        sx={{
                            width: 120,
                            height: "auto",
                            mb: 3,
                            filter:
                                "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)",
                        }}
                    />

                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            lineHeight: 1.2,
                            mb: 2,
                            textTransform: "uppercase",
                            color: "white",
                            fontSize: "30px"
                        }}
                    >
                        The Most Secure <br />
                        Cryptocurrency <br /> & NFT Wallet
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 5, color: "white", fontSize: "14px", fontWeight: 400, lineHeight: "20px", letterSpacing: "normal" }}>
                        Securely manage, buy and grow your crypto and NFTs on Ledger Live.
                    </Typography>
                </Stack>

                {/* Bottom Section */}
                <Stack>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#fff",
                            color: "#000",
                            borderRadius: "50px",
                            textTransform: "none",
                            fontWeight: "700",
                            px: 4,
                            py: 1.2,
                            height: "45px",
                            fontSize: "16px",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                        }}
                        onClick={() => router.push("/device")}
                    >
                        Get started →
                    </Button>

                    <Typography
                        variant="caption"
                        sx={{ mt: 3, color: "#aaa", display: "flex", flexDirection: "column", alignItems: "center", lineHeight: "21px", fontSize: "15px", textAlign: "center" }}
                    >
                        By tapping "Get started" you consent and agree to our{" "}
                        <Stack direction={"row"} gap={.5} >
                            <Box component="span" sx={{ color: "rgb(187, 179, 250)", fontWeight: 500 }}>
                                Terms of Service
                            </Box>{" "}
                            and{" "}
                            <Box component="span" sx={{ color: "rgb(187, 179, 250)", fontWeight: 500 }}>
                                Privacy Policy
                            </Box>
                        </Stack>
                        .
                    </Typography>
                </Stack>
            </Grid>

            {/* Right Section */}
            <Grid
                size={{ xs: 12, md: 8.88 }}
                sx={{
                    background:
                        "linear-gradient(135deg, #bba9ff 0%, #d2c9ff 30%, #b3a5f6 90%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    component="video"
                    src="https://lhgfrrd0-juygf-hffd11.s3.eu-north-1.amazonaws.com/assets/media/video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </Grid>
        </Grid>
    );
}
