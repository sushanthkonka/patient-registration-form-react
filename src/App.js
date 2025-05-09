import logo from './logo.svg';
import './App.css';
import NativeSelect from '@mui/material/NativeSelect';
import { TextField, Box, RadioGroup, Radio, Button, Grid, Typography, FormControl, InputLabel, Select, MenuItem, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

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
          <Box sx={{ mb: 3 }}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item  sm={3}>
                <Typography variant="subtitle1">Patient's Name*</Typography>
              </Grid>
              <Grid item xs={12} sm={9}  sx={{ pl: 15 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="fname"
                      label="First"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="lname"
                      name="last"
                      label="Last"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </div>
        <div className="form-row">
          <Box sx={{ mb: 3 }}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item sm={3}>
                <Typography variant="subtitle1">Gender</Typography>
              </Grid>
              <Grid item xs={12} sm={9} sx={{ pl: 25 }}>
                <FormControl component="fieldset">
                  <RadioGroup row name="gender">
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Box>

        </div>
        <div className="form-row">
          <Box sx={{ mb: 3 }}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item sm={3}>
                <Typography variant="subtitle1">Phone*</Typography>
              </Grid>
              <Grid item xs={12} sm={9} sx={{ pl: 23 }}>
                <TextField
                  required
                  id="Phone"
                  name="Phone"
                  placeholder="# # #  # # # # # # #"
                  type="tel"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>

        </div>
        <div className="form-row">
          <Box sx={{ mb: 3 }}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item sm={3}>
                <Typography variant="subtitle1">Date of Birth*</Typography>
              </Grid>
              <Grid item xs={12} sm={9} sx={{ pl: 17.5 }}>
                <TextField
                  required
                  id="DOB"
                  name="dob"
                  type="date"
                  placeholder="MM/DD/YYYY"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>

        </div>
        <div className="form-row">
          <Box sx={{ mb: 3 }}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item sm={3}>
                <Typography variant="subtitle1">Marital Status*</Typography>
              </Grid>
              <Grid item xs={12} sm={9} sx={{ pl: 18 }}>
                <FormControl component="fieldset">
                  <RadioGroup row name="MStatus">
                    <FormControlLabel value="Single" control={<Radio required />} label="Single" />
                    <FormControlLabel value="Married" control={<Radio />} label="Married" />
                    <FormControlLabel value="Divorced" control={<Radio />} label="Divorced" />
                    <FormControlLabel value="Widow" control={<Radio />} label="Widow" />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Box>

        </div>

        <div className="form-row-address">
          <Box sx={{ mb: 3 }}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item sm={3}>
                <Typography variant="subtitle1">Patient's Address*</Typography>
              </Grid>
              <Grid item xs={12} sm={9} sx={{ pl: 13 }}>
                <TextField
                  required
                  id="Address"
                  placeholder="Street Address"
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      required
                      name="city"
                      placeholder="City"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      required
                      id="state"
                      placeholder="State"
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={6}>
                    <TextField
                      required
                      id="zip"
                      placeholder="Postal/Zip"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth required>
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
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>

        </div>

        <div className="form-row">
          <Box sx={{ mb: 3 }}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item sm={3}>
                <Typography variant="subtitle1">Insurance Name*</Typography>
              </Grid>
              <Grid item xs={12} sm={9} sx={{ pl: 14 }}>
                <TextField
                  required
                  id="Iname"
                  name="insurance_name"
                  placeholder="Insurance Name"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>
        </div>

        <div className="form-row-medical">
          <Box sx={{ mb: 3 }}>
            <Grid container alignItems="flex-start" spacing={2}>
              <Grid item sm={3}>
                <Typography variant="subtitle1">Past Medical History*</Typography>
              </Grid>
              <Grid item xs={12} sm={9} sx={{ pl: 14 }}>
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
              </Grid>
            </Grid>
          </Box>

        </div>

            <Typography variant="h6" component="h2">
              Patient/Guardian Signature*
            </Typography>
            <Typography variant="body1" color="textSecondary">
              According to our privacy policy and federal law, your information within this patient registration form will remain private at all times.
            </Typography>

            <div className="Register-Button">

              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ backgroundColor: 'black', color: 'white' }}>
                REGISTER
              </Button>
            </div> 
      </form>
    </div>
  );
}

  export default App;
