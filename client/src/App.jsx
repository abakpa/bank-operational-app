import { useSelector } from "react-redux";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import HomePage from "./components/homeComponent/HomePage";
import NavbarComponent from "./components/navbarComponent/navbarComponent";
import LoginComponent from "./components/loginComponent/loginComponent";
import SignUpComponent from "./components/loginComponent/signUpComponent";
import CreateLoginCredentialsComponent from "./components/loginComponent/createLoginCredentialsComponent";
import HrLandingPageComponent from "./components/hrComponent/hrLandingPageComponent";
import CreateDepartmentComponent from "./components/hrComponent/createDepartmentComponent";
import CreateRankComponent from "./components/hrComponent/createRankComponent";
import CreateRoleComponent from "./components/hrComponent/createRoleComponent";
import CreateStaffComponent from "./components/staffComponent/createStaffComponent";
import CreateCustomerComponent from "./components/customerComponent/createCustomerComponent";
import CustomerLandingPageComponent from "./components/customerComponent/customerLandingPageComponent";
import WelcomePageComponent from "./components/homeComponent/WelcomePageComponent";
import CreateVaultComponent from "./components/vaultComponent/CreateVaultComponent";
import VaultDepositComponent from "./components/vaultComponent/VaultDepositComponent";
import VaultWithdrawalComponent from "./components/vaultComponent/VaultWithdrawalComponent";
import CreateTellerComponent from "./components/tellerComponent/CreateTellerAccountComponent";
import OperationsLandingPageComponent from "./components/OperationsComponent/OperationsLandingPageComponent";
import VaultLandingPageComponent from "./components/OperationsComponent/VaultLandingPageComponent";
import TellerLandingPageComponent from "./components/tellerComponent/TellerLandingPageComponent";
import AdminLandingPageComponent from "./components/adminComponent/AdminLandingPageComponent";
import CreateBankComponent from "./components/adminComponent/CreateBankComponent";
import VaultBankDepositComponent from "./components/vaultComponent/VaultBankDepositComponent";
import VaultBankWithdrawalComponent from "./components/vaultComponent/VaultBankWithdrawalComponent";
import CustomerDepositComponent from "./components/customerAccountComponent/CustomerDepositComponent";
import CustomerWithdrawalComponent from "./components/customerAccountComponent/CustomerWithdrawalComponent";
import FooterComponent from "./components/footerComponent/FooterComponent";
import ViewAllCustomer from "./components/customerComponent/ViewAllCustomer";
import CustomerStatementComponent from "./components/customerComponent/CustomerStatementComponent";
import FooterAdjusement from "./components/footerComponent/FooterAdjusement";

function App() {
  const { login } = useSelector((state) => state.login);
  return (
    <Router>
      <NavbarComponent />
      <h2 className="welcome__name content">{login && login.data.fullName}</h2>
      <main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/createvault" element={<CreateVaultComponent />} />
          <Route
            exact
            path="/createteller"
            element={<CreateTellerComponent />}
          />
          <Route
            exact
            path="/vaultwithdrawal"
            element={<VaultWithdrawalComponent />}
          />
          <Route
            exact
            path="/vaultdeposit"
            element={<VaultDepositComponent />}
          />
          <Route exact path="/welcomepage" element={<WelcomePageComponent />} />
          <Route
            exact
            path="/accountstatement"
            element={<CustomerStatementComponent />}
          />
          <Route exact path="/viewallcustomer" element={<ViewAllCustomer />} />
          <Route
            exact
            path="/customerdepositpage"
            element={<CustomerDepositComponent />}
          />
          <Route
            exact
            path="/customerwithdrawalpage"
            element={<CustomerWithdrawalComponent />}
          />
          <Route
            exact
            path="/vaultbankwithdrawalpage"
            element={<VaultBankWithdrawalComponent />}
          />
          <Route
            exact
            path="/vaultbankdepositpage"
            element={<VaultBankDepositComponent />}
          />
          <Route exact path="/createbank" element={<CreateBankComponent />} />
          <Route
            exact
            path="/adminlandingpage"
            element={<AdminLandingPageComponent />}
          />
          <Route
            exact
            path="/tellerlandingpage"
            element={<TellerLandingPageComponent />}
          />
          <Route
            exact
            path="/vaultlandingpage"
            element={<VaultLandingPageComponent />}
          />
          <Route
            exact
            path="/operationlandingpage"
            element={<OperationsLandingPageComponent />}
          />
          <Route exact path="/login" element={<LoginComponent />} />
          <Route exact path="/signup" element={<SignUpComponent />} />
          <Route
            exact
            path="/createlogin"
            element={<CreateLoginCredentialsComponent />}
          />
          <Route
            exact
            path="/hrlandingpage"
            element={<HrLandingPageComponent />}
          />
          <Route
            exact
            path="/createdepartment"
            element={<CreateDepartmentComponent />}
          />
          <Route exact path="/createrank" element={<CreateRankComponent />} />
          <Route exact path="/createrole" element={<CreateRoleComponent />} />
          <Route exact path="/createstaff" element={<CreateStaffComponent />} />
          <Route
            exact
            path="/customerLandingPage"
            element={<CustomerLandingPageComponent />}
          />
          <Route
            exact
            path="/createcustomer"
            element={<CreateCustomerComponent />}
          />
        </Routes>
      </main>
      <FooterAdjusement />
      <FooterComponent />
    </Router>
  );
}

export default App;
