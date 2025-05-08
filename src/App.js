import logo from './logo.svg';
import './App.css';
import { TextField, Box, RadioGroup, Radio, Button, Typography, FormControl, InputLabel, Select, MenuItem, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

function App() {
  return (
    <div className="App">
      <form className="container">
        <Typography variant="h4" component="h1" gutterBottom>
          Patient Registration Form
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Thank you for applying to our practice. Please complete this patient registration form with your information, and a doctor will contact you shortly.
        </Typography>
        <hr />
        <div className="form-row">
          <label htmlFor="fname">Patient's Name*</label>
          <div className="input-group">
            <TextField
              id="fname"
              label="First"
              variant="outlined"
            />

            <TextField
              required
              id="lname"
              name="last"
              label="Last"
              variant="outlined"
            />

          </div>
        </div>
        <div className="form-row">
          <label>Gender</label>
          <div className="gender">
            <FormControl component="fieldset" className="gender">
              <RadioGroup row name="gender">
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
              </RadioGroup>
            </FormControl>

          </div>
        </div>
        <div className="form-row">
          <label htmlFor="Phone">Phone*</label>
          <div className="input-group">
            <TextField
              required
              id="Phone"
              name="Phone"
              label="Phone"
              placeholder="# # #  # # # # # # #"
              type="tel"
              variant="outlined"
            />

          </div>
        </div>
        <div className="form-row">
          <label htmlFor="DOB">Date of Birth*</label>
          <div className="input-group">
            <TextField
              required
              id="DOB"
              name="dob"
              label="Date of Birth"
              type="date"
              placeholder="MM/DD/YYYY"
              InputLabelProps={{
                shrink: true,
              }}
            />

          </div>
        </div>
        <div className="form-row">
          <label>Marital Status*</label>
          <div className="status">
            <FormControl component="fieldset" className="status">
              <RadioGroup row name="MStatus">
                <FormControlLabel value="Single" control={<Radio required />} label="Single" />
                <FormControlLabel value="Married" control={<Radio />} label="Married" />
                <FormControlLabel value="Divorced" control={<Radio />} label="Divorced" />
                <FormControlLabel value="Widow" control={<Radio />} label="Widow" />
              </RadioGroup>
            </FormControl>

          </div>
        </div>

        <div className="form-row-address">
          <label htmlFor="PAddress">Patient's Address*</label>
          <div className="address">
            <TextField
              id="Address"
              name="street_address"
              label="Street Address"
            />


            <div className="city_state">
              <TextField
                required
                name="city"
                label="City"
              />
              <TextField
                required
                name="state"
                label="State"
                placeholder="State"
              />
            </div>

            <div className="zip_country">
              <TextField
                required
                name="zip"
                label="Postal/Zip Code"
              />

              <FormControl fullWidth required className="country-dropdown">
                <InputLabel id="country-label">Country</InputLabel>
                <Select
                  labelId="country-label"
                  id="country"
                  name="country"
                  label="Country"
                  defaultValue=""
                >
                  <MenuItem value="">Country</MenuItem>
                  <MenuItem value="us">United States</MenuItem>
                  <MenuItem value="ca">Canada</MenuItem>
                  <MenuItem value="uk">United Kingdom</MenuItem>
                  <MenuItem value="au">Australia</MenuItem>
                  <MenuItem value="in">India</MenuItem>
                  <MenuItem value="de">Germany</MenuItem>
                  <MenuItem value="fr">France</MenuItem>
                  <MenuItem value="jp">Japan</MenuItem>
                  <MenuItem value="cn">China</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>

        <div className="form-row">
          <label htmlFor="Iname">Insurance Name*</label>
          <div className="input-group">
            <TextField
              required
              id="Iname"
              name="insurance_name"
              label="Insurance Name"
              placeholder="Insurance Name"
            />

          </div>
        </div>

        <div className="form-row-medical">
          <label>Past Medical History*</label>
          <div className="medical">
            <FormGroup>
              <FormControlLabel control={<Checkbox name="medical_history" value="Anemia" />} label="Anemia" />
              <FormControlLabel control={<Checkbox name="medical_history" value="Asthma" />} label="Asthma" />
              <FormControlLabel control={<Checkbox name="medical_history" value="Bronchitis" />} label="Bronchitis" />
              <FormControlLabel control={<Checkbox name="medical_history" value="Chickenpox" />} label="Chickenpox" />
              <FormControlLabel control={<Checkbox name="medical_history" value="Diabetes" />} label="Diabetes" />
              <FormControlLabel control={<Checkbox name="medical_history" value="Pneumonia" />} label="Pneumonia" />
              <FormControlLabel control={<Checkbox name="medical_history" value="Thyroid Disease" />} label="Thyroid Disease" />
              <FormControlLabel control={<Checkbox name="medical_history" value="Ulcer" />} label="Ulcer" />
              <FormControlLabel control={<Checkbox name="medical_history" value="Other" />} label="Other" />
            </FormGroup>
          </div>
        </div>

        <Typography variant="h6" component="h2">
          Patient/Guardian Signature*
        </Typography>
        <Typography variant="body1" color="textSecondary">
          According to our privacy policy and federal law, your information within this patient registration form will remain private at all times.
        </Typography>

        <div className="Register-Button">

          <Button type="submit" variant="contained" color="primary" fullWidth>
            REGISTER
          </Button>
        </div>
      </form>



    </div>
  );
}

export default App;
