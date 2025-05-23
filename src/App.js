import './App.css';
import { styled } from '@mui/material/styles';

import { TextField, Box, RadioGroup, Radio, Button, Grid, Typography, FormControl, InputLabel, Select, MenuItem, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { useState } from 'react';


const CustomRadio = styled(Radio)(({ theme }) => ({
  padding: 8,
  '&.MuiRadio-root': {
    color: '#f0f0f0',
  },
  '& .MuiSvgIcon-root': {
    borderRadius: 0,
    backgroundColor: '#f0f0f0',
    width: 20,
    height: 20,
  },
  '&.Mui-checked .MuiSvgIcon-root': {
    backgroundColor: 'black',
    color: 'black',

  },
}));

const CustomCheckBox = styled(Checkbox)(({ theme }) => ({
  padding: 8,
  '&.MuiCheckbox-root': {
    color: '#f0f0f0',
    border: 'none',
  },
  '& .MuiSvgIcon-root': {

    borderRadius: 0,
    backgroundColor: '#f0f0f0',
    width: 20,
    height: 20,
  },
  '&.Mui-checked .MuiSvgIcon-root': {
    backgroundColor: 'black',
    color: 'black',

  },
}));

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [streetAdress, setStreetAddress] = useState('');
  const [cityAddress, setCityAddress] = useState('');
  const [stateAdress, setStateAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [gender, setGender] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [insuranceName, setInsuranceName] = useState('');
  const [dob, setDob] = useState('');
  const [medicalHistory, setMedicalHistory] = useState([]);
  const [countryName, setCountryName] = useState('');



  const patient = { };

  const handleCheckboxChange = (event) => {
  const { value, checked } = event.target;

  setMedicalHistory((prev) => {
    const updated = checked
      ? [...prev, value]
      : prev.filter((item) => item !== value);

    console.log("Updated medical history:", updated); 
    return updated;
  });
};



  const registerPatient = () => {
    patient.First_Name = firstName;
    patient.Last_Name = lastName;
    patient.Phone_Number = phoneNumber;
    patient.Street_Address = streetAdress;
    patient.City_Address = cityAddress;
    patient.State_Address = stateAdress;
    patient.Zip_Code = zipCode;
    patient.Gender = gender;
    patient.Marital_Status = maritalStatus;
    patient.Insurance_Name = insuranceName;
    patient.Date_Of_Birth = dob;
    patient.Medical_History = medicalHistory;
    patient.Country_Name=countryName;

    fetch("https://sk-patient-registration-form-react-ddhxgfhvgpcwbxdj.centralus-01.azurewebsites.net/api/Patient/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(patient)
    })
      .then(response => response.json())
      .then(data => {
        console.log("Patient registered:", data);
      })
      .catch(error => {
        console.error("Error registering patient:", error);
      });
  };
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
              <Grid item sm={3}>
                <Typography variant="subtitle1">Patient's Name*</Typography>
              </Grid>
              <Grid item xs={12} sm={9} sx={{ pl: 15 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="fname"
                      label="First"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      variant="outlined"
                      fullWidth
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: '#f0f0f0',
                          borderRadius: '15px',
                          '& fieldset': {
                            border: 'none',
                          },
                          '& input': {
                            color: 'black',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="lname"
                      name="last"
                      label="Last"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      variant="outlined"
                      fullWidth
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: '#f0f0f0',
                          borderRadius: '15px',
                          '& fieldset': {
                            border: 'none',
                          },
                          '& input': {
                            color: 'black',
                          },
                        },
                      }}
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
                  <RadioGroup row name="gender"
                    value={gender}
                    onChange={(e) => {
                      setGender(e.target.value);
                      console.log("Selected gender:", e.target.value);
                    }}>
                    <FormControlLabel value="male" control={<CustomRadio />} label="Male" />
                    <FormControlLabel value="female" control={<CustomRadio />} label="Female" />
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
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type="tel"
                  variant="outlined"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#f0f0f0',
                      borderRadius: '15px',
                      '& fieldset': {
                        border: 'none',
                      },
                      '& input': {
                        color: 'black',
                      },
                    },
                  }}
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
                  value={dob}
                  onChange={(e) => {
                    setDob(e.target.value);
                    console.log("Selected dob:", e.target.value);
                  }}

                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{
                    backgroundColor: '#f0f0f0',
                    borderRadius: '15px',
                    '& fieldset': {
                      border: 'none',
                    },
                    '& input': {
                      color: 'black',
                      px: '30px',
                    },
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
                  <RadioGroup row name="MStatus"
                    value={maritalStatus}
                    onChange={(e) => {
                      setMaritalStatus(e.target.value);
                      console.log("Selected maritalStatus:", e.target.value);
                    }}>
                    <FormControlLabel value="Single" control={<CustomRadio />} label="Single" />
                    <FormControlLabel value="Married" control={<CustomRadio />} label="Married" />
                    <FormControlLabel value="Divorced" control={<CustomRadio />} label="Divorced" />
                    <FormControlLabel value="Widow" control={<CustomRadio />} label="Widow" />
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
                  value={streetAdress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  placeholder="Street Address"
                  fullWidth
                  sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#f0f0f0',
                      borderRadius: '15px',
                      '& fieldset': {
                        border: 'none',
                      },
                      '& input': {
                        color: 'black',
                      },
                    },
                  }}

                />
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={6}>
                    <TextField
                      required
                      name="city"
                      value={cityAddress}
                      onChange={(e) => setCityAddress(e.target.value)}
                      placeholder="City"
                      fullWidth
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: '#f0f0f0',
                          borderRadius: '15px',
                          '& fieldset': {
                            border: 'none',
                          },
                          '& input': {
                            color: 'black',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      required
                      id="state"
                      value={stateAdress}
                      onChange={(e) => setStateAddress(e.target.value)}
                      placeholder="State"
                      fullWidth
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: '#f0f0f0',
                          borderRadius: '15px',
                          '& fieldset': {
                            border: 'none',
                          },
                          '& input': {
                            color: 'black',
                          },
                        },
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={6}>
                    <TextField
                      required
                      id="zip"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      placeholder="Postal/Zip"
                      fullWidth
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: '#f0f0f0',
                          borderRadius: '15px',
                          '& fieldset': {
                            border: 'none',
                          },
                          '& input': {
                            color: 'black',
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth >
                      <InputLabel id="country-label"></InputLabel>
                      <Select
                        labelId="country-label"
                        id="country"
                        name="country"
                        value={countryName}
                        onChange={(e) => setCountryName(e.target.value)}
                        defaultValue="Country"
                        sx={{
                          width: '200px',
                          backgroundColor: '#f0f0f0',
                          borderRadius: '15px',
                          '& fieldset': {
                            border: 'none',
                          },
                          '& .MuiSelect-select': {
                            color: 'black',
                            px: '50px',
                          },
                        }}
                      >
                        <MenuItem value="Country">Country</MenuItem>
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
                  value={insuranceName}
                  onChange={(e) => setInsuranceName(e.target.value)}
                  placeholder="Insurance Name"
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: '#f0f0f0',
                      borderRadius: '15px',
                      '& fieldset': {
                        border: 'none',
                      },
                      '& input': {
                        color: 'black',
                      },
                    },
                  }}
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
                  <FormControlLabel
                    control={
                      <CustomCheckBox
                        name="medical_history"
                        value="Anemia"
                        checked={medicalHistory.includes("Anemia")}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="Anemia"
                  />
                  <FormControlLabel
                    control={
                      <CustomCheckBox
                        name="medical_history"
                        value="Asthma"
                        checked={medicalHistory.includes("Asthma")}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="Asthma"
                  />
                  <FormControlLabel
                    control={
                      <CustomCheckBox
                        name="medical_history"
                        value="Bronchitis"
                        checked={medicalHistory.includes("Bronchitis")}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="Bronchitis"
                  />
                  <FormControlLabel
                    control={
                      <CustomCheckBox
                        name="medical_history"
                        value="Chickenpox"
                        checked={medicalHistory.includes("Chickenpox")}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="Chickenpox"
                  />
                  <FormControlLabel
                    control={
                      <CustomCheckBox
                        name="medical_history"
                        value="Diabetes"
                        checked={medicalHistory.includes("Diabetes")}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="Diabetes"
                  />
                  <FormControlLabel
                    control={
                      <CustomCheckBox
                        name="medical_history"
                        value="Pneumonia"
                        checked={medicalHistory.includes("Pneumonia")}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="Pneumonia"
                  />
                  <FormControlLabel
                    control={
                      <CustomCheckBox
                        name="medical_history"
                        value="Thyroid Disease"
                        checked={medicalHistory.includes("Thyroid Disease")}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="Thyroid Disease"
                  />
                  <FormControlLabel
                    control={
                      <CustomCheckBox
                        name="medical_history"
                        value="Ulcer"
                        checked={medicalHistory.includes("Ulcer")}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="Ulcer"
                  />
                  <FormControlLabel
                    control={
                      <CustomCheckBox
                        name="medical_history"
                        value="Other"
                        checked={medicalHistory.includes("Other")}
                        onChange={handleCheckboxChange}
                      />
                    }
                    label="Other"
                  />

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

          <Button type="submit" variant="contained" onClick={(e) => { e.preventDefault(); registerPatient(); }} color="primary" fullWidth sx={{ backgroundColor: 'black', color: 'white' }}>
            REGISTER
          </Button>
        </div>
      </form>
    </div>
  );
}

export default App;
