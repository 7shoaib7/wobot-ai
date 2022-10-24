import './App.css';
import logo from './assets/images/wobot-logo.svg';
import cardLogo from './assets/images/Solid_lines.svg';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [companySize, setCompanySize] = useState(["1-20", "21-50", "51-200", "201-500", "500+"])
  const [size, setSize] = useState("");
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    companySize: "",
  })

  const handleInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  }


  const validateInput = (data) => {
    if (!data.companyName) {
      toast.warning('Company name is required !', {
        position: "top-right"
      });
      return false
    }

    if (!data.industry) {
      toast.warning('Industry is required !', {
        position: "top-right"
      });
      return false
    }
    if (!data.companySize) {
      toast.warning('Company size is required !', {
        position: "top-right"
      });
      return false
    }
    return true;
  };

  const handleData = () => {
    if (!validateInput(formData)) return
    toast.success('Success !', {
      position: "top-right"
    });
    console.log(formData);
  }



  const handleCompanySize = (item) => {
    setSize(item)
    setFormData({ ...formData, companySize: item })
  }

  return (
    <div className="App">
      <div className="logo-box">
        <img className="logo-img" src={logo} alt="logo" />
      </div>
      <div className="box-rotate-fixed">
        <div className="box-strip box-strip-middle"></div>
        <div className="box-strip box-strip-top-right"></div>
        <div className="box-strip box-strip-bottom-left"></div>
      </div>
      <div className="card">
        <div className="card-details">
          <div className="card-heading">
            <div className="card-logo">
              <img src={cardLogo} alt="cardLogo" />
            </div>
            <h3 className="card-title">It's a delight to have you onboard</h3>
            <p className="card-sub-title">Help us know you better.</p>
            <p className="card-sub-title">(This is how we optimize Wobot as per your business needs)</p>
          </div>
          <div className="card-form">
            <form className="card-form-details">
              <div className="form-group">
                <label className="form-label">Company name</label>
                <input type="text" className="form-control " name="companyName" placeholder="e.g. Example Inc" onChange={handleInput} />
              </div>
              <div className="form-group">
                <label className="form-label">Industry</label>
                <select className="form-control" name="industry" onChange={handleInput}>
                  <option value="">Select</option>
                  <option value="Option1">Option1</option>
                  <option value="Option2">Option2</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Company size</label>
                {companySize.map((item) => (
                  <div key={item} className="company-size gap" onClick={() => handleCompanySize(item)} style={item === size ? { backgroundColor: "#3766E8", color: "#ffffff" } : null}>
                    {item}
                  </div>
                ))}
              </div>
            </form>
          </div>
          <button type="submit" className="btn btn-primary btn-block" onClick={handleData}>Get Started</button>
          <ToastContainer />
        </div>
      </div>
      <p className="bottom-content">Terms of use | Privacy policy</p>
    </div>
  );
}

export default App;
