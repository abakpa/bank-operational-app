const express = require("express");
const cors = require("cors");
const connectionDB = require("./config/db");
require("dotenv").config();
const app = express();
const path = require("path");
const hrRoutes = require("./route/hrRoutes");
const staffRoutes = require("./route/staffRoutes");
const loginRoutes = require("./route/loginRoutes");
const customerRoutes = require("./route/customerRoutes");
const tellerAccount = require("./route/tellerAccountRoutes");
const vaultAccount = require("./route/vaultAccountRoutes");
const externalBankAccount = require("./route/externalBankAccountRoutes");

connectionDB();
app.use(express.json());
app.use(cors());

app.use(
    "/uploads/images",
    express.static(path.join(__dirname, "/public/uploads/images/"))
);

app.use("/api/hr", hrRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/customer", customerRoutes);
app.use("/api/teller", tellerAccount);
app.use("/api/vault", vaultAccount);
app.use("/api/bank", externalBankAccount);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});