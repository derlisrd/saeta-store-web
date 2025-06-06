"use client";
import { Backdrop, CircularProgress } from "@mui/material";

function Loading() {
    return <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open
        onClick={() => { }}
    >
        <CircularProgress color="secondary" />
    </Backdrop>
}

export default Loading;