import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (req, res)=>{
    res.status(200).json({ status: "ok" });
});

app.get('/', (req,res)=>{
    res.status(200).json({ name: "ledgerpay API" , version: "1.0.0"   });
});

app.use((req, res) =>{
    res.status(404).json({ error: "Not Found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`LedgerPay API running on port ${PORT}`);
});