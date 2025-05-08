import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form className="container">
        <h1>Patient Registration Form</h1>
        <h4>Thank you for applying to our practice. Please complete this patient registration form with your information, and a doctor will contact you shortly.</h4>
        <hr/>
        <div className="form-row">
            <label htmlFor="fname">Patient's Name*</label>
            <div className="input-group">
                <input type="text" id="fname" name="first" placeholder="First" required/>
                <input type="text" id="lname" name="last" placeholder="Last" required/>
            </div>
        </div>
        <div className="form-row">
            <label>Gender</label>
            <div class="gender">
                <label><input type="radio" name="gender" value="male"/> Male</label>
                <label><input type="radio" name="gender" value="female"/> Female</label>
            </div>
        </div>
        <div className="form-row">
            <label htmlFor="Phone">Phone*</label>
            <div className="input-group">
            <input type="tel" id="Phone" name="Phone" placeholder="# # #  # # # # # # #" required/>
            </div>
        </div>
        <div className="form-row">
            <label  htmlFor="DOB">Date of Birth*</label>
            <div className="input-group">
            <input  type="date" class="dateofbirth" id="DOB" name="dob"  required/>
            </div>
        </div>
        <div className="form-row">
            <label>Marital Status*</label>
            <div className="status">
                <label><input type="radio" name="MStatus" value="Single" required/> Single</label>
                <label><input type="radio" name="MStatus" value="Married"/> Married</label>
                <label><input type="radio" name="MStatus" value="Divorced"/> Divorced</label>
                <label><input type="radio" name="MStatus" value="Widow"/> Widow</label>
            </div>
        </div>

        <div className="form-row-address">
            <label htmlFor="PAddress">Patient's Address*</label>
            <div className="address">
                <input type="text" class="Street-Address" id="Address" name="street_address" placeholder="Street Address" required/>

                <div className="city_state">
                    <input type="text" class="city-address" name="city" placeholder="City" required/>
                    <input type="text" class="state-address" name="state" placeholder="State" required/>
                </div>

                <div className="zip_country">
                    <input type="text" className="zip-address" name="zip" placeholder="Postal/Zip Code" required/>
                    <select className="country-dropdown" name="country" required>
                        <option value="">Country</option>
                        <option value="us">United States</option>
                        <option value="ca">Canada</option>
                        <option value="uk">United Kingdom</option>
                        <option value="au">Australia</option>
                        <option value="in">India</option>
                        <option value="de">Germany</option>
                        <option value="fr">France</option>
                        <option value="jp">Japan</option>
                        <option value="cn">China</option>
                    </select>
                </div>
            </div>
        </div>

        <div className="form-row">
            <label htmlFor="Iname">Insurance Name*</label>
            <div className="input-group">
            <input type="text" id="Iname" name="insurance_name" required/>
            </div>
        </div>

        <div className="form-row-medical">
            <label>Past Medical History*</label>
            <div className="medical">
                <label><input type="checkbox" name="medical_history" value="Anemia"/> Anemia</label>
                <label><input type="checkbox" name="medical_history" value="Asthma"/> Asthma</label>
                <label><input type="checkbox" name="medical_history" value="Bronchitis"/> Bronchitis</label>
                <label><input type="checkbox" name="medical_history" value="Chickenpox"/> Chickenpox</label>
                <label><input type="checkbox" name="medical_history" value="Diabetes"/> Diabetes</label>
                <label><input type="checkbox" name="medical_history" value="Pneumonia"/> Pneumonia</label>
                <label><input type="checkbox" name="medical_history" value="Thyroid Disease"/> Thyroid Disease</label>
                <label><input type="checkbox" name="medical_history" value="Ulcer"/> Ulcer</label>
                <label><input type="checkbox" name="medical_history" value="Other"/> Other</label>
            </div>
        </div>

        <h2>Patient/Guardian Signature*</h2>
        <p>According to our privacy policy and federal law, your information within this patient registration form will remain private at all times.</p>

        <div className="Register-Button">
            <button type="submit" class="button">REGISTER</button>
        </div>
    </form>



    </div>
  );
}

export default App;
